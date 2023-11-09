import { ANDROID_APP_NAME, IOS_APP_NAME } from '../helpers/Constants';
import { alertNoticeTextIOS, alertNoticeText, activityTrackingAlertTitle, notificationsTrackingAlertTitle } from '../helpers/TextCopies';
import Gestures from '../helpers/Gestures';
const CookiesBanner = require('../screenobjects/android/components/CookiesBanner');
const CookiesBannerExpanded = require('../screenobjects/android/components/CookiesBannerExpanded');
const LoginScreen = require('../screenobjects/android/LoginScreen');
const IOSTrackingAlert = require('../screenobjects/android/os_components/IOSTrackingAlert');
// const Device = require('../screenobjects/android/Device');
import Device from '../screenobjects/android/Device';

describe('WFLWR E2E AUTOMATION TEST RUNNER', () => {
 
  beforeAll(async () => {
    await Device.getScreenSize();
    await console.log("============BEFOREALL===DEVICE====", Device)
    await console.log("============SCREENSIZE==============", Device.screenSize)
  });

  beforeEach(async ()=> {
    if (await driver.isLocked()) {
      await driver.unlock();
    }
  });

  afterAll(async () => {
    const fileName = `${driver.capabilities['platformName']}_${driver.isAndroid ? driver.capabilities['deviceManufacturer'] : 'apple'}_${driver.isAndroid ? driver.capabilities['deviceModel'] : driver.capabilities['deviceName']}_${driver.capabilities['udid']}_${driver.config['suite'][0]}`;
    await driver.saveRecordingScreen(`./appTest/screenshots/video/${fileName}.mp4`);
    await driver.terminateApp(driver.isAndroid ? ANDROID_APP_NAME : IOS_APP_NAME);
  });

  console.log("============= DEVICE isOS =============", Device.isIOS);
  console.log("============= DEVICE isBrowserStack =============", Device.isBrowserStack);
  console.log("============SCREENSIZE==============", Device.screenSize)
  if (driver.isAndroid) {
    it('Device platform is Android', async () => {
      await expect(driver.isAndroid).toBe(true);
    });
  }
  if (driver.isIOS) {
    it('Device platform is iOS', async () => {
      await console.log("============= INSIDE IF-IT. DEVICE isOS =============", Device.isIOS);
      await console.log("============= BEFORE-DEVICE isBrowserStack =============", Device.isBrowserStack);
      await console.log("============SCREENSIZE==============", Device.screenSize)
      await expect(driver.isIOS).toBe(true);
    });
  }

  it('Should have have app installed on the device', async () => {
    await expect(await driver.isAppInstalled(driver.isAndroid ? ANDROID_APP_NAME : IOS_APP_NAME)).toBe(true);
  });


  // add section to handle IOS tracking alert when launched first time
  // use fullReset:true in appium config to simulate clean state for every ios run
  if (driver.isIOS && driver.capabilities['fullReset']) {
    it('(iOS only) Tracking alert is DISPLAYED', async () => {
      const elem = await IOSTrackingAlert.container;
      await elem.waitForDisplayed({ timeout: 3000 });
    });

    it('(iOS only) Tracking alert HAS correct text copy', async () => {
      const elem = await IOSTrackingAlert.container;
      await expect(elem).toHaveTextContaining(activityTrackingAlertTitle);
    });

    it('(iOS only) TAP on "Allow" button DISMISS tracking alert', async () => {
      const elem = await IOSTrackingAlert.container;
      await IOSTrackingAlert.tapAllowButton();
      await elem.waitForDisplayed({ timeout: 3000, reverse: true });
    });
  }

  it('Main App container EXISTS and DISPLAYED. App launched', async () => {
    const elem = await LoginScreen.container;
    await elem.waitForDisplayed({ timeout: 3000 });
  });

  it('Main App container is NOT SCROLLABLE', async () => {
    if (driver.isAndroid) {
      const elem = await LoginScreen.touchOutside;
      await expect(elem).toHaveAttrContaining('scrollable', 'false');
    }
    if (driver.isIOS) {
      //since XCUI elements doesn't have scrollable attribute
      //will use background logo coordinates to check scroll
      const elem = await LoginScreen.logo;
      const rectBefore = await elem.getAttribute('rect');
      //swipe up and down
      await Gestures.swipeUp();
      await Gestures.swipeUp();
      await Gestures.swipeDown();
      const rectAfter =  await elem.getAttribute('rect');
      await expect(rectBefore).toEqual(rectAfter);
    }
  });

  it('Touch_outside container EXISTS and DISPLAYED', async () => {
    const elem = await LoginScreen.touchOutside;
    await expect(elem).toBeDisplayed();
  });

  it('Touch_outside container is NOT SCROLLABLE', async () => {
    if (driver.isAndroid) {
      const elem = await LoginScreen.touchOutside;
      await expect(elem).toHaveAttrContaining('scrollable', 'false');
    }
    if (driver.isIOS) {
      //since XCUI elements doesn't have scrollable attribute
      //will use background logo coordinates to check scroll
      const elem = await LoginScreen.logo;
      const rectBefore = await elem.getAttribute('rect');
      //swipe up and down
      await Gestures.swipeDown();
      await Gestures.swipeDown();
      const rectAfter =  await elem.getAttribute('rect');
      await expect(rectBefore).toEqual(rectAfter);
    }
  });

  it('Touch_outside container HAS NO TEXT', async () => {
    const elem = await LoginScreen.touchOutside;
    await expect(elem).toHaveText('');
  });

  it('Bottom screen banner container EXISTS and DISPLAYED', async () => {
    const elem = await LoginScreen.bannerLayoutContainer;
    await expect(elem).toBeDisplayed();
  });

});