/// Un club tiene las siguientes reglas: sólo pueden entrar miembros que tengan la cuota al día, o no miembros que tengan autorización. Hacer un programa que pregunte estas si es miembro, si tiene la cuota al día y si tiene autorización y muestre luego un mensaje indicando si tiene el acceso permitido o no.

const miembrosClub = confirm("Usted es miembro del club?");
const cuotaClub = confirm("tiene la cuota al día?");
const autorizacionClub = confirm("usted tiene una autorizacion para ingresar como no miembro?");

const accesoDenegado = !cuotaClub || !autorizacionClub || !miembrosClub;

alert("Usted tiene el acceso denegado =" + accesoDenegado);
