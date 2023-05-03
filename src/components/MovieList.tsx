import Link from "next/link"
import { Suspense } from "react"
import { MovieListLoading } from "./MovieListLoading"

export async function MovieList({id} : {id: string}) {
    const similarMovie = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=adac8d4171d83cc9b360671f9f57aee6`).then((res) => res.json()).then(res => res.results)
    return (
        similarMovie.length > 0 ? <div className="flex flex-col w-full my-4 ">
        <p className="text-2xl my-2 self-center">
        Similar Movies:
       </p>
            
        <ul className="flex gap-4 p-4 w-11/12 self-center overflow-auto  align-middle border border-[#A67F68] rounded-md snap-x snap-mandatory" >
        {
                similarMovie.map((movie : {id: string, title: string, poster_path: string}) => {
                return (
                    <Link href={`/movie/${movie.id}`} className="flex flex-col items-center justify-between text-center hover:scale-105 transition-all ease-out snap-always snap-center  ">
                        <section>
                        <h2 className="w-40 "> {movie.title }</h2>                        
                            </section>
                        <section>
                        {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={`foto de ${movie.title}`}
                    className="w-36 max-h-[14rem] min-h-[14rem] rounded-lg min-w-[9rem] max-w-[9rem] select-none"
                  />
                ) : (
                  <p
                    className="w-36 rounded-lg bg-[#D9C2AD] opacity-50 h-52 p-3 text-black text-center relative select-none  "
                                    >
                                        <label htmlFor="" className="absolute left-0 right-0 top-0 bottom-0 m-12 cursor-pointer">
                                        No image
                                        </label>
                                    </p>
                )}                           </section>
                        
                    </Link>                        
                    
                            )
                        })
            }
       </ul>

      
    </div> : <div className="flex flex-col w-full my-4 ">
        <p className="text-2xl my-2 self-center">
        Similar Movies:
                </p>
                <ul className="flex gap-4 p-4 w-11/12 text-center  mx-auto border border-[#A67F68] rounded-md " >
                        No movies
                </ul>
                </div>
    )
}