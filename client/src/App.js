import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import Router from './Router'


const Navigation = (props) => 

<nav >
     <ul className="header-color">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/buy">Buy</NavLink></li>
        <li><NavLink to="/sell">Sell</NavLink></li>
        <li><NavLink to="/cart">Cart</NavLink></li>
        <li><NavLink to="/donate">Donate</NavLink></li>
        <li><NavLink to="/Login">Login</NavLink></li>
        <li><NavLink to="/view-profile">Profile</NavLink></li>
        <li><NavLink to="/join">Join</NavLink></li>
      
    </ul>

</nav>


class App extends Component {
  render () {
    return (
      <div className="page-container">
      <Navigation />
      <Router />
      </div>
    )
  }
}

export default App;