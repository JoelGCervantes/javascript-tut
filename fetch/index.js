// FETCH 
/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }
        return response.json();
    })
    .then(data => console.log(data.id))
    .catch(error => console.log(error));
*/

// USING ASYNC AND AWAIT 
async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemon-name").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch (error) {

        console.error(error);

    }
}
