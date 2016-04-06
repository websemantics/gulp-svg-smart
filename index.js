/**
 *  GULP PLUGIN for,
 *    ______    __________           ____  __  ___  ___     ___    ______
 *   / ____ |  /  _  ____/   ____   / __/ /  |/  / / _ |   / _ \  /_  __/
 *   \ \  | | / / / / __    /___/  _\ \  / /|_/ / / __ |  / , _/   / /
 *  __\ \ | |/ / / (_/ /          /___/ /_/  /_/ /_/ |_| /_/|_|   /_/
 * /____/ |___/  \____/ v0.1.1
 *
 * Gulp wrapper for svg-smart node.js module, plus implementation of common gulp tasks.
 *
 * @link      http://websemantics.ca
 * @author    Web Semantics, Inc. Dev Team <team@websemantics.ca>
 * @author    Adnan M.Sagar, PhD. <adnan@websemantics.ca>
 */

 'use strict';

 var sprite         = require("gulp-svg-sprite");
 var svg2png        = require("gulp-svg2png");
 var favicons       = require("gulp-favicons");
 var template       = require("gulp-nunjucks-render");
 var rename         = require("gulp-rename");
 var minify         = require("gulp-svgmin");
 var smart          = require("svg-smart");

// ---------------------------------------------------
// TASK : default - Generate preview page, index.html
// ---------------------------------------------------
function _default(gulp, resources) {
  // return gulp.src(resources.html.template)
  //   .pipe(template({ext:"tmp", data: resources}))
  //   .pipe(rename(resources.html.filename))
  //   .pipe(gulp.dest(resources.html.dest));
  console.log(resources);
}

//
//
// // ---------------------------------------------------
// // TASK : process SVG spritesc
// // ---------------------------------------------------
// gulp.task('sprite', ['icon'], function() {
//   var stream = gulp;
//   for (var i in resources.sprite) {
//       stream = gulp.src(resources.sprite[i].source)
//           .pipe(sprite(resources.sprite[i].config))
//           .pipe(gulp.dest(resources.sprite[i].dest));
//   }
//   return stream;
// });
//
// // ---------------------------------------------------
// // TASK : icon
// // ---------------------------------------------------
// gulp.task('icon', ['png'], function() {
//   var stream = gulp;
//   for (var i in resources.icon) {
//     stream =  gulp.src(resources.icon[i].source)
//         .pipe(favicons(resources.icon[i].config))
//         .on('error', function(){})
//         .pipe(gulp.dest(resources.icon[i].dest));
//   }
//   return stream;
// });
//
// // ---------------------------------------------------
// // TASK : png
// // ---------------------------------------------------
// gulp.task('png', ['svg'], function() {
//   var stream = gulp;
//   for (var i in resources.png) {
//       stream = gulp.src(resources.png[i].source)
//           .pipe(svg2png([resources.png[i].scale]))
//           .pipe(rename(resources.png[i].filename + "." + resources.png[i].extension))
//           .pipe(gulp.dest(resources.png[i].dest));
//   }
//   return stream;
// });
//
// // ---------------------------------------------------
// // TASK : svg, generate svg files
// // ---------------------------------------------------
// gulp.task('svg', function() {
//
//   resources = smart.load("smart.json", "package.json");
//
//   var stream = gulp;
//   for (var i in resources.svg) {
//         stream = gulp.src(resources.svg[i].template)
//           .pipe(template({ext:"tmp", data: resources.svg[i].data}))
//           .pipe(minify())
//           .pipe(rename(resources.svg[i].filename + "." + resources.svg[i].extension))
//           .pipe(gulp.dest(resources.svg[i].dest));
//   }
//   return stream;
// });
//
//

module.exports = {"default": _default};
