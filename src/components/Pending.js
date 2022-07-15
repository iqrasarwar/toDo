import Task from "./Task";
export default function Pending({
  markComleted,
  deleteTask,
  editTask,
  Setadd,
  tasks,
}) {
  return (
    tasks.length > 0 && (
      <>
        {tasks.map((task) => {
          return (
            <Task
              markComleted={markComleted}
              deleteTask={deleteTask}
              task={task}
              editTask={editTask}
              Setadd={Setadd}
              key={task.id}
            />
          );
        })}
      </>
    )
  );
}
