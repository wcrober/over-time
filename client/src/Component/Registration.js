import React, { Component } from 'react';
import { Button, Form, Row, Col  } from 'react-bootstrap';

class App extends Component { 

  constructor() {

      super()

      this.state = {
        members: [],
        email: '',
        password: '',
        address: '',
        address_two: '',
        city: '',
        state: '',
        zip: ''
        
      }
  }

  
  componentDidMount() {
    this.populateAllSaleItems()
  }

  populateAllSaleItems = () => {
    fetch('http://localhost:8080/api/members')
    .then(response => response.json())
    .then(json => {
      this.setState ({
        members: json
      })
    })
  }

  
  handleTextChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }


  handleSaveClick = () => {
    
    fetch('http://localhost:8080/api/members', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        address: this.state.address,
        address_two: this.state.address_two,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        })
    }).then(response => response.json())
    .then(result => {
      if(result.success) {
        this.populateAllSaleItems()
      }else {
        //show same error from server
      }

    })

  }

  render() {
    let members = this.state.members
    let memberItems = members.map((member) => {
      return (
        <li>{member.email} -  {member.address} - {member.address_two} - {member.city}</li>
      )
    })

    return (
      <div>
          <h1>Registration</h1>
   <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label >Email</Form.Label>
      <Form.Control onChange={this.handleTextChange} type="email" name='email' placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control onChange={this.handleTextChange} type="password" name='password' placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control onChange={this.handleTextChange} type="text" name='address' placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control onChange={this.handleTextChange} type="text" name='address_two' placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label >City</Form.Label>
      <Form.Control onChange={this.handleTextChange} type="text" name='city' />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control onChange={this.handleTextChange} type="text" name='state' as="select">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control onChange={this.handleTextChange} type="text" name='zip' />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button onClick={this.handleSaveClick} variant="primary" type="submit">
    Submit
  </Button>
</Form>
      
        <ul>{memberItems}</ul>
    </div> 
    )
  }

}
export default App;