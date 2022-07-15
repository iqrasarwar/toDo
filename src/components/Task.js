import uniqid from "uniqid";
export default function Task({ markComleted, deleteTask, task }) {
  return (
    <div className="taskContainer" key={uniqid()}>
      <div className="task">
        <span
          className="taskCheck"
          onClick={() => markComleted(task.id)}
        ></span>
        <div className="taskTitle">
          <div className="taskTitleText">{task.title}</div>
          <div className="taskDescription">{task.description}</div>
          <div className="taskTitleDate">{task.date}</div>
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
