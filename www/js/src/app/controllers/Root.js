
define( function (require) {

    "use strict";

    var Marionette  = require("backbone.marionette");
    var app         = require("app/app");

    return Marionette.Controller.extend({

        initialize: function (options) {
        },

        load: function () {

            console.log("root controller load ...");

        }

    });

});
