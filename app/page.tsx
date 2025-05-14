import { PokemonList } from '@/components/pokemon-list';
import { getPokemonList } from '@/lib/pokemonAPI';

export default async function Home() {
  const pokemonList = await getPokemonList(0);

  return (
    <div className={`flex flex-col gap-[48px]`}>
      {/* hero */}
      <div className="p-12 h-[244px]">
        <h1 className="flex justify-center items-end text-[60px] font-[600]">Pokémon Browser</h1>
        <h2 className="flex justify-center items-center text-[30px] text-[#71717A] tracking-[-0.025em]">Search and find Pokémon</h2>
      </div>

      {/* seperator */}
      <div className="flex border border-[#E4E4E7] gap-[10px]" />

      {/* body */}
      <div className="flex flex-col pl-[140px] pr-[140px] gap-[48px]">
        {/* sub-heading and search */}
        <div className="flex justify-between">
          <h2 className="flex items-center text-[30px] tracking-[-0.025em]">Explore Pokémon</h2>
          <h2 className="flex items-center text-[30px] tracking-[-0.025em]">Search</h2>
        </div>

        {/* Pokemon list */}
        <PokemonList pokemonList={pokemonList}/>

        
      </div>

      {/* seperator */}
      <div className="flex border border-[#E4E4E7] gap-[10px]" />

    </div>
    
  );
}
