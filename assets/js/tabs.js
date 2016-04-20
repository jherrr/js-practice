(function() {
    "use strict";

    if (typeof Components === "undefined" ) {
        window.Components = {};
    }

    var Tabs = function(tabsEl) {
        this.tabs = tabsEl
        var tabsNav = this.tabsNav = (tabsEl.getElementsByClassName("tabs-nav"))[0];
        this.tabsLinks = tabsNav.getElementsByClassName("tabs-item");
        this.tabsContent = tabsEl.getElementsByClassName("tabs-content");

        this.activeIndex = 0;
        this.initCalled = false;
    };

    Tabs.prototype.init = function(tabsEl) {
        if(!this.initCalled) {
            this.initCalled = true;
            this.tabs.classList.remove('no-js');
        }

        var links = this.tabsLinks;

        var closureFn = function(idx, thisEl) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                thisEl.goToTab(idx);
            });
        }

        for( var idx=0; idx < links.length; idx++ ) {
            var link = links[idx];

            closureFn(idx, this);
        }
    };

    Tabs.prototype.goToTab = function(idx) {
        var links = this.tabsLinks;
        var content = this.tabsContent;
        var activeIdx = this.activeIndex;

        console.log("jeff");

        if( idx !== activeIdx && idx >=0 && idx < links.length ) {
            links[activeIdx].classList.remove("is-tabs-item-active");
            content[activeIdx].classList.remove("is-tabs-content-active");
            links[idx].classList.add("is-tabs-item-active");
            content[idx].classList.add("is-tabs-content-active");
            this.activeIndex = idx;
        }
    };

    Components.Tabs = Tabs;
})();
