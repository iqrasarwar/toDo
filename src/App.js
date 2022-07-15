import { useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTasks";
import Pending from "./components/Pending";
import Comments from "./components/Comments";
import Completed from "./components/completed";

function App() {
  let [tasks, SetTasks] = useState([]);

  let done = isDone();
  let addNewTask = (task) => {
    SetTasks([...tasks, task]);
  };
  let toggleComleted = (id) => {
    let newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isDone = !task.isDone;
      }
      return task;
    });
    SetTasks(newTasks);
  };
  let deleteTask = (id) => {
    let newTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    SetTasks(newTasks);
  };

  return (
    <>
      <Header />
      <AddTask addNewTask={addNewTask} />
      <Pending
        tasks={tasks}
        markComleted={toggleComleted}
        deleteTask={deleteTask}
      />
      <Completed
        tasks={tasks}
        markInComleted={toggleComleted}
        deleteTask={deleteTask}
      />
      <Comments done={done} rem={tasks.length - done} />
    </>
  );

  function isDone() {
    let done = tasks.filter(function (task) {
      return task.isDone === true;
    });
    return done.length;
  }
}

export default App;
