const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = express.Router();
const PORT = 4001;

let Product = require('./product.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/products', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

productRoutes.route('/').get(function(req, res) {
    Product.find(function(err, products) {
        if (err) {
            console.log(err);
        } else {
            
            res.json(products);
        }
    });
});

productRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Product.findById(id, function(err, product) {
        res.json(product);
    });
});

productRoutes.route('/update/:id').post(function(req, res) {
    Product.findById(req.params.id, function(err, product) {
        console.log(req.params.id);
        if (!product)
            res.status(404).send("data is not found");
        else
        {
        if(typeof req.body.Status != "undefined")
           {
            product.Status = req.body.Status;
           } 
           
           if(typeof req.body.Location != "undefined")
           {
            product.Location = req.body.Location;
           }
           if(typeof req.body.Description != "undefined")
           {
            product.Description = req.body.Description;
           }
           if(typeof req.body.Step != "undefined")
           {
            product.Step = req.body.Step;
           }
           if(typeof req.body.Image != "undefined")
           {
            product.Image = req.body.Image;
           }
           if(typeof req.body.Brand != "undefined")
           {
            product.Brand = req.body.Brand;
           }
           if(typeof req.body.ListedPrice != "undefined")
           {
            product.ListedPrice = req.body.ListedPrice;
           }
           if(typeof req.body.SellingPrice != "undefined")
           {
            product.SellingPrice = req.body.SellingPrice;
           }
           if(typeof req.body.Reserve != "undefined")
           {
            product.Reserve = req.body.Reserve;
           }
           if(typeof req.body.Title != "undefined")
           {
            product.Title = req.body.Title;
           }
           if(typeof req.body.Category != "undefined")
           {
            product.Category = req.body.Category;
           }

           if(typeof req.body.ClientCode != "undefined")
           {
            product.ClientCode = req.body.ClientCode;
           }

           if(typeof req.body.Condition != "undefined")
           {
              
            product.Condition = req.body.Condition;
           }

           if(typeof req.body.ModelNumber != "undefined")
           {
            product.ModelNumber = req.body.ModelNumber;
           }
           if(typeof req.body.Dimensions != "undefined")
           {
            product.Dimensions = req.body.Dimensions;
           }
           if(typeof req.body.Weight != "undefined")
           {
            product.Weight = req.body.Weight;
           }
           if(typeof req.body.Quantity != "undefined")
           {
            product.Quantity = req.body.Quantity;
           }
           
           if(typeof req.body.PayMethod != "undefined")
           {
           
            product.PayMethod = req.body.PayMethod;
           }

           if(typeof req.body.Amount != "undefined")
           {
            product.Amount = req.body.Amount;
           }

           if(typeof req.body.TransactionDetails != "undefined")
           {
            product.TransactionDetails = req.body.TransactionDetails;
           }
           
        }
    
         console.log(product);   
        product.save().then(product => {
            res.json('Product updated!');
        })
        .catch(err => {
            console.log(err);
            res.status(400).send("Update not possible");
        });
    });
});

productRoutes.route('/add').post(function(req, res) {
    let product = new Product(req.body);
    product.save()
        .then(product => {
            res.json({'prodID': product._id});
            console.log(product._id);
        })
        .catch(err => {
            res.json({'prodID': product._id});
            console.log(product._id);
      
        });
});

app.use('/products', productRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});