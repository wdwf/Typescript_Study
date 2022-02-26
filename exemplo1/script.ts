//DEFININDO TIPOS

const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;
const btn = document.getElementById("button") as HTMLInputElement;
const result = document.getElementById("result") as HTMLInputElement;

function sum(a:number, b:number) {
  return a + b;
}

/* 
  O atributo da função requer um elemento do tipo numero
  logo é necessario Forçar uma converção do valor do input
*/
btn.addEventListener('click', () => {
  result.innerHTML = `${sum(Number(input1.value), Number(input2.value))}`
})