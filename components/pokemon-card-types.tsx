import { Badge } from "@/components/ui/badge"
import { Type } from "@/lib/pokemonInterfaces"

export function PokemonCardType(types: Type[]){
    const typesArr = Object.keys(types);
    return(
        <div className="flex">
            {Object.keys(types).map((type) => {
                return (
                    <div className="flex mr-2" key={types[parseInt(type)].type.name}>
                        <Badge variant="default">{types[parseInt(type)].type.name}</Badge>
                    </div>
                )
            })}
        </div>
    )
}