
const pokemonAPI = "https://pokeapi.co/api/v2/";


export async function GetPokemonList(pageNum : number){
    const numberOfPokemon = 16;
    const response = await fetch(pokemonAPI + `pokemon/?limit=${numberOfPokemon}&offset=${pageNum*numberOfPokemon}`)
    const data = await response.json();
    return data.results;
}

export async function GetPokemonCardDetails(name: string){
    const response = await fetch(pokemonAPI + `pokemon/${name}`);
    const data = await response.json();
    return [name, data.id, data.types];
}

export async function GetPokemonAvatarDetails(name: string){
    const response = await fetch(pokemonAPI + `pokemon/${name}`);
    const data = await response.json();
    console.log("data: ");
    console.log(data);
    return [data.id, data.sprites.front_default];
}

export async function GetPokemonDetails(name: string){
    const response = await fetch(pokemonAPI + `pokemon/${name}`);
    const data = await response.json();
    return data;
}