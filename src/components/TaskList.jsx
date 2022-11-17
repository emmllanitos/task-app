export const TaskList = ({ tasks }) => {
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
