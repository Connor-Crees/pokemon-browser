import { Loading } from '@/components/loading';
import { PokemonList } from '@/components/pokemon-list';
import PokemonPagination from '@/components/pokemon-pagination';
import { Suspense } from 'react';
import { Separator } from '@/components/ui/separator';
import { PokemonSearch } from '@/components/pokemon-search';

export default async function Home(props: {
  searchParams?: Promise<{
    page?: string;
    search?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const pageNum = Number(searchParams?.page) || 0;
  const search = searchParams?.search || "";

  return (
    <div className={`flex flex-col gap-[48px]`}>
      {/* hero */}
      <div className="p-12 h-[244px]">
        <h1 className="flex justify-center items-end text-[60px] font-[600]">Pokémon Browser</h1>
        <h2 className="flex justify-center items-center text-[30px] font-[600] text-[#71717A] tracking-[-0.025em]">Search and find Pokémon</h2>
      </div>

      <Separator />

      {/* body */}
      <div className="flex flex-col pl-[140px] pr-[140px] gap-[48px]">
        {/* sub-heading and search */}
        <PokemonSearch />

        {/* Pokemon list */}
        <Suspense key={pageNum} fallback={<Loading />}>
          <PokemonList pageNum={pageNum} search={search} />
        </Suspense>


        {/* Pagination */}
        <PokemonPagination />

      </div>

      <Separator />

      <footer className="flex flex-col p-8 justify-center items-center">
        <div>Thank you for using Pokémon Browser!</div>
      </footer>

    </div>

  );
}
