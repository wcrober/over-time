import React, { Component } from  'react'
import  Homepage  from './homepage';





class Data extends Component {

    constructor(props){
        super(props)
        this.state= {
            data: [],
            }
    }
    componentDidMount() {

      fetch('http://localhost:8080/api/forsale')
      .then(response => response.json())
      .then(json => {
        this.setState({data: json})
        })
      
    }

    render() {
      return (
        <div>
          <Homepage data={this.state.data} />
        </div>
      )
    }
    
  }

    
export default Data;