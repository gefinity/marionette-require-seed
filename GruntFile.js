
/*jshint node: true, strict: false */

module.exports = function(grunt) {

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        sass: {
            dev: {
                options: {
                    style: "expanded"
                },
                files: {
                    "www/css/style.css": "www/css/style.scss"
                }
            },
            dist: {
                options: {
                    style: "compressed"
                },
                files: {
                    "dist/css/style.css": "www/css/style.scss"
                }
            }
        },

        requirejs: {
            all: {
                options: {
                    logLevel: 0,
                    baseUrl: "www/js/src",
                    mainConfigFile: "www/js/src/requireConfig.js",
                    name: "requireConfig",
                    out: "dist/js/src/app-compiled.js",
                    optimize: "uglify2",
                    generateSourceMaps: true,
                    preserveLicenseComments: false, // does not work with generateSourceMaps
                    paths: {
                        // exclude example:
                        //"backbone.marionette": "empty:"
                        requireLib: "../../bower_components/requirejs/require"
                    },
                    include: ["requireLib"]
                }
            }
        },

        express: {
            options: {
                port: 4000
            },
            dev: {
                options: {
                    bases: [require("path").normalize("www")],
                    livereload: true
                }
            },
            prod: {
                options: {
                    bases: [require("path").normalize("dist")],
                    livereload: false
                }
            }
        },

        watch: {
            index: {
                files: ["www/index.html"],
                options: {
                    livereload: true
                }
            },
            js: {
                files:  [ "www/js/src/**/*.js" ],
                options: {
                    livereload: true
                }
            },
            sass: {
                files:  [ "www/css/**/*.scss" ],
                tasks:  [ "sass:dev" ],
                options: {
                    livereload: true
                }
            },
            dist: {
                files: [],
                options: {
                    livereload: false
                }
            }
        },

        open: {
            all: {
                path: "http://localhost:<%= express.options.port %>"
            }
        },

        preprocess : {
            dist : {
                src : "www/index.html",
                dest : "dist/index.html",
                options: {
                    context: {
                        ENV: "production"
                    }
                }
            }
        }

    });
    
    grunt.registerTask("default", [
        "sass:dev",
        "express:dev",
        "open",
        "watch"
    ]);

    grunt.registerTask("build", [
        "sass:dist",
        "requirejs",
    ]);

    grunt.registerTask("prod", [
        "build",
        "preprocess",
        "express:prod",
        "open",
        "watch:dist"
    ]);

};
