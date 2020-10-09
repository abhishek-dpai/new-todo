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
    let temp = [...filteredTodos];
    switch (sortingChoice) {
      case "ascending":
        setFilteredTodos(
          temp.sort((a, b) => a.details.priority - b.details.priority)
        );
        console.log("todos after asc sorting:- ", filteredTodos);
        break;
      case "descending":
        setFilteredTodos(
          temp.sort((a, b) => b.details.priority - a.details.priority)
        );
        console.log("todos after desc sorting:- ", filteredTodos);
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  }, [todos, sortingChoice, setSortingChoice]);

  useEffect(() => {
    filterHandler();
  }, [todos, selector, filterHandler]);

  useEffect(() => {
    sortingHandler();
  }, [todos, sortingChoice, sortingHandler]);

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
