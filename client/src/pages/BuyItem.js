import ProductListing from '../features/product-listing'
import React, { Component } from 'react';



class BuyItem extends Component {

    render(){         
        return( 
            <div>
                <h1>For Sale</h1>
              <ProductListing />              
            </div>  
        )
    } 
    
}





export default BuyItem