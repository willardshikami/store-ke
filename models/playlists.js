const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//the schema
const playlistSchema = mongoose.Schema({
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

//defining the model
const Playlist = module.exports = mongoose.model('playlist', playlistSchema);

//get playlist
module.exports.getPlaylists = (callback, limit) => {
	Playlist.find(callback).limit(limit);
}

//add playlist
module.exports.addPlaylist = (playlist, callback) => {
	Playlist.create(playlist, callback);
}

//delete playlist
module.exports.removePlaylist = (id, callback) => {
	const query = {_id: id};
	Playlist.remove(query, callback);
}