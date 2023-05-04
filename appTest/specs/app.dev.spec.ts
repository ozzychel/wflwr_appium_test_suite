import { APP_NAME, DEFAULT_PIN, USER_BIRTH_MONTH, USER_FIRSTNAME, USER_LASTNAME, USER_BIRTH_DAY, USER_BIRTH_YEAR, USER_NATIONALITY, USER_EMAIL, USER_COUNTRY } from "../helpers/Constants";
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


describe('WFLWR E2E AUTOMATION TEST RUNNER', () => {
  
  beforeEach(async ()=> {
    if(await driver.isLocked()) {
      await driver.unlock();
      await Device.enterPin(DEFAULT_PIN);
      await driver.pause(1000)
    } else { 
      console.log(">>>>>>> CONSOLE.LOG:>> SCREEN IS NOT LOCKED!!! <<<<<<<<")
    }
  })

  // afterAll(async () => {
  //   await driver.closeApp();
  // })

  describe('Testing', () => {

    it('Welcome banner IS DISPLAYED', async () => {
      const elem = AccountCreatedBanner.banner;
      await expect(elem).toBeDisplayed();
    })

    it('Welcome banner IS NOT SCROLLABLE', async () => {
      const elem = AccountCreatedBanner.banner;
      await expect(elem).toHaveAttributeContaining('scrollable', 'false')
    })

    it('Welcome banner title IS DISPLAYED and HAS correct TEXT', async () => {
      const elem = AccountCreatedBanner.bannerTitle;
      await expect(elem).toBeDisplayed();
    })

    it('Welcome banner subtitle IS DISPLAYED and HAS correct TEXT', async () => {
      const elem = AccountCreatedBanner.bannerSubtitle;
      await expect(elem).toBeDisplayed();
    })

    it('"Register Now" button IS DISPLAYED and CLICKABLE', async () => {
      const elem = AccountCreatedBanner.registerButton;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveAttrContaining('clickable', 'true');
    })
    
    it('"Register Now" button HAS correct LABEL', async () => {
      const elem = AccountCreatedBanner.registerButtonLabel;
      await expect(elem).toBeDisplayed()
      await expect(elem).toHaveText('REGISTER NOW');
    })

    it('"Dismiss" button IS DISPLAYED and CLICKABLE', async () => {
      const elem = AccountCreatedBanner.dismissButton;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveAttrContaining('clickable', 'true');
    })

    it('"Dismiss" button HAS correct LABEL', async () => {
      const elem = AccountCreatedBanner.dismissButtonLabel;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveText('DISMISS');
    })

    it('TAP on "Dismiss" button DISSMISSES Welcome banner', async () => {
      const elem = AccountCreatedBanner.banner;
      await AccountCreatedBanner.tapDismissButton();
      await elem.waitForDisplayed({timeout: 2000, reverse: true})
    })

  })

})

