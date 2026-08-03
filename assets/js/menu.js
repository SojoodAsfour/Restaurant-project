import AOS from "aos";
import "aos/dist/aos.css";

import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { CountUp } from "countup.js";
import Swal from "sweetalert2";


AOS.init({
    duration: 900,
    easing: "ease-out-cubic",
    offset: 80,
    once: true,
});

const partnersSwiper = document.querySelector(".partners-swiper");

if (partnersSwiper) {
    new Swiper(partnersSwiper, {
        modules: [Autoplay],

        slidesPerView: 1,
        spaceBetween: 30,
        speed: 700,
        rewind: true,

        autoplay: {
            delay: 1800,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },

        breakpoints: {
            480: {
                slidesPerView: 2,
            },

            768: {
                slidesPerView: 3,
            },

            1024: {
                slidesPerView: 4,
            },

            1220: {
                slidesPerView: 5,
            },
        },
    });
}


new CountUp("menu-chefs-count", 420, {
    duration: 2,
    autoAnimate: true,
    autoAnimateOnce: true,
});

new CountUp("menu-food-count", 320, {
    duration: 2,
    autoAnimate: true,
    autoAnimateOnce: true,
});

new CountUp("menu-experience-count", 30, {
    duration: 2,
    suffix: "+",
    autoAnimate: true,
    autoAnimateOnce: true,
});

new CountUp("menu-customers-count", 220, {
    duration: 2,
    autoAnimate: true,
    autoAnimateOnce: true,
});


const newsletterForm = document.querySelector("#menu-newsletter-form");
const newsletterEmail = document.querySelector("#menu-newsletter-email");

if (newsletterForm && newsletterEmail) {
    newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = newsletterEmail.value.trim();

        Swal.fire({
            icon: "success",
            title: "Subscribed!",
            text: `${email} has been added to our newsletter.`,
            confirmButtonText: "Done",
            confirmButtonColor: "#FF9F0D",
        });

        newsletterForm.reset();
    });
}

const menuButton = document.querySelector("#menu-button");
const closeMenuButton = document.querySelector("#close-menu-button");
const menuOverlay = document.querySelector("#menu-overlay");
const mobileMenuWrapper = document.querySelector("#mobile-menu-wrapper");
const mobileMenu = document.querySelector("#mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");

function openMobileMenu() {
    mobileMenuWrapper.classList.remove(
        "opacity-0",
        "pointer-events-none"
    );

    mobileMenuWrapper.classList.add("opacity-100");
    mobileMenu.classList.remove("-translate-x-full");
    mobileMenu.classList.add("translate-x-0");
    document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
    mobileMenuWrapper.classList.add(
        "opacity-0",
        "pointer-events-none"
    );

    mobileMenuWrapper.classList.remove("opacity-100");
    mobileMenu.classList.add("-translate-x-full");
    mobileMenu.classList.remove("translate-x-0");
    document.body.style.removeProperty("overflow");
}

if (menuButton && closeMenuButton && menuOverlay && mobileMenuWrapper && mobileMenu) {
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
}

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

    localStorage.setItem(
        "theme",
        isDarkMode ? "dark" : "light"
    );

    updateThemeButtonLabel();
});


