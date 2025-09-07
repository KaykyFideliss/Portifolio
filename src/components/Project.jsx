
import { FaLaptopCode, FaReact } from "react-icons/fa"; //laptop icon
import { PiCertificateBold } from "react-icons/pi"; //certificate icon
import { FaLink } from "react-icons/fa6"; //link icon
import { GoArrowRight } from "react-icons/go"; //seta icon
import { useState } from "react";//usestate


const Tabs = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const tabs = [
    {
      id: "projects",
      label: "Projects",
      icon: <FaLaptopCode className="text-2xl mb-2" />,
    },
    {
      id: "certificates",
      label: "Certificates",
      icon: <PiCertificateBold className="text-2xl mb-2" />,
    },
    {
      id: "techstack",
      label: "Tech Stack",
      icon: <FaReact className="text-2xl mb-2" />,
    },
    
  ];
  const projects = [
    {
      id: 1,
      title: "Aritmatika Solver",
      description:
        "Program ini dirancang untuk mempermudah pengguna dalam menyelesaikan soal-soal Aritmatika secara…",
      image: "src/image/funec-adventure.png",
      demoUrl: "https://seu-link-demo.com",
      detailsUrl: "https://seu-link-detalhes.com",
    },
    {
      id: 2,
      title: "ENVIRONMENTAL DISASTER",
      description: "Automatiza mensagens em canais do Discord de forma agendada.",
      image: "src/image/project-E.I-photo.png",
      demoUrl: "#",
      detailsUrl: "#",
    },
    {
      id: 3,
      title: "Buku Catatan",
      description: "Aplicativo web para criar e gerenciar anotações rapidamente.",
      image: "src/image/project-acqualife-photo.png",
      demoUrl: "#",
      detailsUrl: "#",
    },
    {
      id: 4,
      title: "Teste",
      description: "Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste",
      image: "https://cdn1.gnarususercontent.com.br/1/906750/ca4a19d0-b044-4307-a2c2-e8adf65ad9d4.png",
      demoUrl: "#",
      detailsUrl: "#",
    },
  ];


  return (
    <section className="relative bg-white  w-full min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8 py-12">
     
      <div className="w-full">
        {/* Título centralizado */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[#000000] font-syncopate">
            SOBRE MIM
          </h2>
          <p className="text-1xl text-black font-poppins p-2xl">
            eeeeeeeeeeeeeeeeee
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-black p-2 rounded-xl mb-12 max-w-6xl mx-auto">
          <div className="flex items-center justify-around">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center w-40 py-4 rounded-xl font-semibold transition ${activeTab === tab.id
                    ? "text-white bg-[#00aaff] shadow-md"
                    : "text-gray-500 hover:text-black hover:bg-gray-200"
                  }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Conteúdo das tabs */}
        <div className="max-w-6xl mx-auto">
          {activeTab === "projects" && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group relative rounded-2xl p-[1px]  transition-all duration-500"
                >
                  <div className="rounded-2xl bg-[#0e0e0e] h-full flex flex-col transform group-hover:scale-105 transition-transform duration-300 shadow-black">
                    <div className="p-4">
                      {/* Imagem */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="rounded-xl w-full h-40 object-cover"
                      />
                    </div>

                    {/* Conteúdo */}
                    <div className="flex flex-col flex-grow p-4">
                      <h3 className="text-lg font-bold text-white mb-2 font-syncopate">
                        {project.title}
                      </h3>
                      <p className="text-xs text-white font-poppins flex-grow">
                        {project.description}
                      </p>

                      {/* Botões */}
                      <div className="flex justify-between items-center mt-4">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#00ccff] text-sm font-poppins hover:underline flex items-center gap-1 "
                        >
                          Live Demo <span><FaLink /></span>
                        </a>
                        <a
                          href={project.detailsUrl}
                          className=" flex bg-[#00ccff] hover:bg-[#009dc4] text-sm text-white font-poppins px-4 py-2 rounded-lg transition"
                        >
                          Details <span className="items-center flex pl-1"><GoArrowRight /></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}


          {activeTab === "certificates" && (
            <div className="text-center text-gray-700">
              <p>Meus certificados </p>
            </div>
          )}

          {activeTab === "techstack" && (
            <div className="text-center text-gray-700">
              <p>Habilidades</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Tabs;
