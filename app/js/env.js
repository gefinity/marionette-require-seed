var require;
(function (){
    "use strict";
    var debug = true;
    // DEVLOPMENT
    if (debug) {
        require = {
            baseUrl: "js/src",
            urlArgs: "cacheBust="  + new Date().getTime()
        };
    }
    // PRODUCTION
    else {
        require = {
            baseUrl: "js/src",
            paths: {
                "requireConfig": "../bin/app-compiled"
            }
        };
    }
}());