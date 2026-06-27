const divBox=[];

const divContainer = document.querySelector("#container");
for(let i =0;i<16*16;i++)
{
    
    divBox[i]=document.createElement("div");
    // divBox[i].classList.add("box");
    divBox[i].setAttribute("class","box");
    divContainer.appendChild(divBox[i]);
}

for(let i=0; i<divBox.length;i++)
divBox[i].addEventListener("mouseover", ()=>{divBox[i].classList.add("change");});