/**
 *    ______    __________           ____  __  ___  ___     ___    ______
 *   / ____ |  /  _  ____/   ____   / __/ /  |/  / / _ |   / _ \  /_  __/
 *   \ \  | | / / / / __    /___/  _\ \  / /|_/ / / __ |  / , _/   / /
 *  __\ \ | |/ / / (_/ /          /___/ /_/  /_/ /_/ |_| /_/|_|   /_/
 * /____/ |___/  \____/ GULP PLUGIN v0.1.4
 *
 * Gulp wrapper and pre-packged Gulp Tasks for svg-smart node.js module.
 * For more information see [SVG SMART](https://github.com/websemantics/svg-smart)
 *
 * @link      http://websemantics.ca
 * @author    Web Semantics, Inc. Dev Team <team@websemantics.ca>
 * @author    Adnan M.Sagar, PhD. <adnan@websemantics.ca>
 */

 'use strict';

 var gulp           = require("gulp");
 var sprite         = require("gulp-svg-sprite");
 var svg2png        = require("gulp-svg2png");
 var favicons       = require("gulp-favicons");
 var template       = require("gulp-nunjucks-render");
 var rename         = require("gulp-rename");
 var minify         = require("gulp-svgmin");
 var smart          = require("svg-smart");

 var resources;

// ---------------------------------------------------
// TASK : default: [svg-smart-tasks] - Generate preview page, index.html
// ---------------------------------------------------
gulp.task('svg-smart-tasks', ['svg-smart-sprite'], function() {
  return gulp.src(resources.html.template)
    .pipe(template({ext:"tmp", data: resources}))
    .pipe(rename(resources.html.filename))
    .pipe(gulp.dest(resources.html.dest));
});

// ---------------------------------------------------
// TASK : [svg-smart-sprite] - Process SVG spritesc
// ---------------------------------------------------
gulp.task('svg-smart-sprite', ['svg-smart-icon'], function() {
  var stream = gulp;
  for (var i in resources.sprite) {
      stream = gulp.src(resources.sprite[i].source)
          .pipe(sprite(resources.sprite[i].config))
          .pipe(gulp.dest(resources.sprite[i].dest));
  }
  return stream;
});

// ---------------------------------------------------
// TASK : [svg-smart-icon] - Generate all ICON files
// ---------------------------------------------------
gulp.task('svg-smart-icon', ['svg-smart-png'], function() {
  var stream = gulp;
  for (var i in resources.icon) {
    stream =  gulp.src(resources.icon[i].source)
        .pipe(favicons(resources.icon[i].config))
        .on('error', function(){})
        .pipe(gulp.dest(resources.icon[i].dest));
  }
  return stream;
});

// ---------------------------------------------------
// TASK : [svg-smart-png] - Generate all PNG files
// ---------------------------------------------------
gulp.task('svg-smart-png', ['svg-smart-svg'], function() {
  var stream = gulp;
  for (var i in resources.png) {
      stream = gulp.src(resources.png[i].source)
          .pipe(svg2png([resources.png[i].scale]))
          .pipe(rename(resources.png[i].filename + "." + resources.png[i].extension))
          .pipe(gulp.dest(resources.png[i].dest));
  }
  return stream;
});

// ---------------------------------------------------
// TASK : [svg-smart-svg] - Generate svg files
// ---------------------------------------------------
gulp.task('svg-smart-svg', function() {
  var stream = gulp;
  for (var i in resources.svg) {
        stream = gulp.src(resources.svg[i].template)
          .pipe(template({ext:"tmp", data: resources.svg[i].data}))
          .pipe(minify())
          .pipe(rename(resources.svg[i].filename + "." + resources.svg[i].extension))
          .pipe(gulp.dest(resources.svg[i].dest));
  }
  return stream;
});

module.exports = {
  /**
   * Load and process the svg-smart json file
   * @param {smart_filename} string, the svg-smart json file
   * @param {package_filename} string, node.js package filename (reuse of information)
   * @return object, a list of resources to be generated (svg, png, ico, sprite)
   */
  load: function(smart_filename, package_filename) {
    resources = smart.load(smart_filename, package_filename);
    return resources;
  }
};
