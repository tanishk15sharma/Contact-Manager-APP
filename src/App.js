import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import api from "./api/contacts";

import "./App.css";
import AddContact from "./components/AddContact";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetail";

function App() {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = "contacts";

  //this will retrieve contacts
  const retrieveContacts = async () => {
    const response = await api.get("contacts");
    return response.data;
  };

  const addContactHandler = async (contact) => {
    //we are getting contact from add.contact with the help of function addcontactHandler using props
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = await api.post("contacts", request);
    setContacts([...contacts, response.data]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  //previously we are taking data from local storage .
  //Now we will take the data from the server
  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)); //this is showing the contats after refresh
    // if (retriveContacts) setContacts(retriveContacts);

    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };

    getAllContacts();
  }, []);

  useEffect(() => {
    //  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)); //this is storing the contacts in local storage
  }, [contacts]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="/"
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          />
          <Route path="/contact/:id" element={<ContactDetails />} />
        </Routes>
        {/* <AddContact addContactHandler={addContactHandler} /> */}
        {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      </Router>
    </div>
  );
}

export default App;
