import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

interface PokemonCardProps {
    name: string
}

export function PokemonCard({name} : PokemonCardProps) {

    return (
        <div className="flex width-[266px] height-[391px]">
            <Link href={name} key={name}>
                <Card>
                    <CardHeader>
                        <CardTitle>{name.charAt(0).toUpperCase() + name.slice(1)}</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                </Card>
            </Link>
        </div>
    )
}