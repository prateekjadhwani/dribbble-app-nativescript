function pageLoaded(args) {
	var page = args.object;
	page.bindingContext = {
		myImage: "https://d13yacurqjgara.cloudfront.net/users/1/screenshots/471756/sasquatch.png"
	};
}

exports.pageLoaded = pageLoaded;