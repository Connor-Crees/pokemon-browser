"use client";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { usePathname, useSearchParams } from "next/navigation";
import { GetPokemonCount } from "@/lib/pokemonAPI";
import { useState, useEffect } from "react";

export default function PokemonPagination() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 0;
    const search = searchParams.get("search");

    const [count, setCount] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await GetPokemonCount();
                setCount(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    })

    var max_pages = 0;
    if (!search) {
        max_pages = Math.floor(Number(count) / 12);
    }


    const createPageURL = (pagenumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pagenumber.toString());
        return (`${pathname}?${params.toString()}`);
    }

    return (
        <div>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            href={createPageURL(currentPage - 1)}
                            aria-disabled={currentPage <= 0}
                            tabIndex={currentPage <= 0 ? -1 : undefined}
                            className={currentPage <= 0 ? "pointer-events-none opacity-50" : undefined}
                        />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext
                            href={createPageURL(currentPage + 1)}
                            aria-disabled={currentPage >= max_pages}
                            tabIndex={currentPage >= max_pages ? -1 : undefined}
                            className={currentPage >= max_pages ? "pointer-events-none opacity-50" : undefined}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}

