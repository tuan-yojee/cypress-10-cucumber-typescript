/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const chalk = require('chalk');

const summaryReportFile = path.join(process.cwd(), 'report/cucumber-report.json');

const reporter = require('multiple-cucumber-html-reporter');
const options = {
  pageTitle: 'Yojee automation',
  pageFooter: '<p style="text-align:center;">YOJEE COMPANY</p></div>',
  jsonDir: path.join(process.cwd(), 'report'),
  reportPath: 'report/html',
    hideMetadata: false,
    metadata: {
      browser: {
        name: 'chrome',
        version: '103',
      },
      device: 'Virtual Machine',
      platform: {
        name: 'linux',
        version: '18.04',
      },
    },
    customData: {
      title: 'YOJEE AUTOMATION TESTING',
      data: [
        { label: 'Project:', value: 'YOJEE-EXPLORE' },
        { label: 'Environment:', value: 'DEV' },
        { label: 'Execution Start Time:', value: '' },
        { label: 'Execution End Time:', value: '' },
      ],
    },
  displayDuration: true,
  durationInMS: false,
  displayReportTime: true,
};

// Generate report
try {
  reporter.generate(options);
} catch (e) {
  console.log(chalk.red(`Could not generate cypress reports`));
  console.log(chalk.red(`${e}`));
}