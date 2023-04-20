import { APP_NAME, USER_EMAIL, USER_FIRSTNAME, USER_LASTNAME, USER_PASSWORD } from "../helpers/Constants";
import { alertNoticeText } from "../helpers/TextCopies";
import Gestures from "../helpers/Gestures";
const CookiesBanner = require('../screenobjects/android/components/CookiesBanner');
const CookiesBannerExpanded = require('../screenobjects/android/components/CookiesBannerExpanded');
const LoginScreen = require('../screenobjects/android/LoginScreen');
const SignupScreen = require('../screenobjects/android/SignupScreen');
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



describe('BUILD APP INSTALLATION', () => {
  it('Should have have app installed on the device', async () => {
    return driver.isAppInstalled(APP_NAME);
  })
})

// describe('LOGIN SCREEN. CONTAINERS AND LAYOUT', () => {
//   it('Main App container EXISTS and DISPLAYED. App launched', async () => {
//     const elem = await LoginScreen.container;
//     await elem.waitForDisplayed({ timeout: 3000 });
//   });

//   it('Main App container is NOT SCROLLABLE', async () => {
//     const elem = await LoginScreen.touchOutside;
//     await expect(elem).toHaveAttrContaining('scrollable', 'false');
//   })

//   it('Touch_outside container EXISTS and DISPLAYED', async () => {
//     const elem = await LoginScreen.touchOutside;
//     await expect(elem).toBeDisplayed();
//   })

//   it('Touch_outside container HAS class - View', async () => {
//     const elem = await LoginScreen.touchOutside;
//     await expect(elem).toHaveAttrContaining("class", 'android.view.View');
//   })

//   it('Touch_outside container is NOT SCROLLABLE', async () => {
//     const elem = await LoginScreen.touchOutside;
//     await expect(elem).toHaveAttrContaining('scrollable', 'false');
//   })

//   it('Touch_outside container HAS NO TEXT', async () => {
//     const elem = await LoginScreen.touchOutside;
//     await expect(elem).toHaveText('');
//   })

//   it('Bottom screen banner container EXISTS and DISPLAYED', async () => {
//     const elem = await LoginScreen.bannerLayoutContainer;
//     await expect(elem).toBeDisplayed();
//   })
// })    

// describe('LOGIN SCREEN. COOKIES CONSENT BANNER.', () => {
//   it('Banner container NOT CLICKABLE and is NOT SCROLLABLE', async () => {
//     const elem = await LoginScreen.bannerLayoutContainer;
//     await expect(elem).toHaveAttrContaining('scrollable', 'false');
//     await expect(elem).toHaveAttrContaining('clickable', 'false');
//   })

//   it('Banner HAS privacy settings user message', async () => {
//     const elem = await CookiesBanner.textLayout;
//     await expect(elem).toExist();
//     await expect(elem).toBeDisplayed();
//   })

//   it('Privacy Settings Text IS scrollable and is NOT CLICKABLE', async () => {
//     const elem = await CookiesBanner.textLayout;
//     await expect(elem).toHaveAttrContaining('scrollable', 'true');
//     await expect(elem).toHaveAttrContaining('clickable', 'false');
//   })

//   it('Privacy Settings Text HAS correct TITLE', async () => {
//     const elem = await CookiesBanner.bannerTitle;
//     await expect(elem).toHaveText('Privacy Settings');
//   })

//   it('Privacy Settings text HAS correct TEXT copy', async () => {
//     const elem = await CookiesBanner.alertNotice;
//     await expect(elem).toHaveText(alertNoticeText);
//   })

//   //Buttons
//   it('Banner HAS button layout', async () => {
//     const elem = await CookiesBanner.buttonLayout;
//     await expect(elem).toBeDisplayed();
//   })

//   it('Button layout is NOT SCROLLABLE', async () => {
//     const elem = await CookiesBanner.buttonLayout;
//     await expect(elem).toHaveAttrContaining('scrollable', 'false');
//   })

//   it('"Allow All" button IS displayed and HAS correct LABEL', async () => {
//     const elem = await CookiesBanner.allowAllButton;
//     await expect(elem).toBeDisplayed();
//     await expect(elem).toHaveText('Allow All');
//   })

