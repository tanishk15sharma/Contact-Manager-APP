import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import api from "./api/contacts";

import "./App.css";
import AddContact from "./components/AddContact";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetail";
import EditContact from "./components/EditContact";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  // const LOCAL_STORAGE_KEY = "contacts";used as local storage but now we have json server backend

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
    const response = await api.post("contacts", request); //posting the contact in the api
    setContacts([...contacts, response.data]);
  };

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    // console.log(response.data);
    const { id, name, number } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`); //api data will also be deleted

    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    // const newResponse = api.delete(id);

    setContacts(newContactList);
  };

  const searchHandler = (keyWord) => {
    //we are getting the search term from ContactList input
    // console.log(keyWord);
    setSearchTerm(keyWord);

    if (keyWord !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(keyWord.toLowerCase());
      });
      setSearchResult(newContactList);
    } else {
      setSearchResult(contacts);
    }
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
                contacts={searchTerm.length < 1 ? contacts : searchResult}
                getContactId={removeContactHandler}
                term={searchTerm}
                searchKeyWord={searchHandler}
              />
            }
          />

          <Route
            path="/edit"
            element={
              <EditContact updateContactHandler={updateContactHandler} />
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
