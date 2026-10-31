/* Lead tracking and attribution.
   1. Every tel: link fires GA4 call_click with a label for the page and the spot on the page (SITE_RULES 2.7, 6.3).
      One delegated listener covers the header, footer and every content page, so no phone link can be missed.
   2. Consultation forms: refuse a submission without a name and a phone or email, then fire quote_form_submit (SITE_RULES 2.13).
   3. The first page a visitor landed on (with any utm_ tags) and the site that sent them are written into hidden form
      fields, so each lead says where it came from (SITE_RULES 6.7). Stored for this browser tab only (sessionStorage). */
(function () {
  var d = document;
  var send = function (name, params) { if (typeof window.gtag === 'function') window.gtag('event', name, params); };
  var slug = function (s) { return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, ''); };
  var pageSlug = function () { return slug(location.pathname) || 'home'; };

  var placement = function (el) {
    if (el.getAttribute('data-cta')) return slug(el.getAttribute('data-cta'));
    if (el.closest('header')) return 'header';
    if (el.closest('footer')) return 'footer';
    var sec = el.closest('section');
    if (!sec) return 'content';
    if (sec.id) return slug(sec.id);
    if (sec.classList.contains('hero') || sec.classList.contains('page-hero')) return 'hero';
    if (sec.classList.contains('cta-band')) return 'cta_band';
    var all = Array.prototype.slice.call(d.querySelectorAll('main section'));
    return 'section_' + (all.indexOf(sec) + 1);
  };

  // First touch for this tab: the landing page (path + query, which carries utm_ tags) and the referring site.
  var firstTouch = { page: location.pathname + location.search, referrer: '' };
  try {
    var saved = sessionStorage.getItem('im_first_touch');
    if (saved) firstTouch = JSON.parse(saved);
    else {
      var ref = d.referrer && d.referrer.indexOf(location.origin) !== 0 ? d.referrer.split('?')[0] : '';
      firstTouch.referrer = ref;
      sessionStorage.setItem('im_first_touch', JSON.stringify(firstTouch));
    }
  } catch (e) { /* storage blocked: fall back to this page only */ }

  d.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="tel:"], a[href^="mailto:"]');
    if (!a) return;
    var isTel = a.getAttribute('href').indexOf('tel:') === 0;
    var label = pageSlug() + '_' + placement(a);
    if (isTel && a.getAttribute('href').replace(/\D/g, '').slice(-10) !== (d.body.getAttribute('data-main-phone') || '')) label += '_second_line';
    send(isTel ? 'call_click' : 'email_click', { event_category: 'engagement', event_label: label });
  });

  var fill = function (form) {
    var set = function (name, value) { var f = form.querySelector('input[name="' + name + '"]'); if (f) f.value = value; };
    set('page', location.pathname + location.search);
    set('first_page', firstTouch.page || '');
    set('referrer', firstTouch.referrer || '');
  };

  Array.prototype.forEach.call(d.querySelectorAll('form.quote-form'), function (form) {
    fill(form);
    var phone = form.querySelector('[name="phone"]');
    var email = form.querySelector('[name="email"]');
    var name = form.querySelector('[name="name"]');
    var clear = function () { if (phone) phone.setCustomValidity(''); if (name) name.setCustomValidity(''); };
    form.addEventListener('input', clear);
    form.addEventListener('submit', function (e) {
      fill(form);
      clear();
      var has = function (f) { return f && f.value.trim() !== ''; };
      var bad = null;
      if (name && !has(name)) { name.setCustomValidity('Please tell us your name.'); bad = name; }
      else if (!has(phone) && !has(email)) { if (phone) { phone.setCustomValidity('Please give us a phone number or an email.'); bad = phone; } }
      else if (email && has(email) && !email.checkValidity()) bad = email;
      if (bad) { e.preventDefault(); bad.reportValidity(); return; }
      var heard = form.querySelector('[name="heard_about"]');
      send('quote_form_submit', { event_category: 'lead', event_label: pageSlug(), lead_source: heard && heard.value ? slug(heard.value) : 'not_given', transport_type: 'beacon' });
    });
  });
})();
