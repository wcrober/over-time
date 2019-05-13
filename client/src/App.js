import React, { Component } from 'react';
import './App.css';
import Registration from './Component/Registration';
import Profile from './Component/Profile';





class App extends Component { 

  

  render() {
    

    return (
      <div>
       <Registration />
       <Profile />
      </div>
    )
     
  }

}
export default App;