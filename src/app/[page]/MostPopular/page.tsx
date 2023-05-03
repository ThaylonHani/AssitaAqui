import { MoviesCardLoading } from "@/components/MoviesCardLoading";
import { Suspense } from "react";
import { MovieCard } from "@/components/MovieCard";


export default function MostPopular({params} : {params: {page: string}}) {
    return (
        <div>
            
        <main className="">
            <Suspense fallback={<MoviesCardLoading/>}>
    {/* @ts-expect-error */}
            <MovieCard page={ params.page } type="popular" />
            </Suspense>
  </main>
</div>
    )
}