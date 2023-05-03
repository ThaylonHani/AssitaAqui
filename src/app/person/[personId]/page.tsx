import { MovieListLoading } from "@/components/MovieListLoading";
import { MoviePersonCredits } from "@/components/MoviePersonCredits";
import Link from "next/link"
import { Suspense } from "react"

export default async function PersonId({params} : {params: {personId : string}}){

    const person = await fetch(`https://api.themoviedb.org/3/person/${params.personId}?api_key=adac8d4171d83cc9b360671f9f57aee6`).then((res) => res.json())

    return (
        <>
        <section className="flex flex-col items-center text-center  ">
               <div className="flex flex-col items-center text-center sm:flex-row w-full ">
               <div className="flex flex-col justify-center items-center sm:hidden">
                <h2 className="text-2xl ">
                        {person.name}
                </h2>
                <ul className="flex gap-2 p-4  w-10/12 justify-center sm:hidden  ">
                    {
                        person.birthday ?  <li className="border-2 border-[#A67F68] p-1 rounded-lg ">
                        {person.birthday}
                    </li> : ''
                           }
                           {person.deathday ?  <li className="border-2 border-[#A67F68] p-1 rounded-lg ">
                                {person.deathday}
                            </li> : ''}
                    </ul>
                    </div>
                <Suspense fallback={<section className='flex p-4 justify-center items-center m-4 rounded-lg w-64 select-none'>
                    <p className="p-4 w-fit h-fit rounded-full ">

                    </p>
                </section>}>
                        <section className="flex justify-center items-center m-4 w-full  sm:w-2/5">
                        <img src={`https://image.tmdb.org/t/p/original${person.profile_path}`} alt="" className="  rounded-lg w-64   select-none " />
                        </section>
                    </Suspense>

                <div className="flex flex-col justify-around  text-center items-center w-full  h-min">
                        <section className="flex flex-col items-center">
                        <h2 className="text-2xl hidden sm:block  ">
                        {person.name}
                        </h2>
                        <ul className="hidden gap-2 p-4  w-10/12 justify-center  sm:flex  ">
                    {
                        person.birthday ?  <li className="border-2 border-[#A67F68] p-1 rounded-lg ">
                        {person.birthday}
                    </li> : ''
                           }
                           {person.deathday ?  <li className="border-2 border-[#A67F68] p-1 rounded-lg ">
                                {person.deathday}
                            </li> : ''}
                </ul>
                    </section>
                <p className="w-4/5  text-center max-h-48 overflow-auto  ">
                  {person.biography}
                </p>
                </div>  
               </div>
                <Suspense fallback={<MovieListLoading/>}>
                {/* @ts-expect-error */}
                <MoviePersonCredits personId={params.personId} />
                </Suspense>
        </section>
       
    </>
    )
}