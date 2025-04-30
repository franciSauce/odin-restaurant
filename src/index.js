import "./styles.css";
import generateHomePage from "./home";
import generateMenuPage from "./menu";
import generateAboutPage from "./about";

const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const about = document.querySelector(".about");

home.addEventListener("click", generateHomePage);
menu.addEventListener("click", generateMenuPage);
about.addEventListener("click", generateAboutPage);

generateHomePage();
