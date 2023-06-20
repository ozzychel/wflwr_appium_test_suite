import AppScreen from "./AppScreen";
import { USER_LOCALE, USER_UOM, USER_LANGUAGE } from "../../helpers/Constants";

class AudioSettings extends AppScreen {
  constructor () {
    super("~AudioSettings")
  }

  private get screenTitle () {return $('//android.widget.TextView[@text="AUDIO SETTINGS"]')};
  private get trainingAudioLabel () {return $('//android.widget.TextView[@text="TRAINING AUDIO"]')};
  private get raceDayAudioLabel () {return $('//android.widget.TextView[@text="RACE DAY AUDIO"]')};
  private get backButton () {return $('//android.widget.Button')};
  //using xpath below is extremely unreliable, but since there are no hooks in the app will proceed with it for now
  private get userTrainingAudioOption () {return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]')}
  private get userRaceDayAudioOption () {return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.view.View[5]')}
  
  async tapBackButton () {
    await this.backButton.click();
  }

  async tapTrainingDayAudioOption () {
    await this.userTrainingAudioOption.click()
  }

  async tapRaceDayAudioOption () {
    await this.userRaceDayAudioOption.click()
  }


}

module.exports = new AudioSettings();