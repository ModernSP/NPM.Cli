"use strict";

const manuallySelectedVersions = {

    // https://github.com/git-for-windows/git/releases
    // always select highest production non-beta version
    gitForWindows: "2.11.1.windows.1",

    // https://nodejs.org/
    // select highest LTS version as per:
    // https://dev.office.com/sharepoint/docs/spfx/set-up-your-development-environment
    node: "6.9.5",

    // https://github.com/npm/npm/releases
    // select highest 3.x version as per
    // https://dev.office.com/sharepoint/docs/spfx/set-up-your-development-environment
    npm: "3.10.10"
};

module.exports = manuallySelectedVersions;