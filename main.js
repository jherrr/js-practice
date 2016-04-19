
(function() {
    "use strict";

    var tabsCollection =  document.querySelectorAll(".tabs");

    for( var idx = 0; idx < tabsCollection.length; idx++) {
        var tabsObj = new Components.Tabs(tabsCollection[idx]);
        tabsObj.init();
    }
})()
