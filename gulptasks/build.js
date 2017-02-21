"use strict";

const gulp = require("gulp");

gulp.task("build", [
    "buildEnsureGulpCorrectVersion", 
    "buildEnsureCorrectSPFxVersion", 
    "buildEnsureCorrectYoVersion", 
    "buildEnsureNodeJsIsLatest", 
    "buildEnsureNpmIsLatest",
    "buildEnsureGitIsLatest"]);