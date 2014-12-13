define(function (require) {

    "use strict";

    var Marionette      = require("backbone.marionette");
    var rootLayoutT     = require("hbars!templates/layouts/root");

    return Marionette.LayoutView.extend({

        template: rootLayoutT,
        className: "app",

        regions: {
            header: ".js-region-header",
            main: ".js-region-main",
            footer: ".js-region-footer"
        }

    });

});