/* ============================================================
   DONEMA CONSTRUCTION VISION — interactions
   ============================================================ */
(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(hover: none)').matches;

  /* ---------- Preloader ---------- */
  const loader = document.getElementById('loader');
  const fill = document.getElementById('loaderFill');
  const num = document.getElementById('loaderNum');
  let p = 0;
  const tick = setInterval(() => {
    p += Math.random() * 16 + 4;
    if (p >= 100) { p = 100; clearInterval(tick); setTimeout(finishLoad, 350); }
    fill.style.width = p + '%';
    num.textContent = Math.floor(p);
  }, 130);

  function finishLoad() {
    loader.classList.add('is-done');
    gsap.to(loader, { yPercent: -100, duration: 1, ease: 'power4.inOut',
      onComplete: () => loader.remove() });
    startHero();
  }

  /* ---------- Lenis smooth scroll ---------- */
  let lenis;
  if (!prefersReduced && window.Lenis) {
    lenis = new Lenis({ duration: 1.15, smoothWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    lenis.on('scroll', () => ScrollTrigger.update());
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  gsap.registerPlugin(ScrollTrigger);

  /* ---------- Anchor smooth-scroll ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const t = document.querySelector(a.getAttribute('href'));
      if (!t) return;
      e.preventDefault();
      document.body.classList.remove('menu-open');
      if (lenis) lenis.scrollTo(t, { offset: 0, duration: 1.4 });
      else t.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* ---------- Custom cursor ---------- */
  const cursor = document.getElementById('cursor');
  if (cursor && !isTouch) {
    let cx = innerWidth / 2, cy = innerHeight / 2, tx = cx, ty = cy;
    addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; });
    const render = () => {
      cx += (tx - cx) * 0.18; cy += (ty - cy) * 0.18;
      cursor.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
      requestAnimationFrame(render);
    };
    render();
    const setState = (cls) => cursor.classList.add(cls);
    const clear = () => cursor.classList.remove('is-hover', 'is-view');
    document.querySelectorAll('[data-cursor="hover"], a, button').forEach((el) => {
      el.addEventListener('mouseenter', () => setState('is-hover'));
      el.addEventListener('mouseleave', clear);
    });
    document.querySelectorAll('[data-cursor="view"]').forEach((el) => {
      el.addEventListener('mouseenter', () => setState('is-view'));
      el.addEventListener('mouseleave', clear);
    });
  }

  /* ---------- Nav scroll state ---------- */
  const nav = document.getElementById('nav');
  ScrollTrigger.create({ start: 60, end: 'max',
    onUpdate: (s) => nav.classList.toggle('is-scrolled', s.scroll() > 60) });

  /* ---------- Burger ---------- */
  document.getElementById('burger').addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
  });

  /* ---------- Scroll progress ---------- */
  const prog = document.getElementById('scrollProgress');
  ScrollTrigger.create({ start: 0, end: 'max',
    onUpdate: (s) => prog.style.width = (s.progress * 100) + '%' });

  /* ---------- Hero intro (called after loader) ---------- */
  function startHero() {
    if (prefersReduced) {
      gsap.set('.hero__title .line > span', { yPercent: 0 });
      gsap.set('.hero__sub, .hero__actions, .hero__badges', { y: 0, opacity: 1 });
      return;
    }
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.from('.hero__eyebrow', { y: 20, opacity: 0, duration: 0.8 }, 0.1)
      .to('.hero__title .line > span', { yPercent: 0, duration: 1.1, stagger: 0.12 }, 0.2)
      .to('.hero__sub, .hero__actions', { y: 0, opacity: 1, duration: 0.9, stagger: 0.12 }, 0.8)
      .to('.hero__badges', { y: 0, opacity: 1, duration: 0.9 }, 1.0);
  }
  // prime initial states via GSAP so yPercent owns the transform channel
  if (!prefersReduced) {
    gsap.set('.hero__title .line > span, .contact__title .line > span', { yPercent: 110 });
    gsap.set('.hero__sub, .hero__actions, .hero__badges', { y: 30, opacity: 0 });
  }

  /* ---------- Hero parallax ---------- */
  if (!prefersReduced) {
    gsap.to('.hero__img', { yPercent: 18, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
    gsap.to('.hero__content', { yPercent: 30, opacity: 0.2, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  }

  /* ---------- Reveal-up (generic) ---------- */
  if (!prefersReduced) {
    gsap.utils.toArray('.reveal-up').forEach((el) => {
      // skip hero-managed ones
      if (el.closest('.hero')) return;
      gsap.to(el, { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%' } });
    });
  } else {
    document.querySelectorAll('.reveal-up').forEach((el) => { el.style.opacity = 1; el.style.transform = 'none'; });
  }

  /* ---------- Word-by-word headline reveal ---------- */
  document.querySelectorAll('.reveal-words').forEach((el) => {
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map((w) => `<span class="word">${w}</span>`).join(' ');
    if (prefersReduced) { el.querySelectorAll('.word').forEach((w) => { w.style.opacity = 1; w.style.transform = 'none'; }); return; }
    gsap.to(el.querySelectorAll('.word'), {
      y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.035,
      scrollTrigger: { trigger: el, start: 'top 85%' } });
  });

  /* ---------- Contact title lines ---------- */
  if (!prefersReduced) {
    gsap.to('.contact__title .line > span', { yPercent: 0, duration: 1, ease: 'power4.out',
      stagger: 0.12, scrollTrigger: { trigger: '.contact', start: 'top 70%' } });
  } else {
    document.querySelectorAll('.contact__title .line > span').forEach((s) => s.style.transform = 'none');
  }

  /* ---------- Stats counters ---------- */
  document.querySelectorAll('.stat__num').forEach((el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    if (prefix === '£') { el.textContent = 'FREE'; return; }
    const obj = { v: 0 };
    ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true,
      onEnter: () => {
        if (prefersReduced) { el.textContent = prefix + target + suffix; return; }
        gsap.to(obj, { v: target, duration: 1.8, ease: 'power2.out',
          onUpdate: () => el.textContent = prefix + Math.floor(obj.v) + suffix });
      } });
  });

  /* ---------- Marquee infinite loop ---------- */
  const marquee = document.getElementById('marquee');
  if (marquee && !prefersReduced) {
    marquee.innerHTML += marquee.innerHTML; // duplicate for seamless loop
    let mx = 0, dir = -1, speed = 0.5;
    const loopW = marquee.scrollWidth / 2;
    const animate = () => {
      mx += dir * speed;
      if (mx <= -loopW) mx = 0;
      marquee.style.transform = `translateX(${mx}px)`;
      requestAnimationFrame(animate);
    };
    animate();
    // direction reacts to scroll velocity
    if (lenis) lenis.on('scroll', (e) => { speed = 0.5 + Math.min(Math.abs(e.velocity) * 0.12, 3); });
  }

  /* ---------- Services image-follow on hover ---------- */
  const hover = document.getElementById('srvHover');
  const hoverImg = document.getElementById('srvHoverImg');
  if (hover && !isTouch) {
    let hx = 0, hy = 0, htx = 0, hty = 0;
    addEventListener('mousemove', (e) => { htx = e.clientX; hty = e.clientY; });
    const follow = () => {
      hx += (htx - hx) * 0.12; hy += (hty - hy) * 0.12;
      hover.style.transform = `translate(${hx}px,${hy}px) translate(-50%,-50%) scale(${hover.classList.contains('is-active') ? 1 : 0.85})`;
      requestAnimationFrame(follow);
    };
    follow();
    document.querySelectorAll('.srv').forEach((srv) => {
      srv.addEventListener('mouseenter', () => {
        hoverImg.src = srv.dataset.img;
        hover.classList.add('is-active');
      });
      srv.addEventListener('mouseleave', () => hover.classList.remove('is-active'));
    });
  }

  /* ---------- Generic depth parallax (contact bg) ---------- */
  if (!prefersReduced) {
    gsap.utils.toArray('[data-depth]').forEach((el) => {
      if (el.closest('.hero')) return;
      const depth = parseFloat(el.dataset.depth);
      gsap.to(el, { yPercent: -depth * 100, ease: 'none',
        scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
    });
  }

  /* ---------- Work cards subtle rise ---------- */
  if (!prefersReduced) {
    gsap.utils.toArray('.card').forEach((card, i) => {
      gsap.from(card, { y: 60, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 92%' }, delay: (i % 3) * 0.06 });
    });
    gsap.utils.toArray('.step').forEach((step, i) => {
      gsap.from(step, { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.process__steps', start: 'top 82%' }, delay: i * 0.1 });
    });
  }

  /* ---------- Year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

  // refresh after fonts/images settle
  window.addEventListener('load', () => ScrollTrigger.refresh());
})();
