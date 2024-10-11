import photoSrc from "./photo.jpg";

export default function(){
    
    const content = document.querySelector("#content");
    const newDiv = document.createElement("div");

    newDiv.style.width = "100vw";
    newDiv.style.height = "100vh";
    newDiv.classList.add("menuClass");
    newDiv.style.textAlign = "center";
    
    
    
    content.appendChild(newDiv);
    const photo = document.createElement("img");
    photo.style.marginTop = "35px";
    photo.src = photoSrc;
    photo.style.width = "70vw";
    newDiv.appendChild(photo);

    const text = document.createElement("p");
    text.textContent = "Culinary Class Wars Pits 100 renowned chefs and undiscovered talents against each other in a culinary battle. Judged by the esteemed Paik Jong-won and Chef Anh Sung-jae, the show promises to showcase the ultimate clash of culinary skills and creativity."
    text.style.margin = "20px";
    text.style.color = "black";
    text.style.fontFamily = "Abril Fatface";
    newDiv.appendChild(text);



}