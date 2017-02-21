"use strict";

const latest = require("latest");
const globalModulesPathWithSlash = require("./globalModulesPathWithSlash.js");
const getVersionNumber = require("./getVersionNumber.js");

function ensureGlobalVersionIsLatest(moduleName, callback) {
    Promise.all([
        getVersionNumber(globalModulesPathWithSlash + moduleName),
        new Promise(function (resolve, reject) {

            latest(moduleName, function(err, v) {
                if (err) {
                    reject(err);
                } else {
                    resolve(v);
                }
            });
        })
    ]).then(function (results) {
        const installedVersion = results[0];
        const currentVersion = results[1];

        if (installedVersion === currentVersion) {
            callback();    
        } else {
            console.log("Installed " + moduleName + " version = " + installedVersion);
            console.log("Current " + moduleName + " version = " + currentVersion);
            callback(new Error("Need to update the \"" + moduleName + "\" global module."));
        }
    }).catch(function (err) {
        callback(err);
    });
}

module.exports = ensureGlobalVersionIsLatest;