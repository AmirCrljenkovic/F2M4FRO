const addtocartbuttons = document.getElementsByClassName("games_button");
let cartmessage = 0;
const cartmessagevalue = document.getElementsByClassName(
  "shoppingcart_message"
)[0];
const shoppingmodal = document.getElementById("js--shoppingmodal");
let modalisopen = false;
let jordan1 = 0;
let jordan2 = 0;
let jordan3 = 0;
let jordan4 = 0;
let jordan5 = 0;
let jordan1price = 0;
let jordan2price = 0;
let jordan3price = 0;
let jordan4price = 0;
let jordan5price = 0;

for (let i = 0; i < addtocartbuttons.length; i++) {
  addtocartbuttons[i].onclick = function () {
    cartmessage += 1;
    cartmessagevalue.innerHTML = cartmessage;
    switch (addtocartbuttons[i].dataset.product) {
      case "jordan1":
        jordan1 += 1;
        jordan1price += 456;
        break;
      case "jordan2":
        jordan2 += 1;
        jordan2price += 220;
        break;
      case "jordan3":
        jordan3 += 1;
        jordan3price += 266;
        break;
      case "jordan4":
        jordan4 += 1;
        jordan4price += 1497;
        break;
      case "jordan5":
        jordan5 += 1;
        jordan5price += 827;
        break;
    }

    if (modalisopen === false) {
      shoppingmodal.style.display = "flex";
      modalisopen = true;
      setTimeout(function () {
        shoppingmodal.style.display = "none";
        modalisopen = false;
      }, 2000);
    }
  };
}

const arrow = document.getElementById("js--arrow");
const checkoutbutton = document.getElementById("js--checkoutbutton");
const checkoutwindow = document.getElementById("js--checkoutwindow");
const cart = document.getElementById("js--cart");
let checkoutisopen = false;
const searchbar = document.getElementById("js--searchbar");
arrow.style.display = "none";

checkoutbutton.onclick = function () {
  if (checkoutisopen === false) {
    document.querySelector("main").style.display = "none";

    checkoutwindow.style.display = "block";
    cart.style.display = "none";
    arrow.style.display = "block";
    checkoutisopen = true;
    document.getElementById("js--amount-jordan1").innerHTML = jordan1 + "x";
    document.getElementById("js--amount-jordan2").innerHTML = jordan2 + "x";
    document.getElementById("js--amount-jordan3").innerHTML = jordan3 + "x";
    document.getElementById("js--amount-jordan4").innerHTML = jordan4 + "x";
    document.getElementById("js--amount-jordan5").innerHTML = jordan5 + "x";

    document.getElementById("js--price-jordan1").innerHTML = "€" + jordan1price;
    document.getElementById("js--price-jordan2").innerHTML = "€" + jordan2price;
    document.getElementById("js--price-jordan3").innerHTML = "€" + jordan3price;
    document.getElementById("js--price-jordan4").innerHTML = "€" + jordan4price;
    document.getElementById("js--price-jordan5").innerHTML = "€" + jordan5price;
    searchbar.style.display = "none";
    document.getElementsByClassName("searchbar_glass")[0].style.display =
      "none";
    return;
  }
  document.querySelector("main").style.display = "block";
  checkoutwindow.style.display = "none";
  checkoutisopen = false;
  arrow.style.display = "none";
  cart.style.display = "block";
  searchbar.style.display = "block";
  document.getElementsByClassName("searchbar_glass")[0].style.display = "flex";
};

//searchbar

const games = document.getElementsByClassName("games_game");
searchbar.onkeyup = function (event) {
  if (event.keyCode === 13) {
    let searchterm = searchbar.value.toUpperCase().split(" ").join("");
    for (let i = 0; i < games.length; i++) {
      if (games[i].dataset.title.search(searchterm) === -1) {
        games[i].style.opacity = 0.3;
      } else {
        games[i].style.opacity = 1;
      }
    }
  }
};


//de observer zorgt ervoor dat er pas iets opkomt ophet moment dat je bij de aantal % bent van je scherm 
let observer = new IntersectionObserver(
  function(entries){
    //je moet altijd een functie maken bij de observer
    if (entries[0].isIntersecting === true) {
      document.getElementsByTagName("main")[0].classList.add("a-popup");
      //hier haal je main en de popup animatie op
      observer.disconnect();
      // dit beteknt als hij een keer is uitgevoerd kan hij niet opnieuw zichzelf uitvoeren
    } else {
      console.log("voor minder dan 50% in beeld!");
      //dit wordt gezegd als je niet 50% van je beeld bent
    }
  },
  {
    threshold: 0.4,
    // 0.4 beteknt 40% van je beeld
  }
);

observer.observe(document.getElementsByTagName("main")[0]);
//hier observe je de main 

