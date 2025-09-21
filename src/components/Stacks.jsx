import React from 'react'
import { CardHoverEffect } from './CardHoverEffect'
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { SiNextdotjs, SiTailwindcss, SiNodedotjs, SiTypescript,SiPhp , SiMysql } from "react-icons/si";
import { FaBootstrap, FaPython,FaGitAlt,FaGithub   } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";


const Stacks = () => {
  const stacks = [
    {
      icon: <IoLogoHtml5 className="text-orange-500 text-5xl" />,
      title: "HTML5",
      description: "Linguagem de marcação para estruturação de páginas web.",
    },
    {
      icon: <IoLogoCss3 className="text-blue-500 text-5xl" />,
      title: "CSS3",
      description: "Linguagem de estilo para design e layout web.",
    },
    {
      icon: <IoLogoJavascript className="text-yellow-500 text-5xl" />,
      title: "JavaScript",
      description: "Linguagem de programação para web interactiva.",
    },
    {
      icon: <IoLogoReact className="text-cyan-400 text-5xl" />,
      title: "React",
      description: "Biblioteca JavaScript para interfaces de usuário.",
    },
    {
      icon: <FaBootstrap  className="text-purple-600 text-5xl" />,
      title : "Bootstrap",
      description: "Framework React para aplicações full-stack.",
    },
    {
      icon: <SiTailwindcss className="text-cyan-300 text-5xl" />,
      title: "Tailwind CSS",
      description: "Framework CSS utilitário para design rápido.",
    },
    {
      icon: <SiPhp  className="text-purple-500 text-5xl" />,
      title: "PHP",
      description: "Linguagem de marcação para estruturação de páginas web.",
    },
    {
      icon: <SiMysql  className="text-orange-600 text-5xl w-44 h-16" />,
      title: "MySQL",
      description: "Banco de dados relacional popular.",
    },
    {
      icon: <FaPython  className="text-yellow-500 text-5xl " />,
      title: "Python",
      description: "Linguagem de marcação para estruturação de páginas web.",
    },

    
     {
      icon: <FaGitAlt   className="text-orange-800 text-5xl " />,
      title: "Git",
      description: "Linguagem de marcação para estruturação de páginas web.",
    },
     {
      icon: <FaGithub   className="text-white text-5xl " />,
      title: "Github",
      description: "Linguagem de marcação para estruturação de páginas web.",
    },
  
        
  ];

  return (
    <section
      id="stacks"
      className="flex w-full min-h-screen mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-transparent"
    >
      <div className="w-full">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ amount: 0.5 }}
          
          className="text-5xl font-bold text-[#FFFFff] font-syncopate">
            MINHAS STACKS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ amount: 0.5 }}
           className="text-sm text-center text-gray-100 font-poppins p-2xl pb-10">
            Cada stack apresentada é um marco na minha trajetória de aprendizado contínuo, representando não apenas ferramentas, mas experiências que moldaram minha visão sobre desenvolvimento e design.
          </motion.p>
        </div>
        
        <CardHoverEffect items={stacks} />
      </div>
    </section>
  )
}

export default Stacks