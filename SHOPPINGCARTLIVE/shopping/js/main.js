const addToCartButtons = document.getElementsByClassName("games__button");
let cartMessage = 0;
const cartMessageValue = document.getElementsByClassName("shoppingCart__message")[0];
const shoppingModal = document.getElementById("js--shoppingModal");
let modalIsOpen = false
let blog = 0;
let dashboard = 0;
let japan = 0;


for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].onclick = function () {
        cartMessage += 1;
        cartMessageValue.innerHTML = cartMessage;
        switch (addToCartButtons[i].dataset.product) {
            case "shoes1":
                blog += 1;
                break;
            case "shoes2":
                dashboard += 1;
                break;
            case "shoes3":
                japan += 1;
                break;
        }
        if (modalIsOpen === false) {
            shoppingModal.style.display = "flex";
            modalIsOpen = true
            setTimeout(function () {
                shoppingModal.style.display = "none";
                modalIsOpen = false;
            }, 2000);
        }
    }
}


const checkoutButton = document.getElementById("js--checkoutButton");
const checkoutWindow = document.getElementById("js--checkoutWindow");
let checkoutIsOpen = false;

checkoutButton.onclick = function () {
    if (checkoutIsOpen === false) {
        document.querySelector("main").style.display = "none";
        checkoutWindow.style.display = "block";
        checkoutIsOpen = true;
        document.getElementById("js--amount-shoes1").innerHTML = blog + "x";
        document.getElementById("js--amount-shoes2").innerHTML = dashboard + "x";
        document.getElementById("js--amount-shoes3").innerHTML = japan + "x";
        return;
    }
    document.querySelector("main").style.display = "block";
    checkoutWindow.style.display = "none"
    checkoutIsOpen = false;
}