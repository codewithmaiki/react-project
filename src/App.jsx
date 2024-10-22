import { useState } from "react";

function App() {
  let [newTask, setNewTask] = useState("");
  const [allTasks, setAllTasks] = useState([]);

  function createTask(e) {
    e.preventDefault();

    if (newTask.trim() === "") {
      return;
    } else {
      setAllTasks([...allTasks, newTask]);
      setNewTask("");
    }
  }

  return (
    <>
      <h1>Task Manager</h1>
      <form onSubmit={createTask}>
        <input
          type="text"
          value={newTask}
          placeholder="Enter a Task"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
      <h2>Tasks</h2>
      <ul>
        {allTasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
