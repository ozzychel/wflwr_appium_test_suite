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

  describe('Get race ready. Confirming Audio.', () => {
    
    it('TAP on "Home" nav button. Redirected to Home screen', async () => {
      await NavBar.tapHomeButton();
      await driver.pause(2000);
      await expect(HomeScreen.countdown).toBeDisplayed();
    })
    
    it('SCROLL Home screen down until "Confirm Audio" button is displayed', async () => {
      const elem = HomeScreen.confirmAudioBtn;
      await Gestures.checkIfDisplayedWithSwipeUp(await elem, 5)
    })

    it('TAP on "Confirm Audio" button REDIRECTS to Audio Settings screen', async () => {
      const elem = AudioSettings.screenTitle;
      await HomeScreen.tapConfirmAudioBtn();
      await elem.waitForDisplayed({timeout:3000});
    })

    it('Audio Settings screen HAS correct TITLE', async () => {
      const elem = AudioSettings.screenTitle;
      await expect(elem).toHaveText("AUDIO SETTINGS");
    })

    it('Audio settings screen HAS a section with "Training" audio options', async () => {
      const elem = AudioSettings.trainingAudioLabel;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveText("TRAINING AUDIO");
    })

    it('Audio settings screen HAS a section with "Race Day" audio options', async () => {
      const elem = AudioSettings.raceDayAudioLabel;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveText("RACE DAY AUDIO");
    })

    it('TAP on Training Audio option starts downloading audio', async () => {
      //find way to make assertion of newly selected value
      await AudioSettings.tapTrainingDayAudioOption();
      await driver.pause(5000);
    })
    
    it('TAP on Race Day Audio option starts downloading audio', async () => {
      //find way to make assertion of newly selected value
      await AudioSettings.tapRaceDayAudioOption();
      await driver.pause(15000);
    })

    it('TAP on "Back" button REDIRECTS back to the Home screen', async () => {
      //find way to make assertion of newly selected value
      await AudioSettings.tapBackButton();
      await expect(HomeScreen.registerNowButtton).toBeDisplayed();
    })

  })

  describe('Get race ready. Confirming Units of Measure.', () => {
    
    // it('Go to Audio settings', async () => {
    //   await NavBar.tapAccountButton();
    //   await AccountScreen.tapSettingsTab();

    //   const elem = await $('//android.widget.TextView[contains(@text, "Audio")]');
    //   await Gestures.checkIfDisplayedWithSwipeUp(elem, 2);
    //   await elem.click();
    //   await driver.pause(2000)
    // })
    it('TAP on "Account" nav button REDIRECTS to Account screen', async () => {
      // TODO: add assertion to verify navigation to Account screen (requires hooks)
      await driver.pause(2000);
      await NavBar.tapAccountButton();
    })

    it('TAP on "Settings" REDIRECTS to Settings tab', async () => {
      // TODO: add assertion to verify navigation to Settings screen (requires hooks)
      await AccountScreen.tapSettingsTab();
    })
    
  })

})

