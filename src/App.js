import { useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTasks";
import Pending from "./components/Pending";
import Comments from "./components/Comments";
import Completed from "./components/completed";

function App() {
  const [tasks, SetTasks] = useState([]);
  const [add, Setadd] = useState(false);

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

  const editTask = (id, title, description, date) => {
    let newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, title, description, date };
      }
      return task;
    });
    SetTasks(newTasks);
  };

  let taskCompleted = tasks.filter(function (task) {
    return task.isDone === true;
  });

  let taskPending = tasks.filter(function (task) {
    return task.isDone === false;
  });

  let SetaddState = (status) => {
    Setadd(status);
  };

  return (
    <>
      <Header />
      <AddTask addNewTask={addNewTask} add={add} Setadd={SetaddState} />
      <Pending
        tasks={taskPending}
        markComleted={toggleComleted}
        deleteTask={deleteTask}
        editTask={editTask}
        Setadd={SetaddState}
      />
      <Comments done={taskCompleted.length} rem={taskPending.length} />
      <Completed
        tasks={taskCompleted}
        markInComleted={toggleComleted}
        deleteTask={deleteTask}
        editTask={editTask}
        setadd={SetaddState}
      />
    </>
  );
}

export default App;
