import AppScreen from "../AppScreen";

/// try to extend AppScreen
class TurnOnLocationBanner {
  private get banner () {return $('//android.widget.TextView[@text="TURN ON YOUR LOCATION"]/parent::*')}
  private get bannerTitle () {return $('//android.widget.TextView[@text="TURN ON YOUR LOCATION"]')}
  private get bannerSubtitle () {return $('//android.widget.TextView[@text="We need your location to provide accurate data about your run."]')}
  private get turnOnYourLocationBtn () {return $('//android.widget.Button')}
  
  async tapTurnOnYourLocationBtn () {
    (await this.turnOnYourLocationBtn).click();
  }
 
}

module.exports = new TurnOnLocationBanner();