let Parrafo2 = document.querySelector("#Parrafo2")
let boton1= document.querySelector("#boton1")
let boton2 = document.querySelector("#boton2")
function ocultarParrafo2 (){
    Parrafo2.style.visibility = "hidden";
}
boton1.onclick = ocultarParrafo2;
function mostrarParrafo2(){
    Parrafo2.style.visibility= "visible";
}
boton2.onclick=mostrarParrafo2; 
 


let boton3 = document.querySelector("#boton3")
function cambiarColor(){
    Parrafo2.style.backgroundColor = "purple";
}
boton3.onclick = cambiarColor;