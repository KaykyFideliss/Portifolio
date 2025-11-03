import SpotlightCard from "../components/SpotlightCard";
import { MdOutlineWebAsset } from "react-icons/md";

const CardFuncoes = () => {
  return (
    <section
      className="flex w-full min-h-screen bg-black flex flex-col justify-center items-center"
      id="Services"
    >
      {/* Cabeçalho */}
      <div className="w-full max-w-[900px] text-center mb-12 px-4">
        <h2 className="pt-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-syncopate break-words">
          Serviços Contratáveis
        </h2>
        <p className="text-zinc-400 mt-4 text-base sm:text-lg">
          Transformo ideias em soluções digitais modernas e funcionais para o seu negócio
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 max-w-[1200px]">
        <SpotlightCard
          className="custom-spotlight-card bg-black/5 backdrop-blur-md border border-white/10 rounded-2xl transition-transform duration-300 hover:scale-105 min-h-[230px] flex flex-col justify-between"
          spotlightColor="rgb(47, 170, 255)"
        >
          <div className="p-6 flex flex-col justify-between h-full">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-bold font-poppins text-white">Criação de Sites</h2>
            </div>
            <p className="text-gray-300 mt-2 font-poppins text-sm">
              Desenvolvimento de sites responsivos, rápidos e otimizados, garantindo presença online profissional e impactante.
            </p>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="custom-spotlight-card bg-black/5 backdrop-blur-md border border-white/10 rounded-2xl transition-transform duration-300 hover:scale-105 min-h-[230px] flex flex-col justify-between"
          spotlightColor="rgb(47, 170, 255)"
        >
          <div className="p-6 flex flex-col justify-between h-full">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-bold font-poppins text-white">Landing Page</h2>
            </div>
            <p className="text-gray-300 mt-2 font-poppins text-sm">
              Criação de landing pages focadas em conversão, design intuitivo e experiência do usuário eficiente.
            </p>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="custom-spotlight-card bg-black/5 backdrop-blur-md border border-white/10 rounded-2xl transition-transform duration-300 hover:scale-105 min-h-[230px] flex flex-col justify-between"
          spotlightColor="rgb(47, 170, 255)"
        >
          <div className="p-6 flex flex-col justify-between h-full">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-bold font-poppins text-white">E-commerce</h2>
            </div>
            <p className="text-gray-300 mt-2 font-poppins text-sm">
              Lojas virtuais completas, seguras e otimizadas, com integração de pagamentos e experiência de compra simplificada.
            </p>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="custom-spotlight-card bg-black/5 backdrop-blur-md border border-white/10 rounded-2xl transition-transform duration-300 hover:scale-105 min-h-[230px] flex flex-col justify-between"
          spotlightColor="rgb(47, 170, 255)"
        >
          <div className="p-6 flex flex-col justify-between h-full">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-bold font-poppins text-white">UI/UX Design</h2>
            </div>
            <p className="text-gray-300 mt-2 font-poppins text-sm">
              Design de interfaces elegantes e funcionais, proporcionando uma experiência envolvente e identidade visual consistente.
            </p>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
};

export default CardFuncoes;
