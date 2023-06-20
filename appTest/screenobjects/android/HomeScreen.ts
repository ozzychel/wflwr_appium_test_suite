import AppScreen from "./AppScreen";

class HomeScreen extends AppScreen {
  constructor () {
    super("~HomeScreen")
  }

  private get countdown () {return $('//android.widget.TextView[@text="SEC"]')};
  private get partnersTitle () {return $('//android.widget.TextView[@text="AND BY OUR NATIONAL PARTNERS"]')};
  private get registerNowButtton () {return $(`//android.widget.TextView[@text="REGISTER NOW"]`)};
  private get thankYouLabel () {return $(`//android.widget.textView[@text="THANK YOU FOR REGISTERING!"]`)};
  private get turnGPSonBtn () {return $(`//android.widget.TextView[@text="TURN YOUR GPS ON"]`)};
  private get confirmAudioBtn () {return $(`//android.widget.TextView[@text="CONFIRM AUDIO"]`)};
  private get learnMoreBtn () {return $(`//android.widget.TextView[@text="LEARN MORE"]`)};

  async tapRegisterNowButton () {
    await this.registerNowButtton.click();
  }

  async tapTurnGPSonBtn () {
    await this.turnGPSonBtn.click();
  }

  async tapConfirmAudioBtn () {
    await this.confirmAudioBtn.click();
  }
}

module.exports = new HomeScreen();