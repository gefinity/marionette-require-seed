
/*jshint node: true, strict: false */

module.exports = function(grunt) {

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        project: {
            root: __dirname.split("/").pop()
        },

        sass: {
            dev: {
                options: {
                    style: "expanded"
                },
                files: {
                    "app/css/style.css": "app/css/style.scss"
                }
            },
            dist: {
                options: {
                    style: "compressed"
                },
                files: {
                    "app/css/style.css": "app/css/style.scss"
                }
            }
        },

        requirejs: {
            compile: {
                options: {
                    logLevel: 0,
                    baseUrl: "app/js/src",
                    mainConfigFile: "app/js/src/requireConfig.js",
                    name: "requireConfig",
                    out: "app/js/bin/app-compiled.js",
                    optimize: "uglify2",
                    generateSourceMaps: true,
                    preserveLicenseComments: false, // does not work with generateSourceMaps
                    // exclude example:
                    // paths: {
                    //     "backbone.marionette": "empty:"
                    // }
                }
            }
        },

        express: {
            all: {
                options: {
                    port: 4000,
                    bases: [require("path").normalize("app")],
                    livereload: true
                }
            }
        },

        watch: {
            index: {
                files: ["app/index.html"],
                options: {
                    livereload: true
                }
            },
            js: {
                files:  [ "app/js/src/**/*.js" ],
                options: {
                    livereload: true
                }
            },
            sass: {
                files:  [ "app/css/**/*.scss" ],
                tasks:  [ "sass:dev" ],
                options: {
                    livereload: true
                }
            }
        },

        open: {
            all: {
                path: "http://localhost:<%= express.all.options.port %>"
            }
        },

    });
    
    grunt.registerTask("default", [
        "sass:dev",
        "express",
        "open",
        "watch"
    ]);

    grunt.registerTask("build", [
        "sass:dist",
        "requirejs:compile",
    ]);

    grunt.registerTask("prod", [
        "build",
        "express",
        "open"
    ]);

};
