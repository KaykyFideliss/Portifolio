"use client"
import { HiChevronRight } from "react-icons/hi2"
import { SiGamemaker, SiAseprite } from "react-icons/si"

const ProjectDetail = () => {
  return (
    <div className="bg-[#020202] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10 lg:px-12 lg:py-28">
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

          <span className="font-poppins text-sm text-white whitespace-nowrap sm:text-sm">Funec Riacho Adventure</span>
        </nav>

        {/* Top section: texto + preview */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Texto */}
          <div className="flex-1 flex flex-col gap-6">
            <h1 className="text-4xl font-bold text-white font-poppins text-center md:text-left lg:text-left">
              Funec Riacho Adventure
            </h1>

            <p className="text-gray-300 text-base text-justify tracking-tight font-poppins leading-relaxed">
              O Funec Riacho Adventure é um jogo digital inovador que combina aprendizado e diversão. Desenvolvido para
              a Feira de Ciências da FUNEC Riacho, o projeto visa engajar estudantes em atividades lúdicas enquanto
              reforça conteúdos curriculares de forma interativa.
            </p>

            {/* Stacks */}
            <div className="mt-6">
              <h2 className="text-3xl font-bold text-white font-poppins text-center pb-8 md:text-left lg:text-left">Stacks Utilizadas</h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* GameMaker */}
                <div className="flex flex-col items-center">
                  <SiGamemaker className="text-[80px] mb-2" />
                  <span className="font-poppins">GameMaker</span>
                </div>

                {/* Aseprite */}
                <div className="flex flex-col items-center">
                  <SiAseprite className="text-[80px] mb-2" />
                  <span className="font-poppins">Aseprite</span>
                </div>
              </div>
            </div>
          </div>

          {/* Preview / Imagem */}
          <div className="flex-1 flex justify-center w-full">
            <img
              src="/image/funec-adventure.png"
              alt="Project Preview"
              className="rounded-xl shadow-lg max-w-full h-auto"
            />
            
 
          </div>
        </div>
      </div>
     {/* Gameplay Section */}

    </div>
  )
}

export default ProjectDetail
