const hero = document.getElementById("hero");
let cont = 0;

function cambioCar() {
    if (cont == 0){
        hero.style.backgroundImage = "url('./img/car2.png')";
        cont += 1
    }else if (cont == 1){
        hero.style.backgroundImage = "url('./img/car3.png')";
        cont += 1
    }else{
        hero.style.backgroundImage = "url('./img/car1.png')";
        cont = 0
    }
};

setInterval(cambioCar, 6000);