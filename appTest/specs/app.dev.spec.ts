import { APP_NAME, DEFAULT_PIN } from "../helpers/Constants";
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

  describe('REGISTER TO RUN. PERSONAL DATA', () => {
    
    it('App is installed', async () => {
      await driver.isAppInstalled(APP_NAME);
    })

    it('driver pause works', async () => {
      await driver.pause(5000);
    })

    // it('"Register now" button is DISPLAYED', async () => {
    //   const elem = HomeScreen.registerNowButtton;
    //   await HomeScreen.registerNowButtton.waitForDisplayed({timeout:5000})
    // })

    // it('TAP on "Register now" button REDIRECTS to registration WebView screen', async () => {
    //   await HomeScreen.tapRegisterNowButton();
    //   await WebViewScreen.container.waitForDisplayed({timeout: 8000});
    //   await driver.pause(5000);
    // })


    // it('Get contexts', async () => {
    //   let contexts = await driver.getContexts();
    
    //   let current = await driver.getContext();
    //   await driver.pause(5000);
    //   await console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>all", contexts);
    //   await console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>Cur1", current)
    //   // contexts = await driver.getContexts();
    //   // current = await driver.getContext();
    //   // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>all", contexts);
    //   // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>Cur2", current)
    //   // await driver.pause(5000);
    //   // await driver.switchContext('WEBVIEW_com.redbull.wingsforlifeworldrun.debug')
    //   // contexts = await driver.getContexts();
    //   // current = await driver.getContext();
    //   // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>all", contexts);
    //   await console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>Cur3", current)
  
    // })
  })

  describe('test chunk2', () => {
    it('test2', async () => {
      await driver.isAppInstalled(APP_NAME);
      await driver.closeApp();
      await driver.lock();
    })
  })

  describe('test chunk3', () => {
    it('test3', async () => {
      await driver.isAppInstalled(APP_NAME);
    })
  })


})




/// COMMENTED OUT
// describe('REGISTER TO RUN. PERSONAL DATA', () => {
//   it('"Register now" button is DISPLAYED', async () => {
//     const elem = HomeScreen.registerNowButtton;
//     await HomeScreen.registerNowButtton.waitForDisplayed({timeout:5000})
//   })

//   it('TAP on "Register now" button REDIRECTS to registration WebView screen', async () => {
//     await HomeScreen.tapRegisterNowButton();
//     await WebViewScreen.container.waitForDisplayed({timeout: 8000});
//     await driver.pause(5000);
//   })

//   it('Registration screen HAS navigation menu and main body', async () => {
//     await expect(RegScreenMenu.menuContainer).toBeDisplayed();
//     await expect(RegScreenBody.bodyContainer).toBeDisplayed();
//   })

//   it('TODO: RegScreen menu HAS all elements', async () => {
//     //TODO
//   })

// //   //PERSONAL DATA FORM
//   it('"Personal data" TITLE is DISPLAYED on the top of the page ', async () => {
//     const elem = RegScreenBody.personalDataTitle;
//     await expect(elem).toBeDisplayed();
//   })

//   it('Personal Data user Form is DISPLAYED', async () => {
//     const elem = PersonalDataForm.formContainer;
//     expect(elem).toBeDisplayed();
//   })

//   it('First name field is DISPLAYED and HAS correct LABEL', async () => {
//     const field = PersonalDataForm.firstNameField;
//     const label = PersonalDataForm.firstNameLabel;
//     await expect(field).toBeDisplayed();
//     await expect(label).toHaveText("First name");
//   })

//   it('INPUT user First name - "Homer"', async () => {
//     await PersonalDataForm.inputFirstName("");
//     await driver.pause(1000);
//     await PersonalDataForm.inputFirstName("Homer");
//   })

//   it('Last name field is DISPLAYED and HAS correct LABEL', async () => {
//     const field = PersonalDataForm.lastNameField;
//     const label = PersonalDataForm.lastNameLabel;
//     await expect(field).toBeDisplayed();
//     await expect(label).toHaveText("Last name");
//   })

