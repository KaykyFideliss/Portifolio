"use client"
import { HiChevronRight } from "react-icons/hi2"
import { SiGamemaker, SiAseprite } from "react-icons/si"
import { motion } from "framer-motion"
import { Particles } from "../components/Particles";
import { useState } from "react"; // <-- Move para dentro
import { IoLogoCss3, IoMdClose } from "react-icons/io";
import { FaHtml5, FaJs, FaBootstrap } from "react-icons/fa";
import { SiScrollreveal } from "react-icons/si";


import { SiArduino } from "react-icons/si";
// import Function from "../components/Function";

const ProjectDetail = () => {
  const [isOpen, setIsOpen] = useState(false); // <-- dentro do componente

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
            Acqualife
          </span>
        </nav>

        {/* Título e texto */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h1 className="text-4xl font-bold text-white font-poppins">
            Acqualife
          </h1>
          <p className="text-gray-300 text-base text-justify tracking-tight font-poppins leading-relaxed">
           Projeto desenvolvido no âmbito do PIBIC (Programa Institucional de Bolsas de Iniciação Científica), onde criei um sistema automatizado com Arduino para monitoramento ambiental.
          </p>
           <p className="text-gray-300 text-base text-justify tracking-tight font-poppins leading-relaxed">
            O protótipo realiza a medição de temperatura, níveis de CO₂ e luminosidade, além de detectar gases tóxicos, inflamáveis e fumaça. Em situações de risco, o sistema aciona um alarme sonoro e envia notificações por SMS via módulo GSM, além de exibir os dados em um display LCD.</p>
            
            <p>A aplicação é voltada para residências, empresas e escolas, promovendo tanto a segurança preventiva quanto a educação ambiental.</p>
        </div>

        {/* Vídeo normal */}

        <div className="relative justify-center flex mt-10 z-auto">
          {/* Vídeo normal */}
          <div className="relative justify-center  flex mt-10 z-auto" >
            <video
              loop
              autoPlay
              muted
              preload="auto"
              playsInline
              onClick={() => setIsOpen(true)}
              className="rounded-xl shadow-lg w-full max-w-2xl cursor-pointer"
            >
              <source src="" type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>

          </div>
        </div>

        {/* Modal */}
        <div className="relative z-auto">
          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
              <div className="relative w-full max-w-5xl">
                {/* Botão fechar absoluto */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-white text-3xl bg-[#070707] rounded-full p-1 opacity-70 z-50"
                >
                  <IoMdClose />
                </button>


                {/* Vídeo expandido - REMOVI ISSO PORQUE ESTOU UTILIZANDO VIDEO DIRTETO DO YT  */}
                <div className="rounded-xl shadow-lg w-full aspect-video">
                  {/* Vídeo expandido */}
                  <video
                    loop
                    autoPlay
                    muted
                    preload="auto"
                    playsInline
                    className="rounded-xl shadow-lg w-full"
                  >
                    <source src="/video/E.D-video.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeo.
                  </video>
                </div>

              </div>
            </div>
          )}
        </div>
        {/* Stacks */}
        <div className="mt-5">
          <div className=" text-center  z-10 ">
            <h2 className="text-3xl  text-white font-poppins text-center pt-10">
              Stacks Utilizadas
            </h2>
            <p className="pb-10 text-xs font-poppins text-[#00aaff] opacity-90">- Front-end - </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3  gap-12 place-items-center">
            <div className="flex flex-col items-center">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://html.spec.whatwg.org/multipage"
              >
                <div className="flex justify-center">
                  <FaHtml5 className="text-[80px] mb-2 hover:text-orange-600" />
                </div>
                <span className="font-poppins text-xl text-center ml-4 ">HTML</span>
              </motion.a>
            </div>

            <div className="flex flex-col items-center ">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.w3.org/Style/CSS/Overview.en.html"
                target="_blank"
              >
                <div className="flex justify-center">
                  <IoLogoCss3 className="text-[80px] mb-2  hover:text-blue-400" />
                </div>
                <span className="font-poppins text-xl ml-5 ">CSS</span>
              </motion.a>
            </div>

            <div className="flex flex-col items-center">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.aseprite.org"
                target="_blank"
              >
                <div className="flex justify-center">
                  <FaJs className="text-[80px] mb-2 hover:text-yellow-400" />
                </div>
                <span className="font-poppins text-xl ml-8">JS</span>
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className=" text-center  z-10 ">
            <h2 className="text-2xl  pt-5 pb-10 text-white font-poppins text-center ">
              Frameworks e Bibliotecas
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2  place-items-center">
            <div className="flex flex-col items-center">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://getbootstrap.com"
                target="_blank"
              >
                <div className="flex justify-center">
                  <FaBootstrap className="text-[80px] mb-2 text-white hover:text-purple-600" />
                </div>
                <span className="font-poppins text-xl text-center ml-2 ">Bootstrap</span>
              </motion.a>
            </div>

            <div className="flex flex-col items-center ">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://scrollrevealjs.org"
                target="_blank"
              >
                <div className="flex justify-center hover:text-pink-500">
                  <SiScrollreveal className="text-[80px] mb-2" />
                </div>
                <span className="font-poppins text-xl ">
                  ScrollReveal
                </span>
              </motion.a>
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default ProjectDetail;
