import Genres from "@/components/Genres";
import { Header } from "@/components/Header";


export default function LayoutMoviePage({children} : {children : React.ReactNode}) {
    return (
        <html lang="en">
        <body >
        <Header />
  
        <Genres />
          {children}
        </body>
      </html>
    )
}