import { ANDROID_APP_NAME, IOS_APP_NAME } from '../helpers/Constants';
import { alertNoticeTextIOS, alertNoticeText, activityTrackingAlertTitle } from '../helpers/TextCopies';
import Gestures from '../helpers/Gestures';
import Device from '../screenobjects/android/Device';
const CookiesBanner = require('../screenobjects/android/components/CookiesBanner');
const CookiesBannerExpanded = require('../screenobjects/android/components/CookiesBannerExpanded');
const LoginScreen = require('../screenobjects/android/LoginScreen');
const IOSTrackingAlert = require('../screenobjects/android/os_components/IOSTrackingAlert');

describe('WFLWR E2E AUTOMATION TEST RUNNER', () => {

  beforeAll(async () => {
    await Device.getScreenSize();
    await driver.startRecordingScreen();
  });

  beforeEach(async ()=> {
    if (await driver.isLocked()) { await driver.unlock(); }
  });

  afterAll(async () => {
    // const fileName = `${driver.capabilities['platformName']}_${Device.isAndroid ? driver.capabilities['deviceManufacturer'] : 'apple'}_${Device.isAndroid ? driver.capabilities['deviceModel'] : driver.capabilities['deviceName']}_${driver.capabilities['udid']}_${driver.config['suite'][0]}`;
    // await driver.saveRecordingScreen(`./appTest/screenshots/video/${fileName}.mp4`);
    await driver.terminateApp(Device.isAndroid ? ANDROID_APP_NAME : IOS_APP_NAME);
  });

  describe('BUILD INSTALLATION AND PLATFORM MATCH', () => {
    if (Device.isAndroid) {
      it('Device platform is Android', async () => {
        await expect(Device.isAndroid).toBe(true);
      });
    }
    if (Device.isIOS) {
      it('Device platform is iOS', async () => {
        await expect(Device.isIOS).toBe(true);
      });
    }

    it('Should have have app installed on the device', async () => {
      await expect(await driver.isAppInstalled(Device.isAndroid ? ANDROID_APP_NAME : IOS_APP_NAME)).toBe(true);
    });

    // if (Device.isIOS && driver.capabilities['fullReset']) {
    //   it('(iOS only) Tracking alert is DISPLAYED', async () => {
    //     const elem = await IOSTrackingAlert.container;
    //     await elem.waitForDisplayed({ timeout: 3000 });
    //   });
    //   it('(iOS only) Tracking alert HAS correct text copy', async () => {
    //     const elem = await IOSTrackingAlert.container;
    //     await expect(elem).toHaveText(activityTrackingAlertTitle);
    //   });
    //   it('(iOS only) TAP on "Allow" button DISMISS tracking alert', async () => {
    //     const elem = await IOSTrackingAlert.container;
    //     await IOSTrackingAlert.tapAllowButton();
    //     await elem.waitForDisplayed({ timeout: 3000, reverse: true });
    //   });
    // }
  });

  // add section to handle IOS tracking alert when launched first time
  // use fullReset:true in appium config to simulate clean state for every ios run

  describe('LOGIN SCREEN. CONTAINERS AND LAYOUT', () => {
    it('Main App container EXISTS and DISPLAYED. App launched', async () => {
      const elem = await LoginScreen.container;
      await elem.waitForDisplayed({ timeout: 3000 });
    });

    it('Main App container is NOT SCROLLABLE', async () => {
      if (Device.isAndroid) {
        const elem = await LoginScreen.touchOutside;
        await expect(elem).toHaveAttribute('scrollable', 'false');
      }
      if (Device.isIOS) {
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
      if (Device.isAndroid) {
        const elem = await LoginScreen.touchOutside;
        await expect(elem).toHaveAttribute('scrollable', 'false');
      }
      if (Device.isIOS) {
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

  describe('LOGIN SCREEN. COOKIES CONSENT BANNER.', () => {
    it('Banner container is NOT CLICKABLE and is NOT SCROLLABLE', async () => {
      const elem = await LoginScreen.bannerLayoutContainer;
      if (Device.isAndroid) {
        await expect(elem).toHaveAttribute('scrollable', 'false');
        await expect(elem).toHaveAttribute('clickable', 'false');
      }
      if (Device.isIOS) {
        //TODO (tried hittable - didn't work)
      }
    });

    it('Banner HAS privacy settings user message', async () => {
      const elem = await CookiesBanner.textLayout;
      await expect(elem).toExist();
      await expect(elem).toBeDisplayed();
    });

    it('Privacy Settings Text HAS correct TITLE', async () => {
      const elem = await CookiesBanner.bannerTitle;
      await expect(elem).toHaveText('Privacy Settings');
    });

    it('Privacy Settings text HAS correct TEXT copy', async () => {
      const elem = await CookiesBanner.alertNotice;
      await expect(elem).toHaveText(alertNoticeText);
    });

    // //Buttons
    it('Banner HAS button layout', async () => {
      const elem = await CookiesBanner.buttonLayout;
      await expect(elem).toBeDisplayed();
    });

    it('"Allow All" button IS displayed and HAS correct LABEL', async () => {
      const elem = await CookiesBanner.allowAllButton;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveText('Allow All');
    });

    it('"Allow All" button is CLICKABLE', async () => {
      const elem = await CookiesBanner.allowAllButton;
      if (Device.isAndroid) await expect(elem).toHaveAttribute('clickable', 'true');
      if (Device.isIOS) await expect(elem).toHaveAttribute('hittable', 'true');
    });

    it('"Decline All" button is DISPLAYED and HAS correct LABEL', async () => {
      const elem = await CookiesBanner.declineAllButton;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveText('Decline All');
    });

    it('"Decline All" button is CLICKABLE', async () => {
      const elem = await CookiesBanner.declineAllButton;
      if (Device.isAndroid) await expect(elem).toHaveAttribute('clickable', 'true');
      if (Device.isIOS) await expect(elem).toHaveAttribute('hittable', 'true');
    });

    it('"Go to Settings" button is DISPLAYED and HAS correct LABEL', async () => {
      const elem = await CookiesBanner.goToSettingsButton;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveText('Go to Settings');
    });

    it('"Go to Settings" button is CLICKABLE', async () => {
      const elem = await CookiesBanner.goToSettingsButton;
      if (Device.isAndroid) await expect(elem).toHaveAttribute('clickable', 'true');
      if (Device.isIOS) await expect(elem).toHaveAttribute('hittable', 'true');
    });

    it('TAP on "Go to Settings" button REDIRECTS to expanded cookie banner', async () => {
      await CookiesBanner.tapGoToSettingsButton();
      await driver.pause(2000);
      await CookiesBannerExpanded.pcLayoutContainer.waitForDisplayed({ timeout: 2000 });
    });
  });

  describe('LOGIN SCREEN. PRIVACY SETTINGS SDK PREFERENCES', () => {
    it('Expanded banner HAS "Privacy Settings" TITLE', async () => {
      const elem = CookiesBannerExpanded.title;
      await expect(elem).toHaveText('Privacy Settings');
    });

    it('Main Info text is DISPLAYED and NOT SCROLLABLE', async () => {
      const elem = CookiesBannerExpanded.mainText;
      await expect(elem).toHaveText(await Device.isAndroid ? alertNoticeText : alertNoticeTextIOS);
      // await expect(elem).toHaveAttribute('scrollable', 'false');
    });

    it('Button layout container is DISPLAYED', async () => {
      const elem = CookiesBannerExpanded.buttonLayout;
      await expect(elem).toBeDisplayed();
    });

    it('"Allow All" button is DISPLAYED and CLICKABLE', async () => {
      const elem = CookiesBannerExpanded.allowAllBtn;
      await expect(elem).toBeDisplayed();
      if (Device.isAndroid) await expect(elem).toHaveAttribute('clickable', 'true');
      if (Device.isIOS) await expect(elem).toHaveAttribute('hittable', 'true');
    });

    it('"Allow All" button HAS correct LABEL', async () => {
      const elem = CookiesBannerExpanded.allowAllBtn;
      await expect(elem).toHaveText('Allow All');
    });

    it('"Decline All" button is DISPLAYED and CLICKABLE', async () => {
      const elem = CookiesBannerExpanded.declineAllBtn;
      await expect(elem).toBeDisplayed();
      if (Device.isAndroid) await expect(elem).toHaveAttribute('clickable', 'true');
      if (Device.isIOS) await expect(elem).toHaveAttribute('hittable', 'true');
    });

    it('"Decline All" button HAS correct LABEL', async () => {
      const elem = CookiesBannerExpanded.declineAllBtn;
      await expect(elem).toHaveText('Decline All');
    });

    it('"Strictly necessary" SDK container is DISPLAYED', async () => {
      const elem = CookiesBannerExpanded.strictlyNecessaryCont;
      await expect(elem).toBeDisplayed();
    });

    it('"Performance" SDK container is DISPLAYED', async () => {
      const elem = CookiesBannerExpanded.performanceCont;
      await expect(elem).toBeDisplayed();
    });

    it('"Marketing" SDK container is DISPLAYED', async () => {
      const elem = CookiesBannerExpanded.marketingCont;
      await expect(elem).toBeDisplayed();
    });

    it('SDK Preferences TOGGLES are OFF by default', async () => {
      const switch1 = await CookiesBannerExpanded.performanceSwitch;
      const switch2 = await CookiesBannerExpanded.marketingSwitch;
      if (Device.isAndroid) {
        expect(switch1).toHaveAttributeContaining('checked', 'false') &&
        expect(switch2).toHaveAttributeContaining('checked', 'false');
      }
      if (Device.isIOS) {
        expect(switch1).toHaveAttributeContaining('value', '0') &&
        expect(switch2).toHaveAttributeContaining('value', '0');
      }
    });

    it('"Performance" SDK toggle can be switched ON and OFF', async () => {
      const toggle = await CookiesBannerExpanded.performanceSwitch;
      await toggle.click();
      await driver.pause(1000);
      if (Device.isAndroid) await expect(toggle).toHaveAttributeContaining('checked', 'true');
      if (Device.isIOS) await expect(toggle).toHaveAttributeContaining('value', '1');
      await toggle.click();
      await driver.pause(1000);
      if (Device.isAndroid) await expect(toggle).toHaveAttributeContaining('checked', 'false');
      if (Device.isIOS) await expect(toggle).toHaveAttributeContaining('value', '0');
      await toggle.click();
      await driver.pause(1000);
      if (Device.isAndroid) await expect(toggle).toHaveAttributeContaining('checked', 'true');
      if (Device.isIOS) await expect(toggle).toHaveAttributeContaining('value', '1');
    });

    it('"Marketing" SDK toggle can be switched ON and OFF', async () => {
      const toggle = await CookiesBannerExpanded.marketingSwitch;
      await toggle.click();
      await driver.pause(1000);
      if (Device.isAndroid) await expect(toggle).toHaveAttributeContaining('checked', 'true');
      if (Device.isIOS) await expect(toggle).toHaveAttributeContaining('value', '1');
      await toggle.click();
      await driver.pause(1000);
      if (Device.isAndroid) await expect(toggle).toHaveAttributeContaining('checked', 'false');
      if (Device.isIOS) await expect(toggle).toHaveAttributeContaining('value', '0');
      await toggle.click();
      await driver.pause(1000);
      if (Device.isAndroid) await expect(toggle).toHaveAttributeContaining('checked', 'true');
      if (Device.isIOS) await expect(toggle).toHaveAttributeContaining('value', '1');
    });

    it('Settings ID section title is DISPLAYED', async () => {
      const elem = CookiesBannerExpanded.settingsIdTitle;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveText('Settings ID');
    });

    it('Settings ID number is DISPLAYED', async () => {
      const elem = CookiesBannerExpanded.settingsIdNumber;
      await expect(elem).toBeDisplayed();
      await expect(elem).not.toHaveText('');
    });

    it('Settings Id CAN BE COPIED with TAP on copy button', async () => {
      const elem = CookiesBannerExpanded.copyIdButton;
      await expect(elem).toBeDisplayed();
      await elem.click();
      await driver.pause(1000);
    });

    it('"Confirm My Choices" button is DISPLAYED in the footer', async () => {
      const elem = CookiesBannerExpanded.confirmButton;
      await expect(elem).toBeDisplayed();
    });

    it('"Confirm My Choices" button is CLICKABLE', async () => {
      const elem = CookiesBannerExpanded.confirmButton;
      if (Device.isAndroid) await expect(elem).toHaveAttribute('clickable', 'true');
      if (Device.isIOS) await expect(elem).toHaveAttribute('hittable', 'true');
    });

    it('"TAP on "Confirm My Choices" button DISMISS banner', async () => {
      const banner = CookiesBannerExpanded.pcLayoutContainer;
      const btn = LoginScreen.startYourJourneyButton;
      await CookiesBannerExpanded.tapAllowAllButton();
      await banner.waitForDisplayed({ timeout: 3000, reverse:true });
    });

    if (Device.isIOS && driver.capabilities['fullReset']) {
      it('(iOS only) Tracking alert is DISPLAYED', async () => {
        const elem = await IOSTrackingAlert.container;
        await elem.waitForDisplayed({ timeout: 3000 });
      });
      it('(iOS only) Tracking alert HAS correct text copy', async () => {
        const elem = await IOSTrackingAlert.container;
        await expect(elem).toHaveText(activityTrackingAlertTitle);
      });
      it('(iOS only) TAP on "Allow" button DISMISS tracking alert', async () => {
        const elem = await IOSTrackingAlert.container;
        await IOSTrackingAlert.tapAllowButton();
        await elem.waitForDisplayed({ timeout: 3000, reverse: true });
      });
    }

    it('REDIRECTED to main login screen, "Start your Journey" button DISPLAYED', async () => {
      const btn = LoginScreen.startYourJourneyButton;
      await btn.waitForDisplayed({ timeout: 5000 });
    });

    // *** WAS MOVED INTO THE PERMISSIONS SETUP EXPERIENCE
    //IOS. Handle push notifications prompt
    // if (Device.isIOS && driver.capabilities['fullReset']) {

    //   it('(iOS Only) TAP on "Confirm my Choices" button. Push notfications alert shows up', async () => {
    //     const elem = await IOSTrackingAlert.container;
    //     await CookiesBannerExpanded.tapAllowAllButton();
    //     await elem.waitForDisplayed({ timeout: 3000 });
    //   });

    //   it('(iOS only) Push notifications alert HAS correct TEXT copy', async () => {
    //     const elem = await IOSTrackingAlert.container;
    //     await expect(elem).toHaveText(notificationsTrackingAlertTitle);
    //   });

    //   it('(iOS only) TAP on "Allow" button. REDIRECTED to Login screen', async () => {
    //     //since both platfroms don't have ids for the main screen containers
    //     //and all ui elements on Login screen belong to the layer that is set visible:false
    //     //will check if 'Continue with email button' exists
    //     const btn = LoginScreen.continueWithEmailButton;
    //     await IOSTrackingAlert.tapAllowButton();
    //     await driver.pause(5000);
    //     await expect(btn).toExist();
    //   });

    // }

  });

});