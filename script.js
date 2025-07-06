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
  


//Initialize Swiper
  const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  }

  
});
});