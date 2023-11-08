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
    // buildIdentifier: `${process.env.ANDROID_BUILD_NUMBER}`,
    buildIdentifier: `_Debug_BuildValidation`,
    buildName: 'Android Debug',
    debug: true,
    // networkLogs: true,
    testObservability: true,
    testObservabilityOptions: {
      user: process.env.BROWSERSTACK_USERNAME,
      key: process.env.BROWSERSTACK_ACCESS_KEY,
      projectName: process.env.PROJECT_NAME,
      buildName: `Android_WFLWRQA_${process.env.ANDROID_BUILD_NUMBER}`,
      buildTag: `${process.env.ANDROID_BUILD_NUMBER}`
    }
  }]
],

//capabilities to pick test devices
config.capabilities = [
  // { 'bstack:options': {
  //   deviceName: 'Google Pixel 8',
  //   platformVersion: '14.0',
  //   platformName: 'android',
  // } },
  { 'bstack:options': {
    deviceName: 'OnePlus 11R',
    platformVersion: '13.0',
    platformName: 'android',
  } },
  { 'bstack:options': {
    deviceName: 'Samsung Galaxy S21',
    platformVersion: '12.0',
    platformName: 'android',
  } }
  // { 'bstack:options': {
  //   deviceName: 'Samsung Galaxy S23 Ultra',
  //   platformVersion: '13.0',
  //   platformName: 'android',
  // } },
];

// capabilities that all selected devices will share
config.commonCapabilities = {
  'bstack:options': {
    projectName : process.env.PROJECT_NAME,
		buildName : `Android_${process.env.ANDROID_BUILD_NUMBER}`,
		sessionName : "Build validation test",
    acceptInsecureCerts : "true",
		debug : true,
		networkLogs : true,
  },
};

config.maxInstances = 10;

config.capabilities.forEach((cap) => {
  // Here we merge the 'bstack:options' of the common capabilities
  cap['bstack:options'] = {
    ...(cap['bstack:options'] || {}),
    ...config.commonCapabilities['bstack:options']
  };
});

exports.config = config;