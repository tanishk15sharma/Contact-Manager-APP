import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  // console.log(props);

  const deleteContactHandler = (id) => {
    props.getContactId(id); //this will give ID to App.js (to main parent  )
    // console.log(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    console.log(contact.name);
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
      <h1>Contact List</h1>
      {renderContactList}
    </div>
  );
};

export default ContactList;
