
requirejs.config({

    paths: {
        "templates": "../../templates",
        "jquery": "../../bower_components/jquery/dist/jquery",
        "text": "../../bower_components/requirejs-text/text",
        "underscore": "../../bower_components/lodash/dist/lodash",
        "backbone": "../../bower_components/backbone/backbone",
        "backbone.associations": "../../bower_components/backbone-associations/backbone-associations",
        "backbone.marionette": "../../bower_components/backbone.marionette/lib/backbone.marionette",
        "backbone.babysitter":"../../bower_components/backbone.babysitter/lib/backbone.babysitter",
        "backbone.wreqr":"../../bower_components/backbone.wreqr/lib/backbone.wreqr",
        "Handlebars": "../../bower_components/handlebars/handlebars",
        "hbars": "../../bower_components/require-handlebars/hbars",
    },
    shim: {
    },
    "hbars": {
        extension: ".hbs",
        compileOptions: {}
    },
    deps: ["main"]

});