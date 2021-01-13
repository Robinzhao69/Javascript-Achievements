var h1 = document.getElementById("scroll");
var body = document.getElementById("back");
h1.addEventListener("wheel", function(){ h1.innerHTML += "!" })
h1.addEventListener("click", function(){ h1.innerHTML = "Scroll on me!"})
body.addEventListener("click", function(){ this.style.background = "red"})

