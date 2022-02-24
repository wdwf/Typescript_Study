var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var btn = document.getElementById("button");
function sum(a, b) {
    return a + b;
}
btn.addEventListener('click', function () {
    console.log(sum(Number(input1.value), Number(input2.value)));
});
