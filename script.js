/*global document: false */
/*jslint white:true*/
/*jshint strict: true */

// Hamburger menu
function toggleMenu() {
  "use strict";
  if (document.getElementById("hamburger-menu").style.width === "0%") { 
    document.getElementById("hamburger-menu").style.width = "100%"; 
    document.getElementById("hamburger-menu__button__img").src = "images/cross.png"; 
  } else { document.getElementById("hamburger-menu").style.width = "0%"; 
    document.getElementById("hamburger-menu__button__img").src = "images/hamburger-menu-white.png"; 
  }
}

// Slideshow
var i = 0;
var images = [];
var titles = [];
var time = 5000;

images[0] = "images/banner1.jpg";
images[1] = "images/banner2.jpg";
images[2] = "images/banner3.jpg";
images[3] = "images/banner4.jpg";

titles[0] = "RAIJIN CLEANING";
titles[1] = "COMMERCIAL CLEANING";
titles[2] = "RESIDENTIAL CLEANING";
titles[3] = "WINDOW CLEANING";

var background = document.getElementById("banner");
var title = document.getElementById("title");

function nextImage() {
  "use strict";
  i += 1;
  if (i > images.length - 1) { i = 0; }
  background.style.backgroundImage = "url('images/banner" + (i + 1) + ".jpg')";
  title.innerText = titles[i];
}
function prevImage() {
  "use strict";
  i -= 1;
  if (i < 0) { i = images.length - 1; } 
  background.style.backgroundImage = "url('images/banner" + (i + 1) + ".jpg')";
  title.innerText = titles[i];
}