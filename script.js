function toggleMenu() {
    if (document.getElementById("hamburger-menu").style.width === "0%")
        {
          document.getElementById("hamburger-menu").style.width = "100%";
        //   body.classList.add("fixed-position");
        }
        else
        {
          document.getElementById("hamburger-menu").style.width = "0%";
        //   body.classList.remove("fixed-position");
        }
}