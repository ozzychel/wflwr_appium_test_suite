import { join } from 'path';
import config from './wdio.shared.local.conf';

// ==============================================================================
// Specs
// ==============================================================================

config.specs = [
  '../appTest/**/*.ts'
],

// ==============================================================================
// Capabilities
// ==============================================================================
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    // iPhone 13 mini
    {
        'appium:deviceName': 'iPhone 13 mini',
        'appium:udid': '00008110-001264901E04801E',
        'appium:platformName': 'IOS',
        'appium:platformVersion': '16.0',
        'appium:automationName': 'XCUITest',
        'appium:orientation': 'PORTRAIT',
        // 'appium:app': '/Users/apetunin/Projects/wflwr_appium_test_suite/apps/wflwr_debug.ipa',
        'appium:app': join(
        process.cwd(), './apps/wflwr_debug.ipa'
        ),
        'appium:bundleId': 'com.redbull.WingsForLifeWorldRun.debug',
        'appium:xcodeSigningId': 'iPhone Developer',
        'appium:xcodeOrgId': process.env.XCODE_ORG_ID,
        'appium:newCommandTimeout': 240,
        // 'appium:noReset': true,
        'appium:fullReset' : true,
        'appium:prebuildWDA': true,
        'appium:derivedDataPath': '/Users/apetunin/Library/Developer/Xcode/DerivedData',
        'appium:systemPort': 6066
    },
    
    // iPhone 14 Pro MAX
    // {
    //     "appium:deviceName": "iPhone 14 Pro Max",
    //     "appium:udid": "00008120-000C396E363B401E",
    //     "appium:platformName": "IOS",
    //     'appium:platformVersion': '17',
    //     "appium:automationName": "XCUITest",
    //     "appium:orientation": "PORTRAIT",
    //     "appium:app": "/Users/apetunin/Projects/wflwr_appium_test_suite/apps/wflwr_debug.ipa",
    //     "appium:bundleId": "com.redbull.WingsForLifeWorldRun.debug",
    //     "appium:xcodeSigningId": "iPhone Developer",
    //     "appium:xcodeOrgId": process.env.XCODE_ORG_ID,
    //     "appium:newCommandTimeout": 240,
    //     // "appium:noReset": true,
    //     "appium:fullReset" : true,
    //     "appium:prebuildWDA": true,
    //     "appium:derivedDataPath": "/Users/apetunin/Library/Developer/Xcode/DerivedData",
    //     "appium:systemPort": 6077
    // },
    
    // iPhone Xr
    // {
    //     "appium:deviceName": "iPhone Xr",
    //     "appium:udid": "00008020-001A4CD40E68002E",
    //     "appium:platformName": "IOS",
    //     "appium:platformVersion": "16.6.1",
    //     "appium:automationName": "XCUITest",
    //     "appium:orientation": "PORTRAIT",
    //     "appium:app": "/Users/apetunin/Projects/wflwr_appium_test_suite/apps/wflwr_debug.ipa",
    //     "appium:bundleId": "com.redbull.WingsForLifeWorldRun.debug",
    //     "appium:xcodeSigningId": "iPhone Developer",
    //     "appium:xcodeOrgId": process.env.XCODE_ORG_ID,
    //     "appium:newCommandTimeout": 240,
    //     // "appium:noReset": true,
    //     "appium:fullReset" : true,
    //     "appium:prebuildWDA": true,
    //     "appium:derivedDataPath": "/Users/apetunin/Library/Developer/Xcode/DerivedData",
    //     "appium:systemPort": 6055
    // },
];

exports.config = config;
