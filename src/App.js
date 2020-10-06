import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  const [todos, setTodos] = useState([]);
  const [selector, setSelector] = useState("all"); // used for selecting all, completed and uncompleted
  const [sortingChoice, setSortingChoice] = useState("unsorted");
  return (
    <div className="App">
      <header>
        <h1> Abhishek's Todo App </h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setSelector={setSelector}
        setSortingChoice={setSortingChoice}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        selector={selector}
        sortingChoice={sortingChoice}
        setSortingChoice={setSortingChoice}
      />
    </div>
  );
}

export default App;
