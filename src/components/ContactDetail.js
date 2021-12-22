import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Contact.css";
import dummy from "./dummy.png";

const ContactDetails = (props) => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div className="detail-container">
      <div>
        <img src={dummy} width={200} alt="user" />
      </div>
      <div className="detail-content">
        <div className="detail-name">name</div>
        <div className="detail-number">number</div>
      </div>
    </div>
  );
};

export default ContactDetails;
