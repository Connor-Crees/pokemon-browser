import { PokemonCard } from "./pokemon-card";
import { GetPokemonList, GetPokemonCardDetails } from '@/lib/pokemonAPI';
import { Pokemon } from "@/lib/pokemonInterfaces";

export async function PokemonList({ pageNum }: { pageNum: number }) {
    const pokemonCardList = [] as Pokemon[];
    const pokemonList = await GetPokemonList(pageNum);
    for(const pokemon of pokemonList){
        const results = await GetPokemonCardDetails(pokemon.name);
        const details : Pokemon = {name: results[0], id: results[1], types:results[2]}
        pokemonCardList.push(details);
    }
    return (
        <div>
            {/* <div className="flex justify-between flex-wrap gap-8"> */}
            <div className="grid justify-between grid-cols-4 gap-8">
                {pokemonCardList.map((pokemon: Pokemon) => {
                    return (
                        <PokemonCard name={pokemon.name} id={pokemon.id} types={pokemon.types} key={pokemon.name} />
                    )
                })}
            </div>
        </div>

    )
}