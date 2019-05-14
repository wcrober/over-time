import React, { Component } from 'react';
import '../styles/ForSale.css'


import {Row, Col, Button,  Form, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap'


class Forsale extends Component {
    
    render() {
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
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      For Sale
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="What are you selling" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Price
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Description
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Describe your item (optional) " rows="3" />
    </Col>
  </Form.Group>

  <Form.Group>
    <Form.Label>Photos</Form.Label>
    <Col sm={10}>
    <FormControl name="images[]" type="file" />
    </Col>
</Form.Group>

</Form>
     </div>             
             
        )
    }
}
export default Forsale;