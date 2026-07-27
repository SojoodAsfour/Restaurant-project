import { CountUp } from "countup.js";
import AOS from "aos";
import Swiper from "swiper";
import GLightbox from "glightbox";
import {
    Autoplay,
    Pagination,
    Navigation,
    A11y,
} from "swiper/modules";

import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "glightbox/dist/css/glightbox.min.css";



AOS.init({
    duration: 900,
    easing: "ease-out-cubic",
    offset: 80,
    once: true,
});

const videoLightbox = GLightbox({
    selector: ".video-lightbox",
    autoplayVideos: true,
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

const professionalChefsCount = new CountUp(
    "professional-chefs-count",
    420,
    {
        duration: 2,
        autoAnimate: true,
        autoAnimateOnce: true,
    }
);

const foodItemsCount = new CountUp(
    "food-items-count",
    320,
    {
        duration: 2,
        autoAnimate: true,
        autoAnimateOnce: true,
    }
);

const experienceCount = new CountUp(
    "experience-count",
    30,
    {
        duration: 2,
        suffix: "+",
        autoAnimate: true,
        autoAnimateOnce: true,
    }
);

const customersCount = new CountUp(
    "customers-count",
    220,
    {
        duration: 2,
        autoAnimate: true,
        autoAnimateOnce: true,
    }
);


const menuImages = [
    "./assets/img/home/menu-img/LettuceLeaf.webp",
    "./assets/img/home/menu-img/FreshBreakfast.webp",
    "./assets/img/home/menu-img/MildButter.webp",
    "./assets/img/home/menu-img/FreshBread.webp",
    "./assets/img/home/menu-img/Glow Cheese.webp",
    "./assets/img/home/menu-img/Italian Pizza.webp",
    "./assets/img/home/menu-img/Sllice Beef.webp",
    "./assets/img/home/menu-img/Mushaom Pizza.webp",
];

const menuDescription =
    "Lacus nisi, et ac dapibus velit in consequat.";

const menuData = {
    breakfast:[
        { name: "Lettuce Leaf", price: "12.5$" },
        { name: "Fresh Breakfast", price: "14.5$" },
        { name: "Mild Butter", price: "12.5$" },
        { name: "Fresh Bread", price: "12.5$" },
        { name: "Pancake Stack", price: "15$" },
        { name: "Egg Toast", price: "11$" },
        { name: "Cheese Omelette", price: "13$" },
        { name: "Avocado Toast", price: "16$" },
    ],

    lunch:[
        { name: "Grilled Chicken", price: "18$" },
        { name: "Italian Pizza", price: "16$" },
        { name: "Beef Burger", price: "15$" },
        { name: "Chicken Wrap", price: "13$" },
        { name: "Pasta Alfredo", price: "17$" },
        { name: "Caesar Salad", price: "12$" },
        { name: "Steak Sandwich", price: "19$" },
        { name: "Rice Bowl", price: "14$" },
    ],

    dinner:[
        { name: "Slice Beef", price: "24$" },
        { name: "Mushroom Pizza", price: "18$" },
        { name: "Grilled Salmon", price: "26$" },
        { name: "Roast Chicken", price: "21$" },
        { name: "Beef Steak", price: "29$" },
        { name: "Lamb Chops", price: "28$" },
        { name: "Seafood Pasta", price: "23$" },
        { name: "BBQ Ribs", price: "25$" },
    ],

    dessert:[
        { name: "Chocolate Cake", price: "9$" },
        { name: "Cheesecake", price: "10$" },
        { name: "Brownie", price: "8$" },
        { name: "Ice Cream", price: "7$" },
        { name: "Fruit Tart", price: "9$" },
        { name: "Donut", price: "6$" },
        { name: "Tiramisu", price: "11$" },
        { name: "Apple Pie", price: "8$" },
    ],

    drink:[
        { name: "Orange Juice", price: "6$" },
        { name: "Lemonade", price: "5$" },
        { name: "Iced Coffee", price: "7$" },
        { name: "Cappuccino", price: "6$" },
        { name: "Green Tea", price: "4$" },
        { name: "Milkshake", price: "8$" },
        { name: "Mojito", price: "7$" },
        { name: "Hot Chocolate", price: "6$" },
    ],

    snack:[
        { name: "French Fries", price: "7$" },
        { name: "Onion Rings", price: "8$" },
        { name: "Chicken Nuggets", price: "10$" },
        { name: "Nachos", price: "9$" },
        { name: "Garlic Bread", price: "6$" },
        { name: "Mini Burger", price: "11$" },
        { name: "Cheese Sticks", price: "8$" },
        { name: "Popcorn Chicken", price: "10$" },
    ],

    soups:[
        { name: "Tomato Soup", price: "8$" },
        { name: "Mushroom Soup", price: "9$" },
        { name: "Chicken Soup", price: "10$" },
        { name: "Lentil Soup", price: "8$" },
        { name: "Vegetable Soup", price: "9$" },
        { name: "Onion Soup", price: "8$" },
        { name: "Seafood Soup", price: "13$" },
        { name: "Cream Soup", price: "9$" },
    ],
};

const menuTabs = document.querySelectorAll(".menu-tab");
const menuItemsContainer = document.querySelector("#menu-items");

if (menuTabs.length > 0 && menuItemsContainer) {
    function showMenuItems(category) {
        const selectedItems = menuData[category];

        menuItemsContainer.innerHTML = "";

        selectedItems.forEach((item, index) => {
            menuItemsContainer.innerHTML += `
                <div class="menu-item group">
                    <img
                        src="${menuImages[index]}"
                        alt="${item.name}"
                    />

                    <div class="menu-description">
                        <h6 class="h6-style smooth group-hover:text-primary">
                            ${item.name}
                        </h6>

                        <p class="menu-p">
                            ${menuDescription}
                        </p>

                        <span class="menu-span">
                            ${item.price}
                        </span>
                    </div>
                </div>
            `;
        });
    }

    menuTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const selectedCategory = tab.dataset.category;
            showMenuItems(selectedCategory);
        });
    });
    showMenuItems("breakfast");
}