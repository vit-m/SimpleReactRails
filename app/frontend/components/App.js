import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../locales/i18n'

import Header from './layouts/Header'
import Contacts from './contacts/Contacts'

import './App.scss'

const App = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <Row className="mt-4">
          <Col>
            <Contacts />
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default App
