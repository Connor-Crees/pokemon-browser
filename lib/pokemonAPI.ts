
const pokemonAPI = "https://pokeapi.co/api/v2/";


export async function GetPokemonList(pageNum : number){
    const numberOfPokemon = 12;
    const response = await fetch(pokemonAPI + `pokemon/?limit=${numberOfPokemon}&offset=${pageNum*numberOfPokemon}`);
    const data = await response.json();
    return data.results;
}

export async function GetPokemonCount() {
    const response = await fetch(pokemonAPI + `pokemon/`);
    const data = await response.json();
    return data.count;
}

export async function GetPokemonCardDetails(name: string){
    const response = await fetch(pokemonAPI + `pokemon/${name}`);
    const data = await response.json();
    var image = data.sprites.front_default;
    return [name, data.id, data.types, data.sprites.front_default];
}

export async function GetPokemonAvatarDetails(name: string){
    const response = await fetch(pokemonAPI + `pokemon/${name}`);
    const data = await response.json();
    return [data.id, data.sprites.front_default];
}

export async function GetPokemonDetails(name: string){
    const response = await fetch(pokemonAPI + `pokemon/${name}`);
    const data = await response.json();
    return data;
}

export async function GetPokemonSpecies(url: string){
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

interface Weakness<T> {
    [key: string]: T;
}
export async function GetPokemonWeaknesses(urls: (string[])){
    const types: any[] = [];
    for(const url of urls){
        const response = await fetch(url);
        const data = await response.json();
        types.push(data)
    }

    const pokemonWeaknesses: (string)[] = [];
    const pokemonStrengths: (string)[] = [];
    const pokemonInvulns: (string)[] = [];
    for(const type of types){
        for(const weakness of type.damage_relations.double_damage_from){
            pokemonWeaknesses.push(weakness.name);
        }
        for(const strength of type.damage_relations.half_damage_from){
            pokemonStrengths.push(strength.name);
        }
        for(const invuln of type.damage_relations.no_damage_from){
            pokemonInvulns.push(invuln.name);
        }
    }
    console.log("pokemonWeaknesses: ", pokemonWeaknesses);
    console.log("pokemonStrengths: ", pokemonStrengths);
    console.log("pokemonInvulns: ", pokemonInvulns);
    
    const mults: Weakness<number> = {}
    for(const weakness of pokemonWeaknesses){
        if(!mults[weakness]){
            mults[weakness] = 2;
        }
        else{
            mults[weakness] = mults[weakness] * 2;
        }
    }
    for(const strength of pokemonStrengths){
        if(mults[strength]){
            mults[strength] = mults[strength] / 2;
        }
    }
    for(const invulns of pokemonInvulns){
        if(mults[invulns]){
            mults[invulns] = 0;
        }
    }
    console.log("mults: ", mults);

    const weaknesses: (string)[] = [];
    for(const weakness of pokemonWeaknesses){
        if(mults[weakness] > 1){
            weaknesses.push(weakness)
        }
    }

    return [...new Set(weaknesses)];
}

export async function GetPokemonAbility(url: string){
    const response = await fetch(url);
    const data = await response.json();
    return data.flavor_text_entries[0].flavor_text;
}