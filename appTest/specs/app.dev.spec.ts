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
  
  beforeEach(async ()=> {
    if(await driver.isLocked()) {
      await driver.unlock();
      await Device.enterPin(DEFAULT_PIN);
      await driver.pause(1000)
    } else { 
      console.log(">>>>>>>CONSOLE.LOG:>> SCREEN IS NOT LOCKED!!! <<<<<<<<")
    }
  })

  afterAll(async () => {
    await driver.closeApp();
  })

  

  describe('Get race ready. Confirming Battery Optimization.', () => {
    
    // it('Invoke native "App Info" settings of the app (Settings > Apps > World Run) ', async () => {
    //   await driver.pause(5000);
    //   await Device.executeAdbCommand(`am start -a android.settings.APPLICATION_DETAILS_SETTINGS -d package:${APP_NAME}`)
    //   await AppInfoSettings.screenTitle.waitForDisplayed({timeout:2000})
    // })

    // it('SCROLL untill "Battery" settings option IS DISPLAYED on the screen', async () => {
    //   const elem = AppInfoSettings.batteryMenuItem;
    //   await Gestures.checkIfDisplayedWithSwipeUp(elem, 3);
    // })

    // it('TAP on Battery setting REDIRECTS to battery usage menu', async () => {
    //   const elem = AppInfoSettings.unrestrictedMenuItem;
    //   await AppInfoSettings.tapMenuOption('Battery');
    //   await elem.waitForDisplayed({timeout:2000});
    //   await expect(elem).toBeDisplayed();
    // })

    // it('TAP on "Unrestricted" option selects Unrestricted battery usage', async () => {
    //   await AppInfoSettings.tapMenuOption('Unrestricted');
    //   await driver.pause(1000);
    //   await expect(AppInfoSettings.unrestrictedCheckbox).toHaveAttrContaining("checked", "true");
    // })

    // it('Relauch app', async () => {
    //   await driver.pressKeyCode(187);
    //   await driver.pause(2000);
    //   await Gestures.swipeRight(0.6);
    //   await Device.executeAdbCommand(`input tap`)
    // })

    it('Relauch app', async () => {
      const screenSize = await driver.getWindowRect();
      // await console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-", val)
      await driver.pause(5000)
    })

    
  })

})

