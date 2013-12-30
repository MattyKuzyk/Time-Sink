window.onload = function() {
  var newSite = document.getElementById("newSite")
  var siteDisplay = document.getElementById("siteDisplay")

  function saveSite () {
    var siteName = document.getElementById("siteName").value;
    // by passing an object you can define default values e.g.: []
    chrome.storage.local.get({sites: []}, function (result) {
      // the input argument is ALWAYS an object containing the queried keys
      // so we select the key we need
      var sites = result.sites;
      sites.push({siteName: siteName, time: 0});
      // set the new array value to the same key
      chrome.storage.local.set({sites: sites}, function () {
          // you can use strings instead of objects
          // if you don't  want to define default values
          chrome.storage.local.get('sites', function (result) {
              console.log(result.sites)
              updateSiteList(result.sites);
          });
      });
  });   
  // siteList.push(siteName);
  }

  //TODO: More efficient way of updating list (not clearing already added stuffz)
  function updateSiteList (listSites) {
    var siteText = document.getElementById("siteList");
    var fc = siteText.firstChild;

    while( fc ) {
      siteText.removeChild( fc );
      fc = siteText.firstChild;
    }
    chrome.storage.local.get({sites: []}, function (result) {
      listSites = result.sites;
    });
    console.log(listSites);
    for (var i=0;i<listSites.length;i++) {
      var newElement = document.createElement("li");
      var newContent = document.createTextNode(listSites[i].siteName);
      newElement.appendChild(newContent);
      siteText.appendChild(newElement);
    };
    newSite.style.display="none";
    siteDisplay.style.display="block";
  }

  function add_site () {
    siteDisplay.style.display="none";
    newSite.style.display="block";
    document.getElementById("saveSite").addEventListener("click", saveSite);
  }

  document.getElementById("addSite").addEventListener("click", add_site);
}
