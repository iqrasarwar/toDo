import NewTaskForm from "./NewTaskForm";

export default function AddTasks({ addNewTask, add, Setadd }) {
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
    <NewTaskForm
      addNewTask={addNewTask}
      editTask={null}
      Setadd={Setadd}
      task={null}
    />
  );
}
