const report = require('multiple-cucumber-html-reporter');
import { Cutils } from "../CommonUtils/Cutils";
import { Cutils } from "cypress/CommonUtils/Cutils";

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
            { label: 'Execution Start Time', value: Cutils.getTime },
            { label: 'Execution End Time', value: (new Date).getTime() }
        ]
    }
});
