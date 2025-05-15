
const pokemonAPI = "https://pokeapi.co/api/v2/";

export async function getPokemonList(pageNum : number){
    const numberOfPokemon = 16;
    const response = await fetch(pokemonAPI + `pokemon/?limit=${numberOfPokemon}&offset=${pageNum*numberOfPokemon}`)
    const data = await response.json();
    return data.results;
}