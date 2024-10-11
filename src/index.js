import "./styles.css";
import content from "./content.js";
import menu from "./menu.js";
import about from "./about.js";

content();

const body = document.querySelector("#content");
const home = document.querySelector(".home");
const book = document.querySelector(".book");
const pan = document.querySelector(".pan");

home.addEventListener("click", () => {
    body.replaceChildren();
    content();
})
book.addEventListener("click", () => {
    body.replaceChildren();
    menu();
})

pan.addEventListener("click", () =>{
    body.replaceChildren();
    about();
})