'use client'

import { useState } from "react";
import { PokemonCard } from "./pokemon-card";

interface PokemonGridProps {
    pokemonList: any;
}

export function PokemonList({pokemonList} : PokemonGridProps) {

    console.log(pokemonList);

    return(
        <div className="flex justify-between flex-wrap gap-8">
            {pokemonList.map((pokemon : any) => {
                return(
                    <PokemonCard name={pokemon.name} key={pokemon.name}/>
                )
            })}
        </div>
    )
}