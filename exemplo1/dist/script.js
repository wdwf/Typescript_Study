"use strict";
//DEFININDO TIPOS
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const btn = document.getElementById("button");
const result = document.getElementById("result");
function sum(a, b) {
    return a + b;
}
/*
  O atributo da função requer um elemento do tipo numero
  logo é necessario Forçar uma converção do valor do input
*/
btn.addEventListener('click', () => {
    result.innerHTML = `${sum(Number(input1.value), Number(input2.value))}`;
    console.log(sum(Number(input1.value), Number(input2.value)));
});
