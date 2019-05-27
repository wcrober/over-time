import React from 'react'
import ProductListItem from './product-list-item'
import { connect } from 'react-redux' 




class ProductListing extends React.Component{
    componentDidMount() {
        const { loadProducts } = this.props
        fetch('http://localhost:8080/api/forsale')
            .then(response => response.json())
            .then((json => {
                loadProducts(json)
            } ))
        }

    render(){
        const  { addToCart, removeFromCart, products, cart } = this.props
        return(     
            <div className="product-listing">
                { 
                    products.map( product => 
                    <ProductListItem 
                    product={product}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    cartItem={cart.filter( cartItem => cartItem.product_id === product.product_id)[0]}
                    />)
                }
               
            </div>
        )
    }
    
        //.then(response => response.json())
        //.then(saleitems => {
        //  this.setState({saleitems: saleitems})
        //  })
        //}
    
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
        products: state.products,
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadProducts: (products) => {
            dispatch({ type: 'LOAD', payload: products})
        },

        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item })
        },
        removeFromCart: (item)=> {
            dispatch({ type: 'REMOVE', payload: item })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)