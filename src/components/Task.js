
export default function Task({ markComleted, deleteTask, task }) {
  let status = task.isDone ? "Completed" : "Pending";
  return (
    <div className="taskContainer">
      <div className="task">
        <span
          className={status + "Check" + " taskCheck"}
          onClick={() => markComleted(task.id)}
        ></span>
        <div>
          <div className={status + " taskTitle"}>
            {task.title}
          </div>
          <div className="taskDescription">{task.description}</div>
          <div className="taskDate">{task.date}</div>
        </div>
      </div>
      <img
        onClick={() => deleteTask(task.id)}
        className="trashImg"
        alt="trash"
        src="https://img.icons8.com/material-sharp/24/000000/trash.png"
      />
    </div>
  );
}
