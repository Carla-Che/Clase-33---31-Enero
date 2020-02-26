//Crear un programa que pregunte si acepta los términos y condiciones de uso. Si el usuario responde que sí, debe mostrar un mensaje que diga "Continuando con el proceso...". Si responde que no, debe mostrar un mensaje que diga "No se puede continuar con el proceso si no se aceptan los términos y condiciones de uso".


const terminosCond = confirm("Sr. usuario: acepta los términos y condiciones de uso?")

terminosCond && alert(`Continuando con el proceso...`)|| !terminosCond && alert(`No se puede continuar con el proceso si no se aceptan los términos y condiciones de uso`);


