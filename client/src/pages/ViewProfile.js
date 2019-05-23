import React, { Component } from 'react';




class ViewProfile extends Component{


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
      <div className="display-grid">
      
        <h1>Profile</h1>
        <p>Update Profile</p>
        <button onClick={this.handleSaveClick} variant="primary" type="submit">Submit</button>
        <ul className="home-grid">{memberItems}</ul>
      </div>

    )
  }

}

export default ViewProfile;