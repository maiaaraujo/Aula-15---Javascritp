let ladoA = prompt("Qual o lado A?");
let ladoB = prompt("Qual o lado B?");
let ladoC = prompt("Qual o lado C?");



if (ladoA == ladoB && ladoB == ladoC){
    alert("Equilátero");
}  else if (ladoA != ladoB && ladoB != ladoC && ladoC != ladoA) {
    alert("escaleno");
}   else {
    alert("isósceles");
}

//var 
//let
//const

//String: conjunto de caracteres
//Interger :Números inteiros
//= : associação ou atribuição
//== : comparação de igualdade
//!= : comparação de diferença
//&& : e, ou seja, conjução de condições
//|| : ou, ou seja, ou uma condição ou outra
//Operadores lógicos : > <  ==   !=  &&  ||  %

