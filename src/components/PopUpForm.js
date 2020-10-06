import React, { useState } from "react";

function PopUpForm(props) {
  const [description, setDescription] = useState("");
  const [date, setTheDate] = useState("");
  const [priority, setPriority] = useState(-1);
  // const [detail, setDetail] = useState({});
  const handleDescriptionChange = (event) => {
    const { value } = event.target;
    setDescription(value);
  };
  const { setDetail } = props;

  const handleDateChange = (event) => {
    const { value } = event.target;
    setTheDate(value);
  };
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
    debugger;

    setDetail({ description: description, date: date, priority: priority });
  };

  return (
    <main className="todo-popup-container">
      <form className="popup-form" onSubmit={handleSubmit}>
        <input
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Description"
        />
        <br />
        <input value={date} onChange={handleDateChange} placeholder="Date" />

        <br />
        <select value={priority} onChange={handlePriorityChange}>
          <option value="">-- Please Choose a Priority --</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <br />
        <button>Submit</button>
      </form>
      <hr />
      <h2>Entered information:</h2>
      <p>Entered Description: {description}</p>
      <p>Entered Date: {date}</p>
      <p>Choosed Priority: {priority}</p>
      {/* <p>Details: {details}</p> */}
    </main>
  );
}

export default PopUpForm;
