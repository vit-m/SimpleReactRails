import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'

import ContactItem from './ContactItem'

const Contacts = () => {
  const [contacts, setContacts] = useState(null)

  const getContacts = async() => {
    const { data } = await axios.get('/api/v1/contacts')
    setContacts(data.data)
  }

  useEffect(() => {
    getContacts()
  }, [])

  return (
    <Fragment>
      {contacts && contacts.map(contact => <ContactItem key={contact.id} name={contact.name} email={contact.email} />)}
    </Fragment>
  )
}

export default Contacts
