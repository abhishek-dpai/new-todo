import React, { useState, useEffect, useCallback } from "react";
import Todo from "./Todo";
const TodoList = (props) => {
  const [filteredTodos, setFilteredTodos] = useState([]);
  const { selector, todos, setTodos, setSortingChoice, sortingChoice } = props;

  const filterHandler = useCallback(() => {
    console.log("in filterHandler");
    switch (selector) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }, [todos, selector, setFilteredTodos]);

  const sortingHandler = useCallback(() => {
    console.log("in sortingHandler");
    switch (sortingChoice) {
      case "ascending":
        setFilteredTodos(
          todos.sort((a, b) => a.detail.priority - b.detail.priority)
        );
        break;
      case "descending":
        setFilteredTodos(
          todos.sort((a, b) => b.detail.priority - a.detail.priority)
        );
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  }, [sortingChoice, setSortingChoice]);

  useEffect(() => {
    filterHandler();
  }, [todos, selector, filterHandler]);

  useEffect(() => {
    sortingHandler();
  }, [sortingChoice, sortingHandler]);

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
