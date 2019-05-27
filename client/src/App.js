import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import Router from './Router'



const Navigation = ({ cart }) => 

<nav >
    <ul className="top-menu">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/buy">Buy</NavLink></li>
        <li><NavLink to="/sell">Sell</NavLink></li>
        <li><NavLink to="/donate">Donate</NavLink></li>
        <li><NavLink to="/Login">Login</NavLink></li>
        <li><NavLink to="/view-profile">Profile</NavLink></li>
        <li><NavLink to="/join">Join</NavLink></li> 
        <li><NavLink to="/cart">Cart ({cart.reduce((acc, item) => {
          return acc + item.quantity
        }, 0)})</NavLink></li>
        <li><NavLink to="/checkout">Check out</NavLink></li> 
    </ul>

</nav>


class App extends Component {
  render () {
    return (
      <div className="page-container">
      <Navigation { ...this.props } />
      <Router />
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}


export default connect(mapStateToProps)(App);