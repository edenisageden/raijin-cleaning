// Hamburger menu
function toggleMenu() {
  if (document.getElementById("hamburger-menu").style.width === "0%") {
    document.getElementById("hamburger-menu").style.width = "100%";
    document.getElementById("hamburger-menu__button__img").src = "images/cross.svg";
  }
  else {
    document.getElementById("hamburger-menu").style.width = "0%";
    document.getElementById("hamburger-menu__button__img").src = "images/hamburger-menu.svg";
  }
}

// Slideshow
var i = 0;
var images = []
var titles = []
var subTitles = []
var time = 5000;

images[0] = "images/banner1.jpg";
images[1] = "images/banner2.jpg";
images[2] = "images/banner3.jpg";
images[3] = "images/banner4.jpg";

titles[0] = "Raijin Cleaning";
titles[1] = "Commercial Cleaning";
titles[2] = "Residential Cleaning";
titles[3] = "Carpet Cleaning";

subTitles[0] = "Queenstown's leading property cleaning services";
subTitles[1] = "Queenstown's leading property cleaning services";
subTitles[2] = "Queenstown's leading property cleaning services";
subTitles[3] = "Queenstown's leading property cleaning services";

background = document.getElementById("banner");
title = document.getElementById("title");
subTitle = document.getElementById("sub-title");

function nextImage() {
  console.log("next");
  i++;
  if (i > images.length - 1) i = 0;
  var imageNum = i + 1;
  background.style.backgroundImage = "url('images/banner" + imageNum + ".jpg')";
  title.innerText = titles[i];
  subTitle.innerText = subTitles[i];
}
function prevImage() {
  console.log("prev");
  i--;
  if (i < 0) i = images.length - 1;
  var imageNum = i + 1;
  background.style.backgroundImage = "url('images/banner" + imageNum + ".jpg')";
  title.innerText = titles[i];
  subTitle.innerText = subTitles[i];
}