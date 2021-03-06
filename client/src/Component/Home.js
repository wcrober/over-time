import React, {Component} from 'react';
import Toolbar from './Toolbar/Toolbar'



export default class Home extends Component {

    
   render(){
       return(
           <div>
           <Toolbar />
           <div className= "display-background" style={{width: '100%', margin: 'auto'}}>
           
           <img
                src="https://images.pexels.com/photos/209832/pexels-photo-209832.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="playing baseball"
                className="playingbaseball-img"
           />
           <div className="banner-text">
           <h1>Extra Innings Baseball Gear</h1>
           <hr/>
           <p> Bats | Helmets | Baseballs | Gloves | Batting Gloves | Training | Apparel </p>

           <div className="sports-links">
           {/* Baseballs */}
           <a href="http://google.com" rel="noopener noreferrer" target="_blank">
           <i className="fa fa-linkedin-square"  aria-hidden="true" />  
           </a>

           {/* baseball */}
           <a href="http://google.com" rel="noopener noreferrer" target="_blank">
           <i  class="fa fa-baseball-ball" aria-hidden="true" />
           </a>

           {/* Football */}
           <a href="http://google.com" rel="noopener noreferrer" target="_blank">
           <i className="fas fa-football-ball"  aria-hidden="true" />
           </a>

            {/* YouTube */}
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
           <i className="fa fa-youtube-square"  aria-hidden="true" />
           </a>
           </div>

           </div>
           

           </div>
           </div>
       )
   }
}
