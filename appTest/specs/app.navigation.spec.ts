import { DEFAULT_PIN } from "../helpers/Constants";
import Gestures from "../helpers/Gestures";
import AppScreen from "../screenobjects/android/AppScreen";
const Device = require('../screenobjects/android/Device');

const NavBar = require('../screenobjects/android/components/NavBar');
const HomeScreen = require('../screenobjects/android/HomeScreen');
const TeamScreen = require('../screenobjects/android/TeamScreen');
const AccountScreen = require('../screenobjects/android/AccountScreen');
const AboutYouTab = require('../screenobjects/android/AboutYouTab');
const RegistrationTab = require('../screenobjects/android/RegistrationTab');
const SettingsTab = require('../screenobjects/android/SettingsTab');

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
    await driver.saveRecordingScreen('./appTest/screenshots/video/navigation.mp4');
    await driver.pause(2000);
  })

  describe('BASIC NAVIGATION. NAVBAR TABS AND SCROLLING', () => {

    //ACCOUNT SCREEN
    it('TAP on "Account" nav button REDIRECTS to Account screen', async () => {
      await driver.pause(2000);
      await NavBar.tapAccountButton();
    })

    it('"About you" tab is SELECTED by DEFAULT', async () => {
      // TODO: needs explicit id to locate
    })

    it('SCROLL "About You" tab DOWN until "Donate" button is DISPLAYED', async () => {
      await Gestures.checkIfDisplayedWithSwipeUp(await AboutYouTab.donateButton, 5);
      await expect(AboutYouTab.donateButton).toBeDisplayed();
    })

    it('SCROLL "About You" tab UP until user name is DISPLAYED', async () => {
      await Gestures.checkIfDisplayedWithSwipeDown(await AccountScreen.userName, 5);
      await expect(AccountScreen.userName).toBeDisplayed();
    })

    it('TAP on "Registration" REDIRECTS to Registration tab', async () => {
      await AccountScreen.tapRegistrationTab();
    })

    it('SCROLL "Registration" tab DOWN to the bottom', async () => {
      await Gestures.swipeUp();
      // await Gestures.checkIfDisplayedWithSwipeUp(await RegistrationTab.viewMoreButton, 5);
      // await expect(RegistrationTab.viewMoreButton).toBeDisplayed();
      //TODO: create tests for APP RUNS screen
    })

    it('SCROLL "Registration" tab UP until user name is DISPLAYED', async () => {
      await Gestures.checkIfDisplayedWithSwipeDown(await AccountScreen.userName, 5);
      await expect(AccountScreen.userName).toBeDisplayed();
    })
    
    it('TAP on "Settings" REDIRECTS to Settings tab', async () => {
      await AccountScreen.tapSettingsTab();
    })

    it('SCROLL "Settings" tab DOWN until Partners section is DISPLAYED', async () => {
      await Gestures.checkIfDisplayedWithSwipeUp(await SettingsTab.partnersTitle, 7);
      await expect(SettingsTab.partnersTitle).toBeDisplayed();
    })

    it('SCROLL "Settings" tab UP until user name is DISPLAYED', async () => {
      await Gestures.checkIfDisplayedWithSwipeDown(await AccountScreen.userName, 7);
      await expect(AccountScreen.userName).toBeDisplayed();
      await Gestures.swipeDown();
    })

    it('TAP on "About you" REDIRECTS to About you tab', async () => {
      await AccountScreen.tapAboutYouTab();
      await driver.pause(2000);
    })

    // // TEAM SCREEN
    it('TAP on "Team" nav button REDIRECTS to Team screen', async () => {
      await NavBar.tapTeamButton();
      await driver.pause(2000);
    })

    it('"Your team" tab is SELECTED by DEFAULT', async () => {
      // TODO: needs explicit id to locate
    })

    it('SCROLL "YOUR TEAM" tab DOWN/UP - should not scroll by default', async () => {
      await Gestures.swipeUp();
      await Gestures.swipeUp();
      await Gestures.swipeDown();
      await Gestures.swipeDown();
    })

    it('TAP on "Explore Teams" REDIRECTS to Explore Teams tab', async () => {
      await TeamScreen.tapExploreTeamsTab();
      await driver.pause(2000);
    })

    it('SCROLL "Explore Teams" tab UP/DOWN to verify it is SCROLLABLE', async () => {
      //if swipe start within top 15% of the screen (by default) it doesn't scroll
      //need a way to start tap below 30% of the screen
      await Gestures.swipeUp();
      await Gestures.swipeUp();
      //TODO:find better way than explicitly define pixels below
      await Gestures.swipe({x: 540, y: 600}, {x: 540, y: 1863})
      await Gestures.swipe({x: 540, y: 600}, {x: 540, y: 1863})
      await Gestures.swipe({x: 540, y: 600}, {x: 540, y: 1863})
    })

    it('TAP on "Your Team" REDIRECTS to Your Team tab', async () => {
      await TeamScreen.tapYourTeamTab();
      await driver.pause(2000);
    })

    // TODO: RUN SCREEN 

    
    // TODO: CONNECT SCREEN
    

    // HOME SCREEN
    it('TAP on "Home" nav button REDIRECTS to Home screen', async () => {
      await NavBar.tapHomeButton();
      await driver.pause(1000);
      await Gestures.swipeUp();
    })

    it('SCROLL "HOME" screen DOWN until Partners section is displayed', async () => {
      await Gestures.checkIfDisplayedWithSwipeUp(await HomeScreen.partnersTitle, 10);
      await expect(HomeScreen.partnersTitle).toBeDisplayed();
      //swipe again to check for hidden elements
      // await Gestures.swipeUp();
    })
    
    it('SCROLL Home screen to the top until WFLWR countdown is displayed', async () => {
      await Gestures.checkIfDisplayedWithSwipeDown(await HomeScreen.countdown, 10);
      await expect(HomeScreen.countdown).toBeDisplayed();
      await Gestures.swipeDown();
      await driver.pause(3000);
    }) 

    it('WFLWR app can be closed with App switcher - just cool that we can do it :)', async () => {
      await driver.pressKeyCode(187);
      await driver.pause(2000);
      await Gestures.swipeUp(0.6);
      await driver.pause(2000);
    }) 
  })

})