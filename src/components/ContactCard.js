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
        <div className="user-div">
          {/* <img src={avatar} className="avatar-img" alt="avatar" /> */}

          <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
            <div>
              {/* <img src={avatar} className="avatar-img" alt="avatar" /> */}
            </div>
            <div>
              <img src={avatar} className="avatar-img" alt="avatar" />

              <span className="contact-name"> {name} </span>
              <br></br>
              <span className="contact-number">{number} </span>
            </div>
          </Link>
        </div>
        {/* <img src="https://img.icons8.com/windows/50/fa314a/trash.png" /> */}
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
      {/* <div className="btn-box">
        {/* <Link to={"/confirm"}> */}

      {/* <Link to={"/edit"} state={{ contact: props.contact }}>
          <img src={Edit} width={45} className="edit-icon" />
        </Link>

        <img
          className="del-btn"
          src="https://img.icons8.com/windows/50/fa314a/trash.png"
          alt="Trash Icon to del contact"
          onClick={() => deleteAction(id)} //this will give id to contactList (its parent)
        /> */}
      {/* </Link> */}
      {/* <button className="del-btn">Remove</button> */}
    </div>
  );
};

export default ContactCard;
