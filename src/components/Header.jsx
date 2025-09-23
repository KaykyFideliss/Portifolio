import { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detecta scroll para mudar o background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200); // ativa quando rolar mais de 20px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 64;
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <motion.header
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: "easeOut" }}
  viewport={{ amount: 0.5 }}
  className={`fixed top-0 left-0 w-full h-16 flex justify-center items-center z-40 transition-colors duration-500 ${
    scrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
  }`}
>
      {/* Links Desktop */}
      <div className="hidden md:flex gap-20 items-center">
        <a
          className="text-base tracking-wider transition-colors hover:text-[#00aaff] font-poppins"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          Home
        </a>
        <a
          className="text-base tracking-wider transition-colors hover:text-[#00aaff] font-poppins"
          href="#sobre"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
        >
          Sobre
        </a>
        <a
          className="text-base tracking-wider transition-colors hover:text-[#00aaff] font-poppins"
          href="#project"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("project");
          }}
        >
          Projetos e certificados
        </a>
        <a
          className="text-base tracking-wider transition-colors hover:text-[#00aaff] font-poppins"
          href="#Services"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("Services");
          }}
        >
          Serviço Contratáveis
        </a>
         <a
          className="text-base tracking-wider transition-colors hover:text-[#00aaff] font-poppins"
          href="#stacks"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("stacks");
          }}
        >
         Minhas stacks
        </a>
        
      </div>

      {/* Botão Mobile */}
     <button
  style={{ zIndex: 60 }}
  className="absolute right-4 md:hidden text-[#00aaff] text-3xl"
  onClick={() => setOpen(!open)}
>
  <i className={open ? "bx bx-x" : "bx bx-menu"}></i>
</button>



   {/* Botão Mobile */}


{/* Menu Mobile */}
<AnimatePresence>
  {open && (
    <motion.div
      key="mobile-menu"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-black text-xl z-50"
    >
    {["home", "about", "project", "Services", "stacks"].map((section, index) => (
        <motion.a
          key={section}
          href={`#${section}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.3 + index * 0.1 }}
          className="hover:text-[#00aaff] font-poppins text-white text-2xl"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(section);
            setOpen(false);
          }}
        >
             {section === "home"
      ? "Home"
      : section === "about"
      ? "Sobre"
      : section === "project"
      ? "Projetos e certificados"
      : section === "Services"
      ? "Serviços Contratáveis"
      : "Stacks"}
  </motion.a>
      ))}
    </motion.div>
  )}
</AnimatePresence>

    </motion.header>
  );
};

export default Header;
