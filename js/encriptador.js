
const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesencriptar = document.getElementById("btn-desencriptar");
const btnCopiar = document.querySelector(".boton_copiar");
const cajaTexto = document.getElementById("encriptar");
const mensajeFinal = document.querySelector(".mensaje_final");
const parrafoInformacion = document.getElementById("informacion");
const contenedorMuneco = document.querySelector(".contenedor_muneco");


btnCopiar.style.display = "none";


function encriptarTexto(texto) {
    let textoEncriptado = texto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");
    return textoEncriptado;
}


function desencriptarTexto(texto) {
    let textoDesencriptado = texto.replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ai/g, "a")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");
    return textoDesencriptado;
}

btnEncriptar.addEventListener("click", function() {
    const texto = cajaTexto.value.trim();
    if (texto !== "") {
        const textoEncriptado = encriptarTexto(texto);
        mensajeFinal.value = textoEncriptado;
        parrafoInformacion.style.display = "none";
        contenedorMuneco.style.display = "none";
        mensajeFinal.style.display = "block";
        btnCopiar.style.display = "inline-block";
        cajaTexto.value = '';
    } else {
        alert("Por favor, ingresa un texto para encriptar.");
    }
});

// Evento para desencriptar
btnDesencriptar.addEventListener("click", function() {
    const texto = cajaTexto.value.trim();
    if (texto !== "") {
        const textoDesencriptado = desencriptarTexto(texto);
        mensajeFinal.value = textoDesencriptado;
        parrafoInformacion.style.display = "none";
        contenedorMuneco.style.display = "none";
        mensajeFinal.style.display = "block";
        btnCopiar.style.display = "inline-block"; 
        cajaTexto.value = '';
    } else {
        alert("Por favor, ingresa un texto para desencriptar.");
    }
});

// Evento para copiar
btnCopiar.addEventListener("click", function() {
    if (mensajeFinal.value !== "") {
        mensajeFinal.select();
        document.execCommand("copy");
        alert("Texto copiado al portapapeles.");
    } else {
        alert("No hay texto para copiar.");
    }
});
