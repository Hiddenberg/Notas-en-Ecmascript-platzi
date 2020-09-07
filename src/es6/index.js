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




/* -------------------- clase 2 -strings en multilinea -------------------- */

/* Para hacer strings con multiples lineas normalmente lo que se hacia era esto */
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod placerat est ac semper \n"
+ "Nueva frase despues del salto de linea";

/* Pero ahora con ecmascript6 podemos hacerlo de la siguiente manera gracias a los template literals */
let lorem2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod placerat est ac semper
Nueva frase despues del salto de linea`;

console.log(lorem); /* Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod placerat est ac semper
Nueva frase despues del salto de linea */
console.log(lorem2); /* Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod placerat est ac semper
Nueva frase despues del salto de linea */


/* ++Desestructuracion de elementos */

let person = {
   'name': 'oscar',
   'age': '32',
   'country': 'mx',
}
/* normalmente para desestructurar un elemento (sacar sus propiedades) tenia que hacerse de esta forma */
console.log(person.name, person.age); //oscar 32

//Pero ahora con ecmascript 6 es posible hacerlo de la siguiente forma al declarar las variables con dentro de unos corchetes "{}"
let { name } = person; //Esto equivale a 'oscar' que es el atributo 'name' del objeto 'persona'

/* ↓ Y esto tambien podemos hacerlo con multiples elementos al mismo tiempo */

let { name, age, country } = person; //Esto nos genera 3 variables en memoria, cada una con el valor de las propiedades de este objeto



/* ++Operadores de propagacion */
/* ellos nos permiten expandir de ciertas formas varios elementos */


let team1 = ['oscar', 'victor', 'julian'];
let team2 = ['valeria', 'yesica', 'camila'];


let education = ['david', ...team1, ...team2]; /* Esto es el equivalente a hacer una contactenacion del elemento 'david' junto con los otros 2 arrays */

console.log(education); // ['david','oscar', 'victor', 'julian','valeria', 'yesica', 'camila']



/* ++Asignacion de variables (let, var y const)*/
//Al declarar una variable con 'var' esta siempre tendra acceso global (en cualquier parte del codigo)
{
   var textoGlobal = 'hola';
}
console.log(textoLet); //'hola'
/* En este caso nos muestra la variable, ya que podemos acceder a ella sin problemas */


/*  mientras que al asignar una variable con let, esta solo podra ser accedida de forma local, dentro del scope 
donde fue declarada (sea una funcion, un bucle o un objeto etc.) */
{
   let textoLet = 'ola ke ase';
}

console.log(textoLet); //undefined Error
/* Esto nos dara un error diciendo que la variable no esta definida, ya que no se puede usar esta variable
si esta fuera de su bloque (scope) */


/* El tipo de variables const son variables que nunca cambiaran su valor a lo largo de la ejecucion del programa */
const a = 'b';

//Por lo cual, si tratamos de reasignarla de la siguiente forma, el programa nos dará un error
a = 'a'; //Error

