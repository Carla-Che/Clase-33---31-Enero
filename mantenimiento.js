//// Hacer un programa que pregunte por separado si el auto tiene aceite, agua, y neumáticos con presión. Mostrar en un mensaje si tiene que hacer mantenimiento o no si alguna de las respuestas es negativa

const aceite = confirm("Su auto tiene aceite?");
const agua = confirm("Su auto tiene agua?");
const neumaticos = confirm("Su auto tiene neumaticos con presion?");

const respuestas = !aceite || !agua || !neumaticos;

alert("Necesita mantenimiento urgente?=" + respuestas);

