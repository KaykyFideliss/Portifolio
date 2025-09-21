import { motion, AnimatePresence } from "framer-motion";


const AboutMe = () => {
  return (
    <section id="about"className="flex w-full min-h-screen mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-transparent" >
      <div className="w-full">
        {/* Título centralizado Motion: vindo de cima  */}
        <motion.div
         initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ amount: 0.5 }} 
            className="text-center mb-12">
          <h2 
           
          className="text-5xl font-bold text-[#FFFFff] font-syncopate">
            SOBRE MIM
          </h2>
        </motion.div>

        {/* Container com texto e foto lado a lado */}
      <div className="flex flex-col lg:flex-row items-center gap-y-6 lg:gap-x-8 text-black p-8 rounded-2xl shadow-lg ">

          {/* Foto */}
          <motion.div
         initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ amount: 0.7 }} 
           className="flex-1 flex justify-center">
            <img
              src="image/kayky.png"
              alt="Foto de Kayky"
               className="w-auto h-auto rounded-2xl shadow-xl lg:w-96 lg:h-96 object-cover"
/>
                  </motion.div>

          {/* Texto */}
          <div className="flex-1 text-center md:text-center lg:text-justify">
             <motion.h3
         initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ amount: 0.7 }} 
            className=" pt-8 text-3xl font-semibold mb-4 text-white font-syncopate">
              Olá, eu sou Kayky
            </motion.h3>
            <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ amount: 0.5 }}
            className="text-lg leading-relaxed text-white font-poppins text-justify ">
              Olá! Me chamo Kayky Fidelis, tenho 17 anos e atualmente estudo na
              FUNEC Riacho, onde estou concluindo o último ano do curso Técnico
              em Informática integrado ao ensino médio. </motion.p>
              <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ amount: 0.5 }}
            className="text-lg leading-relaxed text-white font-poppins text-justify pt-5">
              Sou apaixonado por tecnologia e desenvolvimento de software,
              sempre buscando aprender mais sobre programação, desenvolvimento
              web e as novidades do mundo tech. 
              </motion.p>
              <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ amount: 0.5 }}
            className="text-lg leading-relaxed text-white font-poppins text-justify pt-5">
              Estou dando meus primeiros passos tanto no Front-end quanto no
              Back-end, com o objetivo de me tornar um desenvolvedor Fullstack.
              Já estudo linguagens como HTML, CSS, JavaScript, C++, Python e
              muitas outras tecnologias.
              </motion.p>
              <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ amount: 0.5 }}
            className="text-lg leading-relaxed text-white font-poppins text-justify pt-5">
              Recentemente, tenho me dedicado a React e Tailwind CSS, criando
              projetos e explorando boas práticas de desenvolvimento moderno.
              Meu objetivo é continuar evoluindo na área de TI, seja na
              faculdade ou já entrando no mercado de trabalho, sempre em busca
              de novos desafios.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
