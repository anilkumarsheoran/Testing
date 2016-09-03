// conf.js
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');


exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
       browserName: 'chrome'
    },
    specs: ['contact.spec.js'],
    //specs: ['contact.spec.js'],
   /* onPrepare: function() {
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'Reporter'
            })
        );
    }*/
    onPrepare: function() {
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'Reporter',
            filePrefix: 'xmloutput'
        }));
    }

}