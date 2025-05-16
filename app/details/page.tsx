import { PokemonAvatar } from "@/components/pokemon-avatar";
import { PokemonDetails } from "@/components/pokemon-details";
import { ReturnButton } from "@/components/return-button";
import { Separator } from '@/components/ui/separator';
import { Suspense } from 'react';
import { Loading } from '@/components/loading';

export default async function Page(props: {
    searchParams?: Promise<{
            pokemon?: string;
            page?: string;
        }>;
}){
    const searchParams = await props.searchParams;
    const name = searchParams?.pokemon || "";

    return(
        <div className={`flex flex-col gap-[48px]`}>
            {/* Top Bar */}
            <div className="p-6 text-[32px] font-[600] text-[#181A1B] tracking-[-0.025em]">
                Pokemon Browser
            </div>
            
            <Suspense key={name} fallback={<Loading />}>
                {/* Top Bar and Top section */}
                <div>
                    {/* Top of Profile Section */}
                    <div>
                        {/* Top of Profile BG */}
                        <div className="bg-[#18181B33] h-[168px] w-full mb-[-50px]"></div>

                        {/* Avatar, name and number */}
                        <div className="flex justify-center">
                            <PokemonAvatar name={name}/>
                        </div>
                    </div>
                </div>

                <div className="pl-[140px] pr-[140px]">
                    {/* Details */}
                    <div className="pb-8">
                        <PokemonDetails name={name}/>
                    </div>

                    {/* Return Home */}
                    <ReturnButton />
                </div>
            </Suspense>

            <Separator />

            <footer className="flex flex-col p-8 justify-center items-center">
                <div>Thank you for using Pokémon Browser!</div>
            </footer>
        </div>
    );
}