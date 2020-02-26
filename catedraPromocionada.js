/// Hacer un programa que pida ingresar los valores de los tres parciales de la cátedra mostrar un mensaje indicando si promociona o no la cátedra. La misma se promociona si al menos dos de ellos fueron aprobados con una nota de 8 o más.

let parcialUno = Number(prompt("Ingrese el resultado de su primer parcial"));

let parcialDos = Number(prompt("Ingrese el resultado de su segundo parcial"));

let parcialTres = Number(prompt("Ingrese el resultado de su tercer parcial"));

parcialUno && parcialDos && parcialTres >= 8 && alert("Promociona la Catedra") ;

parcialUno && parcialDos && parcialTres < 8 && alert("No promociona");

