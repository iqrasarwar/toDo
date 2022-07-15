import NewTaskForm from "./NewTaskForm";
import { useState } from "react";

export default function Task({
  editTask,
  Setadd,
  markComleted,
  deleteTask,
  task,
}) {
  let status = task.isDone ? "Completed" : "Pending";
  let [edit, SetEdit] = useState(false);
  const setEdit = (status) => {
    SetEdit(status);
  };
  return (
    <>
      {edit && status != "Completed" && (
        <NewTaskForm
          addNewTask={null}
          editTask={editTask}
          Setadd={setEdit}
          task={task}
        />
      )}
      <div className="taskContainer">
        <div className="task">
          <span
            className={status + "Check" + " taskCheck"}
            onClick={() => markComleted(task.id)}
          ></span>
          <div onClick={() => SetEdit(true)}>
            <div className={status + " taskTitle"}>{task.title}</div>
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
    </>
  );
}
