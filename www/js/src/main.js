
define(function (require) {

    "use strict";

    var app                  = require("app/app");
    var RootRouter           = require("app/routers/Root");
    var RootController       = require("app/controllers/Root");
    var RootLayout           = require("app/views/layouts/Root");
    
    // setup root regions:
    app.layout = new RootLayout();
    app.getRegion("root").show(app.layout);

    // setup routers:
    new RootRouter({
        controller: new RootController()
    });

    app.start();

});