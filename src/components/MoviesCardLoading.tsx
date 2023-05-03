import Link from "next/link";




export function MoviesCardLoading() {
    return (
        <div className= "bg-[#A67F68] w-5/5 mx-auto rounded-xl my-2 gap-4 flex flex-col relative" id="MoviesCardsComponent">
     
      <section className="items-center justify-around flex p-4">
         
        <button className="hover:opacity-70 ease-linear transition-all duration-150 cursor-pointer" title="Previous page">
          Previous page
        </button>
       
      <button className= "hover:opacity-70 ease-linear transition-all duration-150 cursor-pointer" title="Next page" > Next page </button>
      </section>

      <section
        className=" justify-center text-center  items-end flex flex-row flex-wrap p-3 gap-4 align-middle"
        key={Math.random()}
      >
    
           <SkeletonCardMovie/>
           <SkeletonCardMovie/>
           <SkeletonCardMovie/>
           <SkeletonCardMovie/>

  </section>
     
    </div>
    )
}

export function SkeletonCardMovie() {
    return (
        <section
        className="flex flex-col justify-center text-center items-center w-40 max-w-sm gap-1 my-4 mx-2 cursor-pointer hover:scale-105 transition-all ease-out   "
      >
        <h1 className="text-xl w-20 bg-slate-300 opacity-30 p-3 rounded-lg"></h1>
        <section className="relative ">
          <p
            className="rounded-xl shadow-black shadow-md h-[240px] w-[160px] bg-slate-300 opacity-30 "
                  >
          </p>
          <p className="absolute bottom-0 text-[#D9C2AD] border-2 bg-slate-300 opacity-50 border-[#D9C2AD] rounded-2xl w-10 font-bold p-2">
            
          </p>
        </section>
            <label htmlFor="" className="absolute p-4 border-2 border-l-2 border-l-[#a67f68] animate-spin  bg-slate-[#a67f68] opacity-50  rounded-full"/>
        <section>
          <p className="flex w-32 bg-slate-300 opacity-30 p-2 rounded-lg"></p>
            </section>
            
                

      </section>
    )
}