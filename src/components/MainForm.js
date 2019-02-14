// MainForm.jsx
import React, { Component } from 'react';
import ProductDetails from './ProductDetails';
import ProductDescriptionAndLocation from './ProductDescriptionAndLocation';
import Confirmation from './Confirmation';

import axios from 'axios';

class MainForm extends Component {

    
    state = {
        Step: 1,
   
    } 
    componentDidMount() {
        let urlSplit = window.location.href.split("/")
        let idString = urlSplit[urlSplit.length-1]
        this.setState({
            _id: idString
        });
        if(idString!='create')
        {
            
        axios.get('http://localhost:4001/products/'+idString)
        .then(response => {
            this.setState({
                Step: response.data.Step
            })
        })
        .catch(function (error) {                
            console.log(error);
        })

        }
        else{
           
            this.setState({
                Step: 1
            })
        }
        
    } 

    nextStep = () => {
        this.setState({
            Step: this.state.Step+1
        })
        const { step } = this.state
        this.setState({
            step : step + 1
        })
       
       
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    render(){
     
        const { Title,Category, ListedPrice, Quantity,Step, ProdID } = this.state;
        const values = { Title, Category, ListedPrice, Quantity,ProdID  };
       
        switch(Step) {
        case 1:
            return <ProductDetails 
                    nextStep={this.nextStep} 
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
            return <ProductDescriptionAndLocation 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 3:
            return <Confirmation 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
        }
    }
}

export default MainForm;