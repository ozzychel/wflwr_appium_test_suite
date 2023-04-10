import { participationTermsText, personalDataText } from "../../../helpers/TextCopies";
import AppScreen from "../AppScreen"

class RegSummary {
  //no ids to use, improve selectors targeting (id, child of a parent)
  //will use bad flow for demo purposes, basically search for unchecked chkbox, then check then next
  //rebuild with webview strategy
  
  private get pageTitle () {return $('//android.widget.TextView[@text="SUMMARY"]')};
  //
  private get termsCheckBox () {return $(`//android.widget.CheckBox[@checked="false"]`)};
  private get personalDataCheckBox () {return $(`//android.widget.CheckBox[@checked="false"]`)};
  //
  private get purchaseButton () {return $(`//android.widget.Button[@text="PURCHASE"]`)};
  private get backButton () {return $(`//android.widget.Button[@text="BACK"]`)};
  //welcome screen elements (might be moved to a separate class at some point)
  private get weAreDelightedTitle () {return $(`//android.widget.TextView[@text="WE'RE DELIGHTED YOU'RE JOINING US!"]`)}

  
  async tapTermsCheckBox () {
    await this.termsCheckBox.click();
  }

  async tapPersonalDataCheckBox () {
    await this.personalDataCheckBox.click();
  }

  async tapPurchaseButton () {
    await this.purchaseButton.click();
  }

  async tapBackButton () {
    await this.backButton.click();
  }
 
}

module.exports = new RegSummary();