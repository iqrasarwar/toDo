export default function Comments({ done, rem }) {
  return (
    <>
      <div className="NoTask">
        <div className="tasksImg"></div>
        <div className="tasksText">
          {rem === 0 && done > 0 ? "All Tasks Complete" : "No tasks yet"}
        </div>
        <div className="tasksTextDesc">
          {rem === 0 && done > 0
            ? "Nice Work!"
            : "Add your to-dos and keep track of them across Google Workspace"}
        </div>
      </div>
    </>
  );
}
