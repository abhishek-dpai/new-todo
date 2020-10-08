import React, { useState, useEffect, useCallback } from "react";
import PopUpForm from "./PopUpForm";
import "../App.css";
const Form = (props) => {
  const [inputText, setInputText] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const [newId, setNewId] = useState(0);
  const { setSortingChoice, setSelector, todos, setTodos } = props;

  const saveLocalNewId = (newId) => {
    localStorage.setItem("newId", JSON.stringify(newId));
  };
  const getLocalNewId = useCallback(() => {
    if (localStorage.getItem("newId") === null) {
      localStorage.setItem("newId", JSON.stringify(newId));
    } else {
      let newIdLocal = JSON.parse(localStorage.getItem("newId"));
      setNewId(newIdLocal);
    }
  }, [setNewId]);

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
  const submitTodoHandler = (detail) => {
    // debugger;
    setNewId(newId + 1);
    setTodos([
      ...todos,
      {
        inputText: inputText,
        completed: false,
        id: newId,
        details: detail,
      },
    ]);

    setInputText("");
  };

  const selectorHandler = (e) => {
    setSelector(e.target.value);
  };
  const sortingHandler = (e) => {
    setSortingChoice(e.target.value);
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
    getLocalNewId();
  }, [getLocalNewId]);
  useEffect(() => {
    saveLocalNewId(newId);
  }, [newId]);

  // useEffect(() => {
  //   debugger;
  //   console.log("details in useEffect =", detail);
  //   if(detail){
  //     submitTodoHandler(detail);
  //   }
  // }, [detail]);

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
          <select
            onChange={selectorHandler}
            name="todos"
            className="filter-todo"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
        <div className="select">
          <select
            onChange={sortingHandler}
            name="todos"
            className="filter-todo"
          >
            <option value="unsorted">Unsorted</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
      </form>
      {showPopUp === true && (
        <PopUpForm submitTodoHandler={submitTodoHandler} />
      )}
    </>
  );
};

export default Form;
