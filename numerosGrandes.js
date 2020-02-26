///Hacer un programa que pida ingresar 2 números, y muestre como resultado el más grande de ellos. Una vez hecho esto, agregar la funcionalidad de que si alguno de los números es igual a otro, debe mostrar un mensaje diciéndolo.

let numeroUno = Number(prompt("ingrese un numero"));

let numeroDos = Number(prompt("ingrese otro numero"));

numeroUno > numeroDos && alert(`${numeroUno} es el mayor numero`) || numeroDos > numeroUno && alert(`${numeroDos} es el mayor numero`) || numeroUno == numeroDos && alert("Ambos numeros son iguales");

