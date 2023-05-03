import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import Genres from '@/components/Genres'
import { MoviesCard } from '@/components/MoviesCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header />
      <main className="">

      <Genres />
                {/* @ts-expect-error */}
        <MoviesCard/>
      </main>
    </div>
  )
}
