const { RemoteBrowserTarget } = require('happo.io');

module.exports = {
    apiKey: process.env.HAPPO_API_KEY,
    apiSecret: process.env.HAPPO_API_SECRET,

    targets: {
        'chrome': new RemoteBrowserTarget('chrome', {
            viewport: '1024x768',
        }),
        'chrome-mobile': new RemoteBrowserTarget('chrome', {
            viewport: '375x768',
        }),
        safari: new RemoteBrowserTarget('safari', {
            viewport: '1024x768',
            scrollStitch: true,
        }),
        'ios-safari': new RemoteBrowserTarget('ios-safari', {
            viewport: '375x768',
            scrollStitch: true,
        }),
    },
};