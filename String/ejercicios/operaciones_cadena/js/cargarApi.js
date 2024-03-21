"use strict"


//Función que cargue la API con await
async function cargarApi(url) {
    const response = await fetch(url);
    if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
    return response.json();
}

//función para solicitar a cargarAPIWeb la API
async function solicitar(texto){

    let resultado = await cargarApi('https://api.chucknorris.io/jokes/random');

    texto.value = resultado.value;
   
}

