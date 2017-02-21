"use strict";

const fs = require("fs");
const getJson = require("./getJson.js");

function getVersionNumber(moduleName) {
    return new Promise(function (resolve, reject) {
        let folderPathWithSlash = moduleName;
        if (folderPathWithSlash.indexOf("\\") === -1 && folderPathWithSlash.indexOf("/") === -1) {
            folderPathWithSlash = "./node_modules/" + moduleName;
        }

        if (folderPathWithSlash.endsWith("/") || folderPathWithSlash.endsWith("\\")) {
            folderPathWithSlash = folderPathWithSlash.substr(0, folderPathWithSlash.length - 1);
        }
        
        folderPathWithSlash = folderPathWithSlash + "/";
        const filePath = folderPathWithSlash + "package.json";
        getJson(filePath).then(function (projectJson) {
            let returnValue = projectJson.version.trim();
            resolve(returnValue);
        }).catch(function (err) {
            reject(err);
        });
    });
}

module.exports = getVersionNumber;