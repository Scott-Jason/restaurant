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
   newDiv.style.flexDirection = "column";
   newDiv.style.gap = "10px";
   here.appendChild(newDiv);

   const fish = document.createElement("img");
   fish.style.height= "30vh";
   fish.style.objectFit = "contain";
  

   fish.src = fishSrc;
   newDiv.append(fish);
   

   const steak = document.createElement("img");
   steak.src = steakSrc;
   steak.style.height = "30vh";
   steak.style.objectFit = "contain";

   const rou = document.createElement("img");
   rou.src = rouSrc;
   rou.style.objectFit = "contain";
   rou.style.height = "30vh";
   newDiv.append(rou);
   newDiv.append(steak);


    

}