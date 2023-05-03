export function MoviePosterSkeleton() {
    return (
        <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-normal ">
            <section className="flex flex-col gap-4 items-center animate-pulse sm:hidden">
                <h2 className="p-2 w-40 rounded-md bg-white opacity-50" />
                <ul className="flex gap-2">
                <li className="p-4 w-12 bg-white opacity-50 rounded-lg" />
                <li className="p-4 w-12 bg-white opacity-50 rounded-lg" />
                </ul>
            </section>
            <p className="m-4 rounded-lg w-64 h-96  max-h-full select-none p-4 bg-[#A67F68] opacity-70 relative  sm:self-start" >
                <label htmlFor="" className="absolute p-4 border-l-2 border-l-[#40363c] animate-spin border-2 border-[#D9C2AD] top-0 bottom-0 left-0 right-0 w-fit m-auto h-fit rounded-full">
                </label>
            </p>
            <div className="flex flex-col justify-between sm:mx-auto ">
            <section className="flex-col gap-4 items-center animate-pulse hidden sm:flex">
                <h2 className="p-2 w-40 rounded-md bg-white opacity-50" />
                <ul className="flex gap-2">
                <li className="p-4 w-12 bg-white opacity-50 rounded-lg" />
                <li className="p-4 w-12 bg-white opacity-50 rounded-lg" />
                </ul>
            </section>
            <section className="animate-pulse p-4 w-72 my-4  bg-white rounded-lg opacity-40 "/>
            </div>
        </div>
    )
}