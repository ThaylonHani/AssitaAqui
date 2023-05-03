import Image from "next/image";
import Link from "next/link"

export async function MovieCredit({ id }: { id: string }) {
    
    const MovieCredits = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=adac8d4171d83cc9b360671f9f57aee6`).then(res => res.json()).catch(err => console.error(err));

    const MovieCast = MovieCredits.cast.length > 10 ? MovieCredits.cast.slice(0,10) : MovieCredits.cast;

    return (
        <div className="flex flex-col w-full my-4 gap-4">
            <p className="text-2xl my-2 self-center">
            Movie Credits:
           </p>
            <ul className="flex gap-4 p-4 w-11/12 self-center overflow-auto  align-middle border border-[#A67F68] rounded-md snap-x snap-mandatory " >
            {
                    MovieCast.map((person : {id: string, name: string, profile_path: string}) => {
                    return (
                        <Link href={`/person/${person.id}`} className="flex flex-col items-center justify-between text-center hover:scale-105 transition-all ease-out snap-always snap-center ">
                            <section>
                            <h2 className="w-40 "> {person.name }</h2>                        
                                </section>
                            <section>
                            {person.profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                        alt={`foto de ${person.name}`}
                        className="w-36 rounded-lg max-w-[9rem] min-w-[9rem] select-none"
                      />
                    ) : (
                      <p
                        className="w-36  max-w-[9rem] min-w-[9rem] rounded-lg bg-[#D9C2AD] opacity-50 h-52 p-3 text-black text-center relative select-none "
                                        >
                                          <label htmlFor="" className="absolute left-0 right-0 top-0 bottom-0 m-12">
                                            No image
                                            </label>
                      </p>
                    )}                                </section>
                            
                        </Link>                        
                                )
                            })
                }
                <Link href={`/movie/${id}/credits`} className="self-center ">
                    <h2 className="w-max p-2 border border-[#A67F68] rounded-md">
                    Ver mais
                    </h2>
                </Link>
           </ul>
          
          
        </div>
    )
}