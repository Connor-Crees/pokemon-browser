"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { Pokemon } from "@/lib/pokemonInterfaces";
import { PokemonCardType } from "./pokemon-card-types";
import { usePathname, useSearchParams} from "next/navigation";

export function PokemonCard({name, id, types} : Pokemon) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 0;

    const createPageURL = (pagenumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pagenumber.toString());
        params.set("pokemon", name);
        return(`${pathname}details?${params.toString()}`);
    }
    return (
        <div>
            <Link href={createPageURL(currentPage)} key={name}>
                <Card>
                    <CardHeader>
                        <CardTitle>{name.charAt(0).toUpperCase() + name.slice(1)}</CardTitle>
                        <CardDescription>{"#" + String(id).padStart(4, "0")}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <PokemonCardType {...types}/>
                    </CardContent>
                </Card>
            </Link>
        </div>
    )
}