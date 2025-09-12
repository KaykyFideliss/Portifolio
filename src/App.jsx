import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FunecAdventure from "./pages/FunecAdventure";
import EnvironmentalDisaster from "./pages/EnvironmentalDisaster";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/funec-adventure" element={<FunecAdventure />} />
      <Route path="/Environmental-Disaster" element={<EnvironmentalDisaster />} />
    </Routes>
  );
}

