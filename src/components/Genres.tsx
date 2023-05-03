import Link from "next/link";


import actionImage from "../../public/actionImage.jpg"
import Image from "next/image";

export default function Genres() {

    const genres = [
        "action",
        "adventure",
        "comedy",
        "documentary",
        "drama",
        "fantasy",
        "fiction",
        "mystery",
        "romance",
        "terror",
    ];
    
    const genreId = [
        "28",
        "12",
        "35",
        "99",
        "18",
        "14",
        "878",
        "9648",
        "10749",
        "27",
    ];

    const images = [
        "/actionImage.jpg",
        "/adventureImage.jpg",
        "/comedyImage.jpg",
        "/documentaryImage.jpg",
        "/dramaImage.jpg",
        "/fantasyImage.jpg",
        "/fictionImage.jpg",
        "/mysteryImage.jpg",
        "/romanticImage.png",
        "/terrorImage.png"
      ];


    return (
        <ul className="flex flex-row gap-3 p-3  text-[#D9C2AD] w-4/6 overflow-auto mx-auto text-center items-center mt-12 " >
           {genres.map((genre, index) => {
        return (
          <li className=" items-center relative w-full text-center p-1 justify-center flex">
            <Link href={`/1/genre/${genreId[index]}`} className="z-10 p-1">
              {genre}
            </Link>
            <Image
              src={images[index]}
                    alt=""
                    width={30}
                    height={30}
              className="w-full h-full absolute top-0 -z-10 rounded-md opacity-80 "
            />
          </li>
        );
      })}
        </ul>
    )
}