"use client";
import { usePathname, useSearchParams} from "next/navigation";

import { Button } from "@/components/ui/button"
import Link from "next/link";

export function ReturnButton(){
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 0;  

    const createPageURL = (pagenumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pagenumber.toString());
        return(`${pathname.slice(0, -7)}?${params.toString()}`);
    }

    return(
        <Link href={createPageURL(currentPage)}>
            <Button variant="default">{"<- Return Home"}</Button>
        </Link>
    )
}