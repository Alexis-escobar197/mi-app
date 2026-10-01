function encender(){
    let elemento_img = document.querySelector('img');
    elemento_img.src = "pic_bulbon.gif";
}

function apagar(){
    let elemento_img = document.querySelector('img');
    elemento_img.src = "pic_bulboff.gif";
}

//Estructuras de control
// 0 = Falso
// 1 = Verdadero

let on = 1;

function encender_apagar(){

    let elemento_img = document.querySelector('img');

    if(on == 1){
        elemento_img.src = "pic_bulbon.gif";
        on = 0;
    }else{
        elemento_img.src = "pic_bulboff.gif";
        on = 1;
    }
}

// objeto
const usuario = {
    nombre: "Denis"
}
    
const array_datos = [20,30,17,9,38];

//let nota = prompt("Ingrese un numero del 5 al 10");
/*if(nota == 5){
    console.log("Reprobado");
}else if(nota >= 6){
    console.log("Aprobado");
}else if(nota > 8 && nota < 10){
    console.log("Excelente");
}else if(nota == 10){
    console.log("Felicidades");
}else{
    console.log("Repetir evaluacion");
}*/

let key = prompt("Ingrese un numero del 5 al 10");
let elemento = document.getElementById("switch");
switch(key){
    case "5":
        elemento.innerText = ("1234");
        break;
    case "6":
        elemento.style.backgroundColor = ("red");
        break;
    case "7":
        elemento.style.color = ("red");
        break;
    case "8":
        elemento.innerText = ("Verde");
        break;
    case "9":
        elemento.style.backgroundColor = ("green");
        break;
    case "10":
        elemento.style.color = ("blue");
        break;
    default:
        elemento.style.color = ("cyan");
        break;
}