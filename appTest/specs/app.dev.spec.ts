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
  })

  
  describe('REGISTER TO RUN. PERSONAL DATA', () => {
    it('TAP on "Home" nav button. Redirected to Home screen', async () => {
      await NavBar.tapHomeButton();
    })
  
    it('"Register now" button is DISPLAYED', async () => {
      const elem = HomeScreen.registerNowButtton;
      await HomeScreen.registerNowButtton.waitForDisplayed({timeout:5000})
    })
  
    it('TAP on "Register now" button REDIRECTS to registration WebView screen', async () => {
      await HomeScreen.tapRegisterNowButton();
      await WebViewScreen.container.waitForDisplayed({timeout: 8000});
      await driver.pause(5000);
    })
  
    it('Cookie Banner IS DISPLAYED and HAS correct TEXT', async () => {
      const cont = WebCookieBanner.container;
      const text = WebCookieBanner.policyText;
      const flag = await cont.isDisplayed();
      if(flag) {
        await expect(text).toHaveTextContaining("By continuing to use our site and services, you agree to our updated")
      } else {
        return true;
      }
    })
  
    // it(`Cookie Banner. All buttons ARE DISPLAYED and ENABLED`, async () => {
    //   const cont = WebCookieBanner.container;
    //   const btnGroup = WebCookieBanner.buttonGroup;
    //   const acceptAllBtn = WebCookieBanner.acceptAllBtn;
    //   const rejectAllBtn = WebCookieBanner.rejectAllButton;
    //   const settingsBtn = WebCookieBanner.settingsButton;
    //   const flag = await cont.isDisplayed();
    //   if(flag) {
    //     await expect(btnGroup).toBeDisplayed();
    //     await expect(acceptAllBtn).toBeDisplayed();
    //     await expect(acceptAllBtn).toHaveAttrContaining("enabled", "true");
    //     await expect(rejectAllBtn).toBeDisplayed();
    //     await expect(rejectAllBtn).toHaveAttrContaining("enabled", "true");
    //     await expect(settingsBtn).toBeDisplayed();
    //     await expect(settingsBtn).toHaveAttrContaining("enabled", "true");
    //   } else {}
    // })

      
    it(`Cookie Banner. "Accept All" button is DISPLAYED and ENABLED`, async () => {
      const cont = WebCookieBanner.container;
      const flag = await cont.isDisplayed();
      const elem = WebCookieBanner.acceptAllButton;
      if(flag) {
        await expect(elem).toBeDisplayed();
        await expect(elem).toHaveAttrContaining("enabled", "true");
      } else {return true}
    })

    it(`Cookie Banner. "Reject All Tracking" button is DISPLAYED and ENABLED`, async () => {
      const cont = WebCookieBanner.container;
      const flag = await cont.isDisplayed();
      const elem = WebCookieBanner.rejectAllButton;
      if(flag) {
        await expect(elem).toBeDisplayed();
        await expect(elem).toHaveAttrContaining("enabled", "true");
      } else {return true}
    })

    it(`Cookie Banner. "Privacy Settings" button is DISPLAYED and ENABLED`, async () => {
      const cont = WebCookieBanner.container;
      const flag = await cont.isDisplayed();
      const elem = WebCookieBanner.settingsButton;
      if(flag) {
        await expect(elem).toBeDisplayed();
        await expect(elem).toHaveAttrContaining("enabled", "true");
      } else {return true}
    })
  
    it(`TAP on Cookie banner button DISSMISS Cookie banner`, async () => {
      const cont = WebCookieBanner.container;
      const flag = await cont.isDisplayed();
      if(flag) {
        await WebCookieBanner.tapAcceptAllBtn();
        await WebCookieBanner.container.waitForDisplayed({timeout: 1000, reverse:true})
      } else {
        return true;
      }
    })
  
    it('Registration screen HAS navigation menu and main body', async () => {
      await expect(RegScreenMenu.menuContainer).toBeDisplayed();
      await expect(RegScreenBody.bodyContainer).toBeDisplayed();
    })
  
    it('TODO: RegScreen menu HAS all elements', async () => {
      //TODO
    })
  
  //   //PERSONAL DATA FORM
    it('"Personal data" TITLE is DISPLAYED on the top of the page ', async () => {
      const elem = RegScreenBody.personalDataTitle;
      await expect(elem).toBeDisplayed();
    })
  
    it('Personal Data user Form is DISPLAYED', async () => {
      const elem = PersonalDataForm.formContainer;
      expect(elem).toBeDisplayed();
    })
  
    it('First name field is DISPLAYED and HAS correct LABEL', async () => {
      const field = PersonalDataForm.firstNameField;
      const label = PersonalDataForm.firstNameLabel;
      await expect(field).toBeDisplayed();
      await expect(label).toHaveText("First name");
    })
  
    it(`INPUT user First name - "${USER_FIRSTNAME}"`, async () => {
      await PersonalDataForm.inputFirstName("");
      await driver.pause(1000);
      await PersonalDataForm.inputFirstName(USER_FIRSTNAME);
    })
  
    it('Last name field is DISPLAYED and HAS correct LABEL', async () => {
      const field = PersonalDataForm.lastNameField;
      const label = PersonalDataForm.lastNameLabel;
      await expect(field).toBeDisplayed();
      await expect(label).toHaveText("Last name");
    })
  
    //TODO: handle LAtincharacters field for non latin names
    it(`INPUT user Last name - "${USER_LASTNAME}"`, async () => {
      await PersonalDataForm.inputLastName("");
      await driver.pause(1000);
      await PersonalDataForm.inputLastName(USER_LASTNAME);
    })
  
    it('Birthday section is DISPLAYED and HAS correct LABEL', async () => {
      const label = PersonalDataForm.birthDayLabel;
      await expect(label).toBeDisplayed();
      await expect(label).toHaveText("BIRTHDAY");
    })
  
    it('Birthday Month field is DISPLAYED and HAS correct LABEL', async () => {
      const field = PersonalDataForm.monthField;
      const label = PersonalDataForm.monthLabel;
      await expect(field).toBeDisplayed();
      await expect(label).toHaveText("Month");
    })
  
    it('Birthday Day field is DISPLAYED and HAS correct LABEL', async () => {
      const field = PersonalDataForm.dayField;
      const label = PersonalDataForm.dayLabel;
      await expect(field).toBeDisplayed();
      await expect(label).toHaveText("Day");
    })
  
    it('Birthday Year field is DISPLAYED and HAS correct LABEL', async () => {
      const field = PersonalDataForm.yearField;
      const label = PersonalDataForm.yearLabel;
      await expect(field).toBeDisplayed();
      await expect(label).toHaveText("Year");
    })
  
    it('TAP Month field to INVOKE month picker. Panel DISPLAYED', async () => {
      await PersonalDataForm.tapMonthField();
      await ListPicker.customPanelOuter.waitForDisplayed({timeout: 1000})
      await ListPicker.listView.waitForDisplayed({timeout:1000})
    })
  
    it(`SELECT month from Date Picker - "${parseInt(USER_BIRTH_MONTH, 10).toString()}". Panel DISMISSED.`, async () => {
      await ListPicker.selectFromTheList(parseInt(USER_BIRTH_MONTH, 10).toString());
      await ListPicker.customPanelOuter.waitForDisplayed({timeout: 1000, reverse:true})
    })
  
    it('TAP Day field to INVOKE day picker. Panel DISPLAYED', async () => {
      await PersonalDataForm.tapDayField();
      await ListPicker.customPanelOuter.waitForDisplayed({timeout: 1000});
      await ListPicker.listView.waitForDisplayed({timeout:1000});
    })
  
    it(`SELECT Day from Date Picker - "${parseInt(USER_BIRTH_DAY, 10).toString()}". Panel DISMISSED.`, async () => {
      await ListPicker.selectFromTheList(parseInt(USER_BIRTH_DAY, 10).toString());
      await ListPicker.customPanelOuter.waitForDisplayed({timeout: 1000, reverse:true})
    })
  
    it('TAP Year field to INVOKE year picker. Panel DISPLAYED', async () => {
      await PersonalDataForm.tapYearField();
      await ListPicker.customPanelOuter.waitForDisplayed({timeout: 1000});
      await ListPicker.listView.waitForDisplayed({timeout:1000});
      
    })
  
    it(`SELECT Year from Date Picker - "${parseInt(USER_BIRTH_YEAR, 10).toString()}". Panel DISMISSED.`, async () => {
      await ListPicker.selectFromTheList(parseInt(USER_BIRTH_YEAR, 10).toString());
      await ListPicker.customPanelOuter.waitForDisplayed({timeout: 1000, reverse:true})
    })
  
    it('Gender section is DISPLAYED and HAS correct LABEL', async () => {
      const label = PersonalDataForm.genderLabel;
      await expect(label).toBeDisplayed();
      await expect(label).toHaveText("GENDER");
    })
  
    it('Gender: Male option is DISPLAYED, has corrrect LABEL. SELECTED by default', async () => {
      const maleField = PersonalDataForm.genMaleField;
      const maleButton = PersonalDataForm.genMaleButton;
      await Gestures.checkIfDisplayedWithSwipeUp(maleButton, 5);
      await expect(maleField).toBeDisplayed();
      await expect(maleButton).toHaveText("Male");
      await expect(maleButton).toHaveAttrContaining("checked", "true");
    })
  
    it('Gender: Female option is DISPLAYED, has corrrect LABEL. NOT SELECTED', async () => {
      const femaleField = PersonalDataForm.genFemaleField;
      const femaleButton = PersonalDataForm.genFemaleButton;
      await Gestures.checkIfDisplayedWithSwipeUp(femaleButton, 5);
      await expect(femaleField).toBeDisplayed();
      await expect(femaleButton).toHaveText("Female");
      await expect(femaleButton).toHaveAttrContaining("checked", "false");
    })
  
    it('TAP Female option. Male option is unchecked', async () => {
      const maleButton = PersonalDataForm.genMaleButton
      const femaleButton = PersonalDataForm.genFemaleButton;
      await PersonalDataForm.tapGenFemaleField();
      await expect(femaleButton).toHaveAttrContaining("checked", "true");
      await expect(maleButton).toHaveAttrContaining("checked", "false");
    })
  
    it('TAP Male option. Female option is unchecked', async () => {
      const maleButton = PersonalDataForm.genMaleButton
      const femaleButton = PersonalDataForm.genFemaleButton;
      await PersonalDataForm.tapGenMaleField();
      await expect(femaleButton).toHaveAttrContaining("checked", "false");
      await expect(maleButton).toHaveAttrContaining("checked", "true");
    })
  
    it('TAP Nationality field to INVOKE country picker. Panel DISPLAYED', async () => {
      await PersonalDataForm.tapNationalityField();
      await ListPicker.customPanelOuter.waitForDisplayed({timeout: 1000});
      await ListPicker.listView.waitForDisplayed({timeout:1000});
    })
  
    it(`SELECT Nationality from Date Picker - "${USER_NATIONALITY}". Panel DISMISSED.`, async () => {
      await ListPicker.selectFromTheList(USER_NATIONALITY);
      await ListPicker.customPanelOuter.waitForDisplayed({timeout: 1000, reverse:true})
      await driver.pause(5000);
    })
    
    it('Email field is DISPLAYED and DEFAULTED to User email', async () => {
      const elem = PersonalDataForm.emailField;
      const prefilled = PersonalDataForm.emailInput;
      await expect(elem).toBeDisplayed();
      await expect(prefilled).toHaveText(USER_EMAIL.toLowerCase());
    })
  
    //TODO
    // it('TAP on Email field allows to change User email', async () => {
    //   await PersonalDataForm.tapEmailField();
    //   await PersonalDataForm.inputEmail("another_email1@redbull.com");
    //   await driver.pause(3000);
    //   // await PersonalDataForm.inputEmail("and.another.one@gmail.com"); 
    //   // await driver.pause(1000);
    //   // await expect(PersonalDataForm.emailInput).toHaveText("and.another.one@gmail.com") 
    //   // await PersonalDataForm.inputEmail("rbmh_test2@yahoo.com");
    //   // await expect(PersonalDataForm.emailInput).toHaveText("rbmh_test2@yahoo.com") 
    // })
  
  
    it('TAP Residence field to INVOKE country picker. Panel DISPLAYED', async () => {
      await Gestures.checkIfDisplayedWithSwipeUp(PersonalDataForm.residenceField, 3);
      await PersonalDataForm.tapResidenceField();
      await ListPicker.customPanelOuter.waitForDisplayed({timeout: 1000})
      await ListPicker.listView.waitForDisplayed({timeout: 1000})
      await driver.pause(2000);
    })
  
  
    it(`SELECT Country from List Picker - "${USER_COUNTRY}". Panel DISMISSED.`, async () => {
      await ListPicker.selectFromTheList(USER_COUNTRY);
      await ListPicker.customPanelOuter.waitForDisplayed({timeout: 1000, reverse:true})
      await driver.pause(2000);
    })
  
    //TODO: if Austria, Germany or Poland are picked additional fields appear - handle this
    // it('Athlete type section HAS correct LABEL', async () => {
    //   // TODO: selector doesn't work
    //   const elem = PersonalDataForm.athleteTypeLabel;
    //   await expect(elem).toBeDisplayed();
    //   await expect(elem).toHaveText("ATHLETE TYPE")
    // })
    
    it('Student checkbox is DISPLAYED and UNCHECKED BY DEFAULT.', async () => {
      const elem = PersonalDataForm.studentCheckBox;
      await Gestures.checkIfDisplayedWithSwipeUp(elem, 3);
      await expect(elem).toBeDisplayed();
      await expect(elem).toHaveAttrContaining("checked", "false")
    })
  
    //TODO: selector doesn't work, find solution
    // it('"I am a student" LABEL is DISPLAYED', async () => {
    //   const elem = PersonalDataForm.student;
    //   await expect(elem).toBeDisplayed();
    //   await expect(elem).toHaveText("I am a student")
    // })
    
    it('Student checkbox CAN BE CHECKED', async () => {
      const elem = PersonalDataForm.studentCheckBox;
      await PersonalDataForm.tapStudentCheckBox();
      await expect(elem).toHaveAttrContaining("checked", "true")
      await driver.pause(1000);
    })
  
    it('Student checkbox CAN BE UNCHECKED', async () => {
      const elem = PersonalDataForm.studentCheckBox;
      await PersonalDataForm.tapStudentCheckBox();
      await expect(elem).toHaveAttrContaining("checked", "false")
      await driver.pause(1000);
    })
  
    it('"Next step" button is DISPLAYED, ENABLED and CLICKABLE', async () => {
      const btn = PersonalDataForm.nextStepButton;
      await Gestures.checkIfDisplayedWithSwipeUp(btn, 5);
      await expect(btn).toBeDisplayed();
      await expect(btn).toHaveAttrContaining("enabled", "true")
      await expect(btn).toHaveAttrContaining("clickable", "true")
    })
  
    it('TAP "Next step" button REDIRECTS user to "Extras" screen', async () => {
      await PersonalDataForm.tapNextStepButton();
      await driver.pause(3000);
      await ExtrasForm.pageTitle.waitForDisplayed({timeout: 5000});
    })
  })



})
