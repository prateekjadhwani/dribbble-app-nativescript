function pageNavigatedTo(args) {
    var page = args.object;
	console.log("------------------");
	console.log(JSON.stringify(page.navigationContext));
    page.bindingContext = page.navigationContext;
}

export.pageNavigatedTo = pageNavigatedTo;