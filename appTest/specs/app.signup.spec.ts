import { APP_NAME, USER_EMAIL, USER_FIRSTNAME, USER_LASTNAME, USER_PASSWORD, DEFAULT_PIN } from "../helpers/Constants";
import Gestures from "../helpers/Gestures";
const LoginScreen = require('../screenobjects/android/LoginScreen');
const SignupScreen = require('../screenobjects/android/SignupScreen');
const AccountCreatedBanner = require('../screenobjects/android/components/AccountCreatedBanner');
const Device = require('../screenobjects/android/Device');


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
    const fileName = `${driver.capabilities["deviceManufacturer"]}_${driver.capabilities["deviceModel"]}_${driver.capabilities["udid"]}_${driver.config["suite"][0]}`
    await driver.saveRecordingScreen(`./appTest/screenshots/video/${fileName}.mp4`);
    await driver.closeApp();
  })

  describe('LOGIN SCREEN. EMAIL FLOW. SIGN UP AS A NEW USER', () => {
  it('"Continue with email button is ENABLED and CLICKABLE', async () => {
    const elem = LoginScreen.continueWithEmailButton;
    await expect(elem).toHaveAttrContaining('enabled', 'true');
    // clickable property is currently failing (clickable false), but button can be clicked
    // await expect(elem).toHaveAttrContaining('clickable', 'true');
  })

  it('TAP "Continue with email" button', async () => {
    const elem = LoginScreen.continueWithEmailButton;
    await LoginScreen.tapContinueWithEmailButton();
    await LoginScreen.emailInputField.waitForDisplayed({timeout:2000});
  })

  it('"Email address" LABEL is DISPLAYED', async () => {
    const elem = LoginScreen.emailAddressLabel;
    await expect(elem).toBeDisplayed();
  })

  it('Email input field is DISPLAYED and CLICKABLE', async () => {
    const elem = LoginScreen.emailInputField;
    await expect(elem).toBeDisplayed();
    await expect(elem).toHaveAttrContaining('clickable', 'true');
  })

  it('Email input field HAS correct placeholder TEXT', async () => {
    const elem = LoginScreen.emailPlaceholderText;
    await expect(elem).toHaveText('EMAIL ADDRESS');
  })

  // TODO: get correct continue button selector, then enable check if active/enabled
  // it('"Continue" button is DISABLED and cannot be clicked', async () => {
  //   const elem = LoginScreen.continueButton;
  //   await expect(elem).toHaveAttrContaining('enabled', 'false');
  // })

  it('"Forgot Email Address?" link is DISPLAYED and CLICKABLE', async () => {
    const elem = LoginScreen.forgotEmailLink;
    await expect(elem).toBeDisplayed();
    await expect(elem).toHaveAttrContaining('clickable', 'true');
  })

  it('"Forgot email address?" link TAP REDIRECTS to email recovery screen', async () => {
    await LoginScreen.tapForgotEmailLink();
    await driver.pause(1000);
    await driver.back();
    await LoginScreen.emailInputField.waitForDisplayed({timeout:2000});
  })

  //TODO: perform email recovery check

  it('Invalid email user message is DISPLAYED for invalid input', async () => {
    const elem = LoginScreen.invalidUsrMsg;
    await LoginScreen.emailInputField.click();
    await LoginScreen.inputEmailAddress("invalid_!@#$");
    await expect(elem).toBeDisplayed()
  })

  it('INPUT malformed email - "malformed1@"."Continue" button inactive', async () => {
    //rebuild for webview to check if button is not active
    // const elem = LoginScreen.continueButton;
    await LoginScreen.inputEmailAddress("malformed1@");
  })

  it('INPUT malformed email - "malformed2@redbull"."Continue" button inactive', async () => {
   //rebuild for webview to check if button is not active
    // const elem = LoginScreen.continueButton;
    await LoginScreen.inputEmailAddress("malformed2@redbull");
  })

  it('INPUT malformed email - "malformed3.redbull"."Continue" button inactive', async () => {
    //rebuild for webview to check if button is not active
    // const elem = LoginScreen.continueButton;
    await LoginScreen.inputEmailAddress("malformed3.redbull");
  })

  it('INPUT malformed email - "malformed4.redbull.com"."Continue" button inactive', async () => {
    //rebuild for webview to check if button is not active
    // const elem = LoginScreen.continueButton;
    await LoginScreen.inputEmailAddress("malformed4.redbull.com");
  })

  it('INPUT malformed email - "malformed5@redbull...com"."Continue" button inactive', async () => {
    //rebuild for webview to check if button is not active
    // const elem = LoginScreen.continueButton;
    await LoginScreen.inputEmailAddress("malformed5@redbull...com");
  })

  it(`INPUT valid email - "${USER_EMAIL.toLowerCase()}"."Continue" button IS SET ACTIVE`, async () => {
    //rebuild for webview to check if button is not active
    // const elem = LoginScreen.continueButton;
    await LoginScreen.inputEmailAddress(USER_EMAIL.toLowerCase());
  })

  it('TAP "Continue" button. REDIRECTED to New User sign up screen', async () => {
    await LoginScreen.tapContinueButton();
    await SignupScreen.screenTitle.waitForDisplayed({timeout:3000})
  })

  it('Sign Up screen title is DISPLAYED and HAS correct TEXT', async () => {
    const elem = SignupScreen.screenTitle;
    await expect(elem).toBeDisplayed();
    await expect(elem).toHaveText("SIGN UP");
  })

  it('User Email is DISPLAYED and matches previous input', async () => {
    const elem = SignupScreen.userEmail;
    await expect(elem).toBeDisplayed();
    await expect(elem).toHaveText(USER_EMAIL.toUpperCase());
  })

  it('"Agree & Continue" button is DISPLAYED and HAS correct TEXT', async () => {
    await Gestures.checkIfDisplayedWithSwipeUp(SignupScreen.continueButton, 5);
    await expect(SignupScreen.continueButton).toBeDisplayed();
    await expect(SignupScreen.continueButtonLabel).toHaveText("AGREE & CONTINUE");
  })

  it('"Agree & Continue" button is NOT ACTIVE and NOT CLICKABLE', async () => {
    const elem = SignupScreen.continueButton;
    await expect(elem).toHaveAttrContaining("enabled", "false");
  })

  it('First Name input field is DISPLAYED and CLICKABLE', async () => {
   const elem = SignupScreen.firstNameInput;
   await expect(elem).toBeDisplayed();
   await expect(elem).toHaveAttributeContaining('clickable', 'true');
  })

  it('First Name input field HAS correct placeholder TEXT', async () => {
    const elem = SignupScreen.firstNameInputPlaceholderText;
    await expect(elem).toBeDisplayed();
    await expect(elem).toHaveText('FIRST NAME');
  })

  it(`INPUT User First Name - "${USER_FIRSTNAME}"`, async () => {
    await SignupScreen.firstNameInput.click();
    await SignupScreen.inputFirstName(USER_FIRSTNAME);
    await driver.hideKeyboard();
    await driver.pause(2000);
  })

  it('Last Name field is DISPLAYED and CLICKABLE', async () => {
    const elem = SignupScreen.lastNameInput;
    await expect(elem).toBeDisplayed();
    await expect(elem).toHaveAttributeContaining('clickable', 'true');
  })
 
  it('Last Name input field HAS correct placeholder TEXT', async () => {
    const elem = SignupScreen.lastNameInputPlaceholderText;
    await expect(elem).toBeDisplayed();
    await expect(elem).toHaveText('LAST NAME');
  })
 
  it(`INPUT User Last Name - "${USER_LASTNAME}"`, async () => {
    await SignupScreen.lastNameInput.click();
    await SignupScreen.inputLastName(USER_LASTNAME);
    await driver.hideKeyboard();
    await driver.pause(2000);
  })

  it('Password field is DISPLAYED and CLICKABLE', async () => {
    const elem = SignupScreen.passwordInput;
    await expect(elem).toBeDisplayed();
    await expect(elem).toHaveAttributeContaining('clickable', 'true');
  })
 
  it('Password input field HAS correct placeholder TEXT', async () => {
    const elem = SignupScreen.passwordInputPlaceholderText;
    await expect(elem).toBeDisplayed();
    await expect(elem).toHaveText('PASSWORD');
  })
 
  it(`INPUT User Password - "${USER_PASSWORD}"`, async () => {
    await SignupScreen.passwordInput.click();
    await SignupScreen.inputPassword(USER_PASSWORD);
    await driver.hideKeyboard();
  })

  it('"Show password" button works', async () => {
    await SignupScreen.tapShowPasswordButton();
    await driver.pause(500);
    await LoginScreen.tapShowPasswordButton();
    await driver.pause(500);
    await LoginScreen.tapShowPasswordButton();
    await driver.pause(500);
  })

  it('Legal links are DISPLAYED and CLICKABLE - Privacy Policy', async () => {
    //TODO
  })

  it('Legal links are DISPLAYED and CLICKABLE - Terms and Conditions', async () => {
    //TODO
  })

  it('"Agree & Continue" button is set ACTIVE and CLICKABLE', async () => {
    const elem = SignupScreen.continueButton;
    await expect(elem).toHaveAttrContaining("enabled", "true");
  })

  it('TAP "Agree & Continue" button. REDIRECTED to Home screen', async () => {
    await SignupScreen.tapContinueButton();
    await driver.pause(3000);
    await driver.pause(2000);
  })

  
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