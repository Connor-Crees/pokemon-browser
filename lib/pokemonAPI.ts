
const pokemonAPI = "https://pokeapi.co/api/v2/";

export async function getPokemonList(pageNum : number){
    const response = await fetch(pokemonAPI + `pokemon/?limit=16&offset=${pageNum}`)
    const data = await response.json();
    return data.results;
}