//   //TODO: handle LAtincharacters field for non latin names
//   it('INPUT user Last name - "Simpson"', async () => {
//     await PersonalDataForm.inputLastName("");
//     await driver.pause(1000);
//     await PersonalDataForm.inputLastName("Simpson");
//   })

//   it('Birthday section is DISPLAYED and HAS correct LABEL', async () => {
//     const label = PersonalDataForm.birthDayLabel;
//     await expect(label).toBeDisplayed();
//     await expect(label).toHaveText("BIRTHDAY");
//   })

//   it('Birthday Month field is DISPLAYED and HAS correct LABEL', async () => {
//     const field = PersonalDataForm.monthField;
//     const label = PersonalDataForm.monthLabel;
//     await expect(field).toBeDisplayed();
//     await expect(label).toHaveText("Month");
//   })

//   it('Birthday Day field is DISPLAYED and HAS correct LABEL', async () => {
//     const field = PersonalDataForm.dayField;
//     const label = PersonalDataForm.dayLabel;
//     await expect(field).toBeDisplayed();
//     await expect(label).toHaveText("Day");
//   })

//   it('Birthday Year field is DISPLAYED and HAS correct LABEL', async () => {
//     const field = PersonalDataForm.yearField;
//     const label = PersonalDataForm.yearLabel;
//     await expect(field).toBeDisplayed();
//     await expect(label).toHaveText("Year");
//   })

//   it('TAP Month field to INVOKE month picker. Panel DISPLAYED', async () => {
//     await PersonalDataForm.tapMonthField();
//     await ListPicker.customPanelOuter.waitForDisplayed({timeout: 1000})
//     await ListPicker.listView.waitForDisplayed({timeout:1000})
//   })

//   it('SELECT month from Date Picker - "7". Panel DISMISSED.', async () => {
//     await ListPicker.selectFromTheList("7");
//     await ListPicker.customPanelOuter.waitForDisplayed({timeout: 1000, reverse:true})
//   })

//   it('TAP Day field to INVOKE day picker. Panel DISPLAYED', async () => {
//     await PersonalDataForm.tapDayField();
//     await ListPicker.customPanelOuter.waitForDisplayed({timeout: 1000});
//     await ListPicker.listView.waitForDisplayed({timeout:1000});
//   })

//   it('SELECT Day from Date Picker - "25". Panel DISMISSED.', async () => {
//     await Gestures.swipeUp();
//     await ListPicker.selectFromTheList("25");
//     await ListPicker.customPanelOuter.waitForDisplayed({timeout: 1000, reverse:true})
//   })

//   it('TAP Year field to INVOKE year picker. Panel DISPLAYED', async () => {
//     await PersonalDataForm.tapYearField();
//     await ListPicker.customPanelOuter.waitForDisplayed({timeout: 1000});
//     await ListPicker.listView.waitForDisplayed({timeout:1000});
    
//   })

//   it('SELECT Year from Date Picker - "1986". Panel DISMISSED.', async () => {
//     //TODO: depends on viewport size, build swipeUntilElemFound()
//     await Gestures.swipeUp(0.8);
//     await Gestures.swipeUp(0.8);
//     await Gestures.swipeUp();
//     await ListPicker.selectFromTheList("1986");
//     await ListPicker.customPanelOuter.waitForDisplayed({timeout: 1000, reverse:true})
//   })

//   it('Gender section is DISPLAYED and HAS correct LABEL', async () => {
//     const label = PersonalDataForm.genderLabel;
//     await expect(label).toBeDisplayed();
//     await expect(label).toHaveText("GENDER");
//   })

//   it('Gender: Male option is DISPLAYED, has corrrect LABEL. SELECTED by default', async () => {
//     const maleField = PersonalDataForm.genMaleField;
//     const maleButton = PersonalDataForm.genMaleButton;
//     await expect(maleField).toBeDisplayed();
//     await expect(maleButton).toHaveText("Male");
//     await expect(maleButton).toHaveAttrContaining("checked", "true");
//   })

