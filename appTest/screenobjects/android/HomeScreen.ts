import AppScreen from "./AppScreen";

class HomeScreen extends AppScreen {
  constructor () {
    super("~HomeScreen")
  }

  private get countdown () {return $('//android.widget.TextView[@text="SEC"]')};
  private get partnersTitle () {return $('//android.widget.TextView[@text="AND BY OUR NATIONAL PARTNERS"]')};
  private get registerNowButtton () {return $(`//android.widget.TextView[@text="REGISTER NOW"]`)};
  private get thankYouLabel () {return $(`//android.widget.textView[@text="THANK YOU FOR REGISTERING!"]`)}

  async tapRegisterNowButton () {
    await (await this.registerNowButtton).click();
  }
}

module.exports = new HomeScreen();