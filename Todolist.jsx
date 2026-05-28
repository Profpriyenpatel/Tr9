import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTask = () => {
    setTodoList([
      ...todoList,
      { id: Date.now(), name: task }
    ]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div>
      <input value={task} onChange={(e) => setTask(e.target.value)} />

      <button onClick={addTask}>Add</button>

      {todoList.map((task) => (
        <div key={task.id}>
          <h3>{task.name}</h3>

          <button onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