//   it('Gender: Female option is DISPLAYED, has corrrect LABEL. NOT SELECTED', async () => {
//     const femaleField = PersonalDataForm.genFemaleField;
//     const femaleButton = PersonalDataForm.genFemaleButton;
//     await expect(femaleField).toBeDisplayed();
//     await expect(femaleButton).toHaveText("Female");
//     await expect(femaleButton).toHaveAttrContaining("checked", "false");
//   })

//   it('TAP Female option. Male option is unchecked', async () => {
//     const maleButton = PersonalDataForm.genMaleButton
//     const femaleButton = PersonalDataForm.genFemaleButton;
//     await PersonalDataForm.tapGenFemaleField();
//     await expect(femaleButton).toHaveAttrContaining("checked", "true");
//     await expect(maleButton).toHaveAttrContaining("checked", "false");
//   })

//   it('TAP Male option. Female option is unchecked', async () => {
//     const maleButton = PersonalDataForm.genMaleButton
//     const femaleButton = PersonalDataForm.genFemaleButton;
//     await PersonalDataForm.tapGenMaleField();
//     await expect(femaleButton).toHaveAttrContaining("checked", "false");
//     await expect(maleButton).toHaveAttrContaining("checked", "true");
//   })

//   it('TAP Nationality field to INVOKE country picker. Panel DISPLAYED', async () => {
//     await PersonalDataForm.tapNationalityField();
//     await ListPicker.customPanelOuter.waitForDisplayed({timeout: 1000});
//     await ListPicker.listView.waitForDisplayed({timeout:1000});
//   })

//   it('SELECT Nationality from Date Picker - "Albania". Panel DISMISSED.', async () => {
//     await ListPicker.selectFromTheList("Albania");
//     await ListPicker.customPanelOuter.waitForDisplayed({timeout: 1000, reverse:true})
//     await driver.pause(5000);
//   })
  
//   it('Email field is DISPLAYED and DEFAULTED to User email', async () => {
//     const elem = PersonalDataForm.emailField;
//     const prefilled = PersonalDataForm.emailInput;
//     await expect(elem).toBeDisplayed();
//     await expect(prefilled).toHaveText("rbmh_test2@yahoo.com");
//   })

//   //TODO
//   // it('TAP on Email field allows to change User email', async () => {
//   //   await PersonalDataForm.tapEmailField();
//   //   await PersonalDataForm.inputEmail("another_email1@redbull.com");
//   //   await driver.pause(3000);
//   //   // await PersonalDataForm.inputEmail("and.another.one@gmail.com"); 
//   //   // await driver.pause(1000);
//   //   // await expect(PersonalDataForm.emailInput).toHaveText("and.another.one@gmail.com") 
//   //   // await PersonalDataForm.inputEmail("rbmh_test2@yahoo.com");
//   //   // await expect(PersonalDataForm.emailInput).toHaveText("rbmh_test2@yahoo.com") 
//   // })


//   it('TAP Residence field to INVOKE country picker. Panel DISPLAYED', async () => {
//     await Gestures.swipeUp(0.5);
//     await PersonalDataForm.tapResidenceField();
//     await ListPicker.customPanelOuter.waitForDisplayed({timeout: 1000})
//     await ListPicker.listView.waitForDisplayed({timeout: 1000})
//     await driver.pause(5000);
//   })


//   it('SELECT Country from List Picker - "Albania". Panel DISMISSED.', async () => {
//     await ListPicker.selectFromTheList("Albania");
//     await ListPicker.customPanelOuter.waitForDisplayed({timeout: 1000, reverse:true})
//     await driver.pause(5000);
//   })

//   //TODO: if Austria, Germany or Poland are picked additional fields appear - handle this
//   // it('Athlete type section HAS correct LABEL', async () => {
//   //   // TODO: selector doesn't work
//   //   const elem = PersonalDataForm.athleteTypeLabel;
//   //   await expect(elem).toBeDisplayed();
//   //   await expect(elem).toHaveText("ATHLETE TYPE")
//   // })
  
