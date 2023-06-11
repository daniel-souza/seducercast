import Image from "next/image"
import Link from "next/link"

import { PlayIcon, AtSymbolIcon } from "@heroicons/react/24/solid"


function Header() {
  return (
    <header className="bg-blue-800 text-white gap-5 w-full max-w-full items-stretch justify-center flex flex-col md:flex-row space-x-2 font-bold px-10 py-5">
        <div className="flex items-center justify-center">
            <Link href='/' className="flex items-center justify-center text-center">
                <Image
                    className='object-cover mr-1 h-auto'
                    height={0}
                    width={50}
                    alt='Logo'
                    src='/Seducer.svg'
                />
                <span className="">SeducerCast</span>
            </Link>
        </div>
        <div className="px-5 py-3 text-sm md:text-base hover:bg-slate-300 hover:text-purple-800 bg-slate-700 text-wite rounded-full text-center">
            <Link href='https://www.youtube.com/seducerCast' className="flex items-center justify-center">
            <PlayIcon className="h-6 w-6 mr-2" /> <span>Inscreva-se  no youtube</span>
            </Link>
        </div>

        <div className="px-5 py-3 text-sm md:text-base hover:bg-slate-300 hover:text-purple-800 bg-slate-700 text-wite rounded-full text-center">
            <Link href='https://www.instagram.com/seducercast' className="flex items-center justify-center">
            <AtSymbolIcon className="h-6 w-6 mr-2" /> <span>Nos acompanhe no Instagram</span>
            </Link>
        </div>
    </header>
  )
}

export default Header