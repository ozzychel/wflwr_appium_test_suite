import AppScreen from "../screenobjects/android/AppScreen"

class ExtrasForm {
  //no ids to use, improve selectors targeting (id, child of a parent)
  private get pageTitle () {return $('//android.widget.TextView[@text="ENTRY FEE BOOST"]')};
  private get donate0Button () {return $(`//android.widget.RadioButton[@text="$0"]`)};
  private get donate2Button () {return $(`//android.widget.RadioButton[@text="$2"]`)};
  private get donate5Button () {return $(`//android.widget.RadioButton[@text="$5"]`)};
  private get donate10Button () {return $(`//android.widget.RadioButton[@text="$10"]`)};
  private get donateCustomButton () {return $(`//android.widget.EditText[@text="USD"]`)};
  private get nextStepButton () {return $(`//android.widget.Button[@text="NEXT STEP"]`)};
  private get backButton () {return $(`//android.widget.Button[@text="BACK"]`)};

  async tapDonate0 () {
    await this.donate0Button.click()
  }
  
  async tapDonate2 () {
    await this.donate2Button.click()
  }

  async tapDonate5 () {
    await this.donate5Button.click()
  }

  async tapDonate10 () {
    await this.donate10Button.click()
  }

  async tapDonateCustomButton () {
    await this.donateCustomButton.click();
  }

  async tapNextStepButton () {
    await this.nextStepButton.click();
  }

  async tapBackButton () {
    await this.backButton.click();
  }
}

module.exports = new ExtrasForm();