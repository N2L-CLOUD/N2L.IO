/* ============================================================
   mobile.js — Hamburger Navigation
   Injected into all pages. Handles toggle, CTA copy, outside-click close.
   ============================================================ */
(function () {
  function init() {
    var nav      = document.getElementById('site-nav');
    var navLinks = document.getElementById('nav-links');
    if (!nav || !navLinks) return;

    /* --- Create hamburger button --- */
    var btn = document.createElement('button');
    btn.className = 'hamburger';
    btn.setAttribute('aria-label', 'Toggle navigation');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<span></span><span></span><span></span>';

    /* Insert at end of nav (after nav-cta) */
    nav.appendChild(btn);

    /* --- Copy nav-cta into dropdown for mobile access --- */
    var navCta = nav.querySelector('.nav-cta a');
    if (navCta) {
      var mobileCtaWrap = document.createElement('div');
      mobileCtaWrap.className = 'nav-mobile-cta';
      mobileCtaWrap.style.cssText = 'width:100%;height:1px;background:rgba(255,255,255,0.08);margin:4px 0 12px';
      var ctaClone = navCta.cloneNode(true);
      ctaClone.style.cssText = 'display:inline-flex';
      var ctaContainer = document.createElement('div');
      ctaContainer.className = 'nav-mobile-cta';
      ctaContainer.appendChild(ctaClone);
      navLinks.appendChild(mobileCtaWrap);
      navLinks.appendChild(ctaContainer);
    }

    /* --- Toggle --- */
    function openMenu() {
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

    /* Close on outside click */
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target)) closeMenu();
    });

    /* Close on Escape key */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
