import Image from "next/image"
import Link from "next/link"

interface MovieCreditsIdProps {
    params: {
        movieId : string
    }
}

interface PersonProps {
    name: string,
    id: string,
    profile_path: string,
    department?: string,
    job? : string,
}

export default async function MovieCreditsId({ params }: MovieCreditsIdProps) {


    const [cast, crew] = await Promise.all([
        fetch(`https://api.themoviedb.org/3/movie/${params.movieId}/credits?api_key=adac8d4171d83cc9b360671f9f57aee6`).then((res) => res.json()).then((res) => res.cast),
        fetch(`https://api.themoviedb.org/3/movie/${params.movieId}/credits?api_key=adac8d4171d83cc9b360671f9f57aee6`).then((res) => res.json()).then((res) => res.crew),
    ]
    )


    return (
        <div id="credit" className="p-2 sm:flex justify-around items-baseline relative">

                <Link href={`/movie/${params.movieId}`} className="w-fit sm:absolute top-0 left-0">
            <p className="border-[#d9c2ad] border-l border-b p-2 w-fit rotate-45 m-2  hover:border-red-600 transition-all duration-150" />
                </Link>
            <section className="flex flex-col gap-4 p-2 sm:w-fit sm:justify-start">
                <h1  className="text-2xl">
                    Cast:
                </h1>
                {cast.map((person: PersonProps) => {
                    return (
                        <Link href={`/person/${person.id}`} className="flex gap-4 w-1/2 self-center items-center text-left sm:self-start sm:w-full hover:scale-105 transition-all ease-out  ">
{person.profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                        alt={`foto de ${person.name}`}
                        className="w-16 min-w-[4rem] max-w-[4rem]  rounded-lg"
                      />
                    ) : (
                      <Image
                        src='/personIcon.svg'
                        alt={`foto de ${person.name}`}
                        className="w-16 min-w-[4rem] max-w-[4rem] rounded-lg bg-[#D9C2AD]"
                        width={64}
                        height={64}
                      />
                    )}                              <h1 className="">
                                {person.name}
                            </h1>

                        </Link>
                    )
                })}
            </section>

            <section className="flex flex-col gap-4 p-2 sm:w-fit sm:justify-start ">
                <h1  className="text-2xl">
                    Crew:
                </h1>

                <div className="flex flex-col gap-4 p-2">
                    <h1 className="text-lg font-bold"> 
                        Art:
                    </h1>
                    {crew.map((person: PersonProps) => person.department == "Art" ?
                        
                    <Link href = {`/person/${person.id}`} className="flex gap-4 w-1/2 self-center items-center text-left sm:self-start sm:w-full hover:scale-105 transition-all ease-out   ">
{person.profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                        alt={`foto de ${person.name}`}
                        className="w-16 rounded-lg"
                      />
                    ) : (
                        <Image
                        src='/personIcon.svg'
                        alt={`foto de ${person.name}`}
                        className="w-16 rounded-lg bg-[#D9C2AD]"
                        width={64}
                        height={64}
                      />
                            )}
                            <section >
                            <h1 className="">
                                {person.name}
                            </h1>
                            <p className="text-xs text-left">
                                {person.job}
                            </p>
                          </section>

                        </Link>
                    
                        : ''
                    )}
                </div>

                <div className="flex flex-col gap-4 p-2">
                    <h1 className="text-lg font-bold"> 
                        Camera:
                    </h1>
                    {crew.map((person: PersonProps) => person.department == "Camera" ?
                        
                    <Link href = {`/person/${person.id}`} className="flex gap-4 w-1/2 self-center items-center text-left sm:self-start sm:w-full hover:scale-105 transition-all ease-out  ">
{person.profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                        alt={`foto de ${person.name}`}
                        className="w-16 rounded-lg"
                      />
                    ) : (
                        <Image
                        src='/personIcon.svg'
                        alt={`foto de ${person.name}`}
                        className="w-16 rounded-lg bg-[#D9C2AD]"
                        width={64}
                        height={64}
                      />
                    )}                              <section >
                            <h1 className="">
                                {person.name}
                            </h1>
                            <p className="text-xs text-left">
                                {person.job}
                            </p>
                          </section>

                        </Link>
                    
                        : ''
                    )}
                </div>

                <div className="flex flex-col gap-4 p-2">
                    <h1 className="text-lg font-bold"> 
                        Crew:
                    </h1>
                    {crew.map((person: PersonProps) => person.department == "Crew" ?
                        
                    <Link href = {`/person/${person.id}`} className="flex gap-4 w-1/2 self-center items-center text-left sm:self-start sm:w-full hover:scale-105 transition-all ease-out  ">
{person.profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                        alt={`foto de ${person.name}`}
                        className="w-16 rounded-lg"
                      />
                    ) : (
                        <Image
                        src='/personIcon.svg'
                        alt={`foto de ${person.name}`}
                        className="w-16 rounded-lg bg-[#D9C2AD]"
                        width={64}
                        height={64}
                      />
                    )}                              <section >
                            <h1 className="">
                                {person.name}
                            </h1>
                            <p className="text-xs text-left">
                                {person.job}
                            </p>
                          </section>

                        </Link>
                    
                        : ''
                    )}
                </div>

                <div className="flex flex-col gap-4 p-2">
                    <h1 className="text-lg font-bold"> 
                        Directing:
                    </h1>
                    {crew.map((person: PersonProps) => person.department == "Directing" ?
                        
                    <Link href = {`/person/${person.id}`} className="flex gap-4 w-1/2 self-center items-center text-left sm:self-start sm:w-full  hover:scale-105 transition-all ease-out ">
{person.profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                        alt={`foto de ${person.name}`}
                        className="w-16 rounded-lg"
                      />
                    ) : (
                      <Image
                        src='/personIcon.svg'
                        alt={`foto de ${person.name}`}
                        className="w-16 rounded-lg bg-[#D9C2AD]"
                        width={64}
                        height={64}
                      />
                    )}                              <section >
                            <h1 className="">
                                {person.name}
                            </h1>
                            <p className="text-xs text-left">
                                {person.job}
                            </p>
                          </section>

                        </Link>
                    
                        : ''
                    )}
                </div>

                <div className="flex flex-col gap-4 p-2">
                    <h1 className="text-lg font-bold"> 
                        Editing:
                    </h1>
                    {crew.map((person: PersonProps) => person.department == "Editing" ?
                        
                    <Link href = {`/person/${person.id}`} className="flex gap-4 w-1/2 self-center items-center text-left sm:self-start sm:w-full hover:scale-105 transition-all ease-out  ">
{person.profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                        alt={`foto de ${person.name}`}
                        className="w-16 rounded-lg"
                      />
                    ) : (
                      <Image
                        src='/personIcon.svg'
                        alt={`foto de ${person.name}`}
                        className="w-16 rounded-lg bg-[#D9C2AD]"
                        width={64}
                        height={64}
                      />
                    )}                              <section >
                            <h1 className="">
                                {person.name}
                            </h1>
                            <p className="text-xs text-left">
                                {person.job}
                            </p>
                          </section>

                        </Link>
                    
                        : ''
                    )}
                </div>

                <div className="flex flex-col gap-4 p-2">
                    <h1 className="text-lg font-bold"> 
                        Production:
                    </h1>
                    {crew.map((person: PersonProps) => person.department == "Production" ?
                        
                    <Link href = {`/person/${person.id}`} className="flex gap-4 w-1/2 self-center items-center text-left sm:self-start sm:w-full hover:scale-105 transition-all ease-out  ">
{person.profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                        alt={`foto de ${person.name}`}
                        className="w-16 rounded-lg"
                      />
                    ) : (
                      <Image
                        src='/personIcon.svg'
                        alt={`foto de ${person.name}`}
                        className="w-16 rounded-lg bg-[#D9C2AD]"
                        width={64}
                        height={64}
                      />
                    )}                              <section >
                            <h1 className="">
                                {person.name}
                            </h1>
                            <p className="text-xs text-left">
                                {person.job}
                            </p>
                          </section>

                        </Link>
                    
                        : ''
                    )}
                </div>

                <div className="flex flex-col gap-4 p-2">
                    <h1 className="text-lg font-bold"> 
                        Sound:
                    </h1>
                    {crew.map((person: PersonProps) => person.department == "Sound" ?
                        
                    <Link href = {`/person/${person.id}`} className="flex gap-4 w-1/2 self-center items-center text-left sm:self-start sm:w-full hover:scale-105 transition-all ease-out  ">
{person.profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                        alt={`foto de ${person.name}`}
                        className="w-16 rounded-lg"
                      />
                    ) : (
                      <Image
                        src='/personIcon.svg'
                        alt={`foto de ${person.name}`}
                        className="w-16 rounded-lg bg-[#D9C2AD]"
                        width={64}
                        height={64}
                      />
                    )}                              <section >
                            <h1 className="">
                                {person.name}
                            </h1>
                            <p className="text-xs text-left">
                                {person.job}
                            </p>
                          </section>

                        </Link>
                    
                        : ''
                    )}
                </div>

                <div className="flex flex-col gap-4 p-2">
                    <h1 className="text-lg font-bold"> 
                        Visual Effects:
                    </h1>
                    {crew.map((person: PersonProps) => person.department == "Visual Effects" ?
                        
                    <Link href = {`/person/${person.id}`} className="flex gap-4 w-1/2 self-center items-center text-left sm:self-start sm:w-full  hover:scale-105 transition-all ease-out ">
{person.profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                        alt={`foto de ${person.name}`}
                        className="w-16 rounded-lg"
                      />
                    ) : (
                      <Image
                        src='/personIcon.svg'
                        alt={`foto de ${person.name}`}
                        className="w-16 rounded-lg bg-[#D9C2AD]"
                        width={64}
                        height={64}
                      />
                    )}                              <section >
                            <h1 className="">
                                {person.name}
                            </h1>
                            <p className="text-xs text-left">
                                {person.job}
                            </p>
                          </section>

                        </Link>
                    
                        : ''
                    )}
                </div>

                <div className="flex flex-col gap-4 p-2">
                    <h1 className="text-lg font-bold"> 
                        Writing:
                    </h1>
                    {crew.map((person:PersonProps) => person.department == "Writing" ?
                        
                    <Link href = {`/person/${person.id}`} className="flex gap-4 w-1/2 self-center items-center text-left sm:self-start sm:w-full hover:scale-105 transition-all ease-out  ">
                {person.profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                        alt={`foto de ${person.name}`}
                        className="w-16 rounded-lg"
                      />
                    ) : (
                      <Image
                        src='/personIcon.svg'
                        alt={`foto de ${person.name}`}
                        className="w-16 rounded-lg bg-[#D9C2AD]"
                        width={64}
                        height={64}
                      />
                    )}                            <section >
                            <h1 className="">
                                {person.name}
                            </h1>
                            <p className="text-xs text-left">
                                {person.job}
                            </p>
                          </section>

                        </Link>
                    
                        : ''
                    )}
                </div>
                
            </section>
            <a href="#credit" className="absolute right-0 bottom-0">
            <p  className="p-2 m-2 w-fit h-fit ml-auto rotate-45 border-l-2 border-t-2 hover:border-amber-400 transition-all duration-150 "/>
            </a>


        </div>
    )
}