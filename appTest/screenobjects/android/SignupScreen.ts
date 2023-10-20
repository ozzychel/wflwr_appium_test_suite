import { USER_EMAIL } from '../../helpers/Constants';
class SignupScreen {
  private get content () {return $('id=content');}

  private get appUiView () {return $('//androidx.compose.ui.platform.ComposeView');}
  private get screenTitle () {return $('//android.widget.TextView[@text="SIGN UP"]');}
  private get userEmail () {return $(`//android.widget.TextView[@text="${USER_EMAIL.toUpperCase()}"]`);}

  //find way to search for placeholder text > parent
  //first name field
  private get firstNameInput () {return $('//android.widget.ScrollView/android.widget.EditText[1]');}
  // private get firstNameInputPlaceholderText () {return $(`android=new UiSelector().className("android.widget.ScrollView/android.widget.EditText[1]").childSelector(new UiSelector().className("android.widget.TextView"))`)};

  private get firstNameInputPlaceholderText () {return $('//android.widget.ScrollView/android.widget.EditText[1]/android.widget.TextView');}
  //last name field
  private get lastNameInput () {return $('//android.widget.ScrollView/android.widget.EditText[2]');}
  private get lastNameInputPlaceholderText () {return $('//android.widget.ScrollView/android.widget.EditText[2]/android.widget.TextView');}
  //Password field
  private get passwordInput () {return $('//android.widget.ScrollView/android.widget.EditText[3]');}
  private get passwordInputPlaceholderText () {return $('//android.widget.ScrollView/android.widget.EditText[3]/android.widget.TextView');}
  private get showPasswordButton () {return $('//android.widget.ScrollView/android.widget.EditText[3]/android.view.View[2]/android.widget.Button');}
  //app uses loginc when holding container is enabled not the button itself (enabled=true/false)
  private get continueButton () {return $('//android.widget.ScrollView/android.view.View');}
  private get continueButtonLabel () {return $('//android.widget.TextView[@text="AGREE & CONTINUE"]');}

  async inputFirstName(name) {
    await this.firstNameInput.setValue(name);
  }

  async inputLastName(name) {
    await this.lastNameInput.setValue(name);
  }

  async inputPassword(pass) {
    await this.passwordInput.setValue(pass);
  }

  async tapContinueButton() {
    await this.continueButton.click();
  }

  async tapShowPasswordButton () {
    this.showPasswordButton.click();
  }
  // async inputPassword (pass) {
  //   await this.passwordInputField.setValue(pass);
  // }

  // async tapContinueButton () {
  //   await this.continueButton.click();
  // }

  // async tapForgotEmailLink () {
  //   await this.forgotEmailLink.click();
  // }

  // async tapForgotPassword () {
  //   await this.forgotPassword.click();
  // }

  // async tapShowPasswordButton () {
  //   await this.showPasswordButton.click();
  // }

  // async tapDismissButton () {
  //   await this.dismissButton.click();
  // }
}

module.exports =  new SignupScreen();