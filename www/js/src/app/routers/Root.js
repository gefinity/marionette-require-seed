
define( function (require) {

    "use strict";

    var Marionette  = require("backbone.marionette");

    return Marionette.AppRouter.extend({
                    
        appRoutes: {
            "index": "load",
        },

        routes: {
            "*notFound": "root"
        },

        root: function () {
            this.navigate("index", {
                trigger: true,
                replace: true
            });
        }
        
    });

});