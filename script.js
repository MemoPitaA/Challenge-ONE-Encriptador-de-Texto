// Obtener referencias a los elementos del documento
const textarea = document.getElementById('Input');
const botonEncriptar = document.getElementById('encriptar');
const botonDesencriptar = document.getElementById('desencriptar');
const resultado = document.getElementById('resultado');
const elementoAEliminar = document.getElementById('cont-preresultado');

// Crea el elemento de botón
var botonCopiar = document.createElement('button');

// Establece el texto del botón
botonCopiar.textContent = 'Copiar';

// Establece un identificador único para el botón
botonCopiar.id = 'boton-copiar';

// Función para encriptar las letras en el texto
function reemplazarTextoEncriptar() {
    // Eliminar el elemento del documento
    elementoAEliminar.remove();

    // Obtener el texto del textarea
    const textoOriginal = textarea.value;

    // Realizar las sustituciones en el texto
    const textoModificado = textoOriginal
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    // Mostrar el resultado
    resultado.textContent = textoModificado;
    textarea.value = ""
    // Agrega el botón al documento
    document.getElementById('cuadro-resultado').appendChild(botonCopiar);
}

// Función para desencriptar las letras en el texto
function reemplazarTextoDesencriptar() {
    // Eliminar el elemento del documento
    elementoAEliminar.remove();

    // Obtener el texto del textarea
    const textoOriginal = textarea.value;

    // Realizar las sustituciones en el texto
    const textoModificado = textoOriginal
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    // Mostrar el resultado
    resultado.textContent = textoModificado;
    textarea.value = ""
    // Agrega el botón al documento
    document.getElementById('cuadro-resultado').appendChild(botonCopiar);
}

function copiarTexto() {
    // Obtener el elemento con el ID "resultado"
    var resultado = document.getElementById("resultado");

    // Crear un elemento de texto temporal
    var tempInput = document.createElement("input");
    tempInput.value = resultado.textContent;

    // Agregar el elemento temporal al DOM
    document.body.appendChild(tempInput);

    // Seleccionar el contenido del elemento temporal
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el contenido seleccionado al portapapeles
    document.execCommand("copy");

    // Eliminar el elemento temporal del DOM
    document.body.removeChild(tempInput);

    // Cambiar el texto del botón a "Copiado"
    document.getElementById("boton-copiar").textContent = "Copiado";
}

// Agregar un evento de clic a los botones
botonEncriptar.addEventListener('click', reemplazarTextoEncriptar);
botonDesencriptar.addEventListener('click', reemplazarTextoDesencriptar);
botonCopiar.addEventListener('click', copiarTexto);