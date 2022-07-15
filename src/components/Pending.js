import Task from "./Task";
export default function Pending({ markComleted, deleteTask, tasks }) {
  return (
    tasks.length > 0 && (
      <>
       {tasks.map((task) => {
          return (
            <Task
              markComleted={markComleted}
              deleteTask={deleteTask}
              task={task}
              key = {task.id}
            />
          );
        })}
      </>
    )
  );
}
