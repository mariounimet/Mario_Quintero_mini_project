const envio = document.getElementById("form-submit");

const name = document.getElementById("form-input-1");
const email = document.getElementById("form-input-2");
const mensaje = document.getElementById("form-input-3");

envio.addEventListener("click", () => {
    let nombre = name.value;
    let correo = email.value;
    let msg = mensaje.value;

    let enviable = true
    
    if(nombre == ""){
        name.style.border = '1px solid red';
        enviable = false
    }else{
        name.style.border = '1px solid black';
    }
    if(correo == ""){
        email.style.border = '1px solid red';
        enviable = false
    }else{
        email.style.border = '1px solid black';
    }
    if(msg == ""){
        mensaje.style.border = '1px solid red';
        enviable = false
    }else{
        mensaje.style.border = '1px solid black';
    }

    if(enviable){
        let st = `${nombre}\n\n${correo}\n\n${msg}`
        alert(st)
    }

});