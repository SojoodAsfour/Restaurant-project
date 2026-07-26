import AOS from "aos";
import "aos/dist/aos.css";

import Swiper from "swiper";
import {
    Autoplay,
    Pagination,
    Navigation,
    A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

AOS.init({
    duration: 900,
    easing: "ease-out-cubic",
    offset: 80,
    once: true,
});



const header = document.querySelector("header");
const logo = document.querySelector("#header-logo");

function changeHeaderOnScroll() {
    if (window.scrollY > 50) {
        header.style.paddingTop = "16px";
        header.style.paddingBottom = "16px";
        logo.style.top = "0";
    } else {
        header.style.removeProperty("padding-top");
        header.style.removeProperty("padding-bottom");
        header.style.removeProperty("box-shadow");
        logo.style.removeProperty("top");
    }
}

header.style.transition = "padding 0.3s ease";
logo.style.transition = "top 0.3s ease";

window.addEventListener("scroll", changeHeaderOnScroll);

const menuButton = document.querySelector("#menu-button");
const closeMenuButton = document.querySelector("#close-menu-button");
const menuOverlay = document.querySelector("#menu-overlay");
const mobileMenuWrapper = document.querySelector("#mobile-menu-wrapper");
const mobileMenu = document.querySelector("#mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");

function openMobileMenu() {
    mobileMenuWrapper.classList.remove("opacity-0", "pointer-events-none");
    mobileMenu.classList.remove("-translate-x-full");
    mobileMenu.classList.add("translate-x-0");
    document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
    mobileMenuWrapper.classList.add("opacity-0", "pointer-events-none");
    mobileMenu.classList.add("-translate-x-full");
    mobileMenu.classList.remove("translate-x-0");
    document.body.style.removeProperty("overflow");
}

menuButton.addEventListener("click", openMobileMenu);
closeMenuButton.addEventListener("click", closeMobileMenu);
menuOverlay.addEventListener("click", closeMobileMenu);

mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMobileMenu();
    }
});

const themeToggle = document.querySelector("#theme-toggle");
const rootElement = document.documentElement;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark" || !savedTheme) {
    rootElement.classList.add("dark");
} else {
    rootElement.classList.remove("dark");
}

function updateThemeButtonLabel() {
    const isDarkMode = rootElement.classList.contains("dark");
}

updateThemeButtonLabel();

themeToggle.addEventListener("click", () => {
    const isDarkMode = rootElement.classList.toggle("dark");

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    updateThemeButtonLabel();
});

const testimonialsSlider = document.querySelector(".testimonials-swiper");

if (testimonialsSlider) {
    new Swiper(testimonialsSlider, {
        modules: [
            Autoplay,
            Pagination,
            Navigation,
            A11y,
        ],

        loop: true,
        speed: 700,
        spaceBetween: 30,
        grabCursor: true,

        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
        },

        a11y: {
            enabled: true,
        },
    });
}