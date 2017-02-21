"use strict";

const ensureCliIsLatest = require("./common/ensureCliIsLatest.js");
const manuallySelectedVersions = require("./common/_manuallySelectedVersions");
const gulp = require("gulp");

gulp.task("buildEnsureNpmIsLatest", function (cb) {

    ensureCliIsLatest("NPM", "npm", "https://github.com/npm/npm/releases", manuallySelectedVersions.npm, "3.x ").then(function () {
        cb();
    }).catch(function (err) {
        cb(err);
    });

});
