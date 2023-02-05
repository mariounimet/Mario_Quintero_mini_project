/* navbar */
const menu = document.getElementById("deploy");
const depMenu = document.getElementById("dep-options")
let deployed = false

menu.addEventListener("click", () => {
    if (!deployed){
        depMenu.innerHTML = 
        `<button id="dep-op-num-1" class="link-op-dep" href="">Experiencia</button>
        <button id="dep-op-num-2" class="link-op-dep" href="">Sobre mi</button>
        <button id="dep-op-num-3" class="link-op-dep" href="">Habilidades</button>
        <button id="dep-op-num-4" class="link-op-dep" href="">Contacto</button>`
        deployed = true
    }else{
        depMenu.innerHTML = ``
        deployed = false
    };
});
/* navbar */
const hero = document.getElementById("hero");
let cont = 0;

/* hero.style("background-color: #000000;"); */

/* function cambioCar() {
};

setInterval(cambioCar, 2000); */
const sk = {
    tec1:{name:"Python", img:"./img/python.png"},
    tec2:{name:"C++", img:"./img/c++.png"},
    tec3:{name:"Java", img:"./img/java.png"},
    tec4:{name:"Android", img:"./img/android.png"},
    tec5:{name:"Godot", img:"./img/godot.png"},
    tec6:{name:"Excel", img:"./img/excel.png"}
};
console.log(sk.tec1.name)
const skillsDiv = document.getElementById("skills");

for (let tec in sk){
    skillsDiv.innerHTML += `<div id="${tec}" class="tec-div">
                                <p id="${tec}-text" class="sk-name">${sk[tec]['name']}</p>
                                <img class="tec-img" src="${sk[tec]['img']}" alt="tecnologia" />
                            </div>`
};
