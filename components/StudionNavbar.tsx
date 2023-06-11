import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

function StudionNavbar(props: any) {
  return (
    <div>
        <div className="flex items-center justify-between p-5">
            <Link href="/" className="text-[#F7AB0A] flex items-center">
                <ArrowUturnLeftIcon className="h-6 w-6 mr-2" />
                Voltar para a página inicial
            </Link>

            <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#F7AB0A]">
              <Image
                width={40}
                height={40}
                className="w-40 object-contain"
                alt="Logo"
                src="/seducerlogo.svg"
              />
            </div>
        </div>

        <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudionNavbar;