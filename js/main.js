// 공통 스크립트: 별 배경, 모바일 메뉴, 스크롤 등장 애니메이션
(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 1) 반짝이는 별 배경
  const canvas = document.getElementById("stars");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let stars = [];
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = Math.floor((canvas.width * canvas.height) / 6000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.3 + 0.2,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.005
      }));
    }
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const s of stars) {
        s.phase += s.speed;
        const a = reduceMotion ? 0.7 : 0.4 + Math.sin(s.phase) * 0.4;
        ctx.globalAlpha = Math.max(0.1, a);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();
      }
      if (!reduceMotion) requestAnimationFrame(draw);
    }
    resize();
    draw();
    window.addEventListener("resize", () => { resize(); if (reduceMotion) draw(); });
  }

  // 2) 모바일 메뉴 토글
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-links");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
  }

  // 3) 스크롤하면 요소가 부드럽게 나타남
  window.observeReveal = function (root) {
    const items = (root || document).querySelectorAll(".reveal:not(.visible)");
    if (!("IntersectionObserver" in window) || reduceMotion) {
      items.forEach((el) => el.classList.add("visible"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    items.forEach((el) => io.observe(el));
  };
  window.observeReveal();
})();
