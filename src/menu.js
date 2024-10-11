import fishSrc from "./fishy.png";
import steakSrc from "./steak.png"
import rouSrc from "./rou.png";

export default function() {

   

    
   const here = document.querySelector("#content");
   
   //menuClass wouldnt work on #content, did this instead
   const newDiv = document.createElement("div");

   newDiv.style.width = "100vw";
   newDiv.style.height = "100vh";
   newDiv.classList.add("menuClass");
   newDiv.style.display = "flex";
   newDiv.style.textAlign = "center";
   newDiv.style.flexDirection = "column";
   newDiv.style.gap = "10px";
   here.appendChild(newDiv);

   const fish = document.createElement("img");
   fish.style.height= "30vh";
   fish.style.objectFit = "contain";
  

   fish.src = fishSrc;
   newDiv.append(fish);
   const h1 = document.createElement("h3");
   h1.style.fontFamily = "Bebas Neue";
   h1.textContent = "Steamed Fish";
   h1.style.color = "black";
   newDiv.append(h1);


   const steak = document.createElement("img");
   steak.src = steakSrc;
   steak.style.height = "28vh";
   steak.style.objectFit = "contain";

   const rou = document.createElement("img");
   rou.src = rouSrc;
   rou.style.objectFit = "contain";
   rou.style.height = "28vh";
   newDiv.append(rou);
   const h2 = document.createElement("h3");
   h2.style.fontFamily = "Bebas Neue";
   h2.textContent = "Dong Po Rou";
   h2.style.color = "black";
   newDiv.append(h2);
   newDiv.append(steak);
   const h3 = document.createElement("h3");
   h3.style.fontFamily = "Bebas Neue";
   h3.textContent = "Adobo Chicken";
   h3.style.color = "black";
   newDiv.append(h3);

   


    

}