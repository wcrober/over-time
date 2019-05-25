import ProductListing from '../features/product-listing'
import React, { Component } from 'react';




class Homepage extends Component {

    constructor(props){
        super(props)
        this.state = {
            saleitems: []
            }
    }
    
    componentDidMount() {

        fetch('http://localhost:8080/api/forsale')
        .then(response => response.json())
        .then(saleitems => {
          this.setState({saleitems: saleitems})
          console.log('homestate', saleitems)
        })
        
      }


    render(){         
            return( 
                <div>
                  <h1>homepage</h1>
                  <ProductListing products={this.state.saleitems} />              
                </div>  
            )
        } 
        
    }

    

    

export default Homepage