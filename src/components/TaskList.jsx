import { useEffect, useState } from "react";
import { task as data } from "../assets/task";

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  if (tasks.length === 0) {
    return <h3>No hay tareas aun</h3>;
  }

  return (
    <>
      <div>
        {tasks.map((task, i) => (
          <div key={i}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};
