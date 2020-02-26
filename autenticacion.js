////Crear un programa que pida ingresar el usuario y la contraseña y los compare con el usuario y contraseña guardados en variables, y muestre en un mensaje si tiene el acceso autorizado

const usuario = "user";
const contrasenia = "pass";

const usuarioPrompt = prompt("Ingrese su nombre de usuario");
const contraseniaPrompt = prompt("Ingrese su contrasenia");

const validacion = usuario === usuarioPrompt && contrasenia === contraseniaPrompt;

alert(`${validacion} = acceso autorizado`);

const usuario = "user";
const contrasenia = "pass";

const usuarioPrompt = prompt("Ingrese su usuario");
const contraPrompt = prompt("Escriba contraseña");

const validacion = usuario === usuarioPrompt && contrasenia === contraPrompt;

alert(`Acceso autorizado = ${validacion}`);




