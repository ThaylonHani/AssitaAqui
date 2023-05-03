import { Suspense } from "react";
import { MovieCard } from "./MovieCard";
import { MoviesCardLoading } from "./MoviesCardLoading";



interface MovieCardProps {
  page?: string;
}


export async function  MoviesCard({page} : MovieCardProps ) {
    

  return (

    
    <Suspense fallback={<MoviesCardLoading/>}>
                {/* @ts-expect-error */}
       <MovieCard page={page} />
        </Suspense>
       
    
  );
}
