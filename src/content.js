import menu from "./menu.js"

export default function () {
    document.addEventListener('mousemove', logKey);
    let angle = 70
    function logKey(e){
        angle = 40 + ((e.clientX/body.clientWidth)*100)
        console.log(angle);
        body.style.background = "linear-gradient("+angle+"deg,#1c1c1c 0%,black 50%,white 50%,whitesmoke 100%)"
    }


    const body = document.querySelector("#content");
    //bestOf above the main title
    const bestOf = document.createElement('h1');
    bestOf.textContent = "Best Of";
    bestOf.classList.add("bestOf");
    body.appendChild(bestOf);
    //main title
    const title = document.createElement('p');
    title.textContent = "Culinary Class Wars";
    title.classList.add("blackSpoon");
    body.appendChild(title);
    const next = document.createElement('button');
    next.addEventListener('click', () => {
        body.replaceChildren()
        document.removeEventListener('mousemove', logKey);
        
        menu();
        


    })
    next.textContent = "View Menu Here";
    next.classList.add("next");
    body.appendChild(next);
    
    
    

} 