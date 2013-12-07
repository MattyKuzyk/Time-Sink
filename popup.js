updateSiteList()
var siteList = [];

function addSite () {
	console.log("wow");
	document.getElementById("newSite").display="block";
}

function saveSite () {
	var siteName = document.getElementById("siteName").value();
	localStorage["siteName"] = siteName;
	updateSiteList(siteName);
	siteList.push(siteName);
}

function updateSiteList () {
	for (var i = 0; i < siteList.length; i++) {
		siteList[i]

	};
}