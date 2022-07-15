export default function Comments({ done, rem }) {
  let comments = rem === 0 && done > 0;
  return (
    rem === 0 && (
      <>
        <div className="NoTask">
          <div className="tasksImg"></div>
          <div className="tasksText">
            {comments ? "All Tasks Complete" : "No tasks yet"}
          </div>
          <div className="tasksTextDesc">
            {comments
              ? "Nice Work!"
              : "Add your to-dos and keep track of them across Google Workspace"}
          </div>
        </div>
      </>
    )
  );
}
