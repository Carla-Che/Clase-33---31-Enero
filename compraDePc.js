//Crear un programa que muestre el mensaje: "Está por comprar la Notebook HP 3000 a $40000". Luego debe preguntar, por separado, si desea agregarle más memoria, más espacio en disco, y una placa de vídeo mejor. Por cada respuesta afirmativa, debe agregarle $10000 al precio base. Mostrar al final un mensaje con un detalle de la compra, las mejoras elegidas y el precio final.

let notebookHP = 40000;

alert("Está por comprar la Notebook HP 3000 a $40000");

const preguntaMemoria = confirm("Desea agregarle mas memoria?");
preguntaMemoria && (notebookHP += 10000);

const preguntaDisco = confirm("Desea agregarle mas espacio en el disco?");
preguntaDisco && (notebookHP += 10000);

const preguntaVideo = confirm("Desea agregarle una placa de video mejor?");
preguntaVideo && (notebookHP += 10000);

alert("El detalle de su compra es el siguiente: " + notebookHP);

/*let basePrice = 40000;

alert("Está por comprar la Notebook HP 3000 a $40000");
const ram = confirm("Desea comprarle memoria?");

ram && (basePrice += 10000);

const hdd = confirm("Desea comprarle más espacio en disco?");

hdd && (basePrice += 10000);

const video = confirm("Desea una placa de video?");

video && (basePrice += 10000);*/

alert("El precio ahora es de " + basePrice);