import { GetPokemonDetails, GetPokemonSpecies, GetPokemonWeaknesses, GetPokemonAbility } from "@/lib/pokemonAPI";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Type } from "@/lib/pokemonInterfaces";
import { PokemonDetailsType } from "./pokemon-card-types";
import { PokemonStats } from "./pokemon-stats";

export async function PokemonDetails({ name }: { name: string }) {
    const pokemonData = await GetPokemonDetails(name);
    const speciesData = await GetPokemonSpecies(pokemonData.species.url);

    // The first flavour text entry is the English one
    const flavourText = (speciesData.flavor_text_entries[0]) ? speciesData.flavor_text_entries[0].flavor_text : "-";

    // The first ability entry is the English one
    const abilityName = (pokemonData.abilities[0]) ? pokemonData.abilities[0].ability.name.charAt(0).toUpperCase() + pokemonData.abilities[0].ability.name.slice(1) : "-";
    const abilityDesc = (pokemonData.abilities[0]) ? await GetPokemonAbility(pokemonData.abilities[0].ability.url) : "-";

    const height = (pokemonData.height) ? `${(pokemonData.height/10).toString()}m` : "-";

    // The seventh ability entry is the English one
    const category = (speciesData.genera[7]) ? speciesData.genera[7].genus.slice(0,-8) : "-";

    const weight = (pokemonData.weight) ? `${(pokemonData.weight/10).toString()} kg` : "-";

    const GetPokemonGender = (genderRate: number) =>{
        if(genderRate == -1){
            return("Genderless");
        }
        else if(genderRate == 0){
            return("Male");
        }
        else if(genderRate == 8){
            return("Female");
        }
        else{
            return("Male / Female");
        }
    }
    const gender = (speciesData.gender_rate) ? GetPokemonGender(speciesData.gender_rate) : "-";
    
    const pokemonTypes: string[] = [];
    const typeURLs: string[] = [];
    pokemonData.types.forEach((t: Type) => {
        pokemonTypes.push(t.type.name);
        typeURLs.push(t.type.url);
    });
    const pokemonWeaknesses = await GetPokemonWeaknesses(typeURLs);

    const stats = pokemonData.stats;

    return (
        <div>
            {/* Info bar */}
            <Card className="p-4 bg-[#F5F4F4]">
                <CardContent className="flex items-center gap-4">
                    {/* pokeball */}
                    <div className='flex justify-center items-center min-w-[70px] max-w-[70px] min-h-[70px] max-h-[70px] rounded-full bg-[#FAFAFA]'>
                        <Image
                        src="/cherish-ball.png"
                        alt="image of cherish ball pokeball"
                        width="70"
                        height="70"
                        />
                    </div>
                    

                    {/* flavour text */}
                    <div className="text-[20px] font-[400]">
                        {flavourText}
                    </div>
                </CardContent>
            </Card>

            {/* stats */}
            <div className="grid grid-cols-3 grid-rows-2 gap-4 pt-8">
                {/* left info sidebar */}
                <Card className="row-span-2">
                    <CardHeader>
                        <CardTitle>Height</CardTitle>
                        <CardDescription>{height}</CardDescription>
                    </CardHeader>

                    <CardHeader>
                        <CardTitle>Category</CardTitle>
                        <CardDescription>{category}</CardDescription>
                    </CardHeader>

                    <CardHeader>
                        <CardTitle>Weight</CardTitle>
                        <CardDescription>{weight}</CardDescription>
                    </CardHeader>

                    <CardHeader>
                        <CardTitle>Gender</CardTitle>
                        <CardDescription>{gender}</CardDescription>
                    </CardHeader>
                </Card>

                {/* type and weakness */}
                <Card>
                    <CardHeader>
                        <CardTitle>Type</CardTitle>
                        <CardDescription>
                            <PokemonDetailsType {...pokemonTypes} />
                        </CardDescription>
                    </CardHeader>
                    <CardHeader>
                        <CardTitle>Weaknesses</CardTitle>
                        <CardDescription>
                            <PokemonDetailsType {...pokemonWeaknesses} />
                        </CardDescription>
                    </CardHeader>
                </Card>


                {/* Ability */}
                <Card>
                    <CardHeader>
                        <CardTitle>Ability</CardTitle>
                        <CardDescription>{abilityName}</CardDescription>
                        <CardDescription className="italic">{abilityDesc}</CardDescription>
                    </CardHeader>
                </Card>


                {/* stats chart */}
                <Card className="col-span-2">
                    <CardContent>
                        <PokemonStats {...stats} />
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}