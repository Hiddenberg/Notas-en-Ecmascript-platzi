/* ASYNC AWAIT */

const helloWorld = () => {
   return new Promise ((resolve, reject) => {
      (true) ? setTimeout(() => resolve('hello world'), 3000) : reject(new Error('Test Error')) // IF TERNARIO
   })
};
const holaMundo = () => {
   return new Promise ((resolve, reject) => {
      (false) ? setTimeout(() => resolve('hola mundo'), 2000) : reject(new Error('Test Error')) // IF TERNARIO (descomponemos la promesa pasandola como false)
   })
};

const helloAsync = async () => {
   const hello = await helloWorld();
   // const hello2 = await // podemos agrgar aun mas cosas que necesitemos esperar a que se completen
   console.log(hello)
};

helloAsync();


const anotherFunction = async () => {
   try {
      const hello = await holaMundo();
      console.log(hello);
   } catch (error) {
      console.log(error);
   }
};

anotherFunction();