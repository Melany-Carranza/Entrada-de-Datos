// Ejercicio 1
const prompt = require('prompt-sync')();

let nombre = prompt("¿Cómo te llamás? ");
console.log(`¡Hola, ${nombre}! Bienvenido a la clase 3.`);


// Ejercicio 2
let primeraedad = prompt ("Ingresa tu edad: ");
let edad = Number (primeraedad); 


// Ejercicio 3
if (isNaN(edad)) {
console.log("Error: Debes ingresar un número válido.");
} else {
console.log(`Tu edad ingresada es: ${edad}`);
}


// Ejercicio 4
let eada = Number(prompt("Ingresá tu edad: "));
if (isNaN(eada) || eada < 0) {
console.log("Por favor, ingresá una edad válida.");
} else {
// Condicional anidado
if (eada >= 18) {
console.log("Acceso concedido: Sos mayor de edad.");
} else {
console.log("Acceso denegado: Sos menor de edad.");
}
}



// Suma de dos números
let numero1 = prompt("Ingrese el primer numero:");
let numero2 = prompt("Ingrese el segundo numero:");
numero1 = Number(numero1);
numero2 = Number(numero2);
let suma = numero1 + numero2;
console.log("La suma es: " + suma);


// Ejercicio 2 practica 
let num1 = Number(prompt("Ingresar el primer numero: "));
let num2 = Number(prompt("Ingresar el segundo numero: "));
let suma2 = num1 + num2;
console.log(`La suma es: ${suma}`);


// Ejercicio 3 practica 
let precio1 = Number(prompt("Ingrese el precio del primer producto: "));
let precio2 = Number(prompt("Ingrese el precio del segundo producto: "));
let total = precio1 + precio2;
console.log(`El total a pagar es: $${total}`);


// Ejercicio 4 practica 
let number1 = Number(prompt("Ingrese la primer edad: "));
let number2 = Number(prompt("Ingrese la segunda edad: "));
let suma3 = number1 + number2;
console.log(`La suma de las edades es: ${suma}`);


// Ejercicio 5 pratica 
let numb1 = Number(prompt("Ingrese la primer nota: "));
let numb2 = Number(prompt("Ingrese la segunda nota: "));
let suma4 = numb1 + numb2;
console.log(`La suma de las dos notas es: ${suma}`);


// Ejercicio 6 practica 
let grupo1 = Number(prompt("¿Cuántos estudiantes hay en el grupo 1? "));
let grupo2 = Number(prompt("¿Cuántos estudiantes hay en el grupo 2? "));
let totalestudiantes = grupo1 + grupo2;
console.log(`En total hay ${totalestudiantes} estudiantes.`);



// Ejercicio 7 practica 
let dinero1 = Number(prompt("Ingresá la primera cantidad de dinero: "));
let dinero2 = Number(prompt("Ingresá la segunda cantidad de dinero: "));
let totaldinero = dinero1 + dinero2;
console.log(`En total tenés $${totaldinero}.`);