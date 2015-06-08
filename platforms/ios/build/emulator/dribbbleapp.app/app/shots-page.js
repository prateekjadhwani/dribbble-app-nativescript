
var dribbbleData = require("./dribbble-data");
var view = require("ui/core/view");
var observableArray = require("data/observable-array");

var listView = data =  null;

dribbbleData.getShots().then( function(r){
		var array = new observableArray.ObservableArray();
		array.push(r);
		listView.items = array;
		listView.refresh();
	}, function(err){
		console.log(err);
	});

function pageLoaded(args) {
	var page = args.object;
	listView = view.getViewById(page, "myListView");
	
	page.bindingContext = {
		myItems: data
	};
	
	
}

exports.pageLoaded = pageLoaded;