import Task from "./Task";
import { useState } from "react";

export default function Completed({ tasks, markInComleted, deleteTask }) {
  let taskDone = tasks.filter(function (task) {
    return task.isDone === true;
  });
  let [open, SetOpen] = useState(false);
  let source = open
    ? "https://img.icons8.com/material-rounded/24/000000/expand-arrow--v1.png"
    : "https://img.icons8.com/material-rounded/24/000000/forward.png";
  return (
    taskDone.length > 0 && (
      <div className="CompletedContainer">
        <hr />
        <div className="CompletedHead">
          <img src={source} alt="ListToggle" onClick={() => SetOpen(!open)} />
          <p className="CompletedTitle">Completed ({taskDone.length})</p>
        </div>
        {taskDone.map((task) => {
          return (
            open && (
              <Task
                markComleted={markInComleted}
                deleteTask={deleteTask}
                task={task}
                key={task.id}
              />
            )
          );
        })}
      </div>
    )
  );
}
