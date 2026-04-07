import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Tareas from "./pages/Tareas";
import Acerca from "./pages/Acerca";
import "./index.css";

function Root() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "15px", padding: "15px 20px", background: "#0077ff" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Inicio</Link>
        <Link to="/tareas" style={{ color: "white", textDecoration: "none" }}>Tareas</Link>
        <Link to="/acerca" style={{ color: "white", textDecoration: "none" }}>Acerca</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tareas" element={<Tareas />} />
        <Route path="/acerca" element={<Acerca />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);