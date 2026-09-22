/* VividFlow Studio — view router, media cube, project index. No dependencies. */
(function () {
  'use strict';

  var doc = document;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── year ──────────────────────────────────────────── */
  var yr = doc.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ══ PROJECTS ════════════════════════════════════════
     Read straight out of the markup, so the DOM stays the single source
     of truth — adding a case section adds it to the cube and the index. */
  var projects = [];
  Array.prototype.forEach.call(doc.querySelectorAll('[data-view="work"]'), function (el) {
    var faces = (el.getAttribute('data-faces') || '').split(',').filter(function (s) { return s.trim(); });
    var titleEl = el.querySelector('.case__title');
    var kindEl = el.querySelector('.case__kind');
    projects.push({
      slug: el.getAttribute('data-slug'),
      name: titleEl ? titleEl.textContent.trim() : '',
      kind: kindEl ? kindEl.textContent.trim() : '',
      accent: el.getAttribute('data-accent') || 'gold',
      faces: faces,
      el: el
    });
  });

  var indexLinks = Array.prototype.slice.call(doc.querySelectorAll('.index__row a'));

  /* ══ CUBE ════════════════════════════════════════════ */
  var stage = doc.getElementById('stage');
  var cube = doc.getElementById('cube');
  var FACES = ['f', 'b', 'r', 'l', 'u', 'd'];
  var builtFor = null;

  function buildCube(p) {
    if (!cube || !p || builtFor === p.slug) return;
    builtFor = p.slug;
    var html = '';
    for (var i = 0; i < 6; i++) {
      var cls = 'cube__face cube__face--' + FACES[i];
      if (p.faces.length) {
        // Cycle the available frames so all six faces are filled.
        var src = p.faces[i % p.faces.length].trim();
        if (/\.(mp4|webm)$/i.test(src)) {
          // A project with a film shows the film itself — muted and looping,
          // so it plays inline on phones without asking for sound.
          var webm = src.replace(/\.mp4$/i, '.webm');
          html += '<div class="' + cls + '"><video autoplay muted loop playsinline preload="metadata">' +
                  '<source src="' + webm + '" type="video/webm">' +
                  '<source src="' + src + '" type="video/mp4"></video></div>';
        } else {
          html += '<div class="' + cls + '"><img src="' + src + '" alt="" loading="lazy" decoding="async"></div>';
        }
      } else {
        // No imagery yet — say so rather than mock something up.
        html += '<div class="' + cls + ' cube__face--type"><span>' + p.name + '</span></div>';
      }
    }
    cube.innerHTML = html;
  }

  /* Rotation state. JS writes --rx/--ry so the idle spin and the drag
     share one transform instead of fighting over it. */
  var rot = { x: -16, y: 28, vx: 0, vy: 0 };
  var IDLE_X = reduce ? 0 : 0.035;
  var IDLE_Y = reduce ? 0 : 0.17;
  var dragging = false, moved = false, lastX = 0, lastY = 0, raf = 0;

  function paint() {
    if (!cube) return;
    cube.style.setProperty('--rx', rot.x.toFixed(2) + 'deg');
    cube.style.setProperty('--ry', rot.y.toFixed(2) + 'deg');
  }

  function tick() {
    raf = 0;
    if (!dragging) {
      // Ease velocity back toward the idle drift, so a flick coasts.
      rot.vx += (IDLE_X - rot.vx) * 0.05;
      rot.vy += (IDLE_Y - rot.vy) * 0.05;
      rot.x += rot.vx;
      rot.y += rot.vy;
      if (rot.x > 62) { rot.x = 62; rot.vx = 0; }
      if (rot.x < -62) { rot.x = -62; rot.vx = 0; }
      paint();
    }
    if (running) raf = requestAnimationFrame(tick);
  }

  var running = false;
  function startSpin() {
    if (running || reduce || !cube) return;
    running = true;
    raf = requestAnimationFrame(tick);
  }
  function stopSpin() {
    running = false;
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
  }

  /* Drag anywhere on the stage. A drag cancels the click that follows,
     so spinning the cube never opens a project by accident. */
  if (stage) {
    stage.addEventListener('pointerdown', function (e) {
      if (e.button !== 0 && e.pointerType === 'mouse') return;
      dragging = true; moved = false;
      lastX = e.clientX; lastY = e.clientY;
      pauseCycle();
    });

    window.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      var dx = e.clientX - lastX, dy = e.clientY - lastY;
      if (Math.abs(dx) + Math.abs(dy) > 5) moved = true;
      lastX = e.clientX; lastY = e.clientY;
      rot.y += dx * 0.35;
      rot.x = Math.max(-62, Math.min(62, rot.x - dy * 0.3));
      rot.vx = -dy * 0.08;
      rot.vy = dx * 0.09;
      paint();
    }, { passive: true });

    window.addEventListener('pointerup', function () {
      if (!dragging) return;
      dragging = false;
      resumeCycle();
      // Let the click land first, then clear the flag.
      setTimeout(function () { moved = false; }, 0);
    });

    stage.addEventListener('click', function (e) {
      if (moved) { e.preventDefault(); e.stopPropagation(); }
    }, true);
  }

  /* ══ ACTIVE PROJECT ══════════════════════════════════ */
  var active = -1;

  function setActive(i, fromUser) {
    if (!projects.length) return;
    i = (i + projects.length) % projects.length;
    if (i === active) return;
    active = i;
    var p = projects[i];

    indexLinks.forEach(function (a) {
      a.classList.toggle('is-active', a.getAttribute('data-project') === p.slug);
    });
    /* Keep the active name in view while the carousel advances. */
    var activeLink = null;
    for (var k = 0; k < indexLinks.length; k++) {
      if (indexLinks[k].getAttribute('data-project') === p.slug) { activeLink = indexLinks[k]; break; }
    }
    if (activeLink && !fromUser && activeLink.scrollIntoView) {
      try { activeLink.scrollIntoView({ block: 'nearest', behavior: reduce ? 'auto' : 'smooth' }); } catch (e) {}
    }
    if (stage) stage.setAttribute('data-acc', p.accent);
    buildCube(p);
    if (fromUser) pauseCycle();
  }

  /* Match each name to its own project by slug. The index and the case
     sections are not in the same order, so pairing them by position showed
     the wrong project on the cube. */
  function indexOfSlug(slug) {
    for (var n = 0; n < projects.length; n++) { if (projects[n].slug === slug) return n; }
    return -1;
  }

  indexLinks.forEach(function (a) {
    var i = indexOfSlug(a.getAttribute('data-project'));
    if (i < 0) return;
    a.addEventListener('pointerenter', function () { setActive(i, true); });
    a.addEventListener('focus', function () { setActive(i, true); });
    // Let the carousel pick back up once the pointer is off the word.
    a.addEventListener('pointerleave', function () { if (!dragging) resumeCycle(); });
    a.addEventListener('blur', function () { resumeCycle(); });
  });

  if (stage) {
    stage.addEventListener('pointerleave', resumeCycle);
  }

  /* Auto-advance while the visitor is not pointing at anything.
     Off entirely under reduced motion — content should not change itself. */
  var cycleTimer = 0, cyclePaused = false;
  function startCycle() {
    if (reduce || cycleTimer || projects.length < 2) return;
    cycleTimer = setInterval(function () {
      if (!cyclePaused && route.name === 'home' && !doc.hidden) setActive(active + 1);
    }, 4200);
  }
  function pauseCycle() { cyclePaused = true; }
  function resumeCycle() { cyclePaused = false; }
  function stopCycle() { if (cycleTimer) clearInterval(cycleTimer); cycleTimer = 0; }

  /* ══ ROUTER ══════════════════════════════════════════ */
  var views = Array.prototype.slice.call(doc.querySelectorAll('.view'));
  var btnReturn = doc.getElementById('btnReturn');
  var btnNext = doc.getElementById('btnNext');
  var route = { name: 'home', slug: null };
  // False on first paint so the initial load does not yank focus.
  var focusedByNav = false;

  function parseHash() {
    var h = (location.hash || '').replace(/^#\/?/, '').replace(/\/$/, '');
    if (!h) return { name: 'home', slug: null };
    if (h === 'studio' || h === 'contact') return { name: h, slug: null };
    var m = h.match(/^work\/(.+)$/);
    if (m) {
      var slug = m[1];
      for (var i = 0; i < projects.length; i++) if (projects[i].slug === slug) return { name: 'work', slug: slug };
    }
    return { name: 'home', slug: null };
  }

  function show(r) {
    route = r;
    var target =
      r.name === 'home' ? doc.getElementById('view-home') :
      r.name === 'work' ? doc.getElementById('view-' + r.slug) :
      doc.getElementById('view-' + r.name);
    if (!target) target = doc.getElementById('view-home');

    views.forEach(function (v) { v.classList.toggle('is-on', v === target); });
    doc.body.setAttribute('data-view', r.name);
    doc.body.classList.toggle('is-locked', r.name === 'home');

    if (r.name === 'home') { startSpin(); startCycle(); }
    else { stopSpin(); }

    // Next walks to the following project; Return always goes back to the index.
    if (r.name === 'work' && btnNext) {
      var i = 0;
      for (var n = 0; n < projects.length; n++) if (projects[n].slug === r.slug) i = n;
      btnNext.setAttribute('href', '#/work/' + projects[(i + 1) % projects.length].slug);
      setActive(i);
    }

    window.scrollTo(0, 0);

    // Move focus into the new view so keyboard and screen readers follow along.
    if (focusedByNav) {
      var h = target.querySelector('h1, h2');
      if (h) {
        h.setAttribute('tabindex', '-1');
        try { h.focus({ preventScroll: true }); } catch (err) { h.focus(); }
      }
    }
  }

  window.addEventListener('hashchange', function () { focusedByNav = true; show(parseHash()); });

  doc.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && route.name !== 'home') location.hash = '#/';
  });

  /* ══ BOOT ════════════════════════════════════════════
     Tracks fonts plus the images that actually load up front. Lazy images
     are excluded — they never finish before first paint, by design. */
  var boot = doc.getElementById('boot');
  var fill = doc.getElementById('bootFill');

  function finishBoot() {
    if (!boot || boot.classList.contains('is-done')) return;
    if (fill) fill.style.width = '100%';
    setTimeout(function () { boot.classList.add('is-done'); }, reduce ? 0 : 260);
  }

  (function runBoot() {
    if (!boot) return;
    var jobs = [];
    Array.prototype.forEach.call(doc.images, function (img) {
      if (img.getAttribute('loading') === 'lazy') return;
      if (img.complete) return;
      jobs.push(new Promise(function (res) {
        img.addEventListener('load', res, { once: true });
        img.addEventListener('error', res, { once: true });
      }));
    });
    if (doc.fonts && doc.fonts.ready) jobs.push(doc.fonts.ready);

    var total = jobs.length, done = 0;
    if (!total) { if (fill) fill.style.width = '100%'; return finishBoot(); }

    jobs.forEach(function (j) {
      Promise.resolve(j).then(function () {
        done++;
        if (fill) fill.style.width = Math.round((done / total) * 100) + '%';
        if (done >= total) finishBoot();
      });
    });

    // Never hold the page hostage to a slow asset.
    setTimeout(finishBoot, 2200);
  })();

  /* ══ START ═══════════════════════════════════════════ */
  setActive(0);
  paint();
  show(parseHash());
  if (route.name === 'home') { startSpin(); startCycle(); }

  // Stop animating in a hidden tab.
  doc.addEventListener('visibilitychange', function () {
    if (doc.hidden) stopSpin();
    else if (route.name === 'home') startSpin();
  });
})();
