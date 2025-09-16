import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FunecAdventure from "./pages/FunecAdventure";
import EnvironmentalDisaster from "./pages/EnvironmentalDisaster";
import Acqualife from "./pages/Acqualife";
import EcoAlert from "./pages/EcoAlert";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/funec-adventure" element={<FunecAdventure />} />
      <Route path="/Environmental-Disaster" element={<EnvironmentalDisaster />} />
      <Route path="/Acqualife-page" element={<Acqualife />} />
      <Route path="/EcoAlert-page" element={<EcoAlert/>}/>
    </Routes>
  );
}

