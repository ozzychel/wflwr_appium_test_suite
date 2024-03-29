import { ANDROID_APP_NAME, IOS_APP_NAME, DEFAULT_PIN, USER_UOM } from '../helpers/Constants';
import Gestures from '../helpers/Gestures';
const HomeScreen = require('../screenobjects/android/HomeScreen');
const NavBar = require('../screenobjects/android/components/NavBar');
const Device = require('../screenobjects/android/Device');
const TurnOnLocationBanner = require('../screenobjects/android/components/TurnOnLocationBanner');
const PermissionsDialog = require('../screenobjects/android/os_components/PermissionsDialog');
const PreciseLocationBanner = require('../screenobjects/android/components/PreciseLocationBanner');
const AppOsPermissions = require('../screenobjects/android/os_components/AppOsPermissions');
const AudioSettings = require('../screenobjects/android/AudioSettings');
const UnitsOfMeasureSetting = require('../screenobjects/android/UnitsOfMeasureSetting');
const AccountScreen = require('../screenobjects/android/AccountScreen');
const SettingsTab = require('../screenobjects/android/SettingsTab');
const AppInfoSettings = require('../screenobjects/android/os_components/AppInfoSettings');

describe('WFLWR E2E AUTOMATION TEST RUNNER', () => {

  beforeAll(async () => {
    await Device.getScreenSize();
    await Device.getPlatform();
    await driver.startRecordingScreen();
  });

  beforeEach(async ()=> {
    if (await driver.isLocked()) {
      await driver.unlock();
      await Device.enterPin(DEFAULT_PIN);
      await driver.pause(1000);
    } else {
      console.log('>>>>>>>CONSOLE.LOG:>> SCREEN WAS NOT LOCKED!!! <<<<<<<<');
    }
  });

  afterAll(async () => {
    const fileName = `${driver.capabilities['deviceManufacturer']}_${driver.capabilities['deviceModel']}_${driver.capabilities['udid']}_${driver.config['suite'][0]}`;
    await driver.saveRecordingScreen(`./appTest/screenshots/video/${fileName}.mp4`);
    await driver.terminateApp(driver.isAndroid ? ANDROID_APP_NAME : IOS_APP_NAME);
  });

  describe('Get race ready. Confirm location services', () => {

    it('TAP on "Home" nav button redirects to Home screen', async () => {
      await NavBar.tapHomeButton();
      await expect(HomeScreen.countdown).toBeDisplayed();
    });

    it('SCROLL Home screen down until "Turn your GPS on" button is displayed', async () => {
      const elem = HomeScreen.turnGPSonBtn;
      await Gestures.checkIfDisplayedWithSwipeUp(await elem, 5);
    });

    it('"Turn your GPS on" button is active and clickable', async () => {
      const elem = HomeScreen.turnGPSonBtn;
      await expect(elem).toHaveAttrContaining('enabled', 'true');
    });

    it('TAP on "Turn your GPS on" button INVOKES "Turn on your location" banner', async () => {
      const elem = TurnOnLocationBanner.banner;
      await HomeScreen.tapTurnGPSonBtn();
      await elem.waitForDisplayed({ timeout:2000 });
    });

    it('"Turn on your location" banner HAS correct TITLE', async () => {
      const elem = TurnOnLocationBanner.bannerTitle;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveText('TURN ON YOUR LOCATION');
    });

    it('"Turn on your location" banner HAS correct SUBTITLE', async () => {
      const elem = TurnOnLocationBanner.bannerSubtitle;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveTextContaining('We need your location');
    });

    it('"Turn on your location" button is DISPLAYED and CLICKABLE', async () => {
      const elem = TurnOnLocationBanner.turnOnYourLocationBtn;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveAttrContaining('enabled', 'true');
    });

    it('TAP on "Turn on your location" button INVOKES OS Permissions dialog', async () => {
      // const elem = PermissionsDialog.dialog;
      const elem = PermissionsDialog.contentContainer;
      await TurnOnLocationBanner.tapTurnOnYourLocationBtn();
      await elem.waitForDisplayed({ timeout:2000 });
    });

    it('OS Permissions Dialog requests ACCESS to User LOCATION', async () => {
      const elem = PermissionsDialog.permissionMsg;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveTextContaining(['Allow World Run to access this device', 'location?']);
    });

    it('"Approximate location" option CAN BE SELECTED', async () => {
      //older android versions doesn't have approx and precise selection
      //use element presence check
      const flag = await PermissionsDialog.approximateOption.isDisplayed();
      if (flag) {
        await PermissionsDialog.tapApproximateOption();
        await driver.pause(1000);
      } else {return true;}
    });

    it('"Precise location" option CAN BE SELECTED', async () => {
      //older android versions doesn't have approx and precise selection
      //use element presence check
      const flag = await PermissionsDialog.preciseOption.isDisplayed();
      if (flag) {
        await PermissionsDialog.tapPreciseOption();
        await driver.pause(1000);
      } else {return true;}
    });

    it('TAP on "While using the app" button INVOKES OS dialog prompt - Pghysical Activity', async () => {
      await PermissionsDialog.tapWhileUsingTheAppBtn();
      await PermissionsDialog.contentContainer.waitForDisplayed({ timeout:2000 });
    });

    it('OS Permissions Dialog requests ACCESS to User Physical Activity', async () => {
      const elem = PermissionsDialog.permissionMsg;
      await expect(elem).toHaveTextContaining('to access your physical activity?');
    });

    it('TAP on "Allow" Physical Activity button DISMISSES Permissions dialog', async () =>{
      await PermissionsDialog.tapAllowBtn();
      await PermissionsDialog.contentContainer.waitForDisplayed({ timeout: 2000, reverse: true });
    });

    it('TAP on "Allow" Physical Activity button INVOKES "Precise Location" banner', async () => {
      const elem = PreciseLocationBanner.banner;
      await elem.waitForDisplayed({ timeout:2000 });
    });

    it('"Precise location" banner HAS correct TITLE', async () => {
      const elem = PreciseLocationBanner.bannerTitle;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveText('PRECISE LOCATION');
    });

    it('"Precise location" banner HAS correct SUBTITLE', async () => {
      const elem = PreciseLocationBanner.bannerSubtitle;
      await expect(elem).toBeDisplayed();
      if (elem.toHaveAttrContaining('ALLOW ALL THE TIME')) {
        await expect(elem).toHaveTextContaining('ALLOW ALL THE TIME');
        return;
      }
      await expect(elem).toHaveTextContaining('ALWAYS ALLOW');
      return;

    });

    it('"Go to Settings" button is DISPLAYED and CLICKABLE', async () => {
      const elem = PreciseLocationBanner.goToSettingsBtn;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveAttrContaining('enabled', 'true');
    });

    it('"Dismiss" button is DISPLAYED and CLICKABLE', async () => {
      const elem = PreciseLocationBanner.dismissBtn;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveAttrContaining('enabled', 'true');
    });

    it('TAP on "Go to Settings" REDIRECTS to OS Location Settings', async () => {
      await PreciseLocationBanner.tapGoToSettingsBtn();
      const platformVersion = parseInt(driver.capabilities['platformVersion']);
      if (platformVersion >= 11) {
        expect(await AppOsPermissions.container.waitForDisplayed({ timeout:2000 })).toBe(true);
      }
      if (platformVersion < 11) {
        expect(await PermissionsDialog.contentContainer.waitForDisplayed({ timeout: 3000 })).toBe(true);
      }
      return false;
    });

    it('TAP on "Allow all the time" setting SELECTS the option', async () => {
      const platformVersion = parseInt(driver.capabilities['platformVersion']);
      const elem1 = AppOsPermissions.allowAllTheTime;
      if (platformVersion >= 11) {
        await AppOsPermissions.tapAllowAllTheTime();
        await expect(elem1).toHaveAttrContaining('checked', 'true');
      }
      if (platformVersion < 11) {
        await AppOsPermissions.tapAlwaysAllow();
        await expect(PermissionsDialog.contentContainer).not.toBeDisplayed();
      }
      return false;
    });

    it('TAP on the Back button REDIRECTS back to the app', async () => {
      const platformVersion = parseInt(driver.capabilities['platformVersion']);
      if (platformVersion >= 11) {
        await AppOsPermissions.tapBackButton();
        await AppOsPermissions.container.waitForDisplayed({ timeout:3000, reverse:true });
      }
      await expect(NavBar.homeButton).toBeDisplayed();
      await driver.pause(3000);
    });

    it('"Turn you location on" HAS green check mark', async () => {
      //todo
      return true;
    });

  });

  describe('Get race ready. Confirm Audio Settings.', () => {

    it('TAP on "Home" nav button redirects to Home screen', async () => {
      await NavBar.tapHomeButton();
      await driver.pause(2000);
      await Gestures.checkIfDisplayedWithSwipeDown(HomeScreen.countdown, 10);
    });

    it('SCROLL Home screen down until "Confirm Audio" button is displayed', async () => {
      const elem = HomeScreen.confirmAudioBtn;
      await Gestures.checkIfDisplayedWithSwipeUp(await elem, 5);
    });

    it('TAP on "Confirm Audio" button REDIRECTS to Audio Settings screen', async () => {
      const elem = AudioSettings.screenTitle;
      await HomeScreen.tapConfirmAudioBtn();
      await elem.waitForDisplayed({ timeout:3000 });
    });

    it('Audio Settings screen HAS correct TITLE', async () => {
      const elem = AudioSettings.screenTitle;
      await expect(elem).toHaveText('AUDIO SETTINGS');
    });

    it('Audio settings screen HAS a section with "Training" audio options', async () => {
      const elem = AudioSettings.trainingAudioLabel;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveText('TRAINING AUDIO');
    });

    it('Audio settings screen HAS a section with "Race Day" audio options', async () => {
      const elem = AudioSettings.raceDayAudioLabel;
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveText('RACE DAY AUDIO');
    });

    it('TAP on Training Audio option starts downloading audio', async () => {
      //find way to make assertion of newly selected value
      await AudioSettings.tapTrainingDayAudioOption();
      await driver.pause(5000);
    });

    it('TAP on Race Day Audio option starts downloading audio', async () => {
      //find way to make assertion of newly selected value
      await AudioSettings.tapRaceDayAudioOption();
      await driver.pause(15000);
    });

    it('TAP on "Back" button REDIRECTS back to the Home screen', async () => {
      //find way to make assertion of newly selected value
      await AudioSettings.tapBackButton();
      await expect(HomeScreen.registerNowButtton).toBeDisplayed();
    });

  });

  describe('Get race ready. Confirming Units of Measure.', () => {

    it('TAP on "Account" nav button REDIRECTS to Account screen', async () => {
      // TODO: add assertion to verify navigation to Account screen (requires hooks)
      await driver.pause(2000);
      await NavBar.tapAccountButton();
    });

    it('TAP on "Settings" REDIRECTS to Settings tab', async () => {
      // TODO: add assertion to verify navigation to Settings screen (requires hooks)
      await driver.pause(1000);
      await AccountScreen.tapSettingsTab();
    });

    it('"Units of Measure" button is present in the Settings', async () => {
      const elem = SettingsTab.unitsOfMeasureBtn;
      await driver.pause(1000);
      await expect(elem).toBeDisplayed();
    });

    it('TAP on "Units of Measure" button REDIRECTS to UOM menu', async () => {
      const elem = UnitsOfMeasureSetting.screenTitle;
      await SettingsTab.tapSettingByText('Units');
      await elem.waitForDisplayed({ timeout: 2000 });
    });

    it('Units of Measure screen HAS correct TITLE', async () => {
      const elem = UnitsOfMeasureSetting.screenTitle;
      await expect(elem).toBeDisplayed();
    });

    it('Units of Measure screen HAS both "Metric" and "Imperial" options available', async () => {
      const imperial = UnitsOfMeasureSetting.imperialOption;
      const metric = UnitsOfMeasureSetting.metricOption;
      await expect(imperial).toBeDisplayed();
      await expect(metric).toBeDisplayed();
    });

    it('"Imperial" option to be ENABLED and CLICKABLE', async () => {
      const elem = UnitsOfMeasureSetting.imperialOption;
      await expect(elem).toHaveAttrContaining('enabled', 'true');
      await expect(elem).toHaveAttrContaining('clickable', 'true');
    });

    it('"Metric" option to be ENABLED and CLICKABLE', async () => {
      const elem = UnitsOfMeasureSetting.metricOption;
      await expect(elem).toHaveAttrContaining('enabled', 'true');
      await expect(elem).toHaveAttrContaining('clickable', 'true');
    });

    it('TAP on User preferred option DISMISSES menu and REDIRECTS back to Settings ', async () => {
      // TODO: add assertion to verify navigation to Settings screen (requires hooks)
      if (USER_UOM.toLowerCase() === 'metric') await UnitsOfMeasureSetting.tapMetricOption();
      else await UnitsOfMeasureSetting.tapImperialOption();
      await UnitsOfMeasureSetting.screenTitle.waitForDisplayed({ timeout:2000, reverse:true });
    });

  });

  describe('Get race ready. Confirming Battery Optimization.', () => {

    it('TAP on "Home" nav button redirects to Home screen', async () => {
      await NavBar.tapHomeButton();
      await driver.pause(2000);
      await Gestures.checkIfDisplayedWithSwipeDown(HomeScreen.countdown, 10);
    });

    it('SCROLL Home screen down until "Learn More" button is displayed', async () => {
      const elem = HomeScreen.batteryOptLabel;
      await Gestures.checkIfDisplayedWithSwipeUp(await elem, 5);
    });

    it('Invoke native "App Info" settings of the app (Settings > Apps > World Run) ', async () => {
      await driver.pause(5000);
      await Device.executeAdbCommand(`am start -a android.settings.APPLICATION_DETAILS_SETTINGS -d package:${APP_NAME}`);
      await AppInfoSettings.optionsList.waitForDisplayed({ timeout:2000 });
    });

    it('Set battery optimization to Unrestricted programmatically', async () => {
      //since different android versions have different settings menu structure
      //it is more efficient to set the battery settings to unrestiricted using ADB
      await Device.executeAdbCommand(`dumpsys deviceidle whitelist +${APP_NAME}`);
    });

    it('Return back to the app using application switcher', async () => {
      await driver.pressKeyCode(187);
      await driver.pause(1000);
      await Gestures.swipeRight(0.6);
      await Device.executeAdbCommand(`input tap ${Device.screenWidth / 2} ${Device.screenHeight / 2}`);
      await driver.pause(2000);
    });

  });

});

