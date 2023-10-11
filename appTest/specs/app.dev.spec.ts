import { APP_NAME, DEFAULT_PIN, USER_BIRTH_MONTH, USER_FIRSTNAME, USER_LASTNAME, USER_BIRTH_DAY, USER_BIRTH_YEAR, USER_NATIONALITY, USER_EMAIL, USER_COUNTRY, USER_LANGUAGE, USER_LOCALE, USER_UOM } from "../helpers/Constants";
import { alertNoticeTextIOS, alertNoticeText, iosTrackingAlertTitle } from "../helpers/TextCopies";
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
      it('Device platform is Android', async () => {
        await expect(driver.isAndroid).toBe(true)
      });
    }
    if(driver.isIOS) {
      it('Device platform is iOS', async () => {
        await expect(driver.isIOS).toBe(true);
      });
    }

    it('Should have have app installed on the device', async () => {
      await expect(await driver.isAppInstalled(APP_NAME)).toBe(true);
    })
  })

  describe('BUILD INSTALLATION AND PLATFORM MATCH', () => {
    if(driver.isAndroid) {
      it('Device platform is Android', async () => {
        await expect(driver.isAndroid).toBe(true)
      });
    }
    if(driver.isIOS) {
      it('Device platform is iOS', async () => {
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
      const elem = await LoginScreen.bannerLayoutContainer;
      if(driver.isAndroid) {
        await expect(elem).toHaveAttrContaining('scrollable', 'false');
        await expect(elem).toHaveAttrContaining('clickable', 'false');
      }
      if(driver.isIOS) {
        //TODO (tried hittable - didn't work)
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
      if(driver.isAndroid) await expect(elem).toHaveAttrContaining('clickable', 'true');
      if(driver.isIOS) await expect(elem).toHaveAttrContaining('hittable', 'true');
    })

    it('"Decline All" button is DISPLAYED and HAS correct LABEL', async () => {
      const elem = await CookiesBanner.declineAllButton;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveText('Decline All')
    })

    it('"Decline All" button is CLICKABLE', async () => {
      const elem = await CookiesBanner.declineAllButton;
      if(driver.isAndroid) await expect(elem).toHaveAttrContaining('clickable', 'true');
      if(driver.isIOS) await expect(elem).toHaveAttrContaining('hittable', 'true');
    })

    it('"Go to Settings" button is DISPLAYED and HAS correct LABEL', async () => {
      const elem = await CookiesBanner.goToSettingsButton;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveText('Go to Settings');
    })

    it('"Go to Settings" button is CLICKABLE', async () => {
      const elem = await CookiesBanner.goToSettingsButton;
      if(driver.isAndroid) await expect(elem).toHaveAttrContaining('clickable', 'true');
      if(driver.isIOS) await expect(elem).toHaveAttrContaining('hittable', 'true');
    })

    it('TAP on "Go to Settings" button REDIRECTS to expanded cookie banner', async () => {
      await CookiesBanner.tapGoToSettingsButton();
      await driver.pause(2000);
      await CookiesBannerExpanded.pcLayoutContainer.waitForDisplayed({timeout: 2000});
    })
  })

  describe('LOGIN SCREEN. PRIVACY SETTINGS SDK PREFERENCES', () => {
    //Privacy Settings Banner Expanded
    // it('Expanded Cookies Banner main containers are DISPLAYED ', async () => {
    //   const pcLayout = await CookiesBannerExpanded.pcLayoutContainer;
    //   const topScrollView = CookiesBannerExpanded.topScrollView;
    //   const footer = await CookiesBannerExpanded.footerLayout;
    //   await expect(pcLayout).toBeDisplayed();
    //   await expect(topScrollView).toBeDisplayed();
    //   await expect(footer).toBeDisplayed();
    // })

    it('Screen HAS "Privacy Settings" TITLE', async () => {
      const elem = CookiesBannerExpanded.title;
      await expect(elem).toHaveText('Privacy Settings');
    })

    it('Main Info text is DISPLAYED and NOT SCROLLABLE', async () => {
      const elem = CookiesBannerExpanded.mainText;
      await expect(elem).toHaveText(await driver.isAndroid ? alertNoticeText : alertNoticeTextIOS);
      // await expect(elem).toHaveAttrContaining('scrollable', 'false');
    })

    it('Button layout container is DISPLAYED', async () => {
      const elem = CookiesBannerExpanded.buttonLayout;
      await expect(elem).toBeDisplayed();
    })


    it('"Allow All" button is DISPLAYED and CLICKABLE', async () => {
      const elem = CookiesBannerExpanded.allowAllBtn;
      await expect(elem).toBeDisplayed();
      if(driver.isAndroid) await expect(elem).toHaveAttrContaining('clickable', 'true');
      if(driver.isIOS) await expect(elem).toHaveAttrContaining('hittable', 'true');
    })

    it('"Allow All" button HAS correct LABEL', async () => {
      const elem = CookiesBannerExpanded.allowAllBtn;
      await expect(elem).toHaveText('Allow All')
    })

    it('"Decline All" button is DISPLAYED and CLICKABLE', async () => {
      const elem = CookiesBannerExpanded.declineAllBtn;
      await expect(elem).toBeDisplayed();
      if(driver.isAndroid) await expect(elem).toHaveAttrContaining('clickable', 'true');
      if(driver.isIOS) await expect(elem).toHaveAttrContaining('hittable', 'true');
    })

    it('"Decline All" button HAS correct LABEL', async () => {
      const elem = CookiesBannerExpanded.declineAllBtn;
      await expect(elem).toHaveText('Decline All')
    })

    // //add button toggle here

    // it('Preferences list is DISPLAYED', async () => {
    //   const elem = CookiesBannerExpanded.preferencesList;
    //   await expect(elem).toBeDisplayed();
    //   await expect(elem).toHaveAttrContaining('scrollable', 'false');
    // })

    it('"Strictly necessary" consent container is DISPLAYED', async () => {
      const elem = CookiesBannerExpanded.strictlyNecessaryCont;
      await expect(elem).toBeDisplayed();
    })

    it('"Performance" consent container is DISPLAYED', async () => {
      const elem = CookiesBannerExpanded.performanceCont;
      await expect(elem).toBeDisplayed();
    })

    it('"Marketing" consent container is DISPLAYED', async () => {
      const elem = CookiesBannerExpanded.marketingCont;
      await expect(elem).toBeDisplayed();
    })

    // //TODO: create tests for SDK preferences, and for every sdk page
    
    // it('SDK Preferences TOGGLE can be switched ON and OFF', async () => {
    //   const switch1 = await $('(//android.widget.Switch[@content-desc="Consent"])[1]')
    //   const switch2 = await $('(//android.widget.Switch[@content-desc="Consent"])[2]')
    //   expect(switch1).toHaveAttributeContaining('checked', 'false');
    //   await switch1.click();
    //   await driver.pause(1000)
    //   expect(switch1).toHaveAttributeContaining('checked', 'true');
    //   await switch1.click();
    //   await driver.pause(1000)
    //   expect(switch1).toHaveAttributeContaining('checked', 'false');
    //   await switch1.click();
    //   expect(switch1).toHaveAttributeContaining('checked', 'true');
    //   await switch2.click();
    //   await driver.pause(1000);
    //   expect(switch1).toHaveAttributeContaining('checked', 'true');
    // })

    // it('Settings ID section title is DISPLAYED', async () => {
    //   const elem = CookiesBannerExpanded.settingsIdTitle;
    //   await expect(elem).toBeDisplayed();
    //   await expect(elem).toHaveText('Settings ID');
    // })

    // it('Settings ID number is DISPLAYED', async () => {
    //   const elem = CookiesBannerExpanded.settingsIdNumber;
    //   await expect(elem).toBeDisplayed();
    //   await expect(elem).not.toHaveText('');
    // })

    // it('Settings Id CAN BE COPIED with copy button TAP', async () => {
    //   const elem = CookiesBannerExpanded.copyIdButton;
    //   await expect(elem).toBeDisplayed();
    //   await elem.click();
    //   await driver.pause(1000)
    // })

    // it('"Confirm My Choices" button is DISPLAYED in the footer', async () => {
    //   const elem = CookiesBannerExpanded.confirmButton;
    //   await expect(elem).toBeDisplayed();
    // })

    // it('"Confirm My Choices" button is hittable and CLICKABLE', async () => {
    //   const elem = CookiesBannerExpanded.confirmButton;
    //   await expect(elem).toHaveAttrContaining('enabled', 'true');
    //   await expect(elem).toHaveAttrContaining('clickable', 'true');
    // })

    // it('TAP "Confirm My Choices" button. REDIRECTED to Login screen', async () => {
    //     const container = LoginScreen.container;
    //     await CookiesBannerExpanded.tapAllowAllButton();
    //     await container.waitForDisplayed({timeout: 2000, reverse:true});
    //     await (LoginScreen.appUiView).waitForDisplayed({timeout: 2000});
    // })

  })

})