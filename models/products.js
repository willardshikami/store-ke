const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//defining the schema
const productSchema = mongoose.Schema({
    product_name:{
		type: String,
		required: true
	},
	description:{
		type:String,
		required: true
	},
	image_url:{
		type: String
	},
	product_url: {
		type: String,
		required: true
	},
	catergory: {
		type: String
	},
	price: {
		type: String,
		required: true
	}
});

//model
const Product = module.exports = mongoose.model('product', productSchema);

//get products
module.exports.getProducts = (callback, limit) => {
    Product.find(callback).limit(limit);
}

//add product
module.exports.addProduct = (product, callback) => {
    Product.create(product, callback);
}

//delete product
module.exports.removeProduct = (id, callback) => {
    const query = {_id: id};
    Product.remove(query, callback);
}