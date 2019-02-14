import React, { Component } from 'react';
import axios from 'axios';

export default class ViewProduct extends Component {

    constructor(props) {
        super(props);
        
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeCondition = this.onChangeCondition.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onChangeModelNumber = this.onChangeModelNumber.bind(this);
        this.onChangeDimensions = this.onChangeDimensions.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);

        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeListedPrice = this.onChangeListedPrice.bind(this);
        this.onChangeSellingPrice = this.onChangeSellingPrice.bind(this);

      this.onChangeReserve = this.onChangeReserve.bind(this);
        this.onChangeTransactionDetails = this.onChangeTransactionDetails.bind(this);
        this.onChangePayMethod = this.onChangePayMethod.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
       

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Status: '',
            Title: '',
            ListedPrice: '',
            Category: ''
        }
    }

    
    componentDidMount() {
        axios.get('http://localhost:4001/products/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    Status: response.data.Status,
                    Title: response.data.Title,
                     Category: response.data.Category,
                     ClientCode:response.data.ClientCode,
                    
                    Brand:response.data.Brand,
                    Condition:response.data.Condition,
                    ModelNumber:response.data.ModelNumber,
                     Dimensions:response.data.Dimensions,
                     Weight:response.data.Weight,
                     Quantity:response.data.Quantity,
                     Description:response.data.Description,
                     SellingPrice:response.data.SellingPrice,
                     Reserve:response.data.Reserve,
                     Location:response.data.Location,
                     PayMethod:response.data.PayMethod,
                     Amount:response.data.Amount,
                     TransactionDetails:response.data.TransactionDetails,
                    ListedPrice: response.data.ListedPrice
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    validate(fieldType,value){
        if(fieldType =="alphanum")
        {
            if(value.match("^[a-zA-Z0-9]*$"))
                return true;
            else
                alert("Value not allowed");
        }

        if(fieldType =="posnum")
        {
            if(value.match("^[0-9]*$"))
                return true;
            else
                alert("Value not allowed");
        }
    }
    onChangeDescription(e) {
        if(this.validate(e.target.name,e.target.value))
        {
        this.setState({
            Description: e.target.value
        });
    }
    
     }
     onChangeCondition(e) {
       
        this.setState({
            Condition: e.target.value
        });
        
     }
    
    onChangeLocation(e) {
         if(this.validate(e.target.name,e.target.value))
        {
        this.setState({
            Location: e.target.value
        });
        }   
    }
    
    onChangeStatus(e) {
        
     
        
            
        this.setState({
            Status: e.target.value
        });
        alert(this.state.Status);
        
       
    }
    onChangeTitle(e) {
        
        if(this.validate(e.target.name,e.target.value))
        {
        this.setState({
            Title: e.target.value
        });
    }
    }
    onChangeListedPrice(e) {
        if(this.validate(e.target.name,e.target.value))
        {
       
        this.setState({
            ListedPrice: e.target.value
        })
    }
    }

    onChangeSellingPrice(e) {
        if(this.validate(e.target.name,e.target.value))
        {
        this.setState({
            SellingPrice: e.target.value
        });
    }
    }
    onChangeModelNumber(e) {
        if(this.validate(e.target.name,e.target.value))
        {
        this.setState({
            ModelNumber: e.target.value
        });
    }
    }
    onChangeDimensions(e) {
        if(this.validate(e.target.name,e.target.value))
        {
        this.setState({
            Dimensions: e.target.value
        });
    }
    }
    onChangeBrand(e) {
        if(this.validate(e.target.name,e.target.value))
        {
       
        this.setState({
            Brand: e.target.value
        });
    }
    }
    onChangeWeight(e) {
        if(this.validate(e.target.name,e.target.value))
        {
        this.setState({
            Weight: e.target.value
        });
    }
    }
    onChangeQuantity(e) { 
        if(this.validate(e.target.name,e.target.value))
        {
        this.setState({
            Quantity: e.target.value
        });
    }
    }
    onChangeReserve(e) {
        if(this.validate(e.target.name,e.target.value))
        {
        this.setState({
            Reserve: e.target.value
        });
    }
    } 
    onChangePayMethod(e) {
        
        this.setState({
            PayMethod: e.target.value
        });
    
    } onChangeTransactionDetails(e) {
        if(this.validate(e.target.name,e.target.value))
        {
        this.setState({
            TransactionDetails: e.target.value
        });
    }
    } onChangeAmount(e) {
        if(this.validate(e.target.name,e.target.value))
        {
        this.setState({
           Amount: e.target.value
        });
    }
    }
    onChangeCategory(e) {
        if(this.validate(e.target.name,e.target.value))
        {
        this.setState({
            Category: e.target.value
        });
    }
    }
    onChangeImage(e) { 
        
        this.setState({
            Image: e.target.value
        });
    
    
     }
 
    onSubmit(e) {
       
        e.preventDefault();
       
        const obj = {
            Status: this.state.Status,
            Title: this.state.Title,
            Category: this.state.Category,
            ClientCode:this.state.ClientCode,
            Condition:this.state.Condition,
            Brand:this.state.Brand,
            Condition:this.state.Condition,
            ModelNumber:this.state.ModelNumber,
            Dimensions:this.state.Dimensions,
            Weight:this.state.Weight,
            Quantity:this.state.Quantity,
            Description:this.state.Description,
            SellingPrice:this.state.SellingPrice,
            Reserve:this.state.Reserve,
            Location:this.state.Location,
            PayMethod:this.state.PayMethod,
            Amount:this.state.Amount,
            TransactionDetails:this.state.TransactionDetails,
            ListedPrice: this.state.ListedPrice,
            
        };
       
        axios.post('http://localhost:4001/products/update/'+this.props.match.params.id, obj)
            .then(res => {console.log(res.data)
            alert("Updated Successfully")});
       
      //  this.props.history.push('/');
    }
    

    render() {
        return (
            <div>
                
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Status: </label>
                        <select  defaultValue={this.state.Status}
                                onChange={this.onChangeStatus}
                                value={this.state.Status}
                               >
                            <option value="Pending List">Pending List</option>
                            <option value="Item Available">Item Available</option>
                            <option value="Item Sold">Item Sold</option>
                            <option  value="Pending Payment">Pending Payment</option>
                            <option value="Seller Payout Completed">Seller Payout Completed</option>
                        </select>
                        <label>Condition: </label>
                        <select  defaultValue={this.state.Condition}
                                onChange={this.onChangeCondition}
                                value = {this.state.Condition}>
                            <option  value="New">New</option>
                            <option  value="Used">Used</option>
                            
                        </select>     
                    </div>
                    <div className="form-group">
                        <label>Brand: </label>                   
                        <input  type="text" name="alphanum"
                            defaultValue={this.state.Brand}   
                           value={this.state.Brand}
                            onChange={this.onChangeBrand}
                        />
                    <label>Title</label>
                        <input  type="text" 
                           name="alphanum"
                            onChange={this.onChangeTitle}
                            defaultValue={this.state.Title}
                        />
                        <label>ModelNumber</label>
                        <input
                           name="alphanum"
                            onChange={this.onChangeModelNumber}
                            defaultValue={this.state.ModelNumber}
                        />
                   </div>
                   <div className="form-group">
                        <label>Dimensions: </label>                   
                        <input  type="text"
                               name="alphanum"
                            value={this.state.Dimensions}
                            onChange={this.onChangeDimensions}
                        />

                      
                   </div>
                   <div className="form-group">
                        <label>Quantity: </label>                   
                        <input  type="text"
                               name="posnum"
                               defaultValue={this.state.Quantity}
                               value={this.state.Quantity}
                            onChange={this.onChangeQuantity}
                        />

                        <label>Weight</label>
                        <input
                           name="posnum"
                            onChange={this.onChangeWeight}
                            defaultValue={this.state.Weight}
                        />
                   </div>
                   <div className="form-group">
                        <label>Category: </label>                   
                        <input  type="text"
                               name="alphanum"
                            value={this.state.Category}
                            onChange={this.onChangeCategory}
                        />

                        
                   </div>
                   <div className="form-group">
                        <label>Listed Price: </label>                   
                        <input  type="text"
                               name="posnum"
                            value={this.state.ListedPrice}
                            onChange={this.onChangeListedPrice}
                        />

                        <label>SellingPrice</label>
                        <input
                            name="posnum"
                            onChange={this.onChangeSellingPrice}
                            defaultValue={this.state.SellingPrice}
                        />
                        <label>Reserve: </label>                   
                        <input  type="text"
                               name="posnum"
                            value={this.state.Reserve}
                            onChange={this.onChangeReserve}
                        />
                   </div>
                   <div className="form-group">
                        
                        <label>Description</label>
                        <input
                           name="alphanum"
                            onChange={this.onChangeDescription}
                            defaultValue={this.state.Description}
                        />
                        <label>Location</label>
                        <input
                           name="alphanum"
                            onChange={this.onChangeLocation}
                            defaultValue={this.state.Location}
                        />
                   </div>
                   <div className="form-group">
                   <label>Payment Method: </label>
                        <select  defaultValue={this.state.PayMethod}
                                onChange={this.onChangePayMethod}
                                value = {this.state.PayMethod}>
                            <option  value="Choose">Choose</option>
                            <option value="Wire Transfer">WireTransfer</option>
                            <option value="Cash">Cash</option>
                            <option value="PayPal">PayPal</option>
                            <option value="Cheque">Cheque</option>
                            <option value="Credit Card">Credit Card</option>

                            
                        </select> 
                        <label>Transaction Details: </label>                   
                        <input  type="text"
                               name="alphanum"
                            value={this.state.TransactionDetails}
                            onChange={this.onChangeTransactionDetails}
                        />

                        <label>Amount Received</label>
                        <input
                           name="posnum"
                            onChange={this.onChangeAmount}
                            defaultValue={this.state.Amount}
                            value = {this.state.Amount}
                        />
                   </div>
                  
                    

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Product" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}