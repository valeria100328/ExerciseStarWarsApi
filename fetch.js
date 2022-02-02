//Consola de navegador api StarWars
fetch('https://swapi.dev/api/planets/')
.then(response => response.json())
.then(data => console.log(data));
console.log("Inicial el llamdo a api")

