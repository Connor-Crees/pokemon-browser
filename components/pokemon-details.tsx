import { GetPokemonDetails } from "@/lib/pokemonAPI";

export async function PokemonDetails({name}: {name : string}){
    console.log("name: " + name)
    const data = await GetPokemonDetails(name);

    return(
        <div>
            {data.name}
        </div>
    )
}