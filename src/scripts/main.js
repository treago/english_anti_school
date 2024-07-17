import Swiper from "swiper/bundle";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

// Main swiper
const swiper = new Swiper(".about .swiper", {
  modules: [Navigation, Autoplay, EffectFade],
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".slider-btn--next",
    prevEl: ".slider-btn--prev",
  },
});

// Decrease header height on scroll
window.addEventListener("scroll", () => {
  const headerElement = document.getElementById("header");

  if (window.scrollY > headerElement.offsetHeight) {
    headerElement.classList.add("scrolled");
  } else {
    headerElement.classList.remove("scrolled");
  }
});

const handleCloseNav = () => {
  const navElement = document.getElementById("nav");
  const burgerElement = document.getElementById("burger");

  navElement.classList.remove("active");
  burgerElement.classList.remove("active");
};

// Open menu on burger click
const handleBurgerClick = () => {
  const navElement = document.getElementById("nav");
  const burgerElement = document.getElementById("burger");

  navElement.classList.toggle("active");
  burgerElement.classList.toggle("active");
};

// Header menu navigation
const handleNavItemClick = (anchorId) => {
  const anchorElement = document.getElementById(anchorId);
  const header = document.getElementById("header");
  const headerHeight = header.clientHeight;
  const top = anchorElement.offsetTop - headerHeight;

  window.scrollTo({ behavior: "smooth", top });
  handleCloseNav()
};

document.addEventListener("click", (e) => {
  if (e.target.id === "burger") {
    handleBurgerClick();
  }

  const navLinkElement = e.target.closest(".nav__link");

  if (navLinkElement) {
    e.preventDefault();

    handleNavItemClick(navLinkElement.hash.slice(1));
  }
});

// Handle discount modal
const modal = document.getElementById("discountModal");
const modalButton = document.getElementById("discountModalButton");
const span = document.querySelector("#discountModal .close");

setTimeout(() => {
  modal.classList.add('active');
}, 30 * 1000);

span.onclick = function () {
  modal.classList.remove('active');
};

modalButton.onclick = function () {
  modal.classList.remove('active');
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.remove('active');
  }
};
