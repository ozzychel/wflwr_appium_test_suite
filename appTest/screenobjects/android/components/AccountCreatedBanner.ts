import AppScreen from "../AppScreen";

/// try to extend AppScreen
class AccountCreatedBanner {
  private get banner () {return $('//android.widget.TextView[@text="YOUR ACCOUNT HAS BEEN CREATED!"]/parent::*')}
  private get bannerTitle () {return $('//android.widget.TextView[@text="YOUR ACCOUNT HAS BEEN CREATED!"]')}
  private get bannerSubtitle () {return $('//android.widget.TextView[@text="We\'re excited to have you onboard for the Wings for Life World Run!"]')}
  private get registerButton () {return $('//android.widget.TextView[@text="REGISTER NOW"]/parent::*')}
  private get registerButtonLabel () {return $(`//android.widget.TextView[@text="REGISTER NOW"]`)}
  private get dismissButton () {return $('//android.widget.TextView[@text="DISMISS"]/parent::*')}
  private get dismissButtonLabel () {return $('//android.widget.TextView[@text="DISMISS"]')}

  async tapRegisterNowButton () {
    await this.registerButton.click();
  }
  
  async tapDismissButton () {
    await this.dismissButton.click();
  }

}

module.exports = new AccountCreatedBanner();