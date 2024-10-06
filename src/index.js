import "./styles.css";
import { showHome } from "./home.js";
import { showMenu } from "./menu.js";
import { showAbout } from "./about.js";

showHome();

const homeBtn = document.querySelector("#homeBtn");
homeBtn.addEventListener("click", showHome);
const menuBtn = document.querySelector("#menuBtn");
menuBtn.addEventListener("click", showMenu);
const aboutBtn = document.querySelector("#aboutBtn");
aboutBtn.addEventListener("click", showAbout);
