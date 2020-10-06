import React, { useState } from "react";
import DetailsForm from "./DetailsForm";

const Todo = (props) => {
  // console.log("props are", props);
  const { todo, todos, setTodos } = props; //id,
  const { id: todoId } = todo || {};
  console.log("Todo details in props are", todo.detail, "props are", props);
  const [showDetails, setShowDetails] = useState(null);
  //events
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const detailHandler = () => {
    setShowDetails(true);
  };

  return (
    <>
      <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
          {todo.inpuText}
        </li>
        <li>Priority: {todo.priorityNum}</li>
        <button onClick={completeHandler} className="complete-btn">
          <i className="fas fa-check"> </i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          <i className="fas fa-trash"> </i>
        </button>
        <button onClick={detailHandler} className="detail-handler">
          Details
        </button>
      </div>
      {showDetails ? <DetailsForm id={todo.id} detail={todo.detail} /> : null}
    </>
  );
};
export default Todo;
