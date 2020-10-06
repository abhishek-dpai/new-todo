import React, { useState, useEffect, useCallback } from "react";
import Todo from "./Todo";
const TodoList = (props) => {
  const [filteredTodos, setFilteredTodos] = useState([]);
  const { status, todos, setTodos } = props;

  const filterHandler = useCallback(() => {
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
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }, [todos, status, setFilteredTodos]);

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
