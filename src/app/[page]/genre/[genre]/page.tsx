import { MoviesCardLoading } from "@/components/MoviesCardLoading";
import { Suspense } from "react";
import { MovieCard } from "@/components/MovieCard";


export default function MostPopular({params} : {params: {page: string, genre: string }}) {
    return (
        <div>
            
        <main className="">
            <Suspense fallback={<MoviesCardLoading/>}>
    {/* @ts-expect-error */}
                    <MovieCard page={params.page} type="genres" genre={params.genre} />
            </Suspense>
  </main>
</div>
    )
}