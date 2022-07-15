import Task from "./Task";
export default function Completed({ tasks, markInComleted, deleteTask }) {
  let taskDone = tasks.filter(function (task) {
    return task.isDone === true;
  });
     return (
    taskDone.length > 0 && (
      <>
        {taskDone.map((task) => {
          return (
            <Task
              markComleted={markInComleted}
              deleteTask={deleteTask}
              task={task}
            />
          );
        })}
      </>
    )
  );
}
