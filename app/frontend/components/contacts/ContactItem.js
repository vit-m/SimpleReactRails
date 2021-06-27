import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const ContactItem = ({ name, email }) => {
  return (
    <Card style={{ width: '18rem'}} className="mb-4">
      <ListGroup variant="flush">
        <ListGroup.Item variant="success">{name}</ListGroup.Item>
        <ListGroup.Item>{email}</ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default ContactItem
