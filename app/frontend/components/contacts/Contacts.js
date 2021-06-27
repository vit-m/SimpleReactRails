import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'

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
      {contacts && contacts.map(contact => <div key={contact.id}>{contact.name}</div>)}
    </Fragment>
  )
}

export default Contacts
