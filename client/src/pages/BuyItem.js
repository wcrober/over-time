import React, { Component } from 'react';
import ReactTable from 'react-table'
import "react-table/react-table.css"
import Image from '../Product_Images/Will_profile.jpg'
import axios from 'axios'
import { connect } from 'react-redux'
import { cartItemsWithQuanitity } from '../features/cart'



class BuyItem extends Component {

    constructor(props){
        super(props)
        this.state= {
            saleitems: [],
            }
    }
    
   

    deleteRow(id){
        axios.delete('/api/delete-product/'+ id).then(response=>{

        }).catch(error => {
            console.log(error)
        })
        
        const index = this.state.saleitems.findIndex(item => {
            return item.product_id === id
        }) 
        
        this.state.saleitems.splice(index, 1);
        //console.log('product_id', id)
        this.setState({saleitems: this.state.saleitems})
    }

    

    componentDidMount() {

        fetch('http://localhost:8080/api/forsale')
        .then(response => response.json())
        .then(json => {
          this.setState({saleitems: json})
        })
        
      }

      handleAddToCartClick = () => {
          this.props.addToCart(this.state.saleitems)
      }


        



    render(){
        
        const thisItemInCart = this.props.cart.filter(item => item.id === this.props.product_id)[0]
        console.log("My State:", this.state.saleitems)
        let productListing = this.state.saleitems
        
        
        let productListItem = productListing.map((product) => {
            return(
                    <div className="product-list-item">
                    <h3>{product.for_sale_item}</h3>
                    <img
                      height={100}
                      title={product.for_sale_item}
                      src={Image}
                      />
                    <div>{product.create_date}</div>              
                    <div>{product.seller_id}</div>
                    <div>{product.description}</div>
                    <div>${product.for_sale_amount}</div>
                    <button
                    onClick={this.handleAddToCartClick}
                    >Add to cart ({
                        (thisItemInCart && thisItemInCart.quantity) || 0
                    })</button>
                </div>
            )
        })

        return(
            <div className='product-listing'>
                {productListItem}
                
            </div>
        )
            
       
    }
}

const mapStateToProps = (state) => {
    return {
        cart:state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload:item })
        },
        removeFromCart: (item) => {
            dispatch({type: 'REMOVE', paylod:item })
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(BuyItem)