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

hero.style("background-color: #000000;");

/* function cambioCar() {
};

setInterval(cambioCar, 2000); */
