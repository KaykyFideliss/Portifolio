import React, { useRef } from 'react'
import SpotlightCard from "../components/SpotlightCard";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  // Variantes de animação (blur + subida)
  const fadeUp = {
    hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Ref e controle de visibilidade
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <div>
      <section
        ref={ref}
        className="flex w-full min-h-screen flex-col justify-center items-center"
        id="Services"
      >
        {/* Cabeçalho */}
        <motion.div
          className="w-full max-w-[900px] text-center mb-12 px-4"
          variants={fadeUp}
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 id="contact" className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-syncopate break-words">
            CONTATOS
          </h2>
          <p className="text-zinc-400 mt-4 text-base sm:text-lg">
            Vamos transformar suas ideias em realidade! Entre em contato para discutir como posso ajudar a impulsionar seu projeto com soluções digitais inovadoras.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-4 max-w-[1200px]">

          {/* LINKEDIN */}
          <motion.div
            variants={fadeUp}
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
          >
            <SpotlightCard
              className="custom-spotlight-card bg-transparent border"
              spotlightColor="rgb(47, 170, 255)"
            >
              <a
                href="https://www.linkedin.com/in/kaykyfidelis"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <FaLinkedin className='w-8 h-8' />
                    <h2 className="text-3xl font-bold font-poppins text-white">LINKEDIN</h2>
                  </div>
                  <p className="text-gray-300 mt-2 font-poppins text-sm">
                    Clique aqui para visitar meu perfil no LinkedIn. Estou aberto a conexões profissionais e oportunidades de colaboração em projetos de desenvolvimento web.
                  </p>
                  <br />
                </div>
              </a>
            </SpotlightCard>
          </motion.div>

          {/* WHATSAPP */}
          <motion.div
            variants={fadeUp}
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <SpotlightCard
              className="custom-spotlight-card bg-transparent border"
              spotlightColor="rgb(47, 170, 255)"
            >
              <a
                href="https://wa.me/5531995156342?text=Olá!%20Vim%20do%20seu%20portfólio%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20desenvolvimento%20web."
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <FaWhatsapp className='w-8 h-8' />
                    <h2 className="text-3xl font-bold font-poppins text-white">WHATSAPP</h2>
                  </div>
                  <p className="text-gray-300 mt-2 font-poppins text-sm">
                    Clique aqui para iniciar uma conversa direta comigo no WhatsApp. Estou disponível para discutir suas necessidades de desenvolvimento web e como posso ajudar a transformar suas ideias em realidade.
                  </p>
                </div>
              </a>
            </SpotlightCard>
          </motion.div>

          {/* GMAIL */}
          <motion.div
            variants={fadeUp}
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
          >
            <SpotlightCard
              className="custom-spotlight-card bg-transparent border"
              spotlightColor="rgb(47, 170, 255)"
            >
              <a
                href="mailto:kayky.fid@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <SiGmail className='w-8 h-8' />
                    <h2 className="text-3xl font-bold font-poppins text-white">GMAIL</h2>
                  </div>
                  <p className="text-gray-300 mt-2 font-poppins text-sm">
                    Clique aqui para enviar um e-mail diretamente para mim. Estou disponível para discutir suas necessidades de desenvolvimento web e como posso ajudar a transformar suas ideias em realidade.
                  </p>
                </div>
              </a>
            </SpotlightCard>
          </motion.div>

          {/* GITHUB */}
          <motion.div
            variants={fadeUp}
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            <SpotlightCard
              className="custom-spotlight-card bg-transparent border"
              spotlightColor="rgb(47, 170, 255)"
            >
              <a
                href="https://github.com/KaykyFideliss"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <FaGithub className='w-8 h-8' />
                    <h2 className="text-3xl font-bold font-poppins text-white">GITHUB</h2>
                  </div>
                  <p className="text-gray-300 mt-2 font-poppins text-sm">
                    Clique aqui para visitar meu perfil no GitHub. Explore meus projetos de desenvolvimento web, contribuições para a comunidade open source e veja como aplico minhas habilidades em código.
                  </p>
                </div>
              </a>
            </SpotlightCard>
          </motion.div>

        </div>
      </section>
    </div>
  )
}

export default Contact
