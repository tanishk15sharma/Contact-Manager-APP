import React from "react";
import { Link } from "react-router-dom";
import avatar from "./avatar.png";

const ContactCard = (props) => {
  const { number, id, name } = props.contact;
  return (
    <div className="manager-box">
      <div className="item">
        <img src={avatar} className="avatar-img" alt="avatar" />

        <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
          <div className="contact-name"> {name} </div>
          <div className="contact-number">{number} </div>
        </Link>
        {/* <img src="https://img.icons8.com/windows/50/fa314a/trash.png" /> */}
      </div>
      <div className="btn-box">
        <img
          className="del-btn"
          src="https://img.icons8.com/windows/50/fa314a/trash.png"
          alt="Trash Icon to del contact"
          onClick={() => props.clickHandler(id)} //this will give id to contactList (its parent)
        />
        {/* <button className="del-btn">Remove</button> */}
      </div>
    </div>
  );
};

export default ContactCard;
