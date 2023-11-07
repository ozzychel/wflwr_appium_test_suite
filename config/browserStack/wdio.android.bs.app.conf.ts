import { join } from 'path';
import { config } from '../wdio.shared.conf';

config.specs = [`${join(
  process.cwd(),
  './appTest/specs/app.dev.spec.ts'
)}`];

config.exclude = [];

// ==============================================================================
// BrowserStack specific config
// ==============================================================================
config.user = process.env.BROWSERSTACK_USERNAME;
config.key = process.env.BROWSERSTACK_ACCESS_KEY;
config.hostname ='hub.browserstack.com';

config.services = [
  [
    'browserstack',
    {
      app: `bs://${process.env.BROWSERSTACK_APP_ID}`,
      buildIdentifier: '6.6.0.11',
      browserstackLocal: true
    },
  ]
];

config.capabilities = [
  {
  'bstack:options': {
    deviceName: 'Google Pixel 8 Pro',
    platformVersion: '14.0',
    platformName: 'android',
  }
}, 
// {
//   'bstack:options': {
//     deviceName: 'OnePlus 11R',
//     platformVersion: '13.0',
//     platformName: 'android',
//   } }, 
//   {
//   'bstack:options': {
//     deviceName: 'Samsung Galaxy S21',
//     platformVersion: '12.0',
//     platformName: 'android',
//   }
// }
];

config.commonCapabilities = {
  'bstack:options': {
    projectName: 'WFLWorldRun',
    buildName: 'Debug',
    debug: true,
    networkLogs: true
  },
  // 'acceptInsecureCerts': 'true'
},

config.maxInstances = 10;

exports.config = config;