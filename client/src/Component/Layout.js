import React , { Component } from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

class Menu extends Component {

    render() {
        return (
            <div>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Extra Innings</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link href="http://localhost:3000/">Home</Nav.Link>
      <Nav.Link href="http://localhost:3000/register">Register</Nav.Link>
      <Nav.Link href="http://localhost:3000/forsale">Sell</Nav.Link>
      <Nav.Link href="#link">Trade</Nav.Link>
      <Nav.Link href="#link">Donate</Nav.Link>
       <NavDropdown title="Shop By Sport" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Baseball</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Football</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Basketball</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Soccer</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#link">Sign In</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</div>
        )

    }
}

export class Layout extends Component {

    render() {
        return (
            <div>
            <Menu />
            {this.props.children}
            </div>
        )
    }
}