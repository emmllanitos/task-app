import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Titulo"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Descripcion"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button>Enviar</button>
    </form>
  );
};
