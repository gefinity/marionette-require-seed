
define(function (require) {

    "use strict";

    var Backbone   = require("backbone");
    var Marionette = require("backbone.marionette");

    var App = Marionette.Application.extend({

        constructor: function (options) {

            Marionette.Application.prototype.constructor.apply(this, arguments);

            this.addRegions({
                "root": "body"
            });

        },

        start: function () {

            Marionette.Application.prototype.start.apply(this, arguments);

            Backbone.history.start();

        }

    });

    return new App();

});