import Task from "./Task";
export default function Pending({ markComleted, deleteTask, tasks }) {
  let taskRem = tasks.filter(function (task) {
    return task.isDone === false;
  });
  return (
    taskRem.length > 0 && (
      <>
        {taskRem.map((task) => {
          return (
            <Task
              markComleted={markComleted}
              deleteTask={deleteTask}
              task={task}
            />
          );
        })}
      </>
    )
  );
}
