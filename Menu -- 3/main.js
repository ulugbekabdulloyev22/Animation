let mainAngles = document.querySelector("main");
let body = document.querySelector("body");
let sun = document.querySelector(".fa-sun");
let moon = document.querySelector(".fa-moon");
status_ = true;

function anglesToggLeftRight() {
  mainAngles.classList.toggle("activ1");
  console.log("anglesToggLeftRight");
}

function anglesToggTopButton() {
  mainAngles.classList.toggle("activ2");
  console.log("anglesToggTopButton");
}

function sunMon() {
  body.classList.toggle("activ");
  console.log("sunMon");
}
