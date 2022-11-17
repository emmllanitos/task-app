import { useState } from "react";

export const TaskForm = ({ createTask }) => {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Titulo"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          placeholder="Descripcion"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};
