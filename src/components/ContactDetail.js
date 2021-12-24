import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Contact.css";
import dummy from "./dummy.png";

const ContactDetails = () => {
  const location = useLocation();
  console.log(location.state); //this will take the object state and return it here
  const { name, number } = location.state.contact;
  return (
    <div className="main-detail">
      <div className="detail-container">
        <div className="img-div">
          <img src={dummy} alt="user" className="contact-img" />
        </div>
        <div className="detail-content">
          <div className="detail-name">{name}</div>
          <div className="detail-number">{number}</div>
        </div>
      </div>
      <div className="btn-div">
        <Link to={"/"}>
          <button className="btn-detail">Back To Contact List</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetails;
