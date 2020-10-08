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
// hide date entry bydefault
// close buttons( X ) for forms
// *** 1 fix asc order not working at begining

// *** 2 write 20m test cases, jest and enzyme 3 to 4 hours after 2 start this one
//          Testing with side-effect
//          Function should be testable as a unit function

// *** 3 set proper id
