import { FaLaptopCode, FaReact } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import { useState } from "react";

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

  return (
    
    <section className="flex w-full min-h-screen mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white" >
      
    <div className="w-full">
        {/* Título centralizado */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[#000000] font-syncopate">
            SOBRE MIM
          </h2>
          <p className="text-1xl text-black font-poppins p-2xl " > eeeeeeeeeeeeeeeeee</p>
        </div>

      <div className="bg-black p-2 rounded-2xl  mb-12 max-w-3xl mx-auto">
        <div className="flex items-center justify-around">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center w-40 py-4 rounded-xl font-semibold transition ${
                activeTab === tab.id
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
    </div>
    </section>
  );
};

export default Tabs;
