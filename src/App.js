import { useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTasks";
import Pending from "./components/Pending";
import Comments from "./components/Comments";
import Completed from "./components/completed";

function App() {
  let [tasks, SetTasks] = useState([]);

  let addNewTask = (task) => {
    SetTasks([...tasks, task]);
  };

  let toggleComleted = (id) => {
    const taskToComlete = tasks.find((task) => task.id === id);
    const otherTasks = tasks.filter((task) => task.id !== id);
    const completedTask = { ...taskToComlete, isDone: !taskToComlete.isDone };
    SetTasks([...otherTasks, completedTask]);
  };

  let deleteTask = (id) => {
    let newTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    SetTasks(newTasks);
  };

  let taskCompleted = tasks.filter(function (task) {
    return task.isDone === true;
  });

  let taskPending = tasks.filter(function (task) {
    return task.isDone === false;
  });

  return (
    <>
      <Header />
      <AddTask addNewTask={addNewTask} />
      <Pending
        tasks={taskPending}
        markComleted={toggleComleted}
        deleteTask={deleteTask}
      />
      <Comments done={taskCompleted.length} rem={taskPending.length} />
      <Completed
        tasks={taskCompleted}
        markInComleted={toggleComleted}
        deleteTask={deleteTask}
      />
    </>
  );
}

export default App;
