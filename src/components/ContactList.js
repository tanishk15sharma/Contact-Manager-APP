import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  // console.log(props);

  const deleteContactHandler = (id) => {
    props.getContactId(id);
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

  return <div> {renderContactList} </div>;
};

export default ContactList;
