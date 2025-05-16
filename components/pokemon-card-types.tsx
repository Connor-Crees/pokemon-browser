import { Badge } from "@/components/ui/badge"
import { Type } from "@/lib/pokemonInterfaces"

// I don't like how I have done these functions, they are very cubersome and can probably be simplified
// However I am short on time, and they get the job done for now, so I'm moving onto other parts

export function PokemonCardType(types: Type[]){
    const typesArr = Object.keys(types);
    return(
        <div className="flex">
            {Object.keys(types).map((type) => {
                return (
                    <div className="flex mr-2" key={types[parseInt(type)].type.name}>
                        <Badge variant="default">{types[parseInt(type)].type.name.charAt(0).toUpperCase() + types[parseInt(type)].type.name.slice(1)}</Badge>
                        
                    </div>
                )
            })}
        </div>
    )
}

export function PokemonDetailsType(types: string[]){
    return(
        <div className="flex flex-wrap gap-1 pt-2">
            {Object.keys(types).map((type) => {
                return (
                    <div className="flex" key={types[parseInt(type)]}>
                        <Badge variant="default">{types[parseInt(type)].charAt(0).toUpperCase() + types[parseInt(type)].slice(1)}</Badge>
                        
                    </div>
                )
            })}
        </div>
    )
}