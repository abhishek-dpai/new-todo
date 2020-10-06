import React, { useState, useEffect, useCallback } from "react";
import PopUpForm from "./PopUpForm";
import "../App.css";
const Form = (props) => {
  const [inputText, setInputText] = useState("");
  const [detail, setDetail] = useState({});
  const [showPopUp, setShowPopUp] = useState(false);
  const [newId] = useState(Math.floor(Math.random() * 1000000));
  const { setStatus, todos, setTodos } = props;

  //save to local
  const saveLocalTodos = (currentTodos) => {
    localStorage.setItem("todos", JSON.stringify(currentTodos));
  };

  const getLocalTodos = useCallback(() => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }, [setTodos]);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = () => {
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: newId,
        details: detail,
      },
    ]);

    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  const handleToggleButtonClick = (e) => {
    e.preventDefault(); // stops browser from refreshing

    setShowPopUp(true);
  };
  useEffect(() => {
    getLocalTodos();
  }, [getLocalTodos]);
  useEffect(() => {
    saveLocalTodos(todos);
  }, [todos]);

  useEffect(() => {
    submitTodoHandler();
  }, [detail]);

  return (
    <>
      <form>
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <button
          onClick={handleToggleButtonClick}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
            <option value="sorted">Sorted</option>
          </select>
        </div>
      </form>
      {showPopUp === true && <PopUpForm setDetail={setDetail} />}
    </>
  );
};

export default Form;
