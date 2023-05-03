import { MoviesCardLoading } from "@/components/MoviesCardLoading";
import { Suspense } from "react";
import { MovieCard } from "@/components/MovieCard";


export default function TopRated({ params }: {params: {page:string}}) {
    return (
        <div>
            
    <main className="">
        <Suspense fallback={<MoviesCardLoading/>}>
{/* @ts-expect-error */}
        <MovieCard page={ params.page } type="TopRated" />
        </Suspense>
</main>
</div>
    )
}