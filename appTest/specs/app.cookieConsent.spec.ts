import { APP_NAME, DEFAULT_PIN } from "../helpers/Constants";
import { alertNoticeText } from "../helpers/TextCopies";
const CookiesBanner = require('../screenobjects/android/components/CookiesBanner');
const CookiesBannerExpanded = require('../screenobjects/android/components/CookiesBannerExpanded');
const LoginScreen = require('../screenobjects/android/LoginScreen');
const Device = require('../screenobjects/android/Device');

describe('WFLWR E2E AUTOMATION TEST RUNNER', () => {
  
  beforeAll(async () => {
    await Device.getScreenSize();
    await Device.getPlatform();
    await driver.startRecordingScreen();
  })

  beforeEach(async ()=> {
    if(await driver.isLocked()) {
      await driver.unlock();
      await Device.enterPin(DEFAULT_PIN);
      await driver.pause(1000)
    } else { 
      console.log(">>>>>>>CONSOLE.LOG:>> SCREEN WAS NOT LOCKED!!! <<<<<<<<")
    }
  })

  afterAll(async () => {
    const fileName = `${driver.capabilities["deviceManufacturer"]}_${driver.capabilities["deviceModel"]}_${driver.capabilities["udid"]}_${driver.config["suite"][0]}`
    await driver.saveRecordingScreen(`./appTest/screenshots/video/${fileName}.mp4`);
    await driver.closeApp();
  })

  describe('BUILD APP INSTALLATION', () => {
    it('Should have have app installed on the device', async () => {
      return driver.isAppInstalled(APP_NAME);
    })
  })

  describe('LOGIN SCREEN. CONTAINERS AND LAYOUT', () => {
    it('Main App container EXISTS and DISPLAYED. App launched', async () => {
      const elem = await LoginScreen.container;
      await elem.waitForDisplayed({ timeout: 3000 });
    });

    it('Main App container is NOT SCROLLABLE', async () => {
      const elem = await LoginScreen.touchOutside;
      await expect(elem).toHaveAttrContaining('scrollable', 'false');
    })

    it('Touch_outside container EXISTS and DISPLAYED', async () => {
      const elem = await LoginScreen.touchOutside;
      await expect(elem).toBeDisplayed();
    })

    it('Touch_outside container is NOT SCROLLABLE', async () => {
      const elem = await LoginScreen.touchOutside;
      await expect(elem).toHaveAttrContaining('scrollable', 'false');
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
      await expect(elem).toHaveAttrContaining('scrollable', 'false');
      await expect(elem).toHaveAttrContaining('clickable', 'false');
    })

    it('Banner HAS privacy settings user message', async () => {
      const elem = await CookiesBanner.textLayout;
      await expect(elem).toExist();
      await expect(elem).toBeDisplayed();
    })

    it('Privacy Settings Text IS scrollable and is NOT CLICKABLE', async () => {
      const elem = await CookiesBanner.textLayout;
      await expect(elem).toHaveAttrContaining('scrollable', 'true');
      await expect(elem).toHaveAttrContaining('clickable', 'false');
    })

    it('Privacy Settings Text HAS correct TITLE', async () => {
      const elem = await CookiesBanner.bannerTitle;
      await expect(elem).toHaveText('Privacy Settings');
    })

    it('Privacy Settings text HAS correct TEXT copy', async () => {
      const elem = await CookiesBanner.alertNotice;
      await expect(elem).toHaveText(alertNoticeText);
    })

    //Buttons
    it('Banner HAS button layout', async () => {
      const elem = await CookiesBanner.buttonLayout;
      await expect(elem).toBeDisplayed();
    })

    it('Button layout is NOT SCROLLABLE', async () => {
      const elem = await CookiesBanner.buttonLayout;
      await expect(elem).toHaveAttrContaining('scrollable', 'false');
    })

    it('"Allow All" button IS displayed and HAS correct LABEL', async () => {
      const elem = await CookiesBanner.allowAllButton;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveText('Allow All');
    })

    it('"Allow All" button is CLICKABLE', async () => {
      const elem = await CookiesBanner.allowAllButton;
      await expect(elem).toHaveAttrContaining('clickable', 'true')
    })

    it('"Decline All" button is DISPLAYED and HAS correct LABEL', async () => {
      const elem = await CookiesBanner.declineAllButton;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveText('Decline All')
    })

    it('"Decline All" button is CLICKABLE', async () => {
      const elem = await CookiesBanner.declineAllButton;
      await expect(elem).toHaveAttrContaining('clickable', 'true')
    })

    it('"Go to Settings" button is DISPLAYED and HAS correct LABEL', async () => {
      const elem = await CookiesBanner.goToSettingsButton;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveText('Go to Settings');
    })

    it('"Go to Settings" button is CLICKABLE', async () => {
      const elem = await CookiesBanner.goToSettingsButton;
      await expect(elem).toHaveAttrContaining('clickable', 'true')
    })

    it('TAP Go to Settings button', async () => {
      await CookiesBanner.tapGoToSettingsButton();
      await driver.pause(2000);
      await CookiesBannerExpanded.pcLayoutContainer.waitForDisplayed({timeout: 2000});
    })
  })

  describe('LOGIN SCREEN. PRIVACY SETTINGS SDK PREFERENCES', () => {
    //Privacy Settings Banner Expanded
    it('Expanded Cookies Banner main containers are DISPLAYED ', async () => {
      const pcLayout = await CookiesBannerExpanded.pcLayoutContainer;
      const topScrollView = CookiesBannerExpanded.topScrollView;
      const footer = await CookiesBannerExpanded.footerLayout;
      await expect(pcLayout).toBeDisplayed();
      await expect(topScrollView).toBeDisplayed();
      await expect(footer).toBeDisplayed();
    })

    it('Screen HAS "Privacy Settings" TITLE', async () => {
      const elem = CookiesBannerExpanded.title;
      await expect(elem).toHaveText('Privacy Settings');
    })

    it('Main Info text is DISPLAYED and NOT SCROLLABLE', async () => {
      const elem = CookiesBannerExpanded.mainText;
      await expect(elem).toHaveText(alertNoticeText);
      await expect(elem).toHaveAttrContaining('scrollable', 'false');
    })

    it('Button layout container is DISPLAYED', async () => {
      const elem = CookiesBannerExpanded.buttonLayout;
      await expect(elem).toBeDisplayed();
    })


    it('"Allow All" button is DISPLAYED and CLICKABLE', async () => {
      const elem = CookiesBannerExpanded.allowAllBtn;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveAttrContaining('clickable', 'true');
    })

    it('"Decline All" button is DISPLAYED and CLICKABLE', async () => {
      const elem = CookiesBannerExpanded.declineAllBtn;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveAttrContaining('clickable', 'true');
    })

    //add button toggle here

    it('Preferences list is DISPLAYED', async () => {
      const elem = CookiesBannerExpanded.preferencesList;
      await expect(elem).toBeDisplayed();
    })

    //TODO: create tests for SDK preferences, and for every sdk page
    
    it('SDK Preferences TOGGLE can be switched ON and OFF', async () => {
      const switch1 = await $('(//android.widget.Switch[@content-desc="Consent"])[1]')
      const switch2 = await $('(//android.widget.Switch[@content-desc="Consent"])[2]')
      expect(switch1).toHaveAttributeContaining('checked', 'false');
      await switch1.click();
      await driver.pause(1000)
      expect(switch1).toHaveAttributeContaining('checked', 'true');
      await switch1.click();
      await driver.pause(1000)
      expect(switch1).toHaveAttributeContaining('checked', 'false');
      await switch1.click();
      expect(switch1).toHaveAttributeContaining('checked', 'true');
      await switch2.click();
      await driver.pause(1000);
      expect(switch1).toHaveAttributeContaining('checked', 'true');
    })

    it('Settings ID section title is DISPLAYED', async () => {
      const elem = CookiesBannerExpanded.settingsIdTitle;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveText('Settings ID');
    })

    it('Settings ID number is DISPLAYED', async () => {
      const elem = CookiesBannerExpanded.settingsIdNumber;
      await expect(elem).toBeDisplayed();
      await expect(elem).not.toHaveText('');
    })

    it('Settings Id CAN BE COPIED with copy button TAP', async () => {
      const elem = CookiesBannerExpanded.copyIdButton;
      await expect(elem).toBeDisplayed();
      await elem.click();
      await driver.pause(1000)
    })

    it('"Confirm My Choices" button is DISPLAYED in the footer', async () => {
      const elem = CookiesBannerExpanded.confirmButton;
      await expect(elem).toBeDisplayed();
    })

    it('"Confirm My Choices" button is ENABLED and CLICKABLE', async () => {
      const elem = CookiesBannerExpanded.confirmButton;
      await expect(elem).toHaveAttrContaining('enabled', 'true');
      await expect(elem).toHaveAttrContaining('clickable', 'true');
    })

    it('TAP "Confirm My Choices" button. REDIRECTED to Login screen', async () => {
        const container = LoginScreen.container;
        await CookiesBannerExpanded.tapAllowAllButton();
        await container.waitForDisplayed({timeout: 2000, reverse:true});
        await (LoginScreen.appUiView).waitForDisplayed({timeout: 2000});
    })

  })

})