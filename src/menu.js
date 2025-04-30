import menu1 from "./img/0.png"
import menu2 from "./img/1.png"
import menu3 from "./img/2.png"
import menu4 from "./img/3.png"

function generateMenuPage() {
    const content = document.querySelector("#content");
    content.innerHTML = ""; 
    const menu = document.createElement("div");
    const menu1 = new Image();
    const menu2 = new Image();
    const menu3 = new Image();
    const menu4 = new Image();
    menu.textContent = "Menu";
    menu.classList.add("menu");
    menu1.src = menu1;
    menu2.src = menu2;
    menu3.src = menu3;
    menu4.src = menu4;
    content.appendChild(menu);
    content.appendChild(menu1);
    content.appendChild(menu2);
    content.appendChild(menu3);
    content.appendChild(menu4);
}

export default generateMenuPage;