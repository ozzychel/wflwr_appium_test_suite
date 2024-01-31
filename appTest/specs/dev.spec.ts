import { ANDROID_APP_NAME, IOS_APP_NAME } from '../helpers/Constants';
import { alertNoticeText, activityTrackingAlertTitle, notificationsTrackingAlertTitle } from '../helpers/TextCopies';
import Gestures from '../helpers/Gestures';
import Device from '../screenobjects/android/Device';
const CookiesBanner = require('../screenobjects/android/components/CookiesBanner');
// const CookiesBannerExpanded = require('../screenobjects/android/components/CookiesBannerExpanded');
const LoginScreen = require('../screenobjects/android/LoginScreen');
const IOSTrackingAlert = require('../screenobjects/android/os_components/IOSTrackingAlert');

describe('BUILD VALIDATION AND COOKIE CONSENT', () => {
  //===============================================================
  // APP IS INSTALLED AND HAS CORRECT NAME
  //===============================================================
  it('Should have have app installed on the device', async () => {
    await expect(await driver.isAppInstalled(Device.isAndroid ? ANDROID_APP_NAME : IOS_APP_NAME)).toBe(true);
  });

  it('Test 1', async () => {
    await expect(true).toBe(true);
  });

  it('Test 2', async () => {
    await expect(true).toBe(true);
  });

  it('Test 3', async () => {
    await expect(true).toBe(true);
  });

})