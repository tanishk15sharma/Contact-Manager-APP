import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import AddContact from "./components/AddContact";
import Header from "./components/Header";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = "contacts";

  const addContactHandler = (contact) => {
    //we are getting contact from add.contact with the help of function addcontactHandler using props
    console.log(contacts);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)); //this is showing the contats after refresh
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)); //this is storing the contacts in local storage
  }, [contacts]);

  return (
    <div className="App">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
