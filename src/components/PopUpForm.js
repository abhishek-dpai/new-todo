import React, { useEffect, useState } from "react";
function PopUpForm(props) {
  const [description, setDescription] = useState("");
  const [date, setTheDate] = useState(null);
  const [priority, setPriority] = useState("none");
  const [detail, setDetail] = useState(null);
  const handleDescriptionChange = (event) => {
    const { value } = event.target;
    setDescription(value);
  };
  const { submitTodoHandler } = props;

  const handleDateChange = (event) => {
    const { value } = event.target;
    setTheDate(value);
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
  let priorityMessage = "null";
  switch (priority) {
    case 1:
      priorityMessage = "High";
      break;
    case 2:
      priorityMessage = "Medium";
      break;
    case 3:
      priorityMessage = "Low";
      break;
  }
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
        {/* <Calendar onChange={setTheDate} value={date} /> */}
        <input onChange={handleDateChange} type="date" name="input-date" />

        <br />
        <select value={priority} onChange={handlePriorityChange}>
          <option value="">
            {priority === "none" ? "Please Choose a Priority" : priorityMessage}
          </option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <br />
        <button onClick={handleSubmit}>Submit</button>
        <button className="details-form-close-button">
          <i class="fa fa-times" aria-hidden="true"></i>
        </button>
      </form>
    </main>
  );
}

export default PopUpForm;
