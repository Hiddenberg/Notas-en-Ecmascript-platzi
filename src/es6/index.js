/* ASIGNACIONES POR DEFECTO Y CONCATENACIONES */

/* De esta forma se realizaba antes de ecmascript 6 */

function newFunction(name, age , country) {
   var name = name || 'victor';
   var age = age || 24;
   var country = country || 'mx';
   
   console.log(name,age,country);
}


/* Esta es la nueva forma de hacerlo con ecmascript 6 por defaults*/

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




/* ------------------------- clase 2 -strings en multilinea ------------------------- */

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



/* ------------------------- clase 3 -Arrow Functions, Promesas y Parametros en objetos ------------------------- */

/* ++Creacion de objetos y sus propiedades */
/* Anteriormente para crear un objeto y sus propiedades se hacia de la siguiente forma */
let nombre = 'victor';
let edad = 24;

obj = { name: nombre, age: edad };


/* Y la nueva forma de hacerlo con ecmascript 6 es de la siguiente */

obj2 = { nombre, edad }; // De esta forma el objeto automaticamente va a recibir tanto la variable como el valor de la misma

/* por lo que */

console.log(obj2.nombre) // nos devolvera 'victor'
console.log(obj2.edad) // nos devolvera '24'



/* ++Arrow functions */
// Estas nos permiten tener una sintaxis mas reducida, y al mismo tiempo un 'this' no vinculable

const names = [
   {name: 'oscar', age: 32},
   {name: 'yesica', age: 27}
];

/* La forma tradicional de ejecutar un map, seria pasandole una funcion anonima como parametro de la siguiente forma */
let listOfNames = names.map(function(item) {
   console.log(item.name)
})


/* Cabe destacar que las "arrow functions" siempre son funciones anonimas */
/* Ahora con ecmascript6 y las arrow functions podemos hacer el map de la siguiente forma */
let listOfNames2 = names.map(item => console.log(item));

/* Tambien es posible asignar una arrow function a una variable para posteriormente pode usarla como una funcion normal */
const listOfNames3 = (name, age, country) => {
   // Code
}

/* ↓ Si la funcion solo tendra un solo parametro podemos pasarlo directamente si necesidad de usar los parentesis */
const listOfNames4 = name => {
   // Code
}

/* ↓ De igual forma si solo vamos a ejecutar y/o retornar una sola cosa, tambien podemos pasarla directametne sin los brackets */
const cumpleaños = edad => edad + 1;


/* ++Promesas */
/* Las pronmesas son realmente utiles en JS ya que se encargan de manejar peticiones que pueden (O NO) ser cumplidas en algun momento */

const helloPromise = () => {
   return new Promise((resolve, reject) => {
      if(false) {
         resolve('hey!')
      } else {
         reject('ups!, algo salio mal')
      }
   })
}

helloPromise()
   .then(response => console.log(response))
   .then(() => console.log('hola'))
   .catch(error => console.log(error))



/* ------------------------- clase 4 -Clases, Modulos y Generadores ------------------------- */

/* ++Clases */
/* En JS podemos trabajar con programacion orientada a objetos de la siguiente forma */

class Calculator {
   constructor() {
      this.valueA = 0;
      this.valueB = 0;
      
   }

   sum(valueA, valueB) {
      this.valueA = valueA;
      this.valueB = valueB;

      return this.valueA + this.valueB;
   }
}


const calc = new Calculator;

console.log(calc.sum(2,3));



/* ++Modulos */
/* En JS podemos importar diferentes partes de codigo incluso desde otros archivos al hacer un import de la siguiente forma */
import { hello } from './module.js'

hello(); //esta funcion esta definida en el archivo module.js y no en este mismo



/* ++Generators */
/* Estos retornan una serie de valores segun el algoritmo definido */

function* helloWorld () {
   if (true) {
      yield 'hello'
   }
   if (true) {
      yield 'world'
   }
}

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);