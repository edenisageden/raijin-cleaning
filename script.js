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
