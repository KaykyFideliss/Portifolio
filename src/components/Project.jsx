import { useState } from "react";

const tabs = [
  { id: "projects", label: "Projects", icon: "💻" },
  { id: "certificates", label: "Certificates", icon: "📜" },
  { id: "tech", label: "Tech Stack", icon: "⚙️" },
];

const projects = [
  {
    title: "Aritmatika Solver",
    description:
      "Programa para resolver soal-soal Aritmatika secara otomatis...",
    image: "/img/aritmatika.png", // coloca na pasta public/img
  },
  {
    title: "AutoChat - Discord",
    description:
      "Automatiza mensagens no Discord com agendamento e filtros.",
    image: "/img/autochat.png", // coloca na pasta public/img
  },
];

const Project = () => {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section
      id="portfolio"
      className="w-full bg-gradient-to-b from-[#0a0a1a] to-black py-16 px-6"
    >
      {/* Título */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-purple-400">
          Portfolio Showcase
        </h2>
        <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
          Explore my journey through projects, certifications, and technical
          expertise. Each section represents a milestone in my continuous
          learning path.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-6 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-xl flex items-center space-x-2 transition ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-purple-700 to-indigo-700 text-white font-semibold shadow-lg"
                : "bg-[#111827] text-gray-400 hover:text-white"
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Conteúdo das Tabs */}
      {activeTab === "projects" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-[#1f1f3a] to-[#141422] rounded-2xl overflow-hidden shadow-lg p-6 hover:scale-[1.02] transition"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-400 text-sm">{proj.description}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === "certificates" && (
        <div className="text-center text-gray-400">
          Em breve: certificados 📜
        </div>
      )}

      {activeTab === "tech" && (
        <div className="text-center text-gray-400">
          Em breve: Tech Stack ⚙️
        </div>
      )}
    </section>
  );
};

export default Project;
