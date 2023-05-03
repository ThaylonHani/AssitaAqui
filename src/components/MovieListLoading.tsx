export function MovieListLoading() {
    return (
        <ul className="flex gap-4 p-4 w-11/12 self-center overflow-auto mx-auto  align-middle border border-[#A67F68] rounded-md " >
                                     
                                     <MovieListSkeleton/>
                                     <MovieListSkeleton/>
                                     <MovieListSkeleton/>
                                     <MovieListSkeleton/>
                                     <MovieListSkeleton/>
                    
       </ul>
    )
}

export function MovieListSkeleton() {
    return (
        <section className="flex p-2 flex-col items-center justify-between text-center gap-2 animate-pulse">
                     
                <h3 className="w-32 p-2 bg-slate-200  rounded-lg " />
                <p className="flex justify-center items-center w-36 max-h-[14rem]  min-h-[14rem] rounded-lg min-w-[9rem] max-w-[9rem] bg-[#a67f68] opacity-60">
                    <label className="p-4 w-fit h-fit border-2 border-white rounded-full  border-l-[#40363c] animate-spin"/>

                     </p>
                
                    </section>       
    )
}