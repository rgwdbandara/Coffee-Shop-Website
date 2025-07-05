document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("menu-open-button");
  const closeBtn = document.getElementById("menu-close-button");
  const navMenu = document.getElementById("nav-menu");

  if (openBtn && navMenu) {
    openBtn.addEventListener("click", () => {
      navMenu.classList.add("open");
    });
  }

  if (closeBtn && navMenu) {
    closeBtn.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });
  }
});