import uniqid from "uniqid";
import { useState } from "react";

export default function AddTasks({ addNewTask }) {
  const [add, Setadd] = useState(false);
  return add === false ? (
    <>
      <div className="addTaskContainer">
        <div className="addTaskDiv" onClick={() => Setadd(true)}>
          <span className="addTaskSpan">
            <div aria-hidden="true" className="addTaskIcon"></div>
            <div>Add a task</div>
          </span>
        </div>
        <img
          className="menuImg"
          src="https://img.icons8.com/tiny-glyph/16/000000/experimental-menu-2-tiny-glyph.png"
          alt="menu"
        />
      </div>
    </>
  ) : (
    <>
      <form>
        <div className="addContainer">
          <input
            type="text"
            placeholder="Title"
            onKeyDown={(e) => Submit(e)}
            autoFocus
          />
          <input
            type="text"
            placeholder="Describtion"
            onKeyDown={(e) => Submit(e)}
          />
          <input
            type="datetime-local"
            placeholder="Date/Time"
            onKeyDown={(e) => Submit(e)}
          />
        </div>
      </form>
    </>
  );

  function Submit(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      let element = e.target.parentElement;
      let newTask = {
        title: element.children[0].value,
        description: element.children[1].value,
        date: element.children[2].value,
        id: uniqid(),
        isDone: false,
      };
      Setadd(false);
      addNewTask(newTask);
    }
  }
}
