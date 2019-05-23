import React from 'react'
import '../Toolbar/Toolbar.css'

const toolbar = props => (
    <header className="Toolbar" >
        
        <nav>
       
                <ul>
                    <li><a href="http://localhost:3000/home">Home</a></li>
                    <li><a href="http://localhost:3000/buy">Buy</a></li>
                    <li><a href="http://localhost:3000/sell">Sell</a></li>
                    <li><a href="http://localhost:3000/cart">Cart</a></li>
                    <li><a href="http://localhost:3000/donate">Donate</a></li>
                    <li><a href="http://localhost:3000/Login">Login</a></li>
                    <li><a href="http://localhost:3000/view-profile">Profile</a></li>
                    <li><a href="http://localhost:3000/join">Join</a></li>
                   
                </ul>
            
        </nav>
        </header>
        
      
   
)

export default toolbar;