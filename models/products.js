const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//the schema
const productSchema = mongoose.Schema({
	product_name:{
		type: String,
		required: true
	},
	description:{
		type:String,
		required: true
	},
	price: {
		type: String,
		required: true
	},
	image_url:{
		type: String
	}
});

//defining the model
const Product = module.exports = mongoose.model('product', productSchema);

//get playlist
module.exports.getProducts = (callback, limit) => {
	Product.find(callback).limit(limit);
}

//add playlist
module.exports.addProduct = (product, callback) => {
	Product.create(product, callback);
}

//delete playlist
module.exports.removeProduct = (id, callback) => {
	const query = {_id: id};
	Product.remove(query, callback);
}