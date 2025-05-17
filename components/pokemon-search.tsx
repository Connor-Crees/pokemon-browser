"use client";

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { usePathname, useSearchParams} from "next/navigation";
import { useState } from 'react';
import Link from 'next/link';
import { parseParameter } from 'next/dist/shared/lib/router/utils/route-regex';

export function PokemonSearch() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [searchValue, setSearchValue] = useState("");
    var exploreText = "Explore Pokémon";
    const params = new URLSearchParams(searchParams);
    const search = params.get("search");
    if(search){
        exploreText = `Search Results for '${search.charAt(0).toUpperCase() + search.slice(1)}'`
    }
    

    const createPageURL = (searchValue: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("search", searchValue.toLowerCase());
        return(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="flex justify-between">
            <h2 className="flex items-center text-[30px] tracking-[-0.025em]">{exploreText}</h2>
            <div className='flex justify-right gap-4'>
                <Input 
                    type = "search"
                    placeholder = 'Find Pokémon'
                    value = {searchValue}
                    onChange = {e => {setSearchValue(e.currentTarget.value);}}
                />
                <Link href={createPageURL(searchValue)}>
                    <Button type = "submit">Search</Button>
                </Link>
                
            </div>
        </div>
    )
}