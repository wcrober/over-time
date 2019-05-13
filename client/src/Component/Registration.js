import React, { Component } from 'react';
import { Button, Form, Row, Col  } from 'react-bootstrap';

class Registration extends Component { 

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
    //console.log(this.state.members)
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
        // Show success message from the server
      }else {
        //show same error from server
      }

    })

  }

  render() {
    console.log(this.state.members)
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
      <Form.Control size="sm" onChange={this.handleTextChange} type="email" name='email' placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control size="sm" onChange={this.handleTextChange} type="password" name='password' placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control size="sm" onChange={this.handleTextChange} type="text" name='address' placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control size="sm" onChange={this.handleTextChange} type="text" name='address_two' placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label >City</Form.Label>
      <Form.Control size="sm" onChange={this.handleTextChange} type="text" name='city' />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control size="sm" onChange={this.handleTextChange} type="text" name='state' as="select">
        <option>Choose...</option>
        <option>Alabama - AL</option>
        <option>Alaska - AK</option>
        <option>Arizona - AZ</option>
        <option>Arkansas - AR</option>
        <option>California - CA</option>
        <option>Colorado - CO</option>
        <option>Connecticut - CT</option>
        <option>Delaware - DE</option>
        <option>Florida - FL</option>
        <option>Georgia - GA</option>
        <option>Hawaii - HI</option>
        <option>Idaho - ID</option>
        <option>Illinois - IL</option>
        <option>Indiana - IN</option>
        <option>Iowa - IA</option>
        <option>Kansas - KS</option>
        <option>Kentucky - KY</option>
        <option>Louisiana - LA</option>
        <option>Maine - ME</option>
        <option>Maryland - MD</option>
        <option>Massachusetts - MA</option>
        <option>Michigan - MI</option>
        <option>Minnesota - MN</option>
        <option>Mississippi - MS</option>
        <option>Missouri - MO</option>
        <option>Montana - MT</option>
        <option>Nebraska - NE</option>
        <option>Nevada - NV</option>
        <option>New Hampshire - NH</option>
        <option>New Jersey - NJ</option>
        <option>New Mexico - NM</option>
        <option>New York - NY</option>
        <option>North Carolina - NC</option>
        <option>North Dakota - ND</option>
        <option>Ohio - OH</option>
        <option>Oklahoma - OK</option>
        <option>Oregon - OR</option>
        <option>Pennsylvania - PA</option>
        <option>Rhode Island - RI</option>
        <option>South Carolina - SC</option>
        <option>South Dakota - SD</option>
        <option>Tennessee - TN</option>
        <option>Texas - TX</option>
        <option>Utah - UT</option>
        <option>Vermont - VT</option>
        <option>Virginia - VA</option>
        <option>Washington - WA</option>
        <option>West Virginia - WV</option>
        <option>Wisconsin - WI</option>
        <option>Wyoming - WY</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control size="sm" onChange={this.handleTextChange} type="text" name='zip' />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button onClick={this.handleSaveClick} variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div> 
    )
  }

}
export default Registration;