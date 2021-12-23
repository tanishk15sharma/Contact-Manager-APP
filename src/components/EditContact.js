import React, { useState } from "react";

import "./Contact.css";
import { useNavigate, useLocation } from "react-router-dom";

const EditContact = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id, name, number } = location.state.contact;

  const [state, setState] = useState({
    id,
    name,
    number,
  });

  const changeHandler = (e) => {
    const { name, value } = e.target; //using this method , we just have to create this handler and we can add asa many inputs
    setState((initialState) => ({ ...initialState, [name]: value }));
  };

  const update = (e) => {
    e.preventDefault();
    if (state.name === "" || state.number === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    // console.log(state);
    props.addContactHandler(state); //sending state to our function in the app
    setState({ name: "", number: "" });

    navigate("/");
  };

  return (
    <div className="AddContact-container">
      <h2>Add Contact</h2>
      <form onSubmit={update}>
        <div className="name-container">
          <label>
            <strong>Name:</strong>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input-box1"
            value={state.name}
            onChange={changeHandler}
          />
        </div>
        <div className="number-container">
          <label>
            <strong>Number:</strong>
          </label>
          <input
            type="text"
            placeholder="Number"
            name="number"
            // name="Number"
            className="input-box2"
            value={state.number}
            // onChange={handleNumber}
            onChange={changeHandler}
          />
        </div>
        <button className="add-btn">Add</button>
      </form>
    </div>
  );
};

export default EditContact;
