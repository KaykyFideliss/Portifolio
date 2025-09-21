import Header from "../components/Header";
 import Hero from "../components/Hero";
 import { Vortex } from "../components/Vortex";
 import AboutMe from "../components/AboutMe";
 import Project from "../components/Project";
 import Stacks from "../components/Stacks";
 import Footer from "../components/footer";



export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Vortex fundo global */}
      <Vortex
        particleCount={700}
        baseHue={200}
        rangeSpeed={1.5}
        containerClassName="fixed inset-0 -z-10 pointer-events-none"
        backgroundColor="black"
      />

      {/* Conteúdo do site */}
      <Header />

      <main className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <Hero />
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
      </main>

      {/* Seções */}
      <AboutMe />
      <Project />
      <Stacks />
     
      <Footer />
    </div>
  );
}
