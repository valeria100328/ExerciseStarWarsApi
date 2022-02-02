//Método Await1
const API = 'https://swapi.dev/api/planets/';
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = (() => {
        if(xhttp.readyState === 4){
            (xhttp.status === 200)
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error('Error', url_api))
        }
    });
    xhttp.send();
});
}

const anotherFunction = async () => {
    try{
        const data = await fetchData(API);
        console.log("Aqui inicia el llamado a la api");
        const planets= await fetchData(`${API}${data.results[0].rotation_period}`);

        console.log(data.count);
        console.log(planets.name);
        console.log(planets.orbital_period);
        console.log(planets.diameter);
        console.log(planets.climate);

    }catch (error){
        console.error(error)
    }
}

anotherFunction();