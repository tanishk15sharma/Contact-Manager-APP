import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  // console.log(props);

  const renderContactList = props.contacts.map((contact) => {
    console.log(contact.name);
    return <ContactCard contact={contact} />;
  });

  return <div> {renderContactList} </div>;
};

export default ContactList;
