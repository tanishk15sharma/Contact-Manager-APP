import React from "react";
import "./Contact.css";

const AddContact = () => {
  return (
    <div className="AddContact-container">
      <h2>Add Contact</h2>
      <div className="name-container">
        <lable>
          <strong>Name:</strong>
        </lable>
        <input
          type="text"
          placeholder="Name"
          name="Name"
          className="input-box1"
        />
      </div>
      <div className="number-container">
        <lable>
          <strong>Number:</strong>
        </lable>
        <input
          type="text"
          placeholder="Number"
          name="Number"
          className="input-box2"
        />
      </div>
      <button className="add-btn">Add</button>
    </div>
  );
};

export default AddContact;
