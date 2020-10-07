import React, { useEffect, useState } from "react";

import Calendar from "react-calendar";
function PopUpForm(props) {
  const [description, setDescription] = useState("");
  const [date, setTheDate] = useState(null);
  const [priority, setPriority] = useState(-1);
  const [detail, setDetail] = useState(null);
  const handleDescriptionChange = (event) => {
    const { value } = event.target;
    setDescription(value);
  };
  const { submitTodoHandler } = props;

  const handleDateChange = (date) => {
    setTheDate(date);
  };

  // const handleDateChange = (event) => {
  //   const { value } = event.target;
  //   setTheDate(value);
  // };
  const handlePriorityChange = (event) => {
    const { value } = event.target;
    setPriority(value);
    switch (value) {
      case "low":
        setPriority(3);
        break;
      case "medium":
        setPriority(2);
        break;
      case "high":
        setPriority(1);
        break;
      default:
        console.log(" default case reached in setPriority = ", priority);
        break;
    }
  };
  const handleSubmit = (e) => {
    // debugger;
    // e.preventDefault()
    // commented preventDefault because it was stopping the PopUpForm from closing at submition
    setDetail({ description: description, date: date, priority: priority });
  };

  useEffect(() => {
    console.log("detail is", detail);
    if (detail) {
      submitTodoHandler(detail);
    }
  }, [detail]);
  return (
    <main className="todo-popup-container">
      <form className="popup-form">
        <input
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Description"
        />
        <br />
        {/* <input value={date} onChange={handleDateChange} placeholder="Date" /> */}
        <Calendar onChange={setTheDate} value={date} />
        <br />
        <select value={priority} onChange={handlePriorityChange}>
          <option value="">-- Please Choose a Priority --</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <hr />
      <h2>Entered information:</h2>
      <p>Entered Description: {description}</p>
      <p>Entered Date: {date && date.toDateString() || 'please add valid date'}</p>
      <p>Choosed Priority: {priority}</p>
      {/* <p>Details: {details}</p> */}
    </main>
  );
}

export default PopUpForm;
