"use strict";

const gulp = require("gulp");
const ensureGlobalVersionIsLatest = require("./common/ensureGlobalVersionIsLatest.js");

gulp.task("buildEnsureCorrectYoVersion", function (cb) {
    ensureGlobalVersionIsLatest("yo", cb);
});