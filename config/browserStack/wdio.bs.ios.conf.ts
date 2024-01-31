import { config as sharedConfig } from '../wdio.shared.conf';
import { iosDevicesBS } from '../../appTest/devices/bs.iosDevices'

// Utility Function for Merging Capabilities
function mergeCapabilities(deviceCap) {
  const commonCapabilities = {
    'bstack:options': {
      projectName : process.env.PROJECT_NAME,
      buildName : `IOS_${process.env.IOS_BUILD_NUMBER}`,
      appiumVersion: "2.0.1",
      sessionName : 'Build validation test',
      acceptInsecureCerts : 'true',
      debug : true,
      networkLogs : true,
      idleTimeout: 180
    }
  };

  return {
    ...deviceCap,
    'bstack:options': {
      ...(deviceCap['bstack:options'] || {}),
      ...commonCapabilities['bstack:options']
    }
  };
}

const config = {
  ...sharedConfig,

  specs: [],

  suites: {
    consent: [
      '../../appTest/specs/bs.cookieConsent.spec.ts'
    ]
  },

  exclude: [],

  // BrowserStack specific config
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  hostname: 'hub.browserstack.com',

  services: [
    ['browserstack', {
      app: `bs://${process.env.BROWSERSTACK_IOS_APP_ID}`,
      browserstackLocal: true,
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
  ],

  // Merge common capabilities with each device's capabilities
  capabilities: iosDevicesBS.map(deviceCap => mergeCapabilities(deviceCap)),

  maxInstances: 1
};

export { config };