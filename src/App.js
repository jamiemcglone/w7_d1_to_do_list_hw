import './App.css';
import React, {useState} from 'react';

function App() {

  const [tasks, setTasks] = useState([
   "Buy shopping",
    "Clean Bathroom",
    "Car's MOT"
  ]) ;

  const [newTask, setNewTask] = useState("");

  const taskNodes = tasks.map((task, index) => {
      return(
        <li key={index}>
          <span>{task}</span>
        </li>
      )
  })

  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push(newTask);
    setTasks(copyTasks);
    setNewTask("")

  }

  // const purchaseItem = (index) => {
  //   const copyItems = [...items];
  //   const updatedItem = {...copyItems[index]};
  //   updatedItem.isPurchased = true;
  //   copyItems[index] = updatedItem;
  //   setItems(copyItems)
  // };
  
  return (
    <div className="App">

      <h1>To Do List</h1>
      <hr></hr>

      <ul>
        {taskNodes}
      </ul>

      <form onSubmit={saveNewTask}>
        <label htmlFor="new-task">Add a new task:</label>
        <input id="new-task" type="text" value={newTask} onChange={handleTaskInput}/>
        <input type="submit" value="Save New Task"/>
      </form>

    </div>
  );
}

export default App;
