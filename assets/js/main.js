
(function() {
    "use strict";

    var tabsCollection =  document.querySelectorAll(".tabs");

    for( var idx = 0; idx < tabsCollection.length; idx++) {
        var tabsObj = new Components.Tabs(tabsCollection[idx]);
        tabsObj.init();
    }

    var floatNavCollection = document.querySelectorAll(".nav-float");

    for( var idx = 0; idx < floatNavCollection.length; idx++) {
        var floatNavObj = new Components.FloatNav(floatNavCollection[idx]);
        floatNavObj.init();
    }
})();
