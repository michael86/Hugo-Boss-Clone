const navToggle = document.getElementById("nav-toggle");
const navHeader = document.getElementById("nav-header");
const nav = document.getElementById("main-nav");
const closeNav = document.getElementById("close-nav");

navToggle.addEventListener("click", () => nav.classList.add("show-nav"));
closeNav.addEventListener("click", () => nav.classList.remove("show-nav"));

window.onscroll = () => {
  "use strict";
  document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20
    ? navHeader.classList.add("scroll")
    : navHeader.classList.remove("scroll");
};
