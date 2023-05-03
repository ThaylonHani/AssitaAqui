import { MovieCard } from "@/components/MovieCard";
import { MoviesCardLoading } from "@/components/MoviesCardLoading";
import { Suspense } from "react";

interface PageIdProps {
    params: {
        page: string
    } 
}

export default function PageId({params} : PageIdProps ) {

    return (
        <div>
            
            <main className="">
                <Suspense fallback={<MoviesCardLoading/>}>
        {/* @ts-expect-error */}
                <MovieCard page={ params.page } />
                </Suspense>
      </main>
    </div>
    )
}