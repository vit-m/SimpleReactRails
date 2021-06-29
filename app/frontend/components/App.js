import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import '../locales/i18n'

import Header from './layouts/Header'
import NotFound from './layouts/NotFound'
import AddContact from './contacts/AddContact'
import Contacts from './contacts/Contacts'

import './App.scss'

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Row className="mt-4">
          <Col>
            <Switch>
              <Route exact path='/' component={Contacts} />
              <Route exact path='/add_contact' component={AddContact} />
              <Route exact path='*' component={NotFound} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  )
}

export default App
