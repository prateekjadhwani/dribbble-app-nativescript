var http = require("http");

var ENDPOINT_URL = "https://api.dribbble.com/v1/",
	SHOTS_URL = ENDPOINT_URL + "/shots",
	ACCESS_TOKEN = "eb6b65e253c5f7a919635987a7f679511ac8445c53d65d643a5e5bfb1a841593";

module.exports = {
	getData: function(url) {
		return new Promise(function(resolve, reject){
			http.getJSON(url).then(function (data) {
			// Argument (data) is JSON!
				resolve(data);
			}, function (e) {
				// Argument (e) is Error!
				reject(JSON.stringify(e));
			});
		});
		
	},
	getShots: function() {
		var self=  this;
		return new Promise( function(resolve, reject){
			self.getData(SHOTS_URL + "?access_token="+ ACCESS_TOKEN).then( function(data)  {
				resolve(data);
			}, function(err) {
				reject(err);
			});
		});
		
	}
};