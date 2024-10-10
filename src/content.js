export default function () {
    const body = document.querySelector("#content");
    const title = document.createElement('h1');
    title.textContent = "Best of"
    title.style.fontSize = "4rem"
    body.appendChild(title);

} 