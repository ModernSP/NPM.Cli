"use strict";

const ensureCliIsLatest = require("./common/ensureCliIsLatest.js");
const manuallySelectedVersions = require("./common/_manuallySelectedVersions");
const gulp = require("gulp");

gulp.task("buildEnsureGitIsLatest", function (cb) {

    ensureCliIsLatest("Git", "git", "https://github.com/git-for-windows/git/releases", manuallySelectedVersions.gitForWindows, "").then(function () {
        cb();
    }).catch(function (err) {
        cb(err);
    });

});
