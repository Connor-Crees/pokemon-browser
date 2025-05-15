"use client";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { usePathname, useSearchParams } from "next/navigation";

export default function PokemonPagination() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 0;

    const createPageURL = (pagenumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pagenumber.toString());
        return(`${pathname}?${params.toString()}`);
    }

    return (
        <div>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href={createPageURL(currentPage - 1)}/>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href={createPageURL(currentPage + 1)}/>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}

