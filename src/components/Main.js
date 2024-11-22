import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Presentacion from './Presentacion';
import Cuestionario from "./Cuestionario";
import Resultado from "./Resultado";

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Presentacion />} />
        <Route path="/cuestionario" element={<Cuestionario />} />
        <Route path="/resultado" element={<Resultado />} />
      </Routes>
    </Router>
  );
}

export default Main;