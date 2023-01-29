const promise = new Promise(function (resolve, reject) {
  resolve('hey!')
});
//Generamos una constante que va a ser igual new Promise (adentro tendremos una funcion anonima que nos regresa dos funciones).
//Una promesa trae dentro un RESOLVE para validar la promesa y un REJECT en caso de no poder ser validada.
// El código de arriba es solo para saber la estructura básica de una promesa


//Ejemplo de promesa con vaquitas.
const cows = 9;

const countCows = new Promise(function (resolve, reject) {
  if (cows > 10) {
    resolve (`We have ${cows} cows on the farm`);
  } else {
    reject ("There is no cows on the farm")
  }
});

countCows.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
}).finally(() => {
  console.log('Finally');
})



// el mayor igual sirve para no mandar a llamar una funcion, sino que es como si hicieras una funcion solo con ese simbolo. se denominan arrow functions
//${} sirve para imprimir el valor numerico en una cadena de strings.
//.then(result) muestra el resolve y .catch muestra el reject
// En promesas también existe el finally, que nos muestra cuando ya termino la ejecución de una promesa.