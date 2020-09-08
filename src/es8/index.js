/* ++Object.entries */
/* A partir de ecmascript 8 podemos devolver los valores y las claves de una matriz gracias a Object.entries */
data = {
   frontend: 'oscar',
   backend: 'isabel',
   design: 'ana',
}


const entries = Object.entries(data);

console.log(entries); // nos brinda un array de arrays (matriz)
console.log(entries.length); // 3

const values = Object.values(data);
console.log(values); // ['oscar', 'isabel', 'ana']
console.log(values.length); // 3
/* esto puede resultar particularmente util para hacer manejo de datos */


/* ++Padding */
const string = 'hello';

console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,' -----'));


console.log('hello'.padEnd(13,' -----'));
console.log('food'.padEnd(13,' -----'));
console.log('treeasdasd'.padEnd(13,' -----'));


data2 = {
   frontend: 'oscar',
   backend: 'isabel',
   design: 'ana',
}
/* al momento de definir objetos si dejamos una coma al final esto es conocido como trailing coma,
lo cual facilita el añadir mas elementos posteriormente (anteriormente no se podia realizar de esta forma) */