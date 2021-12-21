import React, { useState } from "react";
import "./Contact.css";
import { useNavigate } from "react-router-dom";

// import { addContactHandler } from "./App.js";

const AddContact = (props) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    name: "",
    number: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target; //using this method , we just have to create this handler and we can add asa many inputs
    setState({ ...state, [name]: value });
  };

  // console.log(this.props); //this is not avalible becasue it is a functional component

  // const handleName = (e) => {
  //   setState({ ...state, name: e.target.value });   //using this  method , we have to create handler of each input
  // };

  // const handleNumber = (e) => {
  //   setState({ ...state, number: e.target.value });
  // //

  // const addHandler = (e) => {
  //   // console();
  //   e.preventDefault();

  //   if (state.name === "" || state.number === "") {
  //     alert("All fields are mandatory");
  //     return;
  //   }
  //   this.props.addContactHandler(this.state);
  //   // this.props.addContactHandler(this.state.name);
  //   console.log(state);
  // };

  const add = (e) => {
    // const navigate = useNavigate();

    e.preventDefault();
    if (state.name === "" || state.number === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    console.log(state);
    props.addContactHandler(state);
    setState({ name: "", number: "" });
    // console.log(props);
    // const navigate = useNavigate();
    // props.history.push("/");
    // useHistory().push("/");
    navigate("/");
  };

  return (
    <div className="AddContact-container">
      <h2>Add Contact</h2>
      <form onSubmit={add}>
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

          {/* <input
            type="text"
            placeholder="age"
            name="age"
            className="input-box1"
            value={state.age}
            onChange={changeHandler}
          /> */}
        </div>
        <button className="add-btn">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
