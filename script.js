// Function to get the pokemon URL
function getPokemon() {
    let api = "https://pokeapi.co/api/v2/pokemon/";

    // Initilisation of a pokemon counter
    let counter = document.querySelectorAll(".pokemon").length;

    for (let i = counter + 1; i <= counter + 15; i++){
        url = api + i;

        fetch(`${url}`)
        .then(response => response.json())
        .then(data => {

            // Input the URLS' content intot the HTML
            document.querySelector("#pokemonContainer").innerHTML+= `   
            <div class="pokemon ${data.types[0].type.name}">
                <div class="imgContainer">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="${data.forms[0].name}" />
                    </div>
                <div class="info">
                    <h3 class="name">${data.forms[0].name}</h3>
                    <span class="type">Type: <span>${data.types[0].type.name}</span></span>
                </div>
            </div>
            `
        });
    };
};

// Call the first time the function to generate the 15 first pokemons
getPokemon();

document.querySelector("#next").addEventListener("click", function () {
    getPokemon();
});