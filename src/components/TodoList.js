import React, { useState, useEffect } from "react";
import Todo from "./Todo";
const TodoList = (props) => {
  const [filteredTodos, setFilteredTodos] = useState([]);
  const { status, todos, setTodos } = props;
  console.log("filtered todos in todolist=", filteredTodos);

  const filterHandler = () => {
    console.log("in filterHandler");
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      case "sorted":
        setFilteredTodos(
          todos.sort((a, b) => {
            return a.detail.priority - b.detail.priority;
          })
        );
        console.log("Will be sorted now!!!!!!");
        console.log("new filtered todos=", filteredTodos);
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  useEffect(() => {
    filterHandler();
  }, [todos, status, filterHandler]);

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id} //key is passed to remove the unique key warning
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
