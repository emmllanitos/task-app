import { TaskCard } from "./TaskCard";

export const TaskList = ({ tasks, deleteTask }) => {
  return (
    <>
      <div>
        {tasks.map((task, i) => (
          <TaskCard key={i} task={task} deleteTask={deleteTask} />
        ))}
      </div>
    </>
  );
};
