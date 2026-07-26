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

header.style.transition ="padding 0.3s ease";
logo.style.transition = "top 0.3s ease";

window.addEventListener("scroll", changeHeaderOnScroll);