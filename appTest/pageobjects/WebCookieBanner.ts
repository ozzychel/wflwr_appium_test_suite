import AppScreen from '../screenobjects/android/AppScreen';

class WebCookieBanner {
  private get container () {return $(`//android.view.View[@resource-id="onetrust-banner-sdk"]`)};
  private get policyTextCont () {return $(`//android.view.View[@resource-id="onetrust-policy"]`)};
  private get policyText () {return $(`//android.view.View[@resource-id="onetrust-policy-text"]/android.view.View/android.widget.TextView`)};
  private get buttonGroup () {return $(`//android.view.View[@resource-id="onetrust-button-group"]`)};
  private get acceptAllButton () {return $(`//android.widget.Button[@resource-id="onetrust-accept-btn-handler"]`)};
  private get rejectAllButton () {return $(`//android.widget.Button[@resource-id="onetrust-reject-all-handler"]`)};
  private get settingsButton () {return $(`//android.widget.Button[@resource-id="onetrust-pc-btn-handler"]`)};

  async tapAcceptAllBtn () {
    await this.acceptAllButton.click();
  }

  async tapRejectAllBtn () {
    await this.rejectAllButton.click();
  }

  async tapSettingsBtn () {
    await this.settingsButton.click();
  }

}

module.exports = new WebCookieBanner();