import React, { useState, useEffect } from "react";
import PopUpForm from "./PopUpForm";
import "../App.css";
const Form = (props) => {
  const [inputText, setInputText] = useState("");
  const [detail, setDetail] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const [newId] = useState(Math.floor(Math.random() * 1000000));
  const { setStatus, todos, setTodos } = props;
  useEffect(() => {
    getLocalTodos();
  }, []);
  useEffect(() => {
    saveLocalTodos();
  }, [todos]);

  //save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    // console.log("newId=" + newId);
    e.preventDefault(); // stops browser from refreshing
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
          onClick={setShowPopUp(true)}
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
      {submitTodoHandler}
    </>
  );
};

export default Form;
