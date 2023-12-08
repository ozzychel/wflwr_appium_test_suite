import { config } from '../wdio.shared.conf';
const { iosDevicesBS } = require('../../appTest/devices/bs.iosDevices');

config.specs = [];

config.suites = {
  consent: [
    './appTest/specs/bs.cookieConsent.spec.ts'
  ]
};

config.exclude = [];

// ==============================================================================
// BrowserStack specific config
// ==============================================================================
config.user = process.env.BROWSERSTACK_USERNAME;
config.key = process.env.BROWSERSTACK_ACCESS_KEY;
config.hostname ='hub.browserstack.com';

config.services = [
  ['browserstack', {
    app: `bs://${process.env.BROWSERSTACK_IOS_APP_ID}`,
    browserstackLocal: true,
    // buildIdentifier: `${process.env.IOS_BUILD_NUMBER}`,
    buildIdentifier: '_Debug_BuildValidation',
    buildName: 'IOS Debug',
    debug: true,
    testObservability: true,
    testObservabilityOptions: {
      user: process.env.BROWSERSTACK_USERNAME,
      key: process.env.BROWSERSTACK_ACCESS_KEY,
      projectName: process.env.PROJECT_NAME,
      buildName: `IOS_WFLWRQA_${process.env.IOS_BUILD_NUMBER}`,
      buildTag: `${process.env.IOS_BUILD_NUMBER}`
    }
  }]
];

// capabilities that all selected devices will share
config.commonCapabilities = {
  'bstack:options': {
    projectName : process.env.PROJECT_NAME,
    buildName : `IOS_${process.env.IOS_BUILD_NUMBER}`,
    appiumVersion: "2.0.1",
    sessionName : 'Build validation test',
    acceptInsecureCerts : 'true',
    debug : true,
    networkLogs : true,
    idleTimeout: 180,
  }
};

//capabilities to pick test devices
config.capabilities = [...iosDevicesBS];

//define number of simultaneously running instances
config.maxInstances = 1;

//merge common capabilities to main capabilities
config.capabilities.forEach((cap) => {
  cap['bstack:options'] = {
    ...(cap['bstack:options'] || {}),
    ...config.commonCapabilities['bstack:options']
  };
});

exports.config = config;