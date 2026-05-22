/* ============================================================
   mobile.js — Hamburger Navigation
   Injected into all pages. Handles toggle, outside-click close.
   On mobile: moves dropdown OUTSIDE nav so overflow:hidden doesn't clip it.
   On desktop: leaves nav-links in place (CSS handles visibility).
   ============================================================ */
(function () {
  var mobileQuery = window.matchMedia('(max-width: 768px)');

  function init() {
    var nav      = document.getElementById('site-nav');
    var navLinks = document.getElementById('nav-links');
    if (!nav || !navLinks) return;

    /* --- Create hamburger button (only if one doesn't already exist) --- */
    var btn = nav.querySelector('.hamburger');
    if (!btn) {
      btn = document.createElement('button');
      btn.className = 'hamburger';
      btn.setAttribute('aria-label', 'Toggle navigation');
      btn.setAttribute('aria-expanded', 'false');
      btn.innerHTML = '<span></span><span></span><span></span>';
      nav.appendChild(btn);
    }

    /* Track whether nav-links has been moved out of the nav */
    var movedOut = false;

    function moveOut() {
      if (!movedOut) {
        document.body.appendChild(navLinks);
        movedOut = true;
      }
    }

    function moveBack() {
      if (movedOut) {
        /* Re-insert nav-links back into nav, before nav-cta */
        var navCta = nav.querySelector('.nav-cta');
        if (navCta) {
          nav.insertBefore(navLinks, navCta);
        } else {
          nav.appendChild(navLinks);
        }
        movedOut = false;
        closeMenu();
      }
    }

    /* --- Position the dropdown below the nav pill --- */
    function positionDropdown() {
      if (!movedOut) return;
      var rect = nav.getBoundingClientRect();
      navLinks.style.top = (rect.bottom + 8) + 'px';
    }

    /* --- Toggle --- */
    function openMenu() {
      positionDropdown();
      btn.classList.add('open');
      navLinks.classList.add('mobile-open');
      btn.setAttribute('aria-expanded', 'true');
    }
    function closeMenu() {
      btn.classList.remove('open');
      navLinks.classList.remove('mobile-open');
      btn.setAttribute('aria-expanded', 'false');
    }

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      btn.classList.contains('open') ? closeMenu() : openMenu();
    });

    /* Close on any nav-link click */
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    /* Close on outside click (check both nav and dropdown) */
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !navLinks.contains(e.target)) closeMenu();
    });

    /* Close on Escape key */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    /* Reposition on scroll/resize when open */
    window.addEventListener('scroll', function () {
      if (navLinks.classList.contains('mobile-open')) positionDropdown();
    }, { passive: true });

    /* Handle responsive breakpoint changes */
    function handleBreakpoint(e) {
      if (e.matches) {
        moveOut();
      } else {
        moveBack();
      }
    }

    /* Initial check */
    if (mobileQuery.matches) {
      moveOut();
    }

    /* Listen for breakpoint changes */
    if (mobileQuery.addEventListener) {
      mobileQuery.addEventListener('change', handleBreakpoint);
    } else if (mobileQuery.addListener) {
      mobileQuery.addListener(handleBreakpoint);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
