import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FunecAdventure from "./pages/FunecAdventure";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/funec-adventure" element={<FunecAdventure />} />
    </Routes>
  );
}
