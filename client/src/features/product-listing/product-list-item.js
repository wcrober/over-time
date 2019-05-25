import React from 'react'
import Image from '../../Product_Images/Will_profile.jpg'
import AddBtn from './add-btn'
import RemoveBtn from './remove-btn'


export default function ProductListItem(props) {
    //const thisItemInCart = props.cart.filter(item => item.product_id === props.product.product_id)[0]
    return <div className='product-list-item'>
        <h3>Item:{ props.product.for_sale_item }</h3>
        <div>Product ID:{props.product.product_id}</div>
        <img
        height={ 100 }
        title={ props.product.for_sale_item }
        src={ Image }
        />
        <div>Description:{props.product.description}</div>
        <div>${ props.product.for_sale_amount }</div>
        <div>
            <AddBtn 
            cartItem={props.cartItem} 
            product={props.product}
            addToCart={props.addToCart}
            />
        

         {
           props.cartItem
            ? <RemoveBtn 
                cartItem={props.cartItem} 
                product={props.product}
                removeFromCart={props.removeFromCart}
            />
            : null
        }
    </div>
    </div>
}