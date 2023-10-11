import { APP_NAME, DEFAULT_PIN, USER_BIRTH_MONTH, USER_FIRSTNAME, USER_LASTNAME, USER_BIRTH_DAY, USER_BIRTH_YEAR, USER_NATIONALITY, USER_EMAIL, USER_COUNTRY, USER_LANGUAGE, USER_LOCALE, USER_UOM } from "../helpers/Constants";
import { alertNoticeText, iosTrackingAlertTitle } from "../helpers/TextCopies";
import Gestures from "../helpers/Gestures";
const CookiesBanner = require('../screenobjects/android/components/CookiesBanner');
const CookiesBannerExpanded = require('../screenobjects/android/components/CookiesBannerExpanded');
const LoginScreen = require('../screenobjects/android/LoginScreen');
const HomeScreen = require('../screenobjects/android/HomeScreen');
const WebViewScreen = require('../screenobjects/android/WebViewScreen');
const RegScreenMenu = require('../pageobjects/RegScreenMenu');
const RegScreenBody = require('../pageobjects/RegScreenBody');
const PersonalDataForm = require('../pageobjects/PersonalDataForm');
const ListPicker = require('../pageobjects/ListPicker');
const ExtrasForm = require('../pageobjects/ExtrasForm');
const PaymentMethod = require('../pageobjects/PaymentMethod');
const RegSummary = require('../pageobjects/RegSummary');
const NavBar = require('../screenobjects/android/components/NavBar');
const TeamScreen = require('../screenobjects/android/TeamScreen');
const AccountScreen = require('../screenobjects/android/AccountScreen');
const AboutYouTab = require('../screenobjects/android/AboutYouTab');
const RegistrationTab = require('../screenobjects/android/RegistrationTab');
const SettingsTab = require('../screenobjects/android/SettingsTab');
const Device = require('../screenobjects/android/Device');
const WebCookieBanner = require('../pageobjects/WebCookieBanner');
const AccountCreatedBanner = require('../screenobjects/android/components/AccountCreatedBanner');
const TurnOnLocationBanner = require('../screenobjects/android/components/TurnOnLocationBanner');
const PermissionsDialog = require('../screenobjects/android/os_components/PermissionsDialog');
const PreciseLocationBanner = require('../screenobjects/android/components/PreciseLocationBanner');
const AppOsPermissions = require('../screenobjects/android/os_components/AppOsPermissions');
const AudioSettings = require('../screenobjects/android/AudioSettings');
const UnitsOfMeasureSetting = require('../screenobjects/android/UnitsOfMeasureSetting');
const AppInfoSettings = require('../screenobjects/android/os_components/AppInfoSettings');
const IOSTrackingAlert = require('../screenobjects/android/os_components/IOSTrackingAlert');

