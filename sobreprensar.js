function generarMensaje() {
    var mensajes = [
        "Nunca te dejare de amar.",
        "Nunca conocere a alguien mejor que vos, por eso nunca te cambiare.",
        "No arruinaste mi vida la mejoraste",
        "Nunca me cansare de vos",
        "Vos sos la que puede hacer que yo sea feliz",
        "Tu amor es el mejor regalo que he recibido.",
        "Nunca me aburriria de vos",
        "Vos sos lo mejor que me paso",
        "Sos hermosa",
        "No tenes ningun defecto",
        "Sos demasiado preciosa",
        "Sos perfecta mi bella princesa"
    ];


    var mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
    
    document.getElementById("mensaje").innerHTML = mensaje;

    mostrarNotificacion("Te amo");

}
 
function mostrarNotificacion(mensaje) {
    var notificacion = document.getElementById("notificacion");
    notificacion.innerHTML = `<i class="fas fa-heart-pulse"></i> ${mensaje}`;
    notificacion.classList.add("mostrar");

    setTimeout(function() {
        notificacion.classList.remove("mostrar");
    }, 1000);
}


 // Obtén el botón por su ID
    var inicioButton = document.getElementById("inicio");
     inicioButton.addEventListener("click", function() {
    // Redirige a la página deseada (cambia "tu_pagina.html" por la URL de la página a la que quieres redirigir)
        window.location.href = "index.html";
});