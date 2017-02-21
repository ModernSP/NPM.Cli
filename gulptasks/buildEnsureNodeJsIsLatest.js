"use strict";

const ensureCliIsLatest = require("./common/ensureCliIsLatest.js");
const manuallySelectedVersions = require("./common/_manuallySelectedVersions");
const gulp = require("gulp");

gulp.task("buildEnsureNodeJsIsLatest", function (cb) {

    ensureCliIsLatest("NodeJS", "node", "https://nodejs.org/", manuallySelectedVersions.node, "LTS ").then(function () {
        cb();
    }).catch(function (err) {
        cb(err);
    });

});
