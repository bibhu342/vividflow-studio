/* VividFlow Studio — sticky nav, scroll reveal, year. No dependencies. */
(function () {
  'use strict';

  var y = document.getElementById('yr');
  if (y) y.textContent = new Date().getFullYear();

  var nav = document.getElementById('nav'), ticking = false;
  function setNav() { if (nav) nav.classList.toggle('stuck', window.scrollY > 24); ticking = false; }
  setNav();
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(setNav); }
  }, { passive: true });

  var items = document.querySelectorAll('.rv');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(items, function (el) { el.classList.add('in'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      var sibs = Array.prototype.slice.call(el.parentNode.children);
      el.style.transitionDelay = Math.min(sibs.indexOf(el), 5) * 80 + 'ms';
      el.classList.add('in');
      io.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  Array.prototype.forEach.call(items, function (el) { io.observe(el); });

  /* Safety net: never leave content invisible if the observer misfires. */
  setTimeout(function () {
    Array.prototype.forEach.call(document.querySelectorAll('.rv:not(.in)'), function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('in');
    });
  }, 1500);
})();
