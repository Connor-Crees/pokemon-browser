import { GetPokemonAvatarDetails } from '@/lib/pokemonAPI';
import Image from 'next/image';

export async function PokemonAvatar({name}: {name : string}){
    const [id, avatarURL] = await GetPokemonAvatarDetails(name);

    return(
        <div className='flex flex-col items-center gap-3'>
            {/* Pokemon Avatar */}
            <div className='flex justify-center items-center w-[208px] h-[208px] rounded-full bg-[#FAFAFA]'>
                <Image src={avatarURL} alt={`Image of ${name}`} width={"200"} height={"200"} />
            </div>

            {/* Name and number */}
            <div className='flex gap-3'>
                <h2 className='text-[30px] font-[600] text-[#181A1B] tracking-[-0.025em]'>
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                </h2>
                <h2 className='text-[30px] font-[600] text-[#71717A] tracking-[-0.025em]'>
                    {"#" + String(id).padStart(4, "0")}
                </h2>
            </div>
        </div>
    )
}