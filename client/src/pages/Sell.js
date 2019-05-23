import React, { Component } from 'react';
import FileUpload from '../Component/FileUpload'
import {Row, Col, Button, Container,  Form} from 'react-bootstrap'



class Sell extends Component {

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
            <div className= "display-background" style={{width: '100%', margin: 'auto'}} >
          
            <Container className="home-grid">
             
                <h3>Sell An Item</h3>
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
      <Button onClick={this.handleSaveClick} variant="primary" type="submit">
        submit
      </Button>
      <hr></hr>
  </Form>
    <FileUpload />
      </Container>
     </div>                 
        )
    }
}
export default Sell;