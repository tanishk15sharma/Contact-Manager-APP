import React from "react";
import { Link } from "react-router-dom";
import avatar from "./avatar.png";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
// import edit from "edit.png";
import Edit from "./Edit-icon.png";

const ContactCard = (props) => {
  const { number, id, name } = props.contact;

  const deleteAction = (id) => {
    confirmAlert({
      title: "Delete contact",
      message: "Are you sure to do this ?",
      buttons: [
        {
          label: "Yes",
          onClick: () => props.clickHandler(id),
        },
        {
          label: "No",
          onClick: () => null,
        },
      ],
    });
  };

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
        {/* <Link to={"/confirm"}> */}

        <Link to={"/edit"} state={{ contact: props.contact }}>
          <img src={Edit} width={45} className="edit-icon" />
        </Link>

        <img
          className="del-btn"
          src="https://img.icons8.com/windows/50/fa314a/trash.png"
          alt="Trash Icon to del contact"
          onClick={() => deleteAction(id)} //this will give id to contactList (its parent)
        />
        {/* </Link> */}
        {/* <button className="del-btn">Remove</button> */}
      </div>
    </div>
  );
};

export default ContactCard;