//   it('Student checkbox is DISPLAYED and CHECKED BY DEFAULT.', async () => {
//     const elem = PersonalDataForm.studentCheckBox;
//     await expect(elem).toBeDisplayed();
//     await expect(elem).toHaveAttrContaining("checked", "true")
//   })

//   //TODO: selector doesn't work, find solution
//   // it('"I am a student" LABEL is DISPLAYED', async () => {
//   //   const elem = PersonalDataForm.student;
//   //   await expect(elem).toBeDisplayed();
//   //   await expect(elem).toHaveText("I am a student")
//   // })

//   it('Student checkbox CAN BE UNCHECKED', async () => {
//     const elem = PersonalDataForm.studentCheckBox;
//     await PersonalDataForm.tapStudentCheckBox();
//     await expect(elem).toHaveAttrContaining("checked", "false")
//     await driver.pause(1000);
//   })

//   it('Student checkbox CAN BE CHECKED', async () => {
//     const elem = PersonalDataForm.studentCheckBox;
//     await PersonalDataForm.tapStudentCheckBox();
//     await expect(elem).toHaveAttrContaining("checked", "true")
//     await driver.pause(1000);
//   })

//   it('"Next step" button is DISPLAYED, ENABLED and CLICKABLE', async () => {
//     const btn = PersonalDataForm.nextStepButton;
//     await expect(btn).toBeDisplayed();
//     await expect(btn).toHaveAttrContaining("enabled", "true")
//     await expect(btn).toHaveAttrContaining("clickable", "true")
//   })

//   it('TAP "Next step" button REDIRECTS user to "Extras" screen', async () => {
//     await PersonalDataForm.tapNextStepButton();
//     await driver.pause(3000);
//     await ExtrasForm.pageTitle.waitForDisplayed({timeout: 5000});
//   })
// })

// describe('REGISTER TO RUN. EXTRAS FORM', () => {
//   //TODO:
//   //check Navbar (personal has checkmark, extras is now active, regfee total is now $23)
//   //check text
//   //check all options can be selected
  
//   it('Page TITLE is DISPLAYED and has correct TEXT', async () => {
//     const elem = ExtrasForm.pageTitle;
//     await expect(elem).toBeDisplayed();
//     await expect(elem).toHaveText("ENTRY FEE BOOST");
//   })

//   it('"Donate 0" option is DISPLAYED and pre SELECTED by default', async () => {
//     const elem = ExtrasForm.donate0Button;
//     await expect(elem).toBeDisplayed();
//     await expect(elem).toHaveAttrContaining("checked", "true");
//   })

//   it('"Donate 2" option is DISPLAYED and CAN BE SELECTED', async () => {
//     const elem = ExtrasForm.donate2Button;
//     await expect(elem).toBeDisplayed();
//     await expect(elem).toHaveAttrContaining("checked", "false");
//     await ExtrasForm.tapDonate2();
//     await expect(elem).toHaveAttrContaining("checked", "true");
//   })

//   it('"Donate 5" option is DISPLAYED and CAN BE SELECTED', async () => {
//     const elem = ExtrasForm.donate5Button;
//     await expect(elem).toBeDisplayed();
//     await expect(elem).toHaveAttrContaining("checked", "false");
//     await ExtrasForm.tapDonate5();
//     await expect(elem).toHaveAttrContaining("checked", "true");
//   })

//   it('"Donate 10" option is DISPLAYED and CAN BE SELECTED', async () => {
//     const elem = ExtrasForm.donate10Button;
//     await expect(elem).toBeDisplayed();
//     await expect(elem).toHaveAttrContaining("checked", "false");
//     await ExtrasForm.tapDonate10();
//     await expect(elem).toHaveAttrContaining("checked", "true");
//   })

