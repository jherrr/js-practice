(function() {
    "use strict";

    if (typeof Components === "undefined" ) {
        window.Components = {};
    }

    var Nav = function(navEl) {
        this.navEl = navEl;
        this.navHomeY = navEl.getBoundingClientRect().top;
        this.isFixed = false;
    };

    Nav.prototype.init = function() {
        var that = this;

        window.addEventListener("scroll", function(event) {
            var scrollTop = window.scrollY;
            var shouldBeFixed = scrollTop > that.navHomeY;

            console.log();

            if( shouldBeFixed && !that.isFixed ) {
                that.navEl.classList.add("l-fixed");
                that.isFixed = true;
            } else if ( !shouldBeFixed && that.isFixed ) {
                that.navEl.classList.remove("l-fixed");
                that.isFixed = false;
            }
        });
    };

    Components.FloatNav = Nav;
})();
