document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const navbar = document.querySelector(".navbar");
  const updateMegaMenuTop = () => {
    if (!navbar) return;
    const rect = navbar.getBoundingClientRect();
    const top = Math.max(0, Math.round(rect.bottom));
    root.style.setProperty("--mega-menu-top", `${top}px`);
  };

  updateMegaMenuTop();
  window.addEventListener("scroll", updateMegaMenuTop, { passive: true });
  window.addEventListener("resize", updateMegaMenuTop);

  const body = document.body;
  document.querySelectorAll(".nav-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      body.classList.add("nav-open");
    });
  });

  document.querySelectorAll(".nav-close").forEach(btn => {
    btn.addEventListener("click", () => {
      body.classList.remove("nav-open");
    });
  });

  document.querySelectorAll(".nav-drawer").forEach(drawer => {
    drawer.addEventListener("click", e => {
      if (e.target === drawer) {
        body.classList.remove("nav-open");
      }
    });
  });
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", e => {
      if (window.innerWidth <= 900) {
        const parent = link.parentElement;
        if (parent.classList.contains("mega")) {
          e.preventDefault();
          parent.classList.toggle("open");
        }
      }
    });
  });

  document.querySelectorAll(".horizontal-scroll-wrapper").forEach(wrapper => {
    const container = wrapper.querySelector(".horizontal-scroll");
    const left = wrapper.querySelector(".scroll-arrow.left");
    const right = wrapper.querySelector(".scroll-arrow.right");

    if (!container || !left || !right) return;

    left.onclick = () => container.scrollBy({ left: -320, behavior: "smooth" });
    right.onclick = () => container.scrollBy({ left: 320, behavior: "smooth" });
  });
});
