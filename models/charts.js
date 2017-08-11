const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//defining the schema
const chartSchema = mongoose.Schema({
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
const Chart = module.exports = mongoose.model('chart', chartSchema);

//get charts playlist
module.exports.getCharts = (callback, limit) => {
    Chart.find(callback).limit(limit);
}

//add chart playlist
module.exports.addChart = (chart, callback) => {
    Chart.create(chart, callback);
}

//delete chart playlist
module.exports.removeChart = (id, callback) => {
    const query = {_id: id}
    Chart.remove(query, callback);
}