//   it('"Donate custom amount" input is CLICKABLE', async () => {
//     const elem = ExtrasForm.donateCustomButton;
//     await expect(elem).toHaveAttrContaining("clickable", "true")
//   })

//   it('TAP "Donate custom amount" input and SET value - 55', async () => {
//     //TODO: bad idea: save prev in var and update after input -> becomes searchable
//     await ExtrasForm.tapDonateCustomButton();
//     await Gestures.swipeUp(0.2);
//     await driver.pause(3000);
//     await driver.pressKeyCode(12);
//     await driver.pressKeyCode(12);
//     await driver.hideKeyboard();
//     await driver.pause(2000)
//   })

//   it('TAP "Donate 0" again for testing purposes. $0 option is selected', async () => {
//     //TODO: bad idea: save prev in var and update after input -> becomes searchable
//     await ExtrasForm.tapDonate0();
//     await expect(ExtrasForm.donate0Button).toHaveAttrContaining("checked", "true");
//   })

//   it('"Next step" button is DISPLAYED, ENABLED and CLICKABLE', async () => {
//     await Gestures.swipeUp(0.6);
//     const btn = ExtrasForm.nextStepButton;
//     await expect(btn).toBeDisplayed();
//     await expect(btn).toHaveAttrContaining("enabled", "true")
//     await expect(btn).toHaveAttrContaining("clickable", "true")
//   })

//   it('"BACK" button is DISPLAYED, ENABLED and CLICKABLE', async () => {
//     const btn = ExtrasForm.backButton;
//     await expect(btn).toBeDisplayed();
//     await expect(btn).toHaveAttrContaining("enabled", "true")
//     await expect(btn).toHaveAttrContaining("clickable", "true")
//   })

//   it('TAP "Next step" button REDIRECTS user to "PAYMENT METHODS" screen', async () => {
//     await ExtrasForm.tapNextStepButton();
//     await driver.pause(3000);
//     await PaymentMethod.pageTitle.waitForDisplayed({timeout: 5000});
//   })
// })

// describe('REGISTER TO RUN. PAYMENT METHODS', () => {
//   it('Page title is DISPLAYED and has correct TEXT', async () => {
//     const elem = PaymentMethod.pageTitle;
//     await expect(elem).toBeDisplayed();
//     await expect(elem).toHaveText('PAYMENT METHODS');
//   })

//   it('"Next step" button is DISPLAYED, but DISABLED by default', async () => {
//     const btn = PaymentMethod.nextStepButton;
//     await expect(btn).toBeDisplayed();
//     await expect(btn).toHaveAttrContaining("enabled", "false");
//   })

//   it('Voucher input field is DISPLAYED and CLICKABLE', async () => {
//     const field = PaymentMethod.voucherInput;
//     await expect(field).toBeDisplayed();
//     await expect(field).toHaveAttrContaining('clickable', 'true');
//   })

//   it('Voucher Input HAS correct LABEL', async () => {
//     const label = PaymentMethod.voucherLabel;
//     await expect(label).toBeDisplayed();
//     await expect(label).toHaveText('Add your voucher code');
//   })

//   it('"Apply" button is DISPLAYED and CLICKABLE', async () => {
//     //it shouldn't actually be active while field is empty, but...
//     const elem = PaymentMethod.applyCodeButton;
//     await expect(elem).toBeDisplayed();
//     await expect(elem).toHaveAttrContaining("clickable", "true");
//   })
  
//   //TODO: do credit card section check (very questionable)
//   it('Correct voucher INPUT - "TEST2023" shows user MESSAGE ', async () => {
//     await PaymentMethod.tapVoucherInput();
//     await driver.pause(1000);
//     //Production build uses different code - "TESTAPP2023", consider checking env to reuse for both
//     await driver.pressKeyCode(48); //t
//     await driver.pressKeyCode(33); //e
//     await driver.pressKeyCode(47); //s
//     await driver.pressKeyCode(48); //t
//     // await driver.pressKeyCode(29); //a
//     // await driver.pressKeyCode(44); //p
//     // await driver.pressKeyCode(44); //p
//     await driver.pressKeyCode(9);  //2
//     await driver.pressKeyCode(7);  //0
//     await driver.pressKeyCode(9);  //2
//     await driver.pressKeyCode(10); //3
//     await driver.pause(1000);
//     await PaymentMethod.tapApplyCodeButton();
//     await driver.pause(4000)
//   })


