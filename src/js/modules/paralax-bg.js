(() => {
  const blocks = document.querySelectorAll('[data-parallax]');
  if (!blocks.length) return;

  let ticking = false;

  function update() {
    const vh = window.innerHeight;

    blocks.forEach((block) => {
      const imgWrap = block.querySelector('.bgimg__img');
      if (!imgWrap) return;

      const rect = block.getBoundingClientRect();

      // если блок далеко за пределами экрана — можно не считать
      if (rect.bottom < -200 || rect.top > vh + 200) return;

      // прогресс видимости блока (0..1)
      const progress = (rect.top + rect.height) / (vh + rect.height);

      // сила параллакса (px) — можно менять
      const strength = 150;

      // translateY от +strength до -strength
      const y = (progress - 0.5) * -2 * strength;

      imgWrap.style.transform = `translate3d(0, ${y}px, 0)`;
    });

    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', requestTick);

  // старт
  requestTick();
})();
