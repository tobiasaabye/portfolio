const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}

const prik = document.getElementById("bold");
/*Opretter to variabler, der skal holde styr på musens nuværende position (X og Y).*/
let musX = 0;
let musY = 0;

/*Opretter to variabler, som holder styr på det visuelle elements (prikkens) nuværende position på skærmen.*/
let prikX = 0;
let prikY = 0;

document.addEventListener("mousemove", (e) => {
  /*Tilføjer en "lytter" på dokumentet, der reagerer hver gang musen bevæger sig.
  e.clientX og e.clientY er musens aktuelle position i vinduet.
  Disse værdier gemmes i musX og musY.
  */
  musX = e.clientX;
  musY = e.clientY;
});

function animer() {
  /*Her jeg en glidende bevægekse.
prikX nærmer sig musX, men kun med 10% af afstanden hver gang.
Det gør bevægelsen blød og langsom, så prikken følger efter musen på en glidende måde*/
  prikX += (musX - prikX) * 0.1;
  prikY += (musY - prikY) * 0.1;

  /* Flytter prikken til den nye position ved at ændre dens CSS left og top værdier. */
  prik.style.left = `${prikX}px`;
  prik.style.top = `${prikY}px`;

  requestAnimationFrame(animer);
  /*Fortæller browseren, at funktionen animer() skal kaldes igen ved næste opdateringsframe. */
}
animer(); // Start animationen
