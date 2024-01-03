import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Formulario from "../pages/formulario";

const RoutesWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/formulario" element={<Formulario />} />
    </Routes>
  );
};

export default RoutesWrapper;
