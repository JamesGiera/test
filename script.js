function myFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
var dropdowns = document.getElementsByClassName("dropdown-content");
var i;
for (i = 0; i < dropdowns.length; i++) {
var openDropdown = dropdowns[i];
if (openDropdown.classList.contains('show')) {
openDropdown.classList.remove('show');
}
}
}
}
function reveal() {
var reveals = document.querySelectorAll(".reveal");
for (var i = 0; i < reveals.length; i++) {
var windowHeight = window.innerHeight;
var elementTop = reveals[i].getBoundingClientRect().top;
var elementVisible = 150;
if (elementTop < windowHeight - elementVisible) {
reveals[i].classList.add("active");
} else {
reveals[i].classList.remove("active");
}
}
}
window.addEventListener("scroll", reveal);

var modal = document.getElementById("Modal");
var btn = document.getElementById("myBtn");var span = document.getElementsByClassName("close")[0];btn.onclick = function() {modal.style.display = "block";}
span.onclick = function() {modal.style.display = "none";}
window.onclick = function(event) {if (event.target == modal) {modal.style.display = "none";}}


function openNav() {
document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
document.getElementById("myNav").style.height = "0%";
}

function tak(){
var x = document.getElementById("tak");
if (x.style.opacity !== 0) {
x.style.opacity = 0;
}
}


