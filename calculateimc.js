//abaixo do peso	imc < 19,1	imc < 20,7
//no peso normal 19, 1 <= imc < 25, 8 20, 7 <= imc < 26, 4
//marginalmente acima do peso 25, 8 <= imc < 27, 3 26, 4 <= imc < 27, 8
//acima do peso ideal 27, 3 <= imc < 32, 3 27, 8 <= imc < 31, 1
//obeso imc >= 32, 3 imc >= 31, 1

var age = document.getElementById("age")
var age = document.getElementById("height")
var age = document.getElementById("weight")
var age = document.getElementById("f")
var age = document.getElementById("m")



document.getElementById("submit").addEventListener("click", validadeForm);

function validadeForm() {
    if (age.value == '' || height.value == '' || weight.value == '' || (male.checked == false && female.checked == false)) {
        alert("Todos os campos são requeridos!");
    }
}