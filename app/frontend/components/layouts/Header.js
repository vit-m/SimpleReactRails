import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t, i18n } = useTranslation('common')

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">{t('navi.contacts')}</Nav.Link>
          <Nav.Link href="#">{t('navi.add_contacts')}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
