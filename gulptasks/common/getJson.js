"use strict";

const stripJsonComments = require("strip-json-comments");
const fs = require("fs");

function getJson(filePath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, function (err, data) {
            if (err) {
                reject(err);
            } else {
                const rawJsonString = data.toString();
                const noCommentsJsonString = stripJsonComments(rawJsonString);
                const returnValue = JSON.parse(noCommentsJsonString);
                resolve(returnValue);
            }
        });
    });
    
}

module.exports = getJson;