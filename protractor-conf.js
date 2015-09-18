/*exports.config = {
    seleniumAddress : 'http://127.0.0.1:9515/wd/hub',
    specs: ['tests/home.js'],
    capabilities: {
        'browserName' : 'phantomjs'
    }
}*/

extend = require("node.extend");
 
var environment = process.env.NODE_ENV || "dev";
 
var genericConfig = {
    specs: ['tests/home.js']
};
 
var genericCapability = {
    'name': process.env.CI_MESSAGE || 'Ad hoc message',
    'build': process.env.CI_BUILD_NUMBER + ' (' + (process.env.CI_COMMIT_ID || "No comments.").substring(0, 7) + ')',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER
};
 
var configurationsByEnvironment = {
    test : extend({
        sauceUser: 'F-Fischer',
        sauceKey: '54116fc8-62e4-4c3c-8226-8c1c71dd4290',
 
        multiCapabilities: [
            extend({
                'browserName': 'chrome'
            }, genericCapability), extend({
                'browserName': 'firefox'
            }, genericCapability), extend({
                'browserName' : 'internet explorer',
                'platform' : 'Windows 8.1',
                'version' : 11
            }, genericCapability)],
        baseUrl: 'http://127.0.0.1:8080/'
    }, genericConfig),
    development : extend({
            seleniumAddress : 'http://127.0.0.1:9515/wd/hub',
    
    capabilities: {
            'browserName': 'phantomjs',
            'name': "Development Build",
            'build': "N/A"
        },
        verbose: true,
        baseUrl: 'http://127.0.0.1:8080/'
    }, genericConfig)
};
 
exports.config = configurationsByEnvironment[environment];