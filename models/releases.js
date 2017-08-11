const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//defining the schema
const releaseSchema = mongoose.Schema({
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
const Release = module.exports = mongoose.model('release', releaseSchema);

//get new releases playlist
module.exports.getReleases = (callback, limit) => {
    Release.find(callback).limit(limit);
}

//add new release playlist
module.exports.addRelease = (release, callback) => {
    Release.create(release, callback);
}

//delete new release playlist
module.exports.removeRelease = (id, callback) => {
    const query = {_id: id}
    Release.remove(query, callback);
}