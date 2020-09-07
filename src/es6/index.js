/* ASIGNACIONES POR DEFECTO Y CONCATENACIONES */

/* De esta forma se realizaba antes de ecmascript 6 */

function newFunction(name, age , country) {
   var name = name || 'victor';
   var age = age || 24;
   var country = country || 'mx';
   
   console.log(name,age,country);
}


/* Esta es la nueva forma de hacerlo con ecmascript 6 */

function newFunction2(name = 'victor', age = 24, country = 'mx') {
   console.log(name,age,country);
}


/* Asi se hacia antes de ecmascript 6 */
var hola = 'hello';
var mundo = 'world';
var epicPhrase = hola + " " + mundo;
console.log(epicPhrase); // "hello world"

/* Pero ahora podemos hacerlo de la siguiente forma gracias a las template literals */
epicPhrase2 = `${hola} ${mundo}`;
console.log(epicPhrase2); // "hello world"

