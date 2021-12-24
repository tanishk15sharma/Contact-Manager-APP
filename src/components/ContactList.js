import React, { useRef } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  console.log(props);
  const inputE1 = useRef("");

  const deleteContactHandler = (id) => {
    props.getContactId(id); //this will give ID to App.js (to main parent)
    // console.log(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <div>
        <ContactCard
          contact={contact}
          clickHandler={deleteContactHandler}
          key={contact.id}
        />
      </div>
    );
  });

  const getSearchTerm = () => {
    // console.log(inputE1.current.value);
    props.searchKeyWord(inputE1.current.value);
  };

  return (
    <div>
      <div className="contact-header">
        <h1>Contact List</h1>
        <Link to="/add">
          <button className="add-contact-btn">Add Contact</button>
        </Link>
      </div>
      <div className="search-name-div">
        <input
          ref={inputE1}
          type="text"
          placeholder="Search Contacts"
          className="prompt-search"
          value={props.term}
          onChange={getSearchTerm}
        />
      </div>
      {renderContactList}
    </div>
  );
};

export default ContactList;
