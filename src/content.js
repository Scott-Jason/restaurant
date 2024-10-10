export default function () {
    document.addEventListener('mousemove', logKey);
    let angle = 0
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
    
    

} 