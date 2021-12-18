import React, { useState, useEffect } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import Header from "./components/Header";
import List from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = "contacts";

  const addContactHandler = (contact) => {
    //we are getting contact from add.contact with the help of function addcontactHandler using props
    console.log(contact);
    setContacts([...contacts, contact]);
  };

  useEffect(() => {}, [contacts]);

  return (
    <div className="App">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <List contacts={contacts} />
    </div>
  );
}

export default App;
