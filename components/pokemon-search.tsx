"use client";

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { usePathname, useSearchParams} from "next/navigation";
import { useState } from 'react';
import Link from 'next/link';

export function PokemonSearch() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [searchValue, setSearchValue] = useState("");

    const createPageURL = (searchValue: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("search", searchValue.toString());
        return(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="flex justify-between">
            <h2 className="flex items-center text-[30px] tracking-[-0.025em]">Explore Pokémon</h2>
            <div className='flex justify-right gap-4'>
                <Input 
                    type = "search"
                    placeholder = 'Find Pokémon'
                    value = {searchValue}
                    onChange = {e => {setSearchValue(e.currentTarget.value.toLowerCase());}}
                />
                <Link href={createPageURL(searchValue)}>
                    <Button type = "submit">Search</Button>
                </Link>
                
            </div>
        </div>
    )
}