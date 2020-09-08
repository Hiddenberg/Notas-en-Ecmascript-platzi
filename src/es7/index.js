
/* funcion creada para retornar un array que contenga numeros consecutivos
entre el inicio y el fin */
function arrayConsecutivo(start, end) {
   if (!end) {
      end = start;
      start = 0;
   }
   lenght = Math.abs(end-start);
   let array = new Array(lenght).fill(start).map(n => {
      n = start;
      start++;
      return n;
   })
   return array;
}


numbers = arrayConsecutivo(1,9);

/* con el metodo includes() podemos verificar si un valor existe dentro de un array */
if (numbers.includes(7)) {
   console.log('si, el valor 7 es parte de este array')
} else {
   console.log('el valor 7 no se encuentra')
}


/* a partir de la version ecmascript 7 podemos hacer operaciones exponenciales de  la siguient forma*/
let base = 4;
let exponente = 3;

resultado = base ** exponente;

console.log(resultado)