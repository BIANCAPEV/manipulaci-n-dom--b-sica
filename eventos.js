const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("btnCalcular");
const resultado= document.querySelector("#result");
 
function btnOnClick(){

const suma = (parseInt(input1.value) + parseInt(input2.value))  // suma el valor de los 2 inputs
// aqui solo hace una concatenacion
// imprimir en pantalla el resultado
resultado.innerText = "resultado: " + suma;
console.log(parseInt(suma));
} 