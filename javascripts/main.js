(function () {
  const root = document.documentElement;
  const themeToggle = document.querySelector(".theme-toggle");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  const year = document.querySelector("[data-current-year]");

  if (year) year.textContent = new Date().getFullYear();

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const currentTheme = root.dataset.theme || (systemDark ? "dark" : "light");
      const nextTheme = currentTheme === "dark" ? "light" : "dark";

      root.dataset.theme = nextTheme;
      localStorage.setItem("theme", nextTheme);
      themeToggle.setAttribute("aria-label", nextTheme === "dark" ? "切换浅色模式" : "切换深色模式");
    });
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("is-open", !isOpen);
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menuToggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      });
    });
  }
})();
