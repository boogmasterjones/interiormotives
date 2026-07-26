(function () {
  'use strict';

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
  document.querySelectorAll('.nav-menu-panel a[href]').forEach(function (link) {
    var linkPath = link.getAttribute('href').split('/').pop();
    if (linkPath === currentPath) {
      link.classList.add('is-active');
    }
  });

  document.querySelectorAll('.work-carousel').forEach(function (carousel) {
    var section = carousel.closest('.work-carousel-section') || document;
    var prevBtn = section.querySelector('[data-carousel-prev]');
    var nextBtn = section.querySelector('[data-carousel-next]');
    var scrollAmount = function () {
      var card = carousel.querySelector('.work-card');
      return card ? card.getBoundingClientRect().width + 20 : 320;
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
})();