describe('WFLWR E2E AUTOMATION TEST RUNNER', () => {
  
  beforeAll(async () => {
    await Device.getScreenSize();
    await Device.getPlatform();
  })

  afterAll(async () => {
    await driver.terminateApp(APP_NAME);
  })

  describe('BUILD INSTALLATION AND PLATFORM MATCH', () => {
    if(driver.isAndroid) {
      it('Device platform should is Android', async () => {
        await expect(driver.isAndroid).toBe(true)
      });
    }
    if(driver.isIOS) {
      it('Device platform should is iOS', async () => {
        await expect(driver.isIOS).toBe(true);
      });
    }

    it('Should have have app installed on the device', async () => {
      await expect(await driver.isAppInstalled(APP_NAME)).toBe(true);
    })
  })

  // add section to handle IOS tracking alert when launched first time
  // use fullReset:true in appium config to simulate clean state for every ios run
  if(driver.isIOS && driver.capabilities["fullReset"]) {
    describe('IOS TRACKING ALERT', () => {
      it('IOS tracking alert is displayed', async () => {
        const elem = await IOSTrackingAlert.container;
        await elem.waitForDisplayed({ timeout: 3000 });
      });

      it('IOS tracking alert HAS correct text copy', async () => {
        const elem = await IOSTrackingAlert.container;
        await expect(elem).toHaveTextContaining(iosTrackingAlertTitle);
      });

      it('TAP on "Allow" button DISMISS tracking alert', async () => {
        const elem = await IOSTrackingAlert.container;
        await IOSTrackingAlert.tapAllowButton();
        await elem.waitForDisplayed({ timeout: 3000 , reverse: true });
      });
    })
  }

  describe('LOGIN SCREEN. CONTAINERS AND LAYOUT', () => {
    it('Main App container EXISTS and DISPLAYED. App launched', async () => {
      const elem = await LoginScreen.container;
      await elem.waitForDisplayed({ timeout: 3000 });
    });

    it('Main App container is NOT SCROLLABLE', async () => {
      if(driver.isAndroid) {
        const elem = await LoginScreen.touchOutside;
        await expect(elem).toHaveAttrContaining('scrollable', 'false');
      }
      if(driver.isIOS) {
        //since XCUI elements doesn't have scrollable attribute
        //will use background logo coordinates to check scroll 
        const elem = await LoginScreen.logo;
        const rectBefore = await elem.getAttribute("rect");
        //swipe up and down
        await Gestures.swipeUp();
        await Gestures.swipeUp();
        await Gestures.swipeDown();
        const rectAfter =  await elem.getAttribute("rect");
        await expect(rectBefore).toEqual(rectAfter);
      }
    })

    it('Touch_outside container EXISTS and DISPLAYED', async () => {
      const elem = await LoginScreen.touchOutside;
      await expect(elem).toBeDisplayed();
    })


    it('Touch_outside container is NOT SCROLLABLE', async () => {
      if(driver.isAndroid) {
        const elem = await LoginScreen.touchOutside;
        await expect(elem).toHaveAttrContaining('scrollable', 'false');
      }
      if(driver.isIOS) {
        //since XCUI elements doesn't have scrollable attribute
        //will use background logo coordinates to check scroll 
        const elem = await LoginScreen.logo;
        const rectBefore = await elem.getAttribute("rect");
        //swipe up and down
        await Gestures.swipeDown();
        await Gestures.swipeDown();
        const rectAfter =  await elem.getAttribute("rect");
        await expect(rectBefore).toEqual(rectAfter);
      }
    })

    it('Touch_outside container HAS NO TEXT', async () => {
      const elem = await LoginScreen.touchOutside;
      await expect(elem).toHaveText('');
    })

    it('Bottom screen banner container EXISTS and DISPLAYED', async () => {
      const elem = await LoginScreen.bannerLayoutContainer;
      await expect(elem).toBeDisplayed();
    })

  })  

  describe('LOGIN SCREEN. COOKIES CONSENT BANNER.', () => {
    it('Banner container NOT CLICKABLE and is NOT SCROLLABLE', async () => {
      if(driver.isAndroid) {
        const elem = await LoginScreen.bannerLayoutContainer;
        await expect(elem).toHaveAttrContaining('scrollable', 'false');
        await expect(elem).toHaveAttrContaining('clickable', 'false');
      }
      if(driver.isIOS) {
        //TODO
      }
    })

    it('Banner HAS privacy settings user message', async () => {
      const elem = await CookiesBanner.textLayout;
      await expect(elem).toExist();
      await expect(elem).toBeDisplayed();
    })

    // it('Privacy Settings Text IS scrollable and is NOT CLICKABLE', async () => {
    //   const elem = await CookiesBanner.textLayout;
    //   await expect(elem).toHaveAttrContaining('scrollable', 'true');
    //   await expect(elem).toHaveAttrContaining('clickable', 'false');
    // })

    it('Privacy Settings Text HAS correct TITLE', async () => {
      const elem = await CookiesBanner.bannerTitle;
      await expect(elem).toHaveText('Privacy Settings');
    })

    it('Privacy Settings text HAS correct TEXT copy', async () => {
      const elem = await CookiesBanner.alertNotice;
      await expect(elem).toHaveText(alertNoticeText);
    })

    // //Buttons
    it('Banner HAS button layout', async () => {
      const elem = await CookiesBanner.buttonLayout;
      await expect(elem).toBeDisplayed();
    })

    // it('Button layout is NOT SCROLLABLE', async () => {
    //   const elem = await CookiesBanner.buttonLayout;
    //   await expect(elem).toHaveAttrContaining('scrollable', 'false');
    // })

    it('"Allow All" button IS displayed and HAS correct LABEL', async () => {
      const elem = await CookiesBanner.allowAllButton;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveText('Allow All');
    })

    it('"Allow All" button is CLICKABLE', async () => {
      const elem = await CookiesBanner.allowAllButton;
      if (driver.isAndroid) {
        await expect(elem).toHaveAttrContaining('clickable', 'true')
      }
      if(driver.isIOS) {
        await expect(elem).toHaveAttrContaining('enabled', 'true')
      }
    })

    it('"Decline All" button is DISPLAYED and HAS correct LABEL', async () => {
      const elem = await CookiesBanner.declineAllButton;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveText('Decline All')
    })

    it('"Decline All" button is CLICKABLE', async () => {
      const elem = await CookiesBanner.declineAllButton;
      if (driver.isAndroid) {
        await expect(elem).toHaveAttrContaining('clickable', 'true')
      }
      if(driver.isIOS) {
        await expect(elem).toHaveAttrContaining('enabled', 'true')
      }
    })

    it('"Go to Settings" button is DISPLAYED and HAS correct LABEL', async () => {
      const elem = await CookiesBanner.goToSettingsButton;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveText('Go to Settings');
    })

    it('"Go to Settings" button is CLICKABLE', async () => {
      const elem = await CookiesBanner.goToSettingsButton;
      if (driver.isAndroid) {
        await expect(elem).toHaveAttrContaining('clickable', 'true')
      }
      if(driver.isIOS) {
        await expect(elem).toHaveAttrContaining('enabled', 'true')
      }
    })

    it('TAP "Go to Settings" button', async () => {
      await CookiesBanner.tapGoToSettingsButton();
      await driver.pause(2000);
      await CookiesBannerExpanded.pcLayoutContainer.waitForDisplayed({timeout: 2000});
    })
  })

})