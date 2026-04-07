import React, { useState } from "react";

export default function TareaCard({ tarea, eliminarTarea, editarTarea, toggleCompletada }) {
  const [editando, setEditando] = useState(false);
  const [nuevoTitulo, setNuevoTitulo] = useState(tarea.titulo);
  const [nuevaDescripcion, setNuevaDescripcion] = useState(tarea.descripcion);

  const guardarEdicion = () => {
    if (!nuevoTitulo.trim()) return;
    editarTarea(tarea.id, { titulo: nuevoTitulo, descripcion: nuevaDescripcion });
    setEditando(false);
  };

  return (
    <div className={`tarea-card ${tarea.completada ? "completada" : ""}`}>
      {editando ? (
        <>
          <input value={nuevoTitulo} onChange={(e) => setNuevoTitulo(e.target.value)} />
          <input value={nuevaDescripcion} onChange={(e) => setNuevaDescripcion(e.target.value)} />
          <button onClick={guardarEdicion}>Guardar</button>
          <button onClick={() => setEditando(false)}>Cancelar</button>
        </>
      ) : (
        <>
          <div>
            <span><strong>{tarea.titulo}</strong></span>
            {tarea.descripcion && <p>{tarea.descripcion}</p>}
          </div>
          <div>
            <button onClick={() => toggleCompletada(tarea.id)}>
              {tarea.completada ? "↩ Deshacer" : "✔ Completar"}
            </button>
            <button onClick={() => setEditando(true)}>✏ Editar</button>
            <button onClick={() => eliminarTarea(tarea.id)}>🗑 Eliminar</button>
          </div>
        </>
      )}
    </div>
  );
}