(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector("[data-theme-toggle]");
  const navButton = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("#site-nav");

  const updateThemeLabel = () => {
    if (!themeButton) return;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    themeButton.setAttribute("aria-label", `Switch to ${next} theme`);
    themeButton.setAttribute("title", `Switch to ${next} theme`);
  };

  themeButton?.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("xuefanhao-theme", next);
    updateThemeLabel();
  });

  const closeNavigation = () => {
    document.body.classList.remove("nav-open");
    navButton?.setAttribute("aria-expanded", "false");
  };

  navButton?.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    navButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNavigation);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNavigation();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) closeNavigation();
  });

  updateThemeLabel();

  if (window.lucide) {
    window.lucide.createIcons({
      attrs: {
        "aria-hidden": "true",
        "stroke-width": 1.8,
      },
    });
  }
})();
