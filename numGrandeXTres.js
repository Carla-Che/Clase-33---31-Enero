///Hacer un programa que pida ingresar 3 números, y muestre como resultado el más grande de ellos. Una vez hecho esto, agregar la funcionalidad de que si alguno de los números es igual a otro, debe mostrar un mensaje diciéndolo.


let numeroUno = Number(prompt("ingrese un numero"));

let numeroDos = Number(prompt("ingrese otro numero"));

let numeroTres = Number(prompt("ingrese su tercer numero"));

numeroUno > numeroDos && numeroUno > numeroTres && alert(`${numeroUno} es el mayor numero`) || numeroDos > numeroUno && numeroDos > numeroTres && alert(`${numeroDos} es el mayor numero`) || numeroTres > numeroDos && numeroTres > numeroUno && alert(`${numeroTres} es el mayor numero`) || numeroUno == numeroDos && numeroUno == numeroTres && numeroDos == numeroTres && alert(`Los tres numeros son iguales`);
