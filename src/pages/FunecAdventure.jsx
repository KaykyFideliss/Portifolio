"use client"
import { HiChevronRight } from "react-icons/hi2"
import { SiGamemaker, SiAseprite } from "react-icons/si"
import {motion} from "framer-motion"
import { Particles } from "../components/Particles";


const ProjectDetail = () => {
  return (
    <div className="bg-[#020202] text-white min-h-screen z-0">
        <Particles
    className="absolute top-0 left-0 w-full h-full "
    quantity={100}
    color="#0077ff"
    size={0.5}
    staticity={50}
    ease={50}
  />
      <div className="max-w-5xl mx-auto px-6 py-10 lg:px-12 lg:py-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white flex-wrap mb-8">
          <div className="cursor-pointer">
            <button
              onClick={() => window.history.back()}
              className="font-poppins rounded-md border border-[#00aaff] py-2 px-4 text-center text-base transition-all shadow-sm hover:shadow-lg text-white hover:text-white hover:bg-[#00aaff] focus:text-white focus:bg-slate-800 focus:border-slate-800"
            >
              Voltar
            </button>
          </div>

          <span className="text-gray-500 flex items-center gap-1 whitespace-nowrap">
            Projetos <HiChevronRight />
          </span>

          <span className="font-poppins text-sm text-white whitespace-nowrap sm:text-sm">
            Funec Riacho Adventure
          </span>
        </nav>

        {/* Título e texto */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h1 className="text-4xl font-bold text-white font-poppins">
            Funec Riacho Adventure
          </h1>

          <p className="text-gray-300 text-base text-justify tracking-tight font-poppins leading-relaxed">
            O Funec Riacho Adventure é um jogo digital inovador que combina aprendizado e diversão. 
            Desenvolvido para a Feira de Ciências da FUNEC Riacho, o projeto visa engajar estudantes 
            em atividades lúdicas enquanto reforça conteúdos curriculares de forma interativa.
          </p>
        </div>

        {/* Vídeo */}
        <div className="flex justify-center mt-10 z-50">
          <video   loop
  autoPlay
  muted
  playsInline 
  className="rounded-xl shadow-lg w-full max-w-2xl  z-10">
            <source src="/video/Video-funec-adventure.mp4" type="video/mp4"  />
            Seu navegador não suporta vídeo.
          </video>
        </div>

        {/* Stacks */}
        <div className="mt-5">
          <h2 className="text-3xl font-bold text-white font-poppins text-center mb-10">
            Stacks Utilizadas
          </h2>
          <div className="grid grid-cols-2 gap-0 sm:grid-cols-2 md:grid-cols-2 gap-0 place-items-center">
            <div className="flex flex-col items-center ">
              <motion.a
                  whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onHoverStart={() => console.log('hover started!')}
                          href="https://gamemaker.io/en">
              <SiGamemaker className="text-[80px] mb-2" />
              <span className="font-poppins text-xl">GameMaker</span>
              </motion.a>
            </div>

            <div className="flex flex-col items-center">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onHoverStart={() => console.log('hover started!')}
                          href="https://www.aseprite.org">
              <SiAseprite className="text-[80px] mb-2" />
              <span className="font-poppins text-xl ">Aseprite</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
