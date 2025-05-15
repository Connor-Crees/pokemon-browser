import { PokemonCard } from "./pokemon-card";
import { getPokemonList } from '@/lib/pokemonAPI';

type Pokemon = {
    name: string,
    url: string
}

export async function PokemonList({ pageNum }: { pageNum: number }) {
    const pokemonList = await getPokemonList(pageNum);
    return (
        <div>
            <div className="flex justify-between flex-wrap gap-8">
                {pokemonList.map((pokemon: Pokemon) => {
                    return (
                        <PokemonCard name={pokemon.name} key={pokemon.name} />
                    )
                })}
            </div>
        </div>

    )
}