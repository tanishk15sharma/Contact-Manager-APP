import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  // console.log(props);

  const deleteContactHandler = (id) => {
    props.getContactId(id); //this will give ID to App.js (to main parent  )
    // console.log(id);
  };

  // const contacts = [
  //   {
  //     id: "1",
  //     name: "kaka",
  //     number: "1212",
  //   },
  // ];

  const renderContactList = props.contacts.map((contact) => {
    // console.log(contact.name);
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  return (
    <div>
      <h1>
        Contact List
        <Link to="/add">
          <button className="add-contact-btn">Add Contact</button>
        </Link>
      </h1>
      {renderContactList}
    </div>
  );
};

export default ContactList;
