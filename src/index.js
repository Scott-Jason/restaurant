import "./styles.css"
import content from "./content.js"


console.log("js works");
//content();

const body = document.querySelector("#content");
let angle = 45

document.addEventListener('mousemove', logKey);

function logKey(e){
    
    angle = 50 + ((e.clientX/body.clientWidth)*90)
    console.log(angle);
    body.style.background = "linear-gradient("+angle+"deg,#1c1c1c 0%,black 50%,white 50%,whitesmoke 100%)"

}




