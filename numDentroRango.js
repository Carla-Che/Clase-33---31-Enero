////Crear un programa que pida al usuario ingresar un número que represente el límite inferior del rango, uno que represente el límite mayor, y luego otro cualquiera y mostrar en un mensaje si el último número se encuentra dentro del rango ingresado.

const rangoInferior = Number(prompt("Ingrese un numero que represente el limite inferior del rango"));
const rangoMayor = Number(prompt("Ingrese un numero que represente el limite mayor del rango"));

const numero3 = Number(prompt("Ingrese un ultimo numero"));

const resultado = numero3 > rangoInferior && numero3 < rangoMayor;

alert(`El numero se encuentra dentro del rango ingresado? ${resultado} `);
