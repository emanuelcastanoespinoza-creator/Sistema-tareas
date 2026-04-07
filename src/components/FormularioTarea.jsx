import React, { useState } from "react";

export default function FormularioTarea({ agregarTarea }) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo.trim()) return;
    agregarTarea({
      id: Date.now(),
      titulo,
      descripcion,
      completada: false,
    });
    setTitulo("");
    setDescripcion("");
  };

  return (
    <form className="form-tareas" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título de la tarea"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripción (opcional)"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}