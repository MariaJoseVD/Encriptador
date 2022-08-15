

function ocultar(){
    document.getElementById("copiar").style.display = 'none';
    }

function encriptar(){
    var mensaje = document.getElementById("entrada").value;
    var texto = mensaje.replace(/e/igm, "enter");
    var texto = texto.replace(/i/igm, "imes");
    var texto = texto.replace(/a/igm, "ai");
    var texto = texto.replace(/o/igm, "ober");
    var texto = texto.replace(/u/igm, "ufat");
    document.getElementById("salida").innerHTML = texto;
    document.querySelector('.caja-salida > img').style.display = "none";
    document.getElementById("entrada").value = "";
    document.querySelector('.texto-salida').style.display="none";
    document.getElementById("salida").style.display = "block";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
    var mensaje = document.getElementById("entrada").value;
    var texto = mensaje.replace(/imes/igm, "i");
    var texto = texto.replace(/ai/igm, "a");
    var texto = texto.replace(/enter/igm, "e");
    var texto = texto.replace(/ober/igm, "o");
    var texto = texto.replace(/ufat/igm, "u");
    document.getElementById("salida").innerHTML = texto;
    document.querySelector('.caja-salida > img').style.display = "none";
    document.getElementById("entrada").value = "";
    document.querySelector('.texto-salida').style.display="none";
    document.getElementById("salida").style.display = "block";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
    var texto = document.getElementById("salida");
    texto.select();
    navigator.clipboard.writeText(texto.value);
}

function check(e) {
    tecla = (document.all) ? e.keyCode : e.which;


    //Tecla para borrar y espacio permitidas
    if (tecla == 8 || tecla == 32) {
        return true;
    }

    // Solo acepta numeros y letras
    patron = /[A-Za-z0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}
  
