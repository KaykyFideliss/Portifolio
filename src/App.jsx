import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";

// ⬇ Páginas agora são carregadas de forma assíncrona (lazy)
const Home = lazy(() => import("./pages/Home"));
const FunecAdventure = lazy(() => import("./pages/FunecAdventure"));
const EnvironmentalDisaster = lazy(() => import("./pages/EnvironmentalDisaster"));
const Acqualife = lazy(() => import("./pages/Acqualife"));
const EcoAlert = lazy(() => import("./pages/EcoAlert"));

export default function App() {
  return (
    // Suspense mostra o Loading até o componente ser carregado
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/funec-adventure" element={<FunecAdventure />} />
        <Route path="/Environmental-Disaster" element={<EnvironmentalDisaster />} />
        <Route path="/Acqualife-page" element={<Acqualife />} />
        <Route path="/EcoAlert-page" element={<EcoAlert />} />
      </Routes>
    </Suspense>
  );
}
