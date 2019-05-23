import React, { Component } from 'react';




class Menu extends Component {

  render() {
      return (
        <div className='header-color'>
           <ul>
              
           </ul>
        </div>
          
      )

  }
}

export class BaseLayout extends Component {

  render() {
      return (
          <div>
          <Menu />
          {this.props.children}
          </div>
      )
  }
}


