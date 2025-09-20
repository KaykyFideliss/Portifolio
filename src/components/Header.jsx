import { useState } from "react";
import "boxicons/css/boxicons.min.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
   <header className="fixed flex justify-between top-0 left-0 w-full h-16 stify-center items-center bg-black z-50">
      {/* Logo ou Nome */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0">
       
      </h1>

      {/* Links Desktop */}
      <div className="hidden md:flex gap-20 items-center">
        <a className="text-base tracking-wider transition-colors hover:text-[#00aaff] font-poppins" href="#home">Home</a>
        <a className="text-base tracking-wider transition-colors hover:text-[#00aaff]  font-poppins" href="#sobre"
        onClick={(e) => { e.preventDefault(); document.getElementById("about").scrollIntoView({ behavior: "smooth" });}}> 
        Sobre
        </a>
        <a className="text-base tracking-wider transition-colors hover:text-[#00aaff] font-poppins" href="#project">Projetos e certificados </a>
      </div>

      <div></div>

      {/* Botão Mobile (Boxicons) */}
      <button 
        className="md:hidden text-[#00aaff] z-50 text-3xl"
        onClick={() => setOpen(!open)}
      >
        <i className={open ? "bx bx-x" : "bx bx-menu"}></i>
      </button>

      {/* Menu Mobile */}
      {open && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col items-center justify-center gap-10 text-xl z-40">
          <a onClick={() => setOpen(false)} className="hover:text-[#00aaff] font-poppins" href="#home">Home</a>
          <a href="#project" onClick={(e) => { e.preventDefault();document.getElementById("about").scrollIntoView({ behavior: "smooth" });setOpen(false); }}>Sobre</a>
          <a onClick={(e) => { e.preventDefault();document.getElementById("project").scrollIntoView({ behavior: "smooth" });setOpen(false); }} className="hover:text-[#00aaff] font-poppins" href="#project">Projetos e certificados</a>
        </div>
      )}
    </header>
  );
};

export default Header;
