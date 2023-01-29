import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors', // el mode siempre va a estar en corse por defecto
    credentiasl: 'same-origin',  //por defecto esta asi
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)    //stringify sirve para transformar el objeto json a objeto texto
  });
  return response; 
}

const data = {
      "title": "204",
    "price": 204,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

  postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));