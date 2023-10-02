function validaCorreo(campo) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(regex.test(campo.value))
        campo.style.borderColor ="";
    else
    campo.style.borderColor ="red";
}


let miCampo = document.getElementById("miCampo");
let miBoton = document.getElementById("miBoton");

miBoton.addEventListener("click", function() {
    validarCorreo(miCampo)
})
