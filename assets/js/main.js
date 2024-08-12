"use strict";

/*!
 * gulp-hbs-boilerplate 
 * A Handlebars and Gulp 4 boilerplate 
 * Jon Welsh 
 * git+https://github.com/jonwelsh/gulp-hbs-boilerplate.git 
 */
new Glide(document.querySelector(".banner-hero"), {
  autoplay: 2000,
  hoverpause: true,
  perView: 1
}).mount();
new Glide(document.querySelector(".choice-slider"), {
  type: "carousel",
  autoplay: false,
  hoverpause: true,
  perView: 3,
  rewind: false,
  perTouch: 2
}).mount();
new Glide(document.querySelector(".choice-slider-xs"), {
  type: "carousel",
  autoplay: false,
  hoverpause: true,
  perView: 3,
  perTouch: 2
}).mount();
var btnNav = document.querySelector(".menu-nav");
var navMenu = document.querySelector(".navigation-wrapper");

btnNav.onclick = function () {
  console.log("klik");

  if (navMenu.classList.contains("d-none")) {
    navMenu.classList.remove("d-none");
    navMenu.classList.add("d-block", "animate__animated", "animate__fadeIn");
  } else {
    navMenu.classList.remove("d-block", "animate__animated", "animate__fadeIn");
    navMenu.classList.add("d-none");
  }
}; // $(document).ready(function () {
//   $(".menu-nav").on("click", function () {
//     console.log("klik");
//   });
// });