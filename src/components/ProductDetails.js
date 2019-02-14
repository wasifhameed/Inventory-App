// UserDetails.jsx
import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
class ProductDetails extends Component{
    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onChangeModelNumber = this.onChangeModelNumber.bind(this);
        this.onChangeDimensions = this.onChangeDimensions.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        
    }
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }
    onChangeModelNumber(e) {
        this.setState({
            ModelNumber: e.target.value
        });
    }
    onChangeDimensions(e) {
        this.setState({
            Dimensions: e.target.value
        });
    }
    onChangeBrand(e) {
        this.setState({
            Brand: e.target.value
        });
    }
    onChangeWeight(e) {
        this.setState({
            Weight: e.target.value
        });
    }
    onChangeQuantity(e) {
        this.setState({
            Quantity: e.target.value
        });
    }

    onChangeCategory(e) {
        this.setState({
            Category: e.target.value
        });
    }
    onChangeImage(e) {
        this.setState({
            Image: e.target.value
        });
    
     }
  
    saveAndContinue = (e) => {
        e.preventDefault()


        const newProduct = {

            Status: "Pending List",
            Step:2,
            Title: this.state.Title,
            Category: this.state.Category,
            Brand: this.state.Brand,
            ModelNumber:this.state.ModelNumber,
            Dimensions:this.state.Dimensions,
            Weight:this.state.Weight,
            Quantity: this.state.Quantity
            
        };

        axios.post('http://localhost:4001/products/add', newProduct)
            .then(res => localStorage.setItem("prodID", res.data.prodID));
      
        
        this.props.nextStep();
      
    }

    render(){
        
        const { values } = this.props;
        return(
            <Form >
                <h1 className="ui centered">Enter Details</h1>
                <Form.Field>
                    <label>ClientCode</label>
                    <input
                    placeholder='Client Code'
                    onChange={this.onChangeClientCode}
                    defaultValue={values.ClientCode}
                    />
                </Form.Field>
                
                <Form.Field>
                    <label>Title</label>
                    <input
                    placeholder='Title'
                    onChange={this.onChangeTitle}
                    defaultValue={values.Title}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Brand</label>
                    <input
                    placeholder='Brand'
                    onChange={this.onChangeBrand}
                    defaultValue={values.Brand}
                    />
                </Form.Field>
                <Form.Field>
                    <label>ModelNumber</label>
                    <input
                    placeholder='ModelNumber'
                    onChange={this.onChangeModelNumber}
                    defaultValue={values.ModelNumber}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Dimensions</label>
                    <input
                    placeholder='Dimensions'
                    onChange={this.onChangeDimensions}
                    defaultValue={values.Dimensions}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Weight</label>
                    <input
                    placeholder='Weight'
                    onChange={this.onChangeWeight}
                    defaultValue={values.Weight}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Quantity</label>
                    <input
                    placeholder='Quantity'
                    onChange={this.onChangeQuantity}
                    defaultValue={values.Quantity}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Category</label>
                    <input
                    placeholder='Category'
                    onChange={this.onChangeCategory}
                    defaultValue={values.Category}
                    />
                </Form.Field>
                
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default ProductDetails;