import React, { Component } from 'react';
import '../styles/ForSale.css'


import {Row, Col, Button,  Form, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap'


class Forsale extends Component {

  constructor(){
    super()
    this.state = {
        saleitems: [],
        for_sale_email: '',
        seller_id: '',
        for_sale_item: '',
        for_sale_amount: '',
        description: ''
     }
  }

  handleTextChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSaveClick = () => {
    fetch('http://localhost:8080/api/forsale', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        saleitems: this.state.saleitems,
        forsale_email: this.state.forsale_email,
        seller_id: this.state.seller_id,
        for_sale_item: this.state.for_sale_item,
        for_sale_amount: this.state.for_sale_amount,
        description: this.state.description
        })
    }).then(response => console.log(response))

  }
 
    
    render() {
      console.log(this.state.saleitems)
        return(
            <div>
                <h3>Item For Sale</h3>
                <InputGroup className="mb-3">
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title="Select Sport"
      id="input-group-dropdown-1"
    >
      <Dropdown.Item href="#">Baseball</Dropdown.Item>
      <Dropdown.Item href="#">Football</Dropdown.Item>
      <Dropdown.Item href="#">Basketball</Dropdown.Item>
      <Dropdown.Item href="#">Soccer</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
    <FormControl aria-describedby="basic-addon1" />
  </InputGroup>

        
  <Form>
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Seller ID
    </Form.Label>
    <Col sm={10}>
      <Form.Control onChange={this.handleTextChange} type="text" placeholder="seller id" name="seller_id" />
    </Col>
  </Form.Group>
  
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control onChange={this.handleTextChange} type="email" placeholder="Email" name="forsale_email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      For Sale
    </Form.Label>
    <Col sm={10}>
      <Form.Control onChange={this.handleTextChange} type="text" placeholder="What are you selling" name="for_sale_item" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Price
    </Form.Label>
    <Col sm={10}>
      <Form.Control onChange={this.handleTextChange} type="text" placeholder="Price" name="for_sale_amount" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Description
    </Form.Label>
    <Col sm={10}>
      <Form.Control onChange={this.handleTextChange} type="text" placeholder="Describe your item (optional)" rows="3" name="description" />
    </Col>
  </Form.Group>
 <br></br>
 <hr></hr>
  <Form.Group>
    <Form.Label>Photos</Form.Label>
  <Col sm={10}>
  <FormControl  name="images[]" type="file"  />
  </Col>
</Form.Group>
<br></br>



<Button onClick={this.handleSaveClick} variant="primary" type="submit">
    Submit
  </Button>

</Form>
     </div>             
             
        )
    }
}
export default Forsale;