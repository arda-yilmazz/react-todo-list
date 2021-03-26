import "./style.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const inputHandle = (e) => {
    setInput(e.target.value);
  };

  const clickHandle = () => {
    if (input === "") {
      alert("Ne yapacağına karar ver!");
    } else if (todos.find((todo) => todo.name === input)) {
      alert("Bunu zaten yapacaksın!");
      setInput("");
    } else {
      const newTodo = {
        name: input,
        done: false,
      };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };

  const removeTodo = (todoKey) => {
    setTodos(todos.filter((todo, key) => key !== todoKey));
  };

  const toggleTodo = (todoKey) => {
    setTodos(
      todos.map((todo, key) => {
        if (key === todoKey) {
          todo.done = !todo.done;
        }
        return todo;
      })
    );
  };

  return (
    <div className="App">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={input}
          onChange={inputHandle}
          placeholder="Ne yapacaksın?"
          autoFocus
        />
        <button onClick={clickHandle}>Ekle</button>
      </form>
      <ul>
        {todos.map((todo, key) => (
          <li key={key} className={todo.done ? "done" : ""}>
            <span onClick={() => toggleTodo(key)}>{todo.name}</span>
            <button onClick={() => removeTodo(key)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
