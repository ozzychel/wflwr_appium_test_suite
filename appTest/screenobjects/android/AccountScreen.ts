import AppScreen from "./AppScreen";
import Gestures from "../../helpers/Gestures";

class AccountScreen extends AppScreen{
  //TODO: improve selector targeting using id etc
  constructor () {
    super("~AccountScreen")
  }

  // !!! find most top element, meanwhile use name | name hardcoded
  private get userName () {return $('//android.widget.TextView[@text="first last"]')};
 
  private get aboutYouTab () {return $('//android.widget.TextView[@text="ABOUT YOU"]') }
  private get registrationTab () {return $('//android.widget.TextView[@text="REGISTRATION"]') }
  private get settingsTab () {return $('//android.widget.TextView[@text="SETTINGS"]') }

  async tapAboutYouTab () {
    await this.aboutYouTab.click();
  }

  async tapRegistrationTab () {
    await this.registrationTab.click();
  }

  async tapSettingsTab () {
    await this.settingsTab.click();
  }

}

module.exports = new AccountScreen();
