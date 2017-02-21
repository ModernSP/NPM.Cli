"use strict";

const childProcess = require("child_process");

function getExecVersionNumber(executableName) {
    return new Promise(function (resolve, reject) {
        const fileNameAndParamsToExecute = executableName + " --version";
        childProcess.exec(fileNameAndParamsToExecute, function (err, stdout, stderr) {
            if (err) {
                reject(err);
            } else {
                let versionNumberString = stdout.toString();
                versionNumberString = versionNumberString.replace(/\n/g, "");
                versionNumberString = versionNumberString.replace(/\r/g, "");
                versionNumberString = versionNumberString.replace(/\t/g, "");
                versionNumberString = versionNumberString.replace("git version ", "");
                versionNumberString = versionNumberString.replace(".windows.1", "");
                versionNumberString = versionNumberString.replace(".windows.2", "");
                versionNumberString = versionNumberString.replace(".windows.3", "");
                versionNumberString = versionNumberString.replace(".windows.4", "");
                versionNumberString = versionNumberString.replace(".windows.5", "");
                versionNumberString = versionNumberString.replace(".windows.6", "");
                versionNumberString = versionNumberString.replace(".windows.7", "");
                versionNumberString = versionNumberString.replace(".windows.8", "");
                versionNumberString = versionNumberString.replace(".windows.9", "");
                versionNumberString = versionNumberString.replace("v", "");
                versionNumberString = versionNumberString.trim();
                resolve(versionNumberString);
            }
        });

    });
}

module.exports = getExecVersionNumber;