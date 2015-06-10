
var dribbbleData = require("./dribbble-data");
var view = require("ui/core/view");
var observableArray = require("data/observable-array");
var frameModule = require("ui/frame");
var topmost = frameModule.topmost();

var listView = data =  null;



function pageLoaded(args) {
	var page = args.object;
	
	listView = view.getViewById(page, "myListView");
	
	page.bindingContext = {
		myItems: data
	};
	
	dribbbleData.getShots().then( function(r){
		var array = new observableArray.ObservableArray();
		array.push(r);
		data = r;
		listView.items = array;
		listView.refresh();
	}, function(err){
		console.log(err);
	});
}

function listViewItemTap(args) {
	var itemIndex = args.index;
	console.log("--> Tapped Item = "+ [args.index]);
	topmost.navigate({
		moduleName: "shot-info-page",
		context: {
			data: data[args.index]
		},
		animated: true
	});
}
exports.pageLoaded = pageLoaded;
exports.listViewItemTap = listViewItemTap;