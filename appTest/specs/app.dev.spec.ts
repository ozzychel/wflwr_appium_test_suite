import { APP_NAME, DEFAULT_PIN, USER_BIRTH_MONTH, USER_FIRSTNAME, USER_LASTNAME, USER_BIRTH_DAY, USER_BIRTH_YEAR, USER_NATIONALITY, USER_EMAIL, USER_COUNTRY, USER_LANGUAGE, USER_LOCALE, USER_UOM } from "../helpers/Constants";
import { alertNoticeText } from "../helpers/TextCopies";
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

describe('WFLWR E2E AUTOMATION TEST RUNNER', () => {
  
  beforeAll(async () => {
    await Device.getScreenSize();
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
    await driver.closeApp();
    const fileName = `${driver.capabilities["deviceManufacturer"]}_${driver.capabilities["deviceModel"]}_${driver.capabilities["udid"]}_${driver.config["suite"][0]}`
    await driver.saveRecordingScreen(`./appTest/screenshots/video/${fileName}.mp4`);
    await driver.pause(2000);
  })

  describe('Get race ready. Confirm location services', () => {

    it('TAP on "Home" nav button redirects to Home screen', async () => {
      await NavBar.tapHomeButton();
      await expect(HomeScreen.countdown).toBeDisplayed();
    })
    
    it('SCROLL Home screen down until "Turn your GPS on" button is displayed', async () => {
      const elem = HomeScreen.turnGPSonBtn;
      await Gestures.checkIfDisplayedWithSwipeUp(await elem, 5)
    })

    it('"Turn your GPS on" button is active and clickable', async () => {
      const elem = HomeScreen.turnGPSonBtn;
      await expect(elem).toHaveAttrContaining('enabled','true');
    })

    it('TAP on "Turn your GPS on" button INVOKES "Turn on your location" banner', async () => {
      const elem = TurnOnLocationBanner.banner;
      await HomeScreen.tapTurnGPSonBtn();
      await elem.waitForDisplayed({timeout:2000});
    })

    it('"Turn on your location" banner HAS correct TITLE', async () => {
      const elem = TurnOnLocationBanner.bannerTitle;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveText('TURN ON YOUR LOCATION');
    })
    
    it('"Turn on your location" banner HAS correct SUBTITLE', async () => {
      const elem = TurnOnLocationBanner.bannerSubtitle;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveTextContaining('We need your location');
    })

    it('"Turn on your location" button is DISPLAYED and CLICKABLE', async () => {
      const elem = TurnOnLocationBanner.turnOnYourLocationBtn;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveAttrContaining('enabled', 'true');
    })

    it('TAP on "Turn on your location" button INVOKES OS Permissions dialog', async () => {
      const elem = PermissionsDialog.dialog;
      await TurnOnLocationBanner.tapTurnOnYourLocationBtn();
      await elem.waitForDisplayed({timeout:2000});
    })

    it('OS Permissions Dialog requests ACCESS to User LOCATION', async () => {
      const elem = PermissionsDialog.permissionMsg;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveTextContaining(`to access this device’s location?`)
    })

    it('"Approximate location" option CAN BE SELECTED', async () => {
      //older android versions doesn't have approx and precise selection
      //use element presence check
      const flag = await PermissionsDialog.approximateOption.isDisplayed();
      if(flag) {
        await PermissionsDialog.tapApproximateOption();
        await driver.pause(1000);
      } else {return true}
    })   
    
    it('"Precise location" option CAN BE SELECTED', async () => {
      //older android versions doesn't have approx and precise selection
      //use element presence check
      const flag = await PermissionsDialog.preciseOption.isDisplayed();
      if(flag) {
        await PermissionsDialog.tapPreciseOption();
        await driver.pause(1000);
      } else {return true}
    }) 

    it('TAP on "While using the app" button INVOKES OS dialog prompt - Pghysical Activity', async () => {
      await PermissionsDialog.tapWhileUsingTheAppBtn();
      await PermissionsDialog.dialog.waitForDisplayed({timeout:2000});
    })

    it('OS Permissions Dialog requests ACCESS to User Physical Activity', async () => {
      const elem = PermissionsDialog.permissionMsg;
      await expect(elem).toHaveTextContaining('to access your physical activity?')
    })

    it('TAP on "Allow" Physical Activity button DISMISSES Permissions dialog', async () =>{
      await PermissionsDialog.tapAllowBtn();
      await PermissionsDialog.dialog.waitForDisplayed({timeout: 2000, reverse: true});
    })

    it('TAP on "Allow" Physical Activity button INVOKES "Precise Location" banner', async () => {
      const elem = PreciseLocationBanner.banner;
      await elem.waitForDisplayed({timeout:2000});
    })

    it('"Precise location" banner HAS correct TITLE', async () => {
      const elem = PreciseLocationBanner.bannerTitle;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveText('PRECISE LOCATION');
    })
    
    it('"Precise location" banner HAS correct SUBTITLE', async () => {
      const elem = PreciseLocationBanner.bannerSubtitle;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveTextContaining('ALLOW ALL THE TIME');
    })

    it('"Go to Settings" button is DISPLAYED and CLICKABLE', async () => {
      const elem = PreciseLocationBanner.goToSettingsBtn;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveAttrContaining('enabled', 'true');
    })

    it('"Dismiss" button is DISPLAYED and CLICKABLE', async () => {
      const elem = PreciseLocationBanner.dismissBtn;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveAttrContaining('enabled', 'true');
    })

    it('TAP on "Go to Settings" REDIRECTS to OS Location Settings', async () => {
      await PreciseLocationBanner.tapGoToSettingsBtn();
      await AppOsPermissions.container.waitForDisplayed({timeout: 3000});
    })

    it('TAP on "Allow all the time" setting SELECTS the option', async () => {
      const elem = AppOsPermissions.allowAllTheTime;
      await expect(elem).toHaveAttrContaining('checked', 'false');
      await AppOsPermissions.tapAllowAllTheTime();
      await expect(elem).toHaveAttrContaining('checked', 'true')
    })

    it('TAP on the Back button REDIRECTS back to the app', async () => {
      await AppOsPermissions.tapBackButton();
      await AppOsPermissions.container.waitForDisplayed({timeout:3000, reverse:true});
      await expect(NavBar.homeButton).toBeDisplayed();
      await driver.pause(3000); 
    })

    it('"Turn you location on" HAS green check mark', async () => {
      //todo
      return true;
    })
  })  
  
})
