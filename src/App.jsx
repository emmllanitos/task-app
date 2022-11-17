import { task as data, task } from "./data/task";
import { TaskList } from "./components/TaskList";
import { useEffect, useState } from "react";
import { TaskForm } from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  if (tasks.length === 0) {
    return <h3>No hay tareas aun</h3>;
  }

  function createTask(setTitle, setDescription) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: setTitle,
        description: setDescription,
      },
    ]);
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks}></TaskList>
    </>
  );
}

export default App;
