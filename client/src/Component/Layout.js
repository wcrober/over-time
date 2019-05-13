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
  <Navbar.Text>
      Signed in as: <a href="#login">Will Roberts</a>
    </Navbar.Text>
    <Nav className="mr-auto">
      <Nav.Link href="hhttp://localhost:3000/">Home</Nav.Link>
      <Nav.Link href="hhttp://localhost:3000/">Register</Nav.Link>
      <Nav.Link href="#link">Sell</Nav.Link>
      <Nav.Link href="#link">Trade</Nav.Link>
      <Nav.Link href="#link">Donate</Nav.Link>
      <NavDropdown title="Shop Categories" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Bats</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Gloves</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Apparel Uniforms </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Training Equipment </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Donate</NavDropdown.Item>
      </NavDropdown>
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