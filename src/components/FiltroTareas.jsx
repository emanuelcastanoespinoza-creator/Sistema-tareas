import React from "react";

export default function FiltroTareas({ filtro, setFiltro }) {
  return (
    <div className="filtro-tareas">
      <button onClick={() => setFiltro("todas")}>Todas</button>
      <button onClick={() => setFiltro("pendientes")}>Pendientes</button>
      <button onClick={() => setFiltro("completadas")}>Completadas</button>
    </div>
  );
}