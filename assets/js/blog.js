const themeToggle = document.querySelector("#theme-toggle");
const rootElement = document.documentElement;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark" || !savedTheme) {
    rootElement.classList.add("dark");
} else {
    rootElement.classList.remove("dark");
}


if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const isDarkMode = rootElement.classList.toggle("dark");
        localStorage.setItem("theme",isDarkMode ? "dark" : "light");
    });
}