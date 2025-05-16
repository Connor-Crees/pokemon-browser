import { Progress } from "@/components/ui/progress"

interface Stats{
    base_stat: number;
    effort: number
    stat: {
        name: string;
        url: string;
    }
}

interface ScreenName<T> {
    [key: string]: T;
}

export function PokemonStats(stats: Stats[]){
    const names: ScreenName<string> = {}
    names["hp"] = "HP";
    names["attack"] = "Attack";
    names["defense"] = "Defense";
    names["special-attack"] = "Special Attack";
    names["special-defense"] = "Special Defense";
    names["speed"] = "Speed";

    return(
        <div>
            {Object.keys(stats).map((s) => {
                return(
                    <div className="flex justify-between" key={stats[parseInt(s)].stat.name}>
                        <div className="w-70">
                            {names[stats[parseInt(s)].stat.name]}
                        </div>
                        <div className="w-full mt-2">
                            <Progress value={stats[parseInt(s)].base_stat} />
                        </div>
                    </div>
                )
            })}
        </div>
    );
}