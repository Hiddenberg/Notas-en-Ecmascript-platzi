/* ECMASCRIPT 10 */


/* ++Flat y Flatmap en arrays */
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat()); // [ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ] ]
console.log(array.flat(2)); // [1, 2, 3, 1, 2, 3, 1, 2, 3] //le podemos pasar la profundidad que queremos 'aplanar' por parametro al metodo flat

let array2 = [1,2,3,4,5];

console.log(array2.flatMap(value => [value, value *2]));
console.log(array2.map(value => [value, value *2]));



/* ++TrimStart */
//nos permite eliminar los espacios en blanco al inicio de un string

let hello = '          hello world'; 

console.log(hello); //          hello world
console.log(hello.trimStart()); // hello world

let hello2 = 'hello world          '; 
console.log(hello2); //'hello world          '
console.log(hello2.trimEnd()); // 'hello world'



/* ++Optional catch binding */
//Basicamente lo que esto nos permite es utilizar o "bindear" opcionalmente el error al momento de usar try catch
try {
   
} catch { //Por lo cual podemos usarlo de esta forma en lugar de usar catch (error)
   error
}


/* ++From entries VERY USEFUL */
//nos permite transformar claves/valores en objetos, lo cual es muy util para transformar arreglos(arrays) directamente en objetos

let entries = [['name','oscar'], ['age', 32]];

console.log(Object.fromEntries(entries));



/* ++Objeto de tipo simbolo */
//nos permite acceder a una descripcion de un simbolo

let mySymbol = `My symbol`;
let symbol = Symbol(mySymbol);

console.log(symbol.description);

