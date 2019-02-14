// PersonalDetails.jsx
import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { throws } from 'assert';
import axios from 'axios';


class ProductDescriptionAndLocation extends Component{constructor(props) {
    super(props);

   this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
  

    this.state = {
       
        Location: '',
        Description: ''
       
    }
}
 onChangeDescription(e) {
    this.setState({
        Description: e.target.value
    });

 }

onChangeLocation(e) {
    this.setState({
        Location: e.target.value
    });
}





    saveAndContinue = (e) => {
        e.preventDefault();
        
        const editedProduct = {
            Step:3,
            Location: this.state.Location,
            Description: this.state.Description,
          
         
        };
        let prodID=  localStorage.getItem("prodID")
        
        
        axios.post('http://localhost:4001/products/update/'+prodID,editedProduct)
            .then(res => {console.log(res.data)
               });

        this.setState({
            Location: '',
            Description: '',
         
        })
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
     
        const { values } = this.props
        return(
        <Form color='blue' >
            <h1 className="ui centered">Enter Details</h1>
            <Form.Field>
                <label>Description</label>
                <input placeholder=''
                onChange={this.onChangeDescription}
                defaultValue={values.Description}
                />
            </Form.Field>
            <Form.Field>
                <label>Location</label>
                <input placeholder=''
                onChange={this.onChangeLocation}
                defaultValue={values.Location}
                />
            </Form.Field>
            
          
            
            <Button onClick={this.saveAndContinue}>Save And Continue </Button>
        </Form>
        )
    }
}

export default ProductDescriptionAndLocation;