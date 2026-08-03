import Swal from "sweetalert2";

const themeToggle = document.querySelector("#theme-toggle");
const rootElement = document.documentElement;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark" || !savedTheme) {
    rootElement.classList.add("dark");
} else {
    rootElement.classList.remove("dark");
}

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        const isDarkMode = rootElement.classList.toggle("dark");
        localStorage.setItem( "theme", isDarkMode ? "dark" : "light");
    });
}

const prices = [35, 25, 15, 45, 15];

let quantities = [0, 0, 0, 0, 0];


if (localStorage.getItem("cartQuantities") != null) {
    quantities = JSON.parse(localStorage.getItem("cartQuantities"));
}

const plusButtons = document.querySelectorAll(".cart-plus");
const minusButtons = document.querySelectorAll(".cart-minus");
const quantitySpans = document.querySelectorAll(".cart-quantity-span");
const cartTotals = document.querySelectorAll(".cart-total");
const mobileTotals = document.querySelectorAll(".cart-mobile-total");
const cartSubtotal = document.querySelector("#cart-subtotal");
const cartTotalAmount = document.querySelector("#cart-total-amount");
const desktopRemoveButtons = document.querySelectorAll(".cart-remove");
const mobileRemoveButtons = document.querySelectorAll(".cart-mobile-remove");
const checkoutButton = document.querySelector("#checkout-button");

function saveQuantities() {
    localStorage.setItem("cartQuantities", JSON.stringify(quantities));
}


function updateProduct(index) {
    const quantity = quantities[index];
    const productTotal = prices[index] * quantity;
    const firstQuantityIndex = index * 2;
    const secondQuantityIndex = firstQuantityIndex + 1;
    quantitySpans[firstQuantityIndex].textContent = quantity;
    quantitySpans[secondQuantityIndex].textContent = quantity;

    cartTotals[index].textContent = `$${productTotal}.00`;
    mobileTotals[index].textContent = `$${productTotal}.00`;
}


function updateCartTotal() {
    let subtotal = 0;

    for (let i = 0; i < prices.length; i++) {
        subtotal += prices[i] * quantities[i];
    }

    cartSubtotal.textContent = `$${subtotal}.00`;

    cartTotalAmount.textContent = `$${subtotal}.00`;
}


function increaseQuantity(index) {
    quantities[index]++;

    saveQuantities();
    updateProduct(index);
    updateCartTotal();
}


function decreaseQuantity(index) {
    if (quantities[index] > 0) {
        quantities[index]--;
    }

    saveQuantities();
    updateProduct(index);
    updateCartTotal();
}

function removeProductQuantity(index) {
    quantities[index] = 0;

    saveQuantities();
    updateProduct(index);
    updateCartTotal();
}

for (let i = 0; i < prices.length; i++) {
    const firstButtonIndex = i * 2;
    const secondButtonIndex = firstButtonIndex + 1;
    plusButtons[firstButtonIndex].addEventListener("click", function () {
        increaseQuantity(i);
    }
    );
    plusButtons[secondButtonIndex].addEventListener("click",
        function () {
            increaseQuantity(i);
        }
    );
    minusButtons[firstButtonIndex].addEventListener("click",
        function () {
            decreaseQuantity(i);
        }
    );
    minusButtons[secondButtonIndex].addEventListener("click",
        function () {
            decreaseQuantity(i);
        }
    );

    desktopRemoveButtons[i].addEventListener("click",
        function () {
            removeProductQuantity(i);
        }
    );

    mobileRemoveButtons[i].addEventListener("click",
        function () {
            removeProductQuantity(i);
        }
    );
    updateProduct(i);
}
updateCartTotal();

checkoutButton.addEventListener("click", function (e) {
    e.preventDefault();

    let totalQuantity = 0;

    for (let i = 0; i < quantities.length; i++) {
        totalQuantity += quantities[i];
    }

    if (totalQuantity === 0) {
        Swal.fire({
            icon: "warning",
            title: "Your cart is empty",
            text: "Please add at least one item before checkout.",
            confirmButtonColor: "#FF9F0D",
        });
    } else {
        localStorage.setItem(
            "cartQuantities",
            JSON.stringify(quantities)
        );

        localStorage.setItem(
            "cartTotal",
            cartTotalAmount.textContent
        );

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your cart has been saved",
            text: `Total: ${cartTotalAmount.textContent}`,
            showConfirmButton: false,
            timer: 3000,
        });
    }
});