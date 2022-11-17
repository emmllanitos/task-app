import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { TaskCard } from "./TaskCard";

export const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <>
      <div>
        {tasks.map((task, i) => (
          <TaskCard key={i} task={task} />
        ))}
      </div>
    </>
  );
};
