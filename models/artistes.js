const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//defining the schema
const artisteSchema = mongoose.Schema({
    playlist_name:{
		type: String,
		required: true
	},
	description:{
		type:String,
		required: true
	},
	username:{
		type: String,
		required: true
	}, 
	number_of_songs: {
		type: String,
		required: true
	},
	image_url:{
		type: String
	},
	added_date: {
		type: Date,
		default: Date.now
	},
	playlist_url: {
		type: String,
		required: true
	}
});

//model
const Artiste = module.exports = mongoose.model('artiste', artisteSchema);

//get artistes
module.exports.getArtistes = (callback, limit) => {
    Artiste.find(callback).limit(limit);
}

//add artisteartiste
module.exports.addArtiste = (artiste, callback) => {
    Artiste.create(artiste, callback);
}

//delete artiste
module.exports.removeArtiste = (id, callback) => {
    const query = {_id: id};
    Artiste.remove(query, callback);
}