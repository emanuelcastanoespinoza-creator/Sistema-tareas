import React, { useState, useEffect } from "react";
import FormularioTarea from "./components/FormularioTarea";
import TareaCard from "./components/TareaCard";
import FiltroTareas from "./components/FiltroTareas";

export default function App() {
  const [tareas, setTareas] = useState(() => {
    // Carga inicial desde localStorage
    const guardadas = localStorage.getItem("tareas");
    return guardadas ? JSON.parse(guardadas) : [];
  });
  const [filtro, setFiltro] = useState("todas");

  // Guardar en localStorage cuando cambian las tareas
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  // Funciones
  const agregarTarea = (tarea) => setTareas([...tareas, tarea]);

  const eliminarTarea = (id) => {
    if (window.confirm("¿Seguro que quieres eliminar esta tarea?")) {
      setTareas(tareas.filter((t) => t.id !== id));
    }
  };

  const editarTarea = (id, nuevosDatos) => {
    setTareas(
      tareas.map((t) => (t.id === id ? { ...t, ...nuevosDatos } : t))
    );
  };

  const toggleCompletada = (id) => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  };

  const tareasFiltradas = tareas.filter((t) => {
    if (filtro === "pendientes") return !t.completada;
    if (filtro === "completadas") return t.completada;
    return true;
  });

  return (
    <div className="app-container">
      <h1>Sistema de Tareas</h1>
      <FormularioTarea agregarTarea={agregarTarea} />
      <FiltroTareas filtro={filtro} setFiltro={setFiltro} />
      <div className="lista-tareas">
        {tareasFiltradas.map((tarea) => (
          <TareaCard
            key={tarea.id}
            tarea={tarea}
            eliminarTarea={eliminarTarea}
            editarTarea={editarTarea}
            toggleCompletada={toggleCompletada}
          />
        ))}
      </div>
      <p>Total de tareas: {tareas.length}</p>
    </div>
  );
}