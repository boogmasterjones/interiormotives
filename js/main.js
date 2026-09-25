(function () {
  'use strict';

  // Homepage: the header slides in once the visitor scrolls past the top of the hero,
  // or whenever the pointer moves into the strip of screen the header occupies.
  if (document.body.classList.contains('home')) {
    var header = document.querySelector('.site-header');
    if (header) {
      var revealThreshold = 60;
      var hovering = false;
      var updateHeader = function () {
        if (window.scrollY > revealThreshold || hovering) {
          header.classList.add('header-visible');
        } else {
          header.classList.remove('header-visible');
        }
      };
      var hoverZone = function () { return Math.max(header.offsetHeight, 80); };

      window.addEventListener('scroll', updateHeader, { passive: true });
      document.addEventListener('mousemove', function (event) {
        var next = event.clientY <= hoverZone();
        if (next !== hovering) { hovering = next; updateHeader(); }
      }, { passive: true });
      document.addEventListener('mouseleave', function () {
        if (hovering) { hovering = false; updateHeader(); }
      });
      header.addEventListener('focusin', function () { hovering = true; updateHeader(); });
      header.addEventListener('focusout', function () { hovering = false; updateHeader(); });

      updateHeader();
    }
  }

  var menuToggle = document.querySelector('.nav-menu-toggle');
  var menuPanel = document.querySelector('.nav-menu-panel');

  if (menuToggle && menuPanel) {
    var closeMenu = function () {
      menuPanel.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    };

    menuToggle.addEventListener('click', function (event) {
      event.stopPropagation();
      var isOpen = menuPanel.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    menuPanel.addEventListener('click', function (event) {
      if (event.target.tagName === 'A') { closeMenu(); }
    });

    document.addEventListener('click', function (event) {
      if (!menuPanel.contains(event.target) && !menuToggle.contains(event.target)) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') { closeMenu(); }
    });
  }

  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  var sectionPath = currentPath.indexOf('services-') === 0 ? 'services.html'
    : currentPath.indexOf('locations-') === 0 ? 'locations.html'
    : currentPath;
  document.querySelectorAll('.nav-menu-panel a[href]').forEach(function (link) {
    var linkPath = link.getAttribute('href').split('/').pop();
    if (linkPath === currentPath || linkPath === sectionPath) {
      link.classList.add('is-active');
    }
  });

  document.querySelectorAll('.work-carousel').forEach(function (carousel) {
    var section = carousel.closest('.work-carousel-section') || document;
    var prevBtn = section.querySelector('[data-carousel-prev]');
    var nextBtn = section.querySelector('[data-carousel-next]');
    var scrollAmount = function () {
      var card = carousel.querySelector('.work-card');
      return card ? card.getBoundingClientRect().width + 24 : 360;
    };

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        carousel.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        carousel.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
      });
    }
  });

  // Consultation form: each step appears once the previous one has been answered
  document.querySelectorAll('.quote-form').forEach(function (form) {
    var steps = Array.prototype.slice.call(form.querySelectorAll('.form-step'));
    var bars = form.querySelectorAll('.form-progress span');
    var label = form.querySelector('.form-progress small');
    if (steps.length < 2) { return; }

    var value = function (name) {
      var field = form.querySelector('[name="' + name + '"]');
      return field ? field.value.trim() : '';
    };
    var anyChecked = function (name) {
      return !!form.querySelector('[name="' + name + '"]:checked');
    };

    var conditions = [
      function () { return true; },
      function () { return value('name') !== '' && (value('phone') !== '' || value('email') !== ''); },
      function () { return anyChecked('service[]') && value('service-area') !== ''; },
      function () { return anyChecked('timing') || anyChecked('status'); }
    ];

    var update = function () {
      var revealed = 0;
      steps.forEach(function (step, index) {
        var ready = index === 0 || (conditions[index] ? conditions[index]() : true);
        var previousShown = index === 0 || !steps[index - 1].hidden;
        if (ready && previousShown) {
          if (step.hidden) {
            step.hidden = false;
            step.classList.add('is-revealed');
          }
          revealed = index;
        }
      });
      bars.forEach(function (bar, index) { bar.classList.toggle('is-done', index <= revealed); });
      if (label) { label.textContent = 'Step ' + (revealed + 1) + ' of ' + steps.length; }
      form.querySelectorAll('.step-hint').forEach(function (hint) {
        hint.hidden = hint.closest('.form-step') !== steps[revealed] || revealed === steps.length - 1;
      });
    };

    form.addEventListener('input', update);
    form.addEventListener('change', update);
    update();
  });

  var lightbox = document.querySelector('.lightbox');
  if (lightbox && typeof lightbox.showModal === 'function') {
    var lightboxImg = lightbox.querySelector('img');
    var lightboxCaption = lightbox.querySelector('figcaption');
    var lightboxClose = lightbox.querySelector('.lightbox-close');

    document.querySelectorAll('[data-lightbox] img').forEach(function (img) {
      img.addEventListener('click', function () {
        lightboxImg.src = img.currentSrc || img.src;
        lightboxImg.alt = img.alt;
        var figure = img.closest('figure');
        var caption = figure ? figure.querySelector('figcaption') : null;
        lightboxCaption.textContent = caption ? caption.textContent : img.alt;
        lightbox.showModal();
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener('click', function () { lightbox.close(); });
    }

    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox) { lightbox.close(); }
    });
  }

  var filterBar = document.querySelector('.gallery-filters');
  var gallery = document.querySelector('.gallery');
  if (filterBar && gallery) {
    filterBar.addEventListener('click', function (event) {
      var button = event.target.closest('button[data-filter]');
      if (!button) { return; }
      var filter = button.getAttribute('data-filter');

      filterBar.querySelectorAll('button').forEach(function (b) {
        b.classList.toggle('is-active', b === button);
      });

      gallery.querySelectorAll('figure').forEach(function (figure) {
        var categories = (figure.getAttribute('data-category') || '').split(' ');
        var show = filter === 'all' || categories.indexOf(filter) !== -1;
        figure.classList.toggle('is-hidden', !show);
      });
    });
  }
})();
