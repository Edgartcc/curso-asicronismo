import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

//importamos la libreria de fetch desde node, y mandamos a llamar nuestra API y la guardamos en una variable de tipo const.

function fetchData(urlApi) {
  return fetch(urlApi);
};

//Creamos una funcion llamada fetchData al cual le hacemos un return del llamdaro de fetch.

/* fetchData(`${API}/products`)
  .then(response => response.json())
  .then(products => {
    console.log(products);
  })
  .then(() => {
    console.log('hola');
  })
  .catch(error => console.log(error)); */

//llamamos a la funcion colocando como argumento el valor del API, y usamos .then para saber que hay dentro de API. Colocamos otro then para traer los productos a consola.
//Podemos anidar multiples .then, y hacer lógicas consecuentes.
//Usamos catch para saber si existe un error y lo imprimimos en consola.

fetchData(`${API}/products`)
.then(response => response.json())
.then(products => {
  console.log(products);
  return fetchData(`${API}/product/${products[0].id}`)
})
  .then(response => response.json)
  .then(product => {
    console.log(product.title);
    return fetchData(`${API}/categories/${product.category.id}`)
  })
  .then(response => response.json)
  .then(category => {
    console.log(category.name);
  })
  .catch(err => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally");
  });