import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import ScrollAnimation from './ScrollAnimation';
import { motion } from "framer-motion"

const Hero = () => {

  return (
    <main id="home" className="flex items-center justify-center h-screen text-white">
      <div className="text-center">
        {/* Texto de apresentação */}
        <motion.p 
         initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ amount: 0.5 }}
             className="text-xs font-subtittle text(length:--font-size-hero-subtittle) md:text-lg font-syncopate pb-3 ">
              Opa! Bem-vindo ao meu 
             </motion.p>
      <motion.h1
  initial={{ opacity: 0, y: -60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-syncopate pt-3"
>
  PORTFÓLIO
</motion.h1>


        {/* Ícones de redes sociais */}
        <motion.div
             
         initial={{ opacity: 0, y: -90 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ amount: 0.5 }}

        className="flex justify-center gap-6 mt-6 text-2xl">
          <a href="https://www.linkedin.com/in/kaykyfidelis" target="_blank" rel="noreferrer" className="z-10 relative transition-colors hover:text-[#00aaff]">
            <AiOutlineLinkedin />
          </a>
          <a href="https://github.com/KaykyFideliss" target="_blank" rel="noreferrer" className="z-10 relative transition-colors hover:text-[#00aaff]">
            <FiGithub />
          </a>
          <a href="https://www.instagram.com/fidelizx.74" target="_blank" rel="noreferrer" className="z-10 relative transition-colors hover:text-[#00aaff] ">
            <FaInstagram />
          </a>
        </motion.div>

        {/* Seta para baixo */}
        <motion.a
           initial={{ opacity: 0, y: -50 }}        // começa invisível e acima
          whileInView={{ opacity: 1, y: 0 }}     // desce ao aparecer
          transition={{ duration: 0.8, ease: "easeOut" }}

          href="#about"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("about");
            if (el) {
              const offset = 64; // altura do seu header (h-16)
              const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
          className="mt-10 animate-bounce text-4xl"
        >
          <i className="bx bx-chevron-down hover:text-[#00aaff] animate-bounce mt-4"></i>
        </motion.a>

      </div>
    </main>
  );
};

export default Hero;
