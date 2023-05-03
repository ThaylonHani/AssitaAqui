'use client';

import Link from "next/link";
import { useState } from "react";

export function Header() {

    const [open, setOpen] = useState(false);

    return (
        <header className="bg-[#A67F68] p-2   text-[#0D0D0D] border-b border-white flex justify-between  items-center w-full z-40 fixed top-0">
            <h1 className="font-bold text-2xl">
                <Link href={'/'}>
                MoviesHere
                </Link>
            </h1>

            <button className='flex flex-col gap-[1px] sm:hidden ' onClick={() => setOpen(!open)}>
            <p className={`w-6 h-1  rounded-lg ${open ? 'bg-white' : 'bg-black'} transition-all duration-200 ease-linear `}/>
            <p className={`w-6 h-1  rounded-lg ${open ? 'bg-white' : 'bg-black'} transition-all duration-200 ease-linear`}/>
            </button>

            <ul className={`${open ? 'absolute' : 'hidden'} sm:flex  sm:flex-row sm:justify-end sm:p-0 sm:border-none   flex-col gap-4 border-white border p-4 right-0 top-full z-40 bg-[#A67F68] w-1/2 text-center sm:static  rounded-sm `}>
                <li>
                    <Link href={'/1/MostPopular'} className=" duration-200 transition-all ease-in bg-gradient-to-l bg-no-repeat bg-0 hover:bg-underline bg-left-bottom   from-[#40363c] to-[#b39f91]">
                        Most Popular
                    </Link>
                </li>
                <li>
                    <Link href={'/1/TopRated'} className=" duration-200 transition-all ease-in bg-gradient-to-l bg-no-repeat bg-0 hover:bg-underline bg-left-bottom   from-[#40363c] to-[#b39f91]">
                        Top Rated
                    </Link>
                </li>
            </ul>
        </header>
    )
}