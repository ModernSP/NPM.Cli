"use strict";

const childProcess = require("child_process");
const chalk = require("chalk");

function ensureCliIsLatest(displayName, cliName, webSiteUrl, manuallySelectedVersion, versionText) {
    return new Promise(function (resolve, reject) {
        childProcess.exec(cliName + " --version", function (err, stdout, stderr) {
            if (err) {
                reject(err);
            } else {
                let versionNumberString = stdout.toString();
                versionNumberString = versionNumberString.replace(/\n/g, "");
                versionNumberString = versionNumberString.replace(/\r/g, "");
                versionNumberString = versionNumberString.replace(/\t/g, "");
                versionNumberString = versionNumberString.replace("git version ", "");
                versionNumberString = versionNumberString.replace("v", "");
                versionNumberString = versionNumberString.trim();
                if (manuallySelectedVersion === versionNumberString) {
                    console.log(chalk.magenta("Please manually check " + webSiteUrl + " to see if " + displayName + " version " + versionNumberString + " is the latest " + versionText + "version."));
                    resolve();
                } else {
                    console.log(chalk.red.bold("Error: currently installed version " + versionNumberString + " of " + displayName+ " is not equal to the manually selected version " + manuallySelectedVersion + "."));
                    reject(new Error("Installed version not up to latest"));
                }
            }
        });
    });
}

module.exports = ensureCliIsLatest;