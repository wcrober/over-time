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
            saleitems: []
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
        .then(saleitems => {
          this.setState({saleitems: saleitems})
        })
        
      }


     
     
   

    render(){
        
        const thisItemInCart = this.props.cart.filter(item => item.id === this.props.product_id)[0]

        const columns = [
            {
                Header: "Purchase",
                Cell: props => {
                    return(
                        <button style={{backgroundColor: "white", color:"black"}}
                        onClick= {() => this.props.addToCart(props.original)}
                        >Add to Cart({
                            (thisItemInCart && thisItemInCart.quantitiy) || 0
                        }) </button>
                        
                    )
                },
                sortable: false,
                fiterable: false,
                width: 120,
                maxWidth: 120,
                minWidth:120
            },
            {
                Header: "Product ID",
                accessor: "product_id",
                style: {
                    textAlign: "right"
                },
                width: 100,
                maxWidth: 100,
                minWidth:100
            },     
            {
                Header: "Product Image",
                Cell: props => {
                    return(
                        <img
                        height={100}
                        src={Image}
                        alt= "pic of product"
                        />                     
                    )
                },
                accessor: "image",
                style: {
                    textAlign: "center"
                },
                height: 100,
                width: 200,
                maxWidth: 200,
                minWidth:200
            },
                     
            {
                Header: "ITEM",
                accessor: "for_sale_item",
                style: {
                    textAlign: "left"
                },
                width: 100,
                maxWidth: 100,
                minWidth:100
            },
            {
                Header: "Description",
                accessor: "description"
            },
            {
                Header: "Seller Email",
                accessor: "forsale_email",
             
            },
            {
                Header: "Price",
                accessor: "for_sale_amount",
                style: {
                    textAlign: "right"
                },
                width: 100,
                maxWidth: 100,
                minWidth:100
            },
            {
                Header: "Date Posted",
                accessor: "create_date",
                style: {
                    textAlign: "right"
                },
                width: 100,
                maxWidth: 100,
                minWidth:100
            },
            {
                Header: "Delete",
                Cell: props => {
                    return(
                        <button style={{backgroundColor: "green", color:"#fefefe"}}
                        onClick= {() => {
                            this.deleteRow(props.original.product_id)
                        }}
                        >Delete</button>
                        
                    )
                },
                sortable: false,
                fiterable: false,
                width: 100,
                maxWidth: 100,
                minWidth:100
            }

        ]
            return( 
                <div>
                  <h1 className="display-background"></h1>
                    <ReactTable
                        noDataText = {"Get a Great Deal!!"}
                        columns={columns}
                        data={this.state.saleitems}
                        cart={cartItemsWithQuanitity(this.props.cart)}
                    >
                    </ReactTable>                
                </div>
               
            )
        } 
        
    }

    function mapStateToProps(state) {
      return{
        cart:state.cart
      }  
    }

    function mapDispatchToProps(dispatch){
        return {
            addToCart: (item) => {
                dispatch({type: 'ADD', payload: item})
            },
            removeFromCart: (item)=> {
                dispatch({type: 'REMOVE', payload: item})
            }
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(BuyItem)