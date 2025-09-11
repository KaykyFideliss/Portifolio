import { FaLaptopCode, FaReact } from "react-icons/fa"; //laptop icon
import { PiCertificateBold } from "react-icons/pi"; //certificate icon
import { FaLink } from "react-icons/fa6"; //link icon
import { GoArrowRight } from "react-icons/go"; //seta icon
import { useState } from "react";//usestate
import {motion} from "framer-motion"
import { Particles } from "./Particles";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openModal = (cert) => {
    setSelectedCertificate(cert);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
    setModalOpen(false);
  };

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
  ];

  const projects = [
    {
      id: 1,
      title: "Funec Riacho Adventure",
      description: "O Funec Riacho Adventure é um jogo digital inovador que combina aprendizado e diversão...",
      image: "/image/funec-adventure.png",
      demoUrl: "",
      detailsUrl: "/funec-adventure",
    },
    {
      id: 2,
      title: "ENVIRONMENTAL DISASTER",
      description: "Automatiza mensagens em canais do Discord de forma agendada.",
      image: "/image/project-E.I-photo.png",
      demoUrl: "#",
      detailsUrl: "#",
    },
    {
      id: 3,
      title: "Acqualife",
      description: "Aplicativo web para criar e gerenciar anotações rapidamente.",
      image: "/image/project-acqualife-photo.png",
      demoUrl: "#",
      detailsUrl: "/funec-adventure",
    },
    {
      id: 4,
      title: "EcoAlert",
      description: "Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste",
      image: "https://cdn1.gnarususercontent.com.br/1/906750/ca4a19d0-b044-4307-a2c2-e8adf65ad9d4.png",
      demoUrl: "/funec-adventure",
      detailsUrl: "/funec-adventure",
    },
  ];

  const certificates = [
    "/image/certificated/Certificado-front.jpg",
    "/image/certificated/administrando-BD.jpg",
    "/image/certificated/certificado-python.jpg",
  ];

  return (
    <section className="relative bg-white w-full min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8 py-12">
        {/* Particles de fundo */}
  <Particles
    className="absolute top-0 left-0 w-full h-full z-0 "
    quantity={100}
    color="#00ccff"
    size={0.5}
    staticity={50}
    ease={50}
  />
      <div className="w-full z-10">
        {/* Título centralizado */}
        <div className="text-center mb-12 z-10">
          <h2 className="text-5xl font-bold text-[#000000] font-syncopate">
            SOBRE MIM
          </h2>
          <p className="text-1xl text-black font-poppins p-2xl">
            Explore minha jornada por projetos, certificações e expertise técnica. Cada seção representa um marco na minha jornada de aprendizado contínuo.
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-black p-2 rounded-xl mb-12 max-w-6xl mx-auto ">
          <div className="flex items-center justify-around z-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center w-40 py-4 rounded-xl font-semibold transition ${
                  activeTab === tab.id
                    ? "text-white bg-[#00aaff] shadow-md w-96"
                    : "text-gray-500 hover:text-black hover:bg-gray-200 w-96"
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
          {/* Projects Tab */}
          {activeTab === "projects" && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div key={project.id} className="group relative rounded-2xl p-[1px] transition-all duration-500">
                  <div className="rounded-2xl bg-[#0e0e0e] h-full flex flex-col transform group-hover:scale-105 transition-transform duration-300 shadow-black">
                    <div className="p-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="rounded-xl w-full h-40 object-cover"
                      />
                    </div>
                    <div className="flex flex-col flex-grow p-4">
                      <h3 className="text-base font-bold text-white mb-2 font-syncopate">
                        {project.title}
                      </h3>
                      <p className="text-xs text-white font-poppins flex-grow">
                        {project.description}
                      </p>
                      <div className="flex justify-between items-center mt-4">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#00ccff] text-sm font-poppins hover:underline flex items-center gap-1 "
                        >
                          Live Demo <FaLink />
                        </a>
                       <motion.a

                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onHoverStart={() => console.log('hover started!')}

                          href={project.detailsUrl}
                          className=" flex bg-[#00ccff] hover:bg-[#009dc4] text-sm text-white font-poppins px-4 py-2 rounded-lg transition"
                        >
                          Details <GoArrowRight className="pl-1" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certificates Tab */}
          {activeTab === "certificates" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <div key={index} className="cursor-pointer overflow-hidden rounded-lg shadow-lg border  w-full" onClick={() => openModal(cert)}>
                  <img
                    src={cert}
                    alt={`Certificado ${index + 1}`}
                    className="w-full h-[300px] object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Modal do Certificado */}
        {modalOpen && selectedCertificate && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div
              className="relative max-w-3xl w-full animate-fadeIn"
              onClick={(e) => e.stopPropagation()} // impede fechar ao clicar na imagem
            >
              <img
                src={selectedCertificate}
                alt="Certificado"
                className="rounded-lg w-full h-auto shadow-2xl"
              />
              <button
                className="absolute -top-2 right-2 text-[#ffffff] text-3xl font-bold hover:text-[#ff0000] transition"
                onClick={closeModal}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tabs;
