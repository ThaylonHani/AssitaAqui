import Link from "next/link";

interface MovieCardsProps {
    id?: string;
    title?: string;
    poster_path?: string;
    vote_average?: string;
    release_date?: string;
};

interface pageProp {
  page?: string;
  type?: string;
  genre?: string;
}

export async function MovieCard({ page,type, genre }: pageProp) {
  

  const [listMovies, listMoviesPopular, listMoviesTopRated, listMoviesGenres] = await Promise.all([
    fetch(`https://api.themoviedb.org/3/list/${page   ? page : 1 }?api_key=adac8d4171d83cc9b360671f9f57aee6`).then((res) => res.json()).then((res) => {return res.items}).catch(err => console.error(err)),
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=adac8d4171d83cc9b360671f9f57aee6&page=${page ? page : 1 }`).then((res) => res.json()).then((res) => {return res.results}).catch(err => console.error(err)),
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=adac8d4171d83cc9b360671f9f57aee6&page=${page   ? page : 1 }`).then((res) => res.json()).then((res) => {return res.results}).catch(err => console.error(err)),
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=adac8d4171d83cc9b360671f9f57aee6&page=${page   ? page : 1 }&with_genres=${genre}`).then((res) => res.json()).then((res) => {return res.results}).catch(err => console.error(err)),
  ])
    
    return (
      <div className= "bg-[#A67F68] w-5/5 sm:w-11/12 mx-auto rounded-xl my-2 gap-1 flex flex-col relative" id="MoviesCardsComponent">
         
      <section className="items-center justify-around flex p-4">
         
        <Link href={`/${page ? page == "1" ? "10" : Number(page) - 1 : 1}${type == "movies" ? false : type == "popular" ? "/MostPopular" : type == "TopRated" ? "/TopRated" : type == "genres" ? `/genre/${genre}` : ''  }`} className="hover:opacity-70 ease-linear transition-all duration-150 cursor-pointer" title="Previous page">
          Previous page
        </Link>
       
      <Link href={`/${page ? page == "10" ? "1" : Number(page) + 1 : 2}${type == "movies" ? false : type == "popular" ? "/MostPopular" : type == "TopRated" ? "/TopRated" : type == "genres" ? `/genre/${genre}` : '' }`}  className= "hover:opacity-70 ease-linear transition-all duration-150 cursor-pointer" title="Next page" > Next page </Link>
      </section>

      <section
      className=" justify-center text-center  items-end flex flex-row flex-wrap p-3 gap-4 align-middle"
      key={Math.random()}
    >
  
          {
            type == "movies" ?  listMovies.map(async (movie : MovieCardsProps ) => {
              return  (
                  <Link
                    className="flex flex-col justify-center text-center items-center w-40 max-w-sm gap-1 my-4 mx-2 cursor-pointer hover:scale-105 transition-all ease-out   "
                    href={`/movie/${movie.id}`}
                  >
                    <h1 className="text-xl max-w-[10rem]  p-3">{movie.title}</h1>
                    <section className="relative ">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt="Imagem do filme"
                        className="rounded-xl shadow-black shadow-md select-none"
                      />
                      <p className="absolute bottom-0 text-[#D9C2AD] border-2 bg-[#40363C] border-[#D9C2AD] rounded-2xl w-10 font-bold select-none">
                        {movie.vote_average}
                      </p>
                    </section>
                    <section>
                      <p>{movie.release_date}</p>
                    </section>
                  </Link>
                );
            }) : type == "popular" ?  
            listMoviesPopular.map(async (movie : MovieCardsProps ) => {
              return  (
                  <Link
                    className="flex flex-col justify-center text-center items-center w-40 max-w-sm gap-1 my-4 mx-2 cursor-pointer hover:scale-105 transition-all ease-out   "
                    href={`/movie/${movie.id}`}
                  >
                    <h1 className="text-xl max-w-[10rem]  p-3">{movie.title}</h1>
                    <section className="relative ">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt="Imagem do filme"
                        className="rounded-xl shadow-black shadow-md select-none"
                      />
                      <p className="absolute bottom-0 text-[#D9C2AD] border-2 bg-[#40363C] border-[#D9C2AD] rounded-2xl w-10 font-bold select-none">
                        {movie.vote_average}
                      </p>
                    </section>
                    <section>
                      <p>{movie.release_date}</p>
                    </section>
                  </Link>
                );
            })
                : type == "TopRated" ?
                  listMoviesTopRated.map(async (movie: MovieCardsProps) => {
                  return  (
                      <Link
                        className="flex flex-col justify-center text-center items-center w-40 max-w-sm gap-1 my-4 mx-2 cursor-pointer hover:scale-105 transition-all ease-out   "
                        href={`/movie/${movie.id}`}
                      >
                        <h1 className="text-xl max-w-[10rem]  p-3">{movie.title}</h1>
                        <section className="relative ">
                          <img
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt="Imagem do filme"
                            className="rounded-xl shadow-black shadow-md select-none"
                          />
                          <p className="absolute bottom-0 text-[#D9C2AD] border-2 bg-[#40363C] border-[#D9C2AD] rounded-2xl w-10 font-bold select-none">
                            {movie.vote_average}
                          </p>
                        </section>
                        <section>
                          <p>{movie.release_date}</p>
                        </section>
                      </Link>
                    );
                }) : type == "genres" ? listMoviesGenres.map(async (movie : MovieCardsProps ) => {
                  return  (
                      <Link
                        className="flex flex-col justify-center text-center items-center w-40 max-w-sm gap-1 my-4 mx-2 cursor-pointer hover:scale-105 transition-all ease-out   "
                        href={`/movie/${movie.id}`}
                      >
                        <h1 className="text-xl max-w-[10rem]  p-3">{movie.title}</h1>
                        <section className="relative ">
                          <img
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt="Imagem do filme"
                            className="rounded-xl shadow-black shadow-md select-none"
                          />
                          <p className="absolute bottom-0 text-[#D9C2AD] border-2 bg-[#40363C] border-[#D9C2AD] rounded-2xl w-10 font-bold select-none">
                            {movie.vote_average}
                          </p>
                        </section>
                        <section>
                          <p>{movie.release_date}</p>
                        </section>
                      </Link>
                    );
                })
                     : listMovies.map(async (movie : MovieCardsProps ) => {
                      return  (
                          <Link
                            className="flex flex-col justify-center text-center items-center w-40 max-w-sm gap-1 my-4 mx-2 cursor-pointer hover:scale-105 transition-all ease-out   "
                            href={`/movie/${movie.id}`}
                          >
                            <h1 className="text-xl max-w-[10rem]  p-3">{movie.title}</h1>
                            <section className="relative ">
                              <img
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt="Imagem do filme"
                                className="rounded-xl shadow-black shadow-md select-none"
                              />
                              <p className="absolute bottom-0 text-[#D9C2AD] border-2 bg-[#40363C] border-[#D9C2AD] rounded-2xl w-10 font-bold select-none">
                                {movie.vote_average}
                              </p>
                            </section>
                            <section>
                              <p>{movie.release_date}</p>
                            </section>
                          </Link>
                        );
                    })
                
                
  }

</section>

</div>
     
 )
  
  
    
}