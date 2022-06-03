let games = document.getElementsByClassName("game")
let filters = document.getElementsByClassName("filter");





let SportFilter = document.getElementById("checkbox-sport");

SportFilter.onchange = function () {
    if (SportFilter.checked === true) {
        for (let i = 0; i < games.length; i++){
            if (games[i].dataset.category === "sport") {
                games[i].style.display = "block"
            }

        }
    }
    else {
        for (let i = 0; i < games.length; i++){
            if (games[i].dataset.category === "sport") {
                games[i].style.display = "none"
            }

        }
    }
}

let ActionFilter = document.getElementById("checkbox-action");

ActionFilter.onchange = function () {
    if (ActionFilter.checked === true) {
        for (let i = 0; i < games.length; i++){
            if (games[i].dataset.category === "action") {
                games[i].style.display = "block"
            }

        }
    }
    else {
        for (let i = 0; i < games.length; i++){
            if (games[i].dataset.category === "action") {
                games[i].style.display = "none"
            }

        }
    }
}


let FantasyFilter = document.getElementById("checkbox-fantasy");

FantasyFilter.onchange = function () {
    if (FantasyFilter.checked === true) {
        for (let i = 0; i < games.length; i++){
            if (games[i].dataset.category === "fantasy") {
                games[i].style.display = "block"
            }

        }
    }
    else {
        for (let i = 0; i < games.length; i++){
            if (games[i].dataset.category === "fantasy") {
                games[i].style.display = "none"
            }

        }
    }
}

let SuperheroFilter = document.getElementById("checkbox-superhero");

SuperheroFilter.onchange = function () {
    if (SuperheroFilter.checked === true) {
        for (let i = 0; i < games.length; i++){
            if (games[i].dataset.category === "superhero") {
                games[i].style.display = "block"
            }

        }
    }
    else {
        for (let i = 0; i < games.length; i++){
            if (games[i].dataset.category === "superhero") {
                games[i].style.display = "none"
            }

        }
    }
}