//   it('"Next step" button is DISPLAYED, ENABLED and CLICKABLE', async () => {
//     await Gestures.swipeUp(0.5);
//     const btn = PaymentMethod.nextStepButton;
//     await expect(btn).toBeDisplayed();
//     await expect(btn).toHaveAttrContaining("enabled", "true")
//     await expect(btn).toHaveAttrContaining("clickable", "true")
//   })

//   it('"BACK" button is DISPLAYED, ENABLED and CLICKABLE', async () => {
//     const btn = PaymentMethod.backButton;
//     await expect(btn).toBeDisplayed();
//     await expect(btn).toHaveAttrContaining("enabled", "true");
//     await expect(btn).toHaveAttrContaining("clickable", "true");
//   })

//   it('TAP "Next step" button REDIRECTS user to "SUMMARY" screen', async () => {
//     await PaymentMethod.tapNextStepButton();
//     await driver.pause(3000);
//     await RegSummary.pageTitle.waitForDisplayed({timeout:5000});
//   })

// })

// describe('REGISTER TO RUN. SUMMARY.', () => {
//   //check all sections are displayed
//   //check "Edit" buttons work
//   it('Page title is DISPLAYED and has correct TEXT', async () => {
//     const elem = RegSummary.pageTitle;
//     await expect(elem).toBeDisplayed();
//     await expect(elem).toHaveText('SUMMARY');
//   })

//   it('"Participation terms" checkbox is DISPLAYED and UNCHECKED by default', async () => {
//     await Gestures.swipeUp(0.5);
//     await Gestures.swipeUp(0.5);
//     await Gestures.swipeUp(0.5);
//     await Gestures.swipeUp(0.5);
//     const elem = RegSummary.termsCheckBox;
//     await expect(elem).toBeDisplayed();
//     await expect(elem).toHaveAttrContaining("checked", "false");
//   })

//   it('Agree to "Participation terms" and TAP checkbox ( v )', async () => {
//     const elem = RegSummary.termsCheckBox;
//     await RegSummary.tapTermsCheckBox();
//     await expect(elem).toHaveAttrContaining("checked", "true");
//   })

//   it('"Personal data" checkbox is DISPLAYED and UNCHECKED by default', async () => {
//     const elem = RegSummary.personalDataCheckBox;
//     await Gestures.swipeUp(0.3);
//     await expect(elem).toBeDisplayed();
//     await expect(elem).toHaveAttrContaining("checked", "false");
//   })

//   it('Agree to "Personal data" policy and TAP checkbox ( v )', async () => {
//     const elem = RegSummary.personalDataCheckBox;
//     await RegSummary.tapPersonalDataCheckBox();
//     await expect(elem).toHaveAttrContaining("checked", "true");
//   })

//   it('"Purchase" button is DISPLAYED, ENABLED and CLICKABLE (bug)', async () => {
//     //Techically should not be untill checkboxes are checked
//     const btn = RegSummary.purchaseButton;
//     await Gestures.swipeUp(0.8);
//     await expect(btn).toBeDisplayed();
//     await expect(btn).toHaveAttrContaining("enabled", "true");
//     await expect(btn).toHaveAttrContaining("clickable", "true");
//   })

//   it('"BACK" button is DISPLAYED, ENABLED and CLICKABLE', async () => {
//     //Techically should not be untill checkboxes are checked
//     const btn = RegSummary.backButton;
//     await expect(btn).toBeDisplayed();
//     await expect(btn).toHaveAttrContaining("enabled", "true");
//     await expect(btn).toHaveAttrContaining("clickable", "true");
//   })
