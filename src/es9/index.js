/* OPERADOR DE REPOSO */

const obj = {
   name: 'victor',
   age: 32,
   country:'MX',
}

/* ↓ Esto ademas de ayudarnos a desestructurar objetos de forma mas sencilla, tambien nos facilita el manejar unicamente los datos que
necesitamos */
let { country, ...all } = obj; // De esta forma si necesitamos todos los otros datos, MENOS el pais (country), podemos sacarlos de esta forma

console.log(all); // y usarlos despues



/* De esta forma podemos concatenar las propiedades de diferentes objetos ya sea para crear "clones" de objetos que ya existen,
o para poder tener propiedades de otros objetos dentro de uno distinto*/
const obj2 = {
   name: 'victor',
   age: 24,
}

const obj3 = {
   ...obj2,
   country: 'MX'
}

console.log(obj3);



/* ++Promise.finaly() */

const helloWorld = () => {
   return new Promise ((resolve, reject) => {
      (false) ? setTimeout(() => resolve('hello world despues de 3 sec'),3000) : reject(new Error('test error'))
   });
};

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('finalizo')); //NOTA!!: Esta linea se ejecutara independientemente de si la promesa se ejecuto correctamente o no




/* ++Regexp (expresiones regulares) VERY USEFUL*/

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ //← Esto es una expresion regular para obtener un formato de fecha

const match = regexData.exec('2018-04-20');

const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day)