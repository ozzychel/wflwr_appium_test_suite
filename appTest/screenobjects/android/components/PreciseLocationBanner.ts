import AppScreen from "../AppScreen";

/// try to extend AppScreen
class PreciseLocationBanner {
  private get banner () {return $('//android.widget.TextView[@text="PRECISE LOCATION"]/parent::*')}
  private get bannerTitle () {return $('//android.widget.TextView[@text="PRECISE LOCATION"]')}
  private get bannerSubtitle () {return $('//android.widget.TextView[contains(@text,"To improve results we recommend turning on your precise location")]')}
  private get goToSettingsBtn () {return $('//android.widget.Button')}
  private get dismissBtn () {return $('//android.widget.Button')}
  
  async tapGoToSettingsBtn () {
    await this.goToSettingsBtn.click();
  }
  
  async tapDismissBtn () {
    await this.dismissBtn.click();
  }
}

module.exports = new PreciseLocationBanner();