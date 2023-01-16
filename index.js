var text = document.getElementById("text");
const btnEncrip = document.getElementById("btnEncrip");
const btnDesen = document.getElementById("btnDesen");
btnEncrip.addEventListener('click', campoVacio);
btnDesen.addEventListener('click', inicioDecodificador);
var btn3 = document.querySelector("#btnCopiarText");
btn3.onclick = copiarTexto;
let textImportante;
function campoVacio(){
    if(text.value.length == 0){
        alert("Por favor introduzca un texto");
    }
    else{
        checkMayuscula(text.value);
    }
}
function checkMayuscula(texto){
    if(texto === texto.toUpperCase()){
        alert("Recuerde que el texto a encriptar no debe de contener ni mayúsculas ni acentos"); 
    }
    else if(texto === texto.toLowerCase()){
        var arreglox = Array.from(text.value);
        codificador(arreglox);
    }
    else{
        alert("Recuerde que el texto a encriptar no debe de contener ni mayúsculas ni acentos"); 
    }
}
function codificador(arreglo){
    for(let cont=0; cont < arreglo.length; cont++){
        if(arreglo[cont]==="a"){
            arreglo.splice(cont,1,"ai");
        }
        else if(arreglo[cont]==="e"){
            arreglo.splice(cont,1,"enter");
        }
        else if(arreglo[cont]==="i"){
            arreglo.splice(cont,1,"imes"); 
        }
        else if(arreglo[cont]==="o"){
            arreglo.splice(cont,1,"ober");
        }
        else if(arreglo[cont]==="u"){
            arreglo.splice(cont,1,"ufat");
        }
        else{
            arreglo[cont] = arreglo[cont];
        }
    }
    textImportante = document.getElementById('textSalida').textContent = arreglo.join('');
}
function inicioDecodificador(){
    var arreglox = Array.from(text.value);
    decodificador(arreglox);
}
function decodificador(arreglo){
    for(let cont=0; cont < arreglo.length; cont++){
        if(arreglo[cont]==="a"){
            arreglo.splice(cont,2,"a");
        }
        else if(arreglo[cont]==="e"){
            arreglo.splice(cont,5,"e");
        }
        else if(arreglo[cont]==="i"){
            arreglo.splice(cont,4,"i"); 
        }
        else if(arreglo[cont]==="o"){
            arreglo.splice(cont,4,"o");
        }
        else if(arreglo[cont]==="u"){
            arreglo.splice(cont,4,"u");
        }
        else{
            arreglo[cont] = arreglo[cont];
        }
    }
    textImportante = document.getElementById('textSalida').textContent = arreglo.join('');
}
function copiarTexto(){
    navigator.clipboard.writeText(textImportante);
}