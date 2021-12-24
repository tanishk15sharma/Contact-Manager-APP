import React from 'react'
import ContactCard from './ContactCard'
import { Link } from 'react-router-dom'

const ContactList = props => {
  // console.log(props);

  const deleteContactHandler = id => {
    props.getContactId(id) //this will give ID to App.js (to main parent)
    // console.log(id);
  }

  const renderContactList = props.contacts.map(contact => {
    return (
      <div>
        <ContactCard
          contact={contact}
          clickHandler={deleteContactHandler}
          key={contact.id}
        />
      </div>
    )
  })

  return (
    <div>
      <div className="contact-header">
        <h1>Contact List</h1>
        <Link to="/add">
          <button className="add-contact-btn">Add Contact</button>
        </Link>
      </div>
      {renderContactList}
    </div>
  )
}

export default ContactList
