
var dribbbleData = require("./dribbble-data");
var view = require("ui/core/view");
var observableArray = require("data/observable-array");

var listView = data =  null;



function pageLoaded(args) {
	var page = args.object;
	
	listView = view.getViewById(page, "myListView");
	
	page.bindingContext = {
		myItems: data
	};
	
	dribbbleData.getShots().then( function(r){
		var array = new observableArray.ObservableArray();
		data = array.push(r);
		console.log(JSON.stringify(array[0]));
		listView.items = array;
		listView.refresh();
	}, function(err){
		console.log(err);
	});
}

function listViewItemTap(args) {
	var itemIndex = args.index;
	console.log(JSON.stringify(data));
	console.log("--> Tapped Item = "+ JSON.stringify(data[args.index]));
}
exports.pageLoaded = pageLoaded;
exports.listViewItemTap = listViewItemTap;