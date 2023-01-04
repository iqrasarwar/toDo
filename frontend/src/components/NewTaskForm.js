import uniqid from "uniqid";
import React, { useEffect, useRef } from "react";

export default function NewTaskForm({ addNewTask, editTask, Setadd, task }) {
  let titleRef = useRef();
  let descriptionRef = useRef();
  let dateRef = useRef();
  useEffect(() => {
    console.log(task);
    if (task) {
      titleRef.current.value = task.title;
      descriptionRef.current.value = task.description;
      dateRef.current.value = task.date;
    }
  }, [task]);

  return (
    <form>
      <div className="addContainer">
        <input
          type="text"
          placeholder="Title"
          onKeyDown={(e) => Submit(e)}
          ref={titleRef}
          autoFocus
        />
        <input
          type="text"
          placeholder="Describtion"
          ref={descriptionRef}
          onKeyDown={(e) => Submit(e)}
        />
        <input
          type="datetime-local"
          placeholder="Date/Time"
          ref={dateRef}
          onKeyDown={(e) => Submit(e)}
        />
      </div>
    </form>
  );

  function Submit(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      let element = e.target.parentElement;
      let title = element.children[0].value;
      let description = element.children[1].value;
      let date = element.children[2].value;
      if (task === null) {
        let newTask = {
          title: title,
          description: description,
          date: date,
          id: uniqid(),
          isDone: false,
        };
        addNewTask(newTask);
      } else {
        editTask(task.id, title, description, date);
      }
      Setadd(false);
    }
  }
}
