"use client"
import { HiChevronRight } from "react-icons/hi2"
import { SiMysql } from "react-icons/si"
import { motion } from "framer-motion"
import { Particles } from "../components/Particles";
import { useState } from "react"; // <-- Move para dentro
import { IoLogoCss3, IoMdClose } from "react-icons/io";
import { FaHtml5, FaJs, FaBootstrap ,FaReact, FaPhp} from "react-icons/fa";
import { SiScrollreveal } from "react-icons/si";
// import Function from "../components/Function";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

import { RiTailwindCssFill } from "react-icons/ri";



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
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold text-white font-poppins">
              Acqualife
            </h1>
            <div className=" flex gap-3">
              {/* <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                href="">
                <FaLink className="w-8 h-8" />
              </motion.a> */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"

                href="https://github.com/KaykyFideliss/Acqualife-app-android/tree/main">

                <FaGithub className="w-8 h-8 " />
              </motion.a>
            </div>
          </div>



          <p className="text-gray-300 text-lg text-justify tracking-tight font-poppins leading-relaxed">
            O Acqualife é um sistema web que desenvolvi utilizando React e Tailwind CSS, com o objetivo de monitorar e exibir informações de qualidade da água em tempo real.
          
          </p>
          <p className="text-gray-300 text-lg text-justify tracking-tight font-poppins leading-relaxed">
            O projeto conta com um dashboard dinâmico, onde os dados são obtidos diretamente do banco de dados MySQL, que recebe as informações enviadas por um Arduino responsável pela coleta dos dados físicos.
          </p>
          <p className="text-gray-300 text-lg text-justify tracking-tight font-poppins leading-relaxed">
            Implementei também um sistema de login e autenticação, desenvolvido em PHP, permitindo que cada usuário acesse seu próprio painel personalizado e visualize apenas as informações do seu dispositivo.
          </p>
          <p className="text-gray-300 text-lg text-justify tracking-tight font-poppins leading-relaxed">
            O Acqualife representa a integração completa entre frontend, backend, banco de dados e IoT, demonstrando minhas habilidades em React, Tailwind CSS, PHP, MySQL e comunicação entre hardware e web.
          </p>



        </div>

        <div className="relative justify-center flex mt-10 z-auto ">
          {/* foto normal */}
          <div className="relative justify-center flex mt-10 z-auto " >
            <img src="/image/Acqualife-em-desenvolvimento.png" alt="Foto-acqualife-em-desenvolvimento" className="rounded-lg object-cover" />

          </div>
        </div>

        {/* Stacks */}
        <div className="mt-5">
          <div className=" text-center  z-10 ">
            <h2 className="text-3xl  text-white font-poppins text-center pt-10">
              Stacks Utilizadas
            </h2>
            <p className="pb-10 text-xs font-poppins text-[#00aaff] opacity-90">- Front-end - </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1  gap-12 place-items-center">

          </div>

          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 place-items-center gap-8">
            {/* HTML */}
            <div className="flex flex-col items-center text-center">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://getbootstrap.com"
                target="_blank"
              >
                <div className="flex justify-center">
                  <FaHtml5 className="text-[80px] mb-2 text-white hover:text-orange-600" />
                </div>
                <span className="font-poppins text-xl">HTML</span>
              </motion.a>
            </div>

            {/* CSS */}
            <div className="flex flex-col items-center text-center">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://scrollrevealjs.org"
                target="_blank"
              >
                <div className="flex justify-center">
                  <IoLogoCss3 className="text-[80px] mb-2 hover:text-blue-500" />
                </div>
                <span className="font-poppins text-xl">CSS</span>
              </motion.a>
            </div>

            {/* JS */}
            <div className="flex flex-col items-center text-center">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://scrollrevealjs.org"
                target="_blank"
              >
                <div className="flex justify-center">
                  <FaJs className="text-[80px] mb-2 hover:text-yellow-500" />
                </div>
                <span className="font-poppins text-xl">JS</span>
              </motion.a>
            </div>
          </div>
         </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 place-items-center gap-1 mt-16 mx-10">


            {/* REACT */}
             <div className="flex flex-col items-center text-center">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://react.dev"
                target="_blank"
              >
                <div className="flex justify-center">
                  <FaReact className="text-[80px] mb-2 hover:text-blue-500" />
                </div>
                <span className="font-poppins text-xl">REACT</span>
              </motion.a>
            </div>

            {/* TAILWIND */}
            <div className="flex flex-col items-center text-center">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://tailwindcss.com"
                target="_blank"
              >
                <div className="flex justify-center">
                  <RiTailwindCssFill className="text-[80px] mb-2 hover:text-blue-500" />
                </div>
                <span className="font-poppins text-xl">TAILWIND CSS</span>
              </motion.a>
            </div>
          </div>


        <div className="mt-5">
            {/* Stacks */}
        <div className="mt-5">
          <div className=" text-center  z-10 ">
            <h2 className="text-3xl  text-white font-poppins text-center pt-10">
              Stacks Utilizadas
            </h2>
            <p className="pb-10 text-xs font-poppins text-[#00aaff] opacity-90">- Back end - </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1  gap-12 place-items-center">

          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 place-items-center gap-8">
            {/* PHP */}
            <div className="flex flex-col items-center text-center">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://getbootstrap.com"
                target="_blank"
              >
                <div className="flex justify-center">
                  <FaPhp className="text-[80px] mb-2 text-white hover:text-purple-600" />
                </div>
                <span className="font-poppins text-xl">PHP</span>
              </motion.a>
            </div>

            {/* MYSLQ */}
            <div className="flex flex-col items-center text-center">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://scrollrevealjs.org"
                target="_blank"
              >
                <div className="flex justify-center ">
                  <SiMysql  className="text-[80px] mb-2 hover:text-orange-500" />
                </div>
                <span className="font-poppins text-xl">MYSQL</span>
              </motion.a>
            </div>
          </div>
         </div>
        

        </div>

        <div className=" text-center  z-10 ">
          <h2 className="text-3xl  text-white font-poppins text-center mt-16 pt-10">
            VISAO GERAL DO PROJETO
          </h2>
          <p className="pb-10 text-xs font-poppins text-[#00aaff] opacity-90">- Front-end - </p>

          <div className="flex justify-center items-center ">
  <video
    src="/video/acqualife.mp4"
    autoPlay
    muted
    playsInline
    loop
    className="rounded-lg "
    style={{ maxWidth: "100%", height: "auto" }}
  />
</div>

        </div>



      </div>
    </div>
  )
}

export default ProjectDetail;
