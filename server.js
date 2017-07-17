const express = require('express');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bodyParser = require('body-parser');

const app = express();

//import product model
Product = require('./models/products');


//setting the client side
app.use(express.static('client'));

//bodyparser middleware
app.use(bodyParser.json());


app.set('port', process.env.PORT || 5000);

//connecting to the DB
mongoose.connection.openUri('mongodb://localhost/store')
const db = mongoose.connection;

//checking for errors in DB connection
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
    console.log('we are connected');
});



//GET REQUESTS
//get all the products list
app.get('/api/products', (req, res) => {
    Product.getProducts((err, products) => {
        if(err){
            throw err;
        }
        res.json(products)
    });
});



//POST REQUESTS
//add a product to the list
app.post('/api/products', (req, res) => {
    const product = req.body;
    Product.addProduct(product, (err, product) =>{
        if(err){
            throw err;
        }
        res.json(product)
    });
});


//DELETE REQUESTS
//delete a product from the list
app.delete('/api/products/:_id', (req, res) => {
    const id = req.params._id;
    Product.removeProduct(id, (err, product) => {
        if(err){
            throw err;
        }
        res.json(product)
    });
});



//listening to port var
var server = http.createServer(app).listen(app.get('port'), function () {
    console.log('Server listening on port ' + app.get('port'));
});