import React from "react";
import avatar from "./avatar.png";

const ContactCard = (props) => {
  const { number, id, name } = props.contact;
  return (
    <div className="manager-box">
      <div className="item">
        <img src={avatar} className="avatar-img" />
        <div className="contact-name"> {name} </div>
        <div className="contact-number">{number} </div>
        {/* <img src="https://img.icons8.com/windows/50/fa314a/trash.png" /> */}
      </div>
      <div className="btn-box">
        <img
          className="del-btn"
          src="https://img.icons8.com/windows/50/fa314a/trash.png"
        />

        {/* <button className="del-btn">Remove</button> */}
      </div>
    </div>
  );
};

export default ContactCard;
