import React from "react";

const ContactList = (props) => {
  console.log(props);

  const renderContactList = props.contacts.map((contact) => {
    console.log(contact.name);
    return (
      <div className="manager-box">
        <div className="item">
          <div className="contact-name"> {contact.name} </div>
          <div className="contact-number">{contact.number} </div>
        </div>
        <div className="btn-box">
          <button className="del-btn">Remove</button>
        </div>
      </div>
    );
  });

  return <div> {renderContactList} </div>;
};

export default ContactList;
