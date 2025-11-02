import { FaLaptopCode, FaReact } from "react-icons/fa"; //laptop icon
import { PiCertificateBold } from "react-icons/pi"; //certificate icon
import { FaLink } from "react-icons/fa6"; //link icon
import { GoArrowRight } from "react-icons/go"; //seta icon
import { useState } from "react";//usestate
import { motion } from "framer-motion"
import { Particles } from "./Particles";
import ScrollAnimation from './ScrollAnimation';

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
      demoUrl: "https://github.com/KaykyFideliss/Funec-Riacho-Adventure",
      detailsUrl: "/funec-adventure",
    },
    {
      id: 2,
      title: "ENVIRONMENTAL DISASTER",
      description: "O projeto Environmental Disaster tem como objetivo conscientizar sobre os impactos cada vez mais frequentes e intensos dos desastres naturais e ambientais.",
      image: "/image/project-E.I-photo.png",
      demoUrl: "https://github.com/KaykyFideliss/Envirolmental-Disaster-Responsivo",
      detailsUrl: "/Environmental-Disaster",
    },
    {
      id: 3,
      title: "Acqualife",
      description: "Acqualife é uma solução que integra hardware e software para monitoramento e gestão de água da chuva em residências de Contagem/MG",
      image: "/image/Acqualife-em-desenvolvimento.png",
      demoUrl: "https://github.com/KaykyFideliss/Website-Acqualife",
      detailsUrl: "/Acqualife-page",
    },
    //{
      //id: 4,
      //title: "EcoAlert",
      // description: "Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste",
      //image: "https://cdn1.gnarususercontent.com.br/1/906750/ca4a19d0-b044-4307-a2c2-e8adf65ad9d4.png",
      //demoUrl: "/funec-adventure",
    //  detailsUrl: "/EcoAlert-page",
    //},
  ];

  const certificates = [
    "/image/certificated/Certificado-front.jpg",
    "/image/certificated/administrando-BD.jpg",
    "/image/certificated/certificado-python.jpg",
    "/image/certificated//Intro-FullStack.jpg",

  ];

  return (
    <section id="project" className="relative bg-white w-full min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8 py-12">
      {/* Particles de fundo */}
      <Particles
        className="absolute top-0 left-0 w-full h-full z-0 "
        quantity={100}
        color="#00ccff"
        size={0.5}
        staticity={50}
        ease={50}
      />
      <div className="w-full z-10 " >
        {/* Título centralizado */}
        <div className="text-center mb-12 z-10">
          <motion.h1
            initial={{ opacity: 0, y: -25 }}   // começa invisível e um pouco pra baixo
            whileInView={{ opacity: 1, y: 0 }} // aparece e sobe para o lugar
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ amount: 0.5 }}

            className="text-5xl font-bold text-[#000000] font-syncopate">
            Meus projetos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ amount: 0.5 }}
            className="text-1xl text-black font-poppins p-2xl">
            Explore minha jornada por projetos, certificações e expertise técnica. Cada seção representa um marco na minha jornada de aprendizado contínuo.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
           initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ amount: 0.5 }}

          className="bg-black p-2 rounded-xl mb-12 max-w-6xl mx-auto ">
          <div className="flex items-center justify-around z-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center w-40 py-4 rounded-xl font-semibold transition ${activeTab === tab.id
                    ? "text-white bg-[#00aaff] shadow-md w-96"
                    : "text-gray-500 hover:text-black hover:bg-gray-200 w-96"
                  }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Conteúdo das tabs */}
        <div className="max-w-6xl mx-auto">
         {/* Projects Tab */}
{activeTab === "projects" && (
  <motion.div
    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      initial="hidden"
    whileInView="show" // continua animando no scroll
    viewport={{ once: true, amount: 0.1, margin: "-50px" }} // dispara mais cedo no mobile
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: 0.15 } },
    }}
  >
    {projects.map((project, index) => {
      const col = index % 3; // coluna: 0=esq, 1=meio, 2=dir

      // Variants para cada card
     const cardVariants = {
  hidden: {
    opacity: 0,
    x: 50, // todos começam deslocados para a direita
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] },
  },
};

      return (
        <motion.div
          key={project.id}
          variants={cardVariants}
          className="group relative rounded-2xl p-[1px] will-change-transform"
        >
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
                  className="text-[#00ccff] text-sm font-poppins hover:underline flex items-center gap-1"
                >
                  GitHub <FaLink  />
                </a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.detailsUrl}
                  className="flex items-center bg-[#00ccff] hover:bg-[#009dc4] text-sm text-white font-poppins px-4 py-2 rounded-lg transition"
                >
                  Details <GoArrowRight className=" ml-2" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      );
    })}
  </motion.div>
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
