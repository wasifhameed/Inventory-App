const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
    ProdID:{
        type: String
    },
    
    Condition: {
        type: String
    },
    ClientCode: {
        type: String
    },
    Brand: {
        type: String
    },ModelNumber: {
        type: String
    },
    Dimensions: {
        type: String
    },Weight: {
        type: String
    }, Quantity: {
        type: String
    },Title: {
        type: String
    },
    Category: {
        type: String
    }, Description: {
        type: String
    },
    ListedPrice: {
        type: Number
    },
    SellingPrice: {
        type: Number
    },
    Reserve: {
        type: Number
    },
    Status: {
        type: String
    },
    Step: {
        type: Number
    },
    Location: {
        type: String
    },
    PayMethod: {
        type: String
    },
    TransactionDetails: {
        type: String
    },
    Amount: {
        type: String
    },
    Image: { data: Buffer, contentType: String}


});

module.exports = mongoose.model('Product', Product);