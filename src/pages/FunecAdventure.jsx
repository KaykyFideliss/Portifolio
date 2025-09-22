"use client"

import { useState } from "react"
import { Particles } from "../components/Particles"
import { motion } from "framer-motion"
import { SiGamemaker, SiAseprite } from "react-icons/si"
import { HiChevronRight } from "react-icons/hi2"
import { FaGithub } from "react-icons/fa"
import { FaLink } from "react-icons/fa6"
import { IoMdClose } from "react-icons/io"  // <-- importante

const ProjectDetail = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            FUNEC RIACHO ADVENTURE
          </span>
        </nav>

        {/* Título e texto */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <div className="flex justify-between"> 
            <h1 className="text-4xl font-bold text-white font-poppins">
              FUNEC RIACHO ADVENTURE
            </h1>
            <div className="flex gap-3">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                href="https://github.com/KaykyFideliss/Envirolmental-Disaster-Responsivo"
              >
                <FaLink className="w-8 h-8"/>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                href="https://github.com/KaykyFideliss/Envirolmental-Disaster-Responsivo"
              >
                <FaGithub className="w-8 h-8"/>
              </motion.a>
            </div>
          </div>

          
          <p className="text-gray-300 text-base text-justify tracking-tight font-poppins leading-relaxed">
            O Funec Riacho Adventure é um jogo digital inovador que combina aprendizado e diversão. Desenvolvido especialmente para a Feira de Ciências da FUNEC Riacho, o projeto tem como objetivo engajar os estudantes em atividades lúdicas enquanto reforça conteúdos curriculares de maneira interativa e criativa.
          </p>
          <p className="text-gray-300 text-base text-justify tracking-tight font-poppins leading-relaxed">
            O jogo foi desenvolvido durante o meu primeiro ano do ensino médio integrado ao técnico, utilizando a plataforma GameMaker. Esse projeto representou uma das minhas primeiras experiências reais no desenvolvimento de jogos e foi essencial para consolidar conceitos de lógica de programação, design de gameplay e criação de assets.</p>
          <p className="text-gray-300 text-base text-justify tracking-tight font-poppins leading-relaxed">
            Durante o processo, aprendi a lidar com prazos, resolver bugs de forma criativa e transformar ideias em algo jogável e divertido. Essa experiência foi decisiva para despertar meu interesse pela área de desenvolvimento de software e pela possibilidade de criar soluções que unam tecnologia, educação e entretenimento.
          </p>
        </div>

        {/* Vídeo normal */}
        <div className="relative justify-center flex mt-10 z-auto">
          <video
            loop
            autoPlay
            muted
            preload="auto"
            playsInline
            onClick={() => setIsOpen(true)}
            className="rounded-xl shadow-lg w-full max-w-2xl cursor-pointer"
          >
            <source src="/video/Video-funec-adventure.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        </div>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative w-full max-w-5xl">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white text-3xl bg-[#070707] rounded-full p-1 opacity-70 z-50"
              >
                <IoMdClose />
              </button>

              <div className="rounded-xl shadow-lg w-full aspect-video">
                <video
                  loop
                  autoPlay
                  muted
                  preload="auto"
                  playsInline
                  className="rounded-xl shadow-lg w-full"
                >
                  <source src="/video/Video-funec-adventure.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeo.
                </video>
              </div>
            </div>
          </div>
        )}

        {/* Stacks */}
        <div className="mt-5 text-center z-10">
          <h2 className="text-3xl text-white font-poppins pt-10">Stacks Utilizadas</h2>
          <p className="pb-10 text-xs font-poppins text-[#00aaff] opacity-90">- Front-end -</p>

          <div className="grid grid-cols-2 gap-12 place-items-center">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://gamemaker.io/en"
              className="flex flex-col items-center"
            >
              <SiGamemaker className="text-[80px] mb-2 ml-3"/>
              <span className="font-poppins text-xl text-center ml-4">GameMaker</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.w3.org/Style/CSS/Overview.en.html"
              target="_blank"
              className="flex flex-col items-center"
            >
              <SiAseprite className="text-[80px] mb-2 ml-3"/>
              <span className="font-poppins text-xl ml-5">Aseprite</span>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail;
