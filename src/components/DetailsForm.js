import React from "react";
function DetailsForm(props) {
  const { id, detail } = props;
  console.log("in Details form", id, " ", detail, props);

  // const filteredDetail = details.filter((detail) => {
  //   console.log(detail.id);
  //   return detail.id === id;
  // });
  let priorityMessage = "null";
  switch (detail.priority) {
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
  console.log("props in detail form are", props);
  return (
    <main className="details-form-container">
      {(detail && (
        <form className="details-form">
          <h1>ID : {id}</h1>
          <h2>Description: {detail.description}</h2>
          <h1>Date: {detail.date}</h1>
          <h1>Priority: {priorityMessage}</h1>
          <button>Close</button>
        </form>
      )) || <div>No details available</div>}
    </main>
  );
}
export default DetailsForm;
