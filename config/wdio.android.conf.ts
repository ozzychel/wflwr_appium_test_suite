import { join } from 'path';
import config from './wdio.shared.local.conf';

// ==============================================================================
// Specs
// ==============================================================================

config.specs = [
  './appTest/specs/*.ts'
],

// ==============================================================================
// Capabilities
// ==============================================================================
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  //Galaxy S20
  {
    'appium:deviceName': 'SM-G986U1',
    'appium:udid': 'R5CN20YDB5R',
    'appium:platformName': 'Android',
    'appium:platformVersion': '12',
    'appium:automationName': 'UiAutomator2',
    'appium:orientation': 'PORTRAIT',
    'appium:appPackage': 'com.redbull.wingsforlifeworldrun.debug',
    'appium:appWaitActivity': 'com.redbull.wingsforlifeworldrun.*',
    'appium:app': join(
      process.cwd(),
      './apps/WFLWRQA7.0.5.3.apk'
    ),
    // 'appium:noReset': true,
    'appium:fullReset': true,
    'appium:newCommandTimeout': 240,
    'appium:systemPort': 6011
  },

   //Pixel 6a
  // {
  //   'appium:udid': '2B111JEGR07534',
  //   'appium:deviceName': 'Pixel 6a',
  //   'appium:platformName': 'Android',
  //   'appium:platformVersion': '13',
  //   'appium:automationName': 'UiAutomator2',
  //   'appium:orientation': 'PORTRAIT',
  //   'appium:appPackage': 'com.redbull.wingsforlifeworldrun.debug',
  //   'appium:appWaitActivity': 'com.redbull.wingsforlifeworldrun.*',
  //   'appium:app': join(
  //     process.cwd(),
  //     './apps/WFLWRQA6.6.0.11.apk'
  //   ),
  //   // 'appium:noReset': true,
  //   'appium:fullReset:': true,
  //   'appium:newCommandTimeout': 240,
  //   'appium:systemPort': 6022
  // },

  // //Galaxy S23
  // {
  //     'appium:udid': 'R5CT92C0ZLT',
  //     'appium:deviceName': 'SM-S901U1',
  //     'appium:platformName': 'Android',
  //     'appium:platformVersion': '13',
  //     'appium:automationName': 'UiAutomator2',
  //     'appium:orientation': 'PORTRAIT',
  //     'appium:appPackage': 'com.redbull.wingsforlifeworldrun.debug',
  //     'appium:appWaitActivity': 'com.redbull.wingsforlifeworldrun.*',
  //     'appium:app': join(
  //         process.cwd(),
  //         './apps/WFLWRQA6.6.0.11.apk'
  //     ),
  //     'appium:noReset': true,
  //     'appium:newCommandTimeout': 240,
  //     'appium:systemPort': 6001
  // },

  // // Pixel 2XL
  // {
  //     'appium:udid': '806KPWQ1973929',
  //     'appium:deviceName': 'Pixel 2 XL',
  //     'appium:platformName': 'Android',
  //     'appium:platformVersion': '11',
  //     'appium:automationName': 'UiAutomator2',
  //     'appium:orientation': 'PORTRAIT',
  //     'appium:appPackage': 'com.redbull.wingsforlifeworldrun.debug',
  //     'appium:appWaitActivity': 'com.redbull.wingsforlifeworldrun.*',
  //     'appium:app': join(
  //         process.cwd(),
  //         './apps/WFLWRQA6.6.0.11.apk'
  //     ),
  //     'appium:noReset': true,
  //     'appium:newCommandTimeout': 240,
  //     'appium:systemPort': 6033
    // },

];

// ==============================================================================
// Platfrom specific specs
// ==============================================================================
// config.suites = {
//   test: [
//       '../appTest/specs/some.spec.ts',
//       '../appTest/specs/some.spec.ts'
      
//   ]
// }

exports.config = config;
