class LoginScreen {
  private get content () {return $('id=content');}

  private get container () {
    return driver.isAndroid ?
      $('id=container') :
      $('id=World Run');
  }

  private get touchOutside () {
    return driver.isAndroid ?
      $('id=touch_outside') :
      $('//XCUIElementTypeApplication[@name="World Run"]/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther');
  }

  private get bannerLayoutContainer () {
    return driver.isAndroid ?
      $('id=design_bottom_sheet') :
      $('//XCUIElementTypeTable/parent::*');
  }

  private get continueWithEmailButton () {
    return driver.isAndroid ?
      $('//android.widget.TextView[@text="CONTINUE WITH EMAIL"]') :
      $('-ios predicate string:label == "CONTINUE WITH EMAIL"');
  }

  private get startYourJourneyButton () {
    return driver.isAndroid ?
      $('//android.widget.TextView[@text="START YOUR JOURNEY"]') :
      $('//XCUIElementTypeButton[@name="Start your journey"]');
  }

  private get continueButton () {
    return driver.isAndroid ?
      $('//android.widget.TextView[@text="CONTINUE"]') :
      $('-ios predicate string:label == "CONTINUE"');
  }

  private get iosTrackingAlert () {return $('-ios predicate string:type == "XCUIElementTypeAlert"');}
  private get logo () { return $('id=WFLWR Logo');}
  private get appUiView () {return $('//androidx.compose.ui.platform.ComposeView');}

  //find better way to avoid xpath below and target Button class, not text
  private get emailAddressLabel () {return $('//android.widget.TextView[@text,"EMAIL ADDRESS"]');}
  private get emailInputField () {return $('//android.widget.EditText');}
  //find way to search for placeholder text > parent
  private get emailPlaceholderText () {return $('android=new UiSelector().className("android.widget.EditText").childSelector(new UiSelector().className("android.widget.TextView"))');}

  //very bad design, container not the button change 'enabled' prop + no id. Works for now, but unreliable
  //cannot use -uiautomator selector strategy,cause its a webview!

  private get dismissButton () {return $('//android.widget.TextView[@text="DISMISS"]');}
  //------------------------------------------------------------------------------------
  private get forgotEmailLink () {return $('android=new UiSelector().className("android.widget.TextView").text("Forgot Email Address?")');}
  private get invalidUsrMsg () {return $('android=new UiSelector().className("android.widget.TextView").text("Invalid email address")');}

  //Password screen
  private get passwordInputField () {return $('//android.widget.EditText');}
  private get passwordPlaceholderText () {return $('android=new UiSelector().className("android.widget.EditText").childSelector(new UiSelector().className("android.widget.TextView"))');}
  private get showPasswordButton () {return $('//android.widget.EditText/android.view.View[@clickable="true"]');}

  private get welcomeBackLabel () {return $('//android.widget.ScrollView/android.widget.TextView[1]');}
  private get userEmailLabel () {return $('//android.widget.ScrollView/android.widget.TextView[2]');}
  private get forgotPassword () {return $('android=new UiSelector().className("android.widget.TextView").text("Forgot Password?")');}

  private get errorMsgContainer () {return $('//TODO');}
  private get errorMsgTitle () {return $('//android.view.View/android.widget.TextView[@text="ERROR"]');}
  private get errorMsgText () {return $('//android.view.View/android.widget.TextView[@text="Authentication failed – please check your username and password"]');}

  async tapContinueWithEmailButton () {
    await this.continueWithEmailButton.click();
  }

  async tapFacebookButton () {
    //TODO
  }

  async tapGoogleButton () {
    //TODO
  }

  async inputEmailAddress (address) {
    await this.emailInputField.setValue(address);
  }

  async inputPassword (pass) {
    await this.passwordInputField.setValue(pass);
  }

  async tapContinueButton () {
    await this.continueButton.click();
  }

  async tapForgotEmailLink () {
    await this.forgotEmailLink.click();
  }

  async tapForgotPassword () {
    await this.forgotPassword.click();
  }

  async tapShowPasswordButton () {
    await this.showPasswordButton.click();
  }

  async tapDismissButton () {
    await this.dismissButton.click();
  }

  async tapStartYourJourneyButton () {
    await this.startYourJourneyButton.click();
  }
}

module.exports =  new LoginScreen();