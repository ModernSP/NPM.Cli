"use strict";

const gulp = require("gulp");
const getVersionNumber = require("./common/getVersionNumber.js");
const globalModulesPathWithSlash = require("./common/globalModulesPathWithSlash.js");
const yoGeneratedReactWebPartNodeModulesPathWithSlash = require("./common/yoGeneratedReactWebPartNodeModulesPathWithSlash.js");

gulp.task("buildEnsureGulpCorrectVersion", function (cb) {

    Promise.all([
        getVersionNumber("gulp"),
        getVersionNumber(globalModulesPathWithSlash + "gulp"),
        getVersionNumber(yoGeneratedReactWebPartNodeModulesPathWithSlash + "gulp")
    ]).then(function (results) {
        const thisGulpVersion = results[0];
        const globalGulpVersion = results[1];
        const spfxGulpVersion = results[2];
        if (
            thisGulpVersion !== globalGulpVersion || 
            thisGulpVersion !== spfxGulpVersion || 
            globalGulpVersion !== spfxGulpVersion
            ){
            console.log("thisGulpVersion = " + thisGulpVersion);
            console.log("globalGulpVersion = " + globalGulpVersion);
            console.log("spfxGulpVersion = " + spfxGulpVersion);
            cb(new Error("gulp versions do not match!"));
        } else {
            cb();
        }

    }).catch(function (err) {
        cb(err);
    });
});