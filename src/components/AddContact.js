import React from "react";
import "./Contact.css";

const AddContact = () => {
  return (
    <div className="AddContact-container">
      <h2>Add Contact</h2>
      <div className="name-container">
        <lable>Name</lable>
        <input
          type="text"
          placeholder="Name"
          name="Name"
          className="input-box1"
        />
      </div>
      <div className="number-container">
        <lable>Number</lable>
        <input
          type="text"
          placeholder="Number"
          name="Number"
          className="input-box2"
        />
      </div>
    </div>
  );
};

export default AddContact;
