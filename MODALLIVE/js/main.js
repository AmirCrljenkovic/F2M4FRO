//1

const sifu = document.getElementById("js--iphonered")
const switches = document.getElementsByClassName("product")
sifu.onclick = function(){
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "none";
    }
    document.getElementById("js--iphonered-modal").style.display = "grid";

}


const closesifu = document.getElementById("js--iphonered-button");
closesifu.onclick = function(){
    document.getElementById("js--iphonered-modal").style.display = "none";
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "block";
    }

}

//2


const legion = document.getElementById("js--iphonepink")
legion.onclick = function(){
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "none";
    }
    document.getElementById("js--iphonepink-modal").style.display = "grid";

}


const closelegion = document.getElementById("js--iphonepink-button");
closelegion.onclick = function(){
    document.getElementById("js--iphonepink-modal").style.display = "none";
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "block";
    }

}

//rocket

const rocket = document.getElementById("js--iphoneblue")
rocket.onclick = function(){
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "none";
    }
    document.getElementById("js--iphoneblue-modal").style.display = "grid";

}


const closerocket = document.getElementById("js--iphoneblue-button");
closerocket.onclick = function(){
    document.getElementById("js--iphoneblue-modal").style.display = "none";
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "block";
    }

}

//miles


const miles = document.getElementById("js--iphonegreen")
miles.onclick = function(){
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "none";
    }
    document.getElementById("js--iphonegreen-modal").style.display = "grid";

}


const closemiles = document.getElementById("js--iphonegreen-button");
closemiles.onclick = function(){
    document.getElementById("js--iphonegreen-modal").style.display = "none";
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "block";
    }

}