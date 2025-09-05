  import { FaLinkedin, FaInstagram } from "react-icons/fa";
  import { FiGithub } from "react-icons/fi";
  import { AiOutlineLinkedin } from "react-icons/ai";

  const Hero = () => {
    return (
      <main className="flex items-center justify-center h-screen text-white">
        <div className="text-center">
          {/* Texto de apresentação */}
          <p className="text-sm font-subtittle text(length:--font-size-hero-subtittle) md:text-lg font-syncopate pb-3 ">Opa! Meu nome é</p>
        <h1 className="text-6xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-syncopate"> Fidelis</h1>

        {/* Ícones de redes sociais */}
          <div className="flex justify-center gap-6 mt-6 text-2xl">
            <a href="https://www.linkedin.com/in/kaykyfidelis" target="_blank" rel="noreferrer" className="z-10 relative transition-colors hover:text-[#00aaff]">
              <AiOutlineLinkedin />
            </a>
            <a href="https://github.com/KaykyFideliss" target="_blank" rel="noreferrer" className="z-10 relative transition-colors hover:text-[#00aaff]">
              <FiGithub />
            </a>
            <a href="https://www.instagram.com/fidelizx.74" target="_blank" rel="noreferrer" className="z-10 relative transition-colors hover:text-[#00aaff] ">
              <FaInstagram />
            </a>
          </div>

          {/* Seta para baixo */}
          <a href="#about" 
            onClick={(e) => { e.preventDefault(); document.getElementById("about").scrollIntoView({ behavior: "smooth" });}} // Suaviza a rolagem
             className="mt-10 animate-bounce text-4xl ">
            <i className="bx bx-chevron-down hover:text-[#00aaff] animate-bounce mt-4"></i>
          </a>
        </div>
      </main>
    );
  };

  export default Hero;
