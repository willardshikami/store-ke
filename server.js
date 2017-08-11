const express = require('express');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const bodyParser = require('body-parser');

const app = express();

//linking models
Product = require('./models/products');

//client side
app.use(express.static('client'));

//bodyparser middleware
app.use(bodyParser.json());

app.set('port', process.env.PORT || 5000);

//DB connection
mongoose.connection.openUri('');
const db = mongoose.connection;

//checking for errors in DB
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
    console.log('connected to DB; success');
});

//products GET request
app.get('api/products', (req, res) => {
    Product.getProducts((err, products) => {
        if(err){
            throw err;
        }res.json(products)
    });
});



//port variable
var server = http.createServer(app).listen(app.get('port'), function (){
    console.log('server listening on port '+app.get('port'));
});


