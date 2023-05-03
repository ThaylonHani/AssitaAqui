import { MovieCredit } from "@/components/MovieCredit";
import { MovieList } from "@/components/MovieList";
import { MovieListLoading } from "@/components/MovieListLoading";
import Link from "next/link";
import { Suspense } from "react";

interface MovieIdProps {
    params: {
        movieId: string;
    }
}

export default async function MovieId({ params }: MovieIdProps) {
    
    const data = await fetch(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=adac8d4171d83cc9b360671f9f57aee6`).then((res) => res.json()).catch((err) => console.error(err));

    return (
        <>
            <Link href="/" className="absolute ">
                <p className="p-2 m-2 border-l-2 border-b-2 rotate-45 border-white hover:border-red-600 transition-all duration-150 ease-out w-fit "/>                    
            </Link>
            <section className="flex flex-col items-center text-center  sm:flex-row ">
            <h2 className="text-2xl w-10/12 sm:hidden"  >
                            {data.original_title}
                </h2>
                <ul className="flex gap-2 p-4 flex-wrap w-10/12 justify-center sm:hidden  ">
                    {data.genres.map((genre : {name: string}) => {
                        return (
                            <li className="border-2 border-[#A67F68] p-1 rounded-lg ">
                                {genre.name}
                            </li>
                        )
                    })}
                </ul>
                <img src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt="" className="m-4  rounded-lg w-64 select-none" />

                    <div className="flex flex-col justify-around  text-center items-center w-full ">
                    <h2 className="text-2xl hidden sm:block ">
                            {data.original_title}
                    </h2>
                <ul className="gap-2 p-4 flex-wrap w-10/12 justify-center hidden sm:flex  ">
                    {data.genres.map((genre : {name: string}) => {
                        return (
                            <li className="border-2 border-[#A67F68] p-1 rounded-lg ">
                                {genre.name}
                            </li>
                        )
                    })}
                </ul>
                    <p className="w-4/5 max-h-48 overflow-auto text-center  ">
                      {data.overview}
                    </p>
                    </div>                
            </section>
            <Suspense fallback={<MovieListLoading/>} >
            {/* @ts-expect-error */}
            <MovieList id={params.movieId} />
            </Suspense>
            <Suspense fallback={<MovieListLoading/>}>
                    {/* @ts-expect-error */}
            <MovieCredit id={params.movieId} />
            </Suspense>
        </>
    )
}