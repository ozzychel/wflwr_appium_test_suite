import { config } from '../wdio.shared.conf';
// import { join } from 'path';

// config.specs = [`${join(
//   process.cwd(),
//   './appTest/specs/app.bs.cookieConsent.spec.ts'
// )}`];
config.specs = [];

config.suites = {
  consent: [
    './appTest/specs/app.bs.cookieConsent.spec.ts'
  ]
};

config.exclude = [];

// ==============================================================================
// BrowserStack specific config
// ==============================================================================
config.user = process.env.BROWSERSTACK_USERNAME;
config.key = process.env.BROWSERSTACK_ACCESS_KEY;
config.hostname ='hub.browserstack.com';

//worked fine -------
// config.services = [
//   [
//     'browserstack',
//     {
//       app: `bs://${process.env.BROWSERSTACK_APP_ID}`,
//       buildIdentifier: '6.6.0.11',
//       browserstackLocal: true
//     },
//   ]
// ];
// -----------------

config.services = [
  ['browserstack', {
    app: `bs://${process.env.BROWSERSTACK_APP_ID}`,
    browserstackLocal: true,
    buildIdentifier: `${process.env.BUILD_NUMBER}`,
    buildName: 'Android Debug',
    debug: true,
    // networkLogs: true,
    testObservability: true,
    testObservabilityOptions: {
      user: process.env.BROWSERSTACK_USERNAME,
      key: process.env.BROWSERSTACK_ACCESS_KEY,
      projectName: 'Wings For Life World Run',
      buildName: 'Android_WFLWRQA',
      buildTag: `${process.env.BUILD_NUMBER}`
    }
  }]
],

config.capabilities = [
  // { 'bstack:options': {
  //   deviceName: 'Google Pixel 8',
  //   platformVersion: '14.0',
  //   platformName: 'android',
  // } },
  // { 'bstack:options': {
  //   deviceName: 'OnePlus 11R',
  //   platformVersion: '13.0',
  //   platformName: 'android',
  // } },
  // { 'bstack:options': {
  //   deviceName: 'Samsung Galaxy S21',
  //   platformVersion: '12.0',
  //   platformName: 'android',
  // } }
  { 'bstack:options': {
    deviceName: 'Samsung Galaxy S23 Ultra',
    platformVersion: '13.0',
    platformName: 'android',
    projectName : "Wings For Life World Run",
		buildName : "Build 6.6.0.11",
		sessionName : "Build validation test",
    acceptInsecureCerts : "true",
		debug : true,
		networkLogs : true,
		// timezone : "Los Angeles",
		// geoLocation : "Us",
  } },
];

// config.commonCapabilities = {
//   'bstack:options': {
//     // projectName: 'WFLWorldRun',
//     buildName: 'browserstack build',
//     sessionName: 'BS Parallel execution - Android',
//     debug: true,
//     networkLogs: true
//   },
//   // 'acceptInsecureCerts': 'true'
// };

config.maxInstances = 10;

exports.config = config;