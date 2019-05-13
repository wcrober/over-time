import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Profile extends Component{


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
      fetch('http://localhost:8080/api/members')
      .then(response => response.json())
      .then(json => {
        this.setState({
          members: json

        })
      }
      )

  }

  render(){

    let members = this.state.members
    let memberItems = members.map((member) => {
      return(
        <li>Name: {member.email} Address: {member.address}</li>
      )
    })

    return(
      <div>
        <h1>Profile</h1>
        <p>Update Profile</p>
        <Button onClick={this.handleSaveClick} variant="primary" type="submit">Submit</Button>
        <ul>{memberItems}</ul>
      </div>

    )
  }

}

export default Profile;