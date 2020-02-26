/// Crear un programa que realice al usuario 3 preguntas: si se ha hecho tatuajes recientemente, si ha tenido o tiene hepatitis, si tiene anemia. Si responde a alguna de ellas afirmativamente, debe mostrar un mensaje que indique si puede o no donar sangre

const pregunta1 = confirm("se ha hecho tatuajes recientemente?");

const pregunta2 = confirm("ha tenido o tiene hepatitis?");

const pregunta3 = confirm("ha tenido o tiene anemia?");

const donar = !pregunta1 && !pregunta2 && !pregunta3;

alert("Puede donar sangre? = " + donar);
