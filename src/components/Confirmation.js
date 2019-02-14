// UserDetails.jsx
import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
class Confirmation extends Component{
    constructor(props) {
        super(props);

        this.onChangeListedPrice = this.onChangeListedPrice.bind(this);
        this.onChangeSellingPrice = this.onChangeSellingPrice.bind(this);
        this.onChangeReserve = this.onChangeReserve.bind(this);
    }
    onChangeListedPrice(e) {
        this.setState({
            ListedPrice: e.target.value
        });
    }

    onChangeSellingPrice(e) {
        this.setState({
            SellingPrice: e.target.value
        });
    }

    onChangeReserve(e) {
        this.setState({
            Reserve: e.target.value
        });
    } 
  saveAndContinue = (e) => {
    e.preventDefault();
    
    const editedProduct = {
        Step:'1',
        ListedPrice: this.state.ListedPrice,
        SellingPrice: this.state.SellingPrice,
        Reserve: this.state.Reserve,
        Status: "Item Available"
     
    };
    let prodID=  localStorage.getItem("prodID");
    
  
   
    axios.post('http://localhost:4001/products/update/'+prodID,editedProduct)
        .then(res => {console.log(res.data)
           });

    this.setState({

        ListedPrice: '',
        SellingPrice: '',
        
     
    })
    document.location.href ="..";
}
    render(){
        
        const { values } = this.props;
        return(
            <Form >
                <h1 className="ui centered">Enter Details</h1>
                <Form.Field>
                    <label>Listed Price</label>
                    <input
                    placeholder='Listed Price'
                    onChange={this.onChangeListedPrice}
                    defaultValue={values.ListedPrice}
                    />
                </Form.Field>
                <Form.Field>
                    <label>SellingPrice</label>
                    <input
                    placeholder='SellingPrice'
                    onChange={this.onChangeSellingPrice}
                    defaultValue={values.SellingPrice}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Reserve</label>
                    <input
                    placeholder='Reserve'
                    onChange={this.onChangeReserve}
                    defaultValue={values.Reserve}
                    />
                </Form.Field>
                
                
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default Confirmation;