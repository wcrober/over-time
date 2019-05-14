import React, { Component } from 'react';
import '../styles/ForSale.css'


class DisplayForSale extends Component {

    constructor(){
        super()
        this.state= {
            saleitems: [],
            forsale_email: '',
            seller_id: '',
            for_sale_item: '',
            for_sale_amount: '',
            description: '',
            product_image: ''
        }
    }


    componentDidMount() {

        fetch('http://localhost:8080/api/forsale')
        .then(response => response.json())
        .then(json => {
          this.setState({
            saleitems: json
          })
        })
    
    
    
      }

    render(){

        let saleitems = this.state.saleitems
        let saleList = saleitems.map((item) => {
            return(
                <li>User:{item.forsale_email} Item:{item.for_sale_item} Cost:{item.for_sale_amount} Description:{item.description}</li>
            )
        }
        )
        return(
            <div>
                <h1>See Items for Sale</h1>
                <ul>{saleList}</ul>
            </div>

        )
    }

}

export default DisplayForSale