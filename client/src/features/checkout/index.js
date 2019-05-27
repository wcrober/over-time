import React from 'react'
import { connect } from 'react-redux'

import Cart from '../cart'
import CheckoutForm from './form'

function submitOrder(values, cart) {
    alert("Order Submitted")
    //function submitOrder(values, cart) {
    //const { email, name } = values.order
    //fetchApi('post', "http://the url",{
    //    order: {
    //        name,
     //       email,
    //        order_items_attributes: cart.map(item=> ({
    //            product_id: item_id,
     //           qty: item.quantity,
    //        }))
    //    }
    //}).then(json => {
    //    if(json.errors){
    //        alert('something went wront!')
    //        return
    //    }
    //    document.location.href=`/orders/${json.id}`
    //})
}

    // Execute a fetch to submit order 
    




function Checkout(props){
    const { cart } = props

    return  <div>
        <div style={{border: '1px solid black'}}> 
        <Cart />
        </div>  

        <CheckoutForm onSubmit={(values) => submitOrder(values, cart)}/>    
      </div>
        
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
    }
}

// This line connects the component to the redux store
export default connect(mapStateToProps)(Checkout)