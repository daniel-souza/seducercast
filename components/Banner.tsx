import Image from "next/image"

export default function Banner(props: any) {
  return (
    <div className="flex items-center flex-col justify-center text-justify gap-4 bg-slate-900">
      <div className="flex items-center justify-center flex-col">
        <Image
          className="object-cover"
          height={props.height || 50}
          width={props.width || 50}
          alt="Logo"
          src={props.src || "/Seducer.svg"}
        />

        <p className="text-2xl font-bold text-center text-white">
          {props.message || "Lives e Podcasts sobre sedução e relacionamentos todo sábado às 14h, no Youtube"}
        </p>
      </div>
      {/* <hr className="w-full border-red-300 border-2 mt-5 mb-5" /> */}

      <div className="flex items-center justify-center flex-col bg-blue-800 p-10 mb-2">
        <p className="m-2  lg:w-1/2 bg-slate-500 lg:rounded-lg p-2 mt-5 md:mt-2 text-white font-bold text-justify place-self-start">
          Você está cansado(a) de encontrar pessoas superficiais, ser tomado(a) pela ansiedade ou ter relacionamentos que acabam, deixando feridas emocionais? Então seja
          bem-vindo(a) ao {" "}
          <span className="underline text-red-300 decoration-4 decoration-red-300">
            SeducerCast
          </span>
          ! Nós oferecemos uma abordagem prática baseada em estudos e evidências para ajudá-lo(a) a aprimorar suas habilidades de sedução.
        </p>
        <p className="m-2 lg:w-1/2 bg-slate-500 lg:rounded-lg p-2 mt-5 md:mt-2 text-white font-bold text-justify place-self-end">
          Aqui você pode se tornar uma pessoa mais influente e confiante, aumentar as suas habilidades de conquista, resgatar relacionamentos mal resolvidos ou até mesmo construir relacionamentos saudáveis. Se é isso tudo que você procura, então você está no lugar certo! Vamos juntos nesse processo de autoconhecimento e autoconquista!
        </p>
      </div>
      {/* <hr className="w-full border-red-300 border-2 mt-5 mb-10" /> */}
    </div>
  )
}