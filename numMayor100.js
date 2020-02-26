//Crear un programa que permita ingresar tres número y muestre si alguno de ellos es mayor a 100

const numero1 = Number(prompt("Ingrese un numero por favor"));
const numero2 = Number(prompt("Ingrese un segundo numero, por favor"));
const numero3 = Number(prompt("Ingrese un ultimo numero"));

const numeroMayor = numero1 > 100 || numero2 > 100 || numero3 > 100;

alert(`El numero ingresado mayor a 100 es:${numeroMayor}`);
