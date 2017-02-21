"use strict";

const gulp = require("gulp");
const ensureGlobalVersionIsLatest = require("./common/ensureGlobalVersionIsLatest.js");

gulp.task("buildEnsureCorrectSPFxVersion", function (cb) {
    ensureGlobalVersionIsLatest("@microsoft/generator-sharepoint", cb);
});