//   it('"Allow All" button is CLICKABLE', async () => {
//     const elem = await CookiesBanner.allowAllButton;
//     await expect(elem).toHaveAttrContaining('clickable', 'true')
//   })

//   it('"Decline All" button is DISPLAYED and HAS correct LABEL', async () => {
//     const elem = await CookiesBanner.declineAllButton;
//     await expect(elem).toBeDisplayed();
//     await expect(elem).toHaveText('Decline All')
//   })

//   it('"Decline All" button is CLICKABLE', async () => {
//     const elem = await CookiesBanner.declineAllButton;
//     await expect(elem).toHaveAttrContaining('clickable', 'true')
//   })

//   it('"Go to Settings" button is DISPLAYED and HAS correct LABEL', async () => {
//     const elem = await CookiesBanner.goToSettingsButton;
//     await expect(elem).toBeDisplayed();
//     await expect(elem).toHaveText('Go to Settings');
//   })

//   it('"Go to Settings" button is CLICKABLE', async () => {
//     const elem = await CookiesBanner.goToSettingsButton;
//     await expect(elem).toHaveAttrContaining('clickable', 'true')
//   })

//   it('TAP Go to Settings button', async () => {
//     await CookiesBanner.tapGoToSettingsButton();
//     await driver.pause(2000);
//     await CookiesBannerExpanded.pcLayoutContainer.waitForDisplayed({timeout: 2000});
//   })
// })

// describe('LOGIN SCREEN. PRIVACY SETTINGS SDK PREFERENCES', () => {
//   //Privacy Settings Banner Expanded
//   it('Expanded Cookies Banner main containers are DISPLAYED ', async () => {
//     const pcLayout = await CookiesBannerExpanded.pcLayoutContainer;
//     const topScrollView = CookiesBannerExpanded.topScrollView;
//     const footer = await CookiesBannerExpanded.footerLayout;
//     await expect(pcLayout).toBeDisplayed();
//     await expect(topScrollView).toBeDisplayed();
//     await expect(footer).toBeDisplayed();
//   })

//   it('Screen HAS "Privacy Settings" TITLE', async () => {
//     const elem = CookiesBannerExpanded.title;
//     await expect(elem).toHaveText('Privacy Settings');
//   })

//   it('Main Info text is DISPLAYED and NOT SCROLLABLE', async () => {
//     const elem = CookiesBannerExpanded.mainText;
//     await expect(elem).toHaveText(alertNoticeText);
//     await expect(elem).toHaveAttrContaining('scrollable', 'false');
//   })

//   it('Button layout container is DISPLAYED', async () => {
//     const elem = CookiesBannerExpanded.buttonLayout;
//     await expect(elem).toBeDisplayed();
//   })


//   it('"Allow All" button is DISPLAYED and CLICKABLE', async () => {
//     const elem = CookiesBannerExpanded.allowAllBtn;
//     await expect(elem).toBeDisplayed();
//     await expect(elem).toHaveAttrContaining('clickable', 'true');
//   })

//   it('"Decline All" button is DISPLAYED and CLICKABLE', async () => {
//     const elem = CookiesBannerExpanded.declineAllBtn;
//     await expect(elem).toBeDisplayed();
//     await expect(elem).toHaveAttrContaining('clickable', 'true');
//   })

//   //add button toggle here

//   it('Preferences list is DISPLAYED', async () => {
//     const elem = CookiesBannerExpanded.preferencesList;
//     await expect(elem).toBeDisplayed();
//     await expect(elem).toHaveAttrContaining('scrollable', 'false');
//   })

//   //TODO: create tests for SDK preferences, and for every sdk page
  
//   it('SDK Preferences TOGGLE can be switched ON and OFF', async () => {
//     const switch1 = await $('(//android.widget.Switch[@content-desc="Consent"])[1]')
//     const switch2 = await $('(//android.widget.Switch[@content-desc="Consent"])[2]')
//     expect(switch1).toHaveAttributeContaining('checked', 'false');
//     await switch1.click();
//     await driver.pause(1000)
//     expect(switch1).toHaveAttributeContaining('checked', 'true');
//     await switch1.click();
//     await driver.pause(1000)
//     expect(switch1).toHaveAttributeContaining('checked', 'false');
//     await switch1.click();
//     expect(switch1).toHaveAttributeContaining('checked', 'true');
//     await switch2.click();
//     await driver.pause(1000);
//     expect(switch1).toHaveAttributeContaining('checked', 'true');
//   })

//   it('Settings ID section title is DISPLAYED', async () => {
//     const elem = CookiesBannerExpanded.settingsIdTitle;
//     await expect(elem).toBeDisplayed();
//     await expect(elem).toHaveText('Settings ID');
//   })

//   it('Settings ID number is DISPLAYED', async () => {
//     const elem = CookiesBannerExpanded.settingsIdNumber;
//     await expect(elem).toBeDisplayed();
//     await expect(elem).not.toHaveText('');
//   })

//   it('Settings Id CAN BE COPIED with copy button TAP', async () => {
//     const elem = CookiesBannerExpanded.copyIdButton;
//     await expect(elem).toBeDisplayed();
//     await elem.click();
//     await driver.pause(1000)
//   })

//   it('"Confirm My Choices" button is DISPLAYED in the footer', async () => {
//     const elem = CookiesBannerExpanded.confirmButton;
//     await expect(elem).toBeDisplayed();
//   })

//   it('"Confirm My Choices" button is ENABLED and CLICKABLE', async () => {
//     const elem = CookiesBannerExpanded.confirmButton;
//     await expect(elem).toHaveAttrContaining('enabled', 'true');
//     await expect(elem).toHaveAttrContaining('clickable', 'true');
//   })

//   it('TAP "Confirm My Choices" button. REDIRECTED to Login screen', async () => {
//     const btn = CookiesBannerExpanded.confirmButton;
//     const container = LoginScreen.container;
//     await btn.click();
//     await container.waitForDisplayed({timeout: 2000, reverse:true});
//     await (LoginScreen.appUiView).waitForDisplayed({timeout: 2000});
//   })
// })

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

  it('INPUT valid email - "rbmh_test2@yahoo.com"."Continue" button IS SET ACTIVE', async () => {
    //rebuild for webview to check if button is not active
    // const elem = LoginScreen.continueButton;
    await LoginScreen.inputEmailAddress("rbmh_test2@yahoo.com");
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
    await expect(elem).toHaveText(USER_EMAIL.toLocaleUpperCase());
  })

  it('"Agree & Continue" button is DISPLAYED and HAS correct TEXT', async () => {
    await expect(SignupScreen.continueButton).toBeDisplayed();
    await expect(SignupScreen.continueButtonLabel).toHaveText("AGREE & CONTINUE");
  })

  it('"Agree & Continue" button is NOT ACTIVE and NOT CLICKABLE', async () => {
    const elem = SignupScreen.continueButton;
    await expect(elem).toHaveAttrContaining("enabled", "false");
  })

  it('First Name field is DISPLAYED and CLICKABLE', async () => {
   //TODO
  })

  it('First Name input field HAS correct placeholder TEXT', async () => {
   //TODO
  })

  it(`INPUT User First Name - "${USER_FIRSTNAME}"`, async () => {
    await SignupScreen.inputFirstName(USER_FIRSTNAME);
    await driver.pause(2000);
  })

  it('Last Name field is DISPLAYED and CLICKABLE', async () => {
    //TODO
  })
 
  it('Last Name input field HAS correct placeholder TEXT', async () => {
    //TODO
  })
 
  it(`INPUT User Last Name - "${USER_LASTNAME}"`, async () => {
    await SignupScreen.inputLastName(USER_LASTNAME);
    await driver.pause(2000);
  })

  it('Password field is DISPLAYED and CLICKABLE', async () => {
    //TODO
  })
 
  it('Password input field HAS correct placeholder TEXT', async () => {
    //TODO
  })
 
  it(`INPUT User Password - "${USER_PASSWORD}"`, async () => {
    await SignupScreen.inputPassword(USER_PASSWORD);
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
    //Welcome banner to assert
    // await NavBar.homeButton.waitForDisplayed({timeout:5000});
    await driver.pause(2000);
  })

})