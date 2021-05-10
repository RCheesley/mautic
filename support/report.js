const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: 'cypress/cucumber-json',
    reportPath: 'cypress/cucureport/cucumber_report.html',
    metadata: {
        browser: {
            name: 'chrome',
            version: '90'
        },
        device: 'Local test machine',
        platform: {
            name: 'osx',
            version: '10'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            { label: 'Project', value: 'Mautic' },
            { label: 'Release', value: '1.2.3' },
            { label: 'MAT', value: 'B11221.34321' },
            { label: 'Execution Start Time', value: 'Nov 19th 2017, 02:31 PM EST' },
            { label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST' }
        ]
    }
});
