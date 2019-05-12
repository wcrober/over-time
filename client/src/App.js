import React, { Component } from 'react';
import './App.css';


class App extends Component { 

  constructor() {

      super()

      this.state = {
        members: [],
        user_name: '',
        city: '',
        state: '',
        street_name: ''
      }
  }

  

  componentDidMount() {

    this.populateAllSaleItems()
   
  }


  populateAllSaleItems = () =>{

    let url = 'http://localhost:8080/api/members'

    fetch(url)
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
        user_name: this.state.user_name,
        city: this.state.city,
        state: this.state.state,
        street_name: this.state.street_name
        })
    }).then(response => response.json())
    .then(result => {
      if(result.success) {
        this.populateAllSaleItems()
      }else {

      }

    })

  }

  render() {

    let members = this.state.members
    let memberItems = members.map((member) => {
      return (
        <li>{member.user_name} - {member.city} - {member.state} - {member.street_name}</li>
      )
    })

    return (
      <div>
        <input onChange={this.handleTextChange} type="text" name='user_name' placeholder='username'/>
        <input onChange={this.handleTextChange} type="text" name='city' placeholder='city'/>
        <input onChange={this.handleTextChange} type="text" name='state' placeholder='state'/>
        <input onChange={this.handleTextChange} type="text" name='street_name' placeholder='street'/>
         <button onClick={this.handleSaveClick}>Save</button>
        <ul>{memberItems}</ul>
      </div> 
    )
  }

  }

export default App;
