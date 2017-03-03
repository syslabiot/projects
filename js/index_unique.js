var vehicle1 = document.getElementById("Vehicle1");
var vehicle1Pic= document.getElementById("Vehicle1-ID");
var vehicle2 = document.getElementById("Vehicle2");
var vehicle2Pic= document.getElementById("Vehicle2-ID")
var astronaut1 = document.getElementById("Astronaut1");
var astronaut1Pic= document.getElementById("Astronaut1-ID")
var astronaut2 = document.getElementById("Astronaut2");
var astronaut1Pic= document.getElementById("Astronaut2-ID")
var physicist1 = document.getElementById("Physicist1");
var physicist1Pic= document.getElementById("Physicist1-ID")
var physicist2 = document.getElementById("Physicist2");
var physicist2Pic= document.getElementById("Physicist2-ID")
vehicle1.addEventListener("mouseenter", fetch);
vehicle2.addEventListener("mouseenter", fetch);
astronaut1.addEventListener("mouseenter", fetch);
astronaut2.addEventListener("mouseenter", fetch);
physicist1.addEventListener("mouseenter", fetch);
physicist2.addEventListener("mouseenter", fetch);

function fetch() {
 var Images = document.querySelectorAll("img");
 for (var i = 0; i < Images.length; i++) {
 	Images[i].className = "hide";
 }
 var PicId = this.attributes["data-img"].value;
 var Pic = document.getElementById(PicId);
 if (Pic.className === "hide") {
 	Pic.className = "";
 } else {
 	Pic.className = "hide";
 }
}
