import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import styled from 'styled-components'
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'

const NavbarDiv = styled.div`
display: block;
text-align: center;
`

const unauthenticatedOptions = (
  <NavbarDiv style={{ width: '100%', textAlign: 'center' }}>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </NavbarDiv>
)

const alwaysOptions = (
  <NavbarDiv>
  </NavbarDiv>
)
const Header = ({ user }) => {
  const [openAccount, setOpenAccount] = useState(false)
  const [openBrew, setOpenBrew] = useState(false)
  const authenticatedOptions = (
    <NavbarDiv style={{ width: '100%', textAlign: 'center' }}>
      { user && <div className="navbar-text">Welcome, {user.email}</div>}
      <br />
      <Button
        style={{ backgroundColor: '#CEB2DF', color: 'text-secondary' }}
        variant='outline-secondary'
        onClick={() => setOpenAccount(!openAccount)}
        aria-controls="collapse-Account"
        aria-expanded={openAccount}
      >Account</Button>
      <Collapse in={openAccount}>
        <div id="collapse-Account" >
          <Link to={'/change-password'} style={{ 'color': '#939B9F' }}>Change Password</Link>
          <br />
          <Link to={'/sign-out'} style={{ 'color': '#939B9F' }}>Sign Out</Link>
        </div>
      </Collapse>
      <br />
      <Button
        style={{ backgroundColor: '#CEB2DF', color: 'text-secondary' }}
        variant='outline-secondary'
        onClick={() => setOpenBrew(!openBrew)}
        aria-controls="collapse-Brew"
        aria-expanded={openBrew}
      >Brew</Button>
      <Collapse in={openBrew}>
        <div id="collapse-Brew" >
          <Link to={'/new-brew'} style={{ 'color': '#939B9F' }}>New Recipe</Link>
          <br />
          <Link to={'/view-brews'} style={{ 'color': '#939B9F' }}>View All Recipes</Link>
        </div>
      </Collapse>
      {/* <NavDropdown title='Account'>
        <NavDropdown.Item href="#change-password">Change Password</NavDropdown.Item>
        <NavDropdown.Item href="#sign-out">Sign Out</NavDropdown.Item>
      </NavDropdown> */}
      {/* <NavDropdown title='Brews'>
        <NavDropdown.Item href="#new-brew">New Recipe</NavDropdown.Item>
        <NavDropdown.Item href="#view-brews">View All Recipes</NavDropdown.Item>
      </NavDropdown> */}
    </NavbarDiv>
  )

  return (<Navbar bg="dark" variant="dark" expand="md" style={{ display: 'block' }}>
    <Navbar.Brand style={{ width: '100%', textAlign: 'center' }}>
      { 'Aegir\'s Corner' }
    </Navbar.Brand>
    <Nav className="ml-auto">
      { alwaysOptions }
      { user ? authenticatedOptions : unauthenticatedOptions }
      {/* { authenticatedOptions }
      { unauthenticatedOptions } */}
    </Nav>
  </Navbar>
  )
}

export default Header
