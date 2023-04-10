import AppScreen from "../screenobjects/android/AppScreen";

class PaymentMethod {
  //no ids to use, improve selectors targeting (id, child of a parent)
  private get pageTitle () {return $('//android.widget.TextView[@text="PAYMENT METHODS"]')};
  private get voucherInput () {return $(`//android.view.View[@resource-id="app"]/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.widget.EditText`)}
  private get voucherLabel () {return $(`//android.view.View[@text="Add your voucher code"]`)}
  private get applyCodeButton () {return $(`//android.widget.Button[@text="APPLY"]`)};
  private get creditCardButton () {return $('//android.widget.RadioButton')};
  
  private get userMessage () {return $(`//android.widget.TextView[@text="Voucher code didn't work"]`)};
  private get correctUserMessage () {return $(`//android.view.View[@content-desc="100% Voucher, App Run: TEST2023"]`)}

  private get nextStepButton () {return $(`//android.widget.Button[@text="NEXT STEP"]`)};
  private get backButton () {return $(`//android.widget.Button[@text="BACK"]`)};

  
  async tapVoucherInput () {
    //TODO: refactor, currently tapping label
    await this.voucherLabel.click();
  }

  async tapApplyCodeButton () {
    await this.applyCodeButton.click();
  }

  async tapCreditCardButton () {
    await this.creditCardButton.click();
  }

  async tapNextStepButton () {
    await this.nextStepButton.click();
  }

  async tapBackButton () {
    await this.backButton.click();
  }

}

module.exports = new PaymentMethod();