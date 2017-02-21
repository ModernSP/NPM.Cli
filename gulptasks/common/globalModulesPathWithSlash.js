"use strict";

const rawGlobalModulesPath = require('global-modules');
let globalModulesPathWithSlash = rawGlobalModulesPath;
if (globalModulesPathWithSlash.endsWith("/")) {
    globalModulesPathWithSlash = globalModulesPathWithSlash.substr(0, globalModulesPathWithSlash.length - 1);
}

globalModulesPathWithSlash = globalModulesPathWithSlash + "/";

module.exports = globalModulesPathWithSlash;