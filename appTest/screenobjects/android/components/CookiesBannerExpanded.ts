import { ANDROID_APP_NAME } from '../../../helpers/Constants';

class CookiesBannerExpanded {

  private get pcLayoutContainer () {
    return driver.isAndroid ?
      $('id=pc_layout') :
      $('//XCUIElementTypeApplication[@name="World Run"]/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]');
  }

  private get title () {
    return driver.isAndroid ?
      $('id=main_text') :
      $('id=pcTitle');
  }

  private get mainText () {
    return driver.isAndroid ?
      $('id=main_info_text') :
      $('id=pcDescription');
  }

  private get buttonLayout () {
    return driver.isAndroid ?
      $('id=allow_all_layout') :
      $('//XCUIElementTypeButton[@name="pcAllowAllButton"]');
  }

  private get allowAllBtn  () {
    return driver.isAndroid ?
      $('id=btn_allow_all') :
      $('id=pcAllowAllButton');
  }

  private get declineAllBtn () {
    return driver.isAndroid ?
      $('id=btn_reject_PC') :
      $('id=pcRejectAllButton');
  }

  private get strictlyNecessaryCont () {
    return driver.isAndroid ?
      $('//android.widget.TextView[contains(@text, "Strictly Necessary")]/parent::*/parent::*') :
      $('id=pcStrictlyNecessaryCell');
  }

  private get performanceCont () {
    return driver.isAndroid ?
      $('//android.widget.TextView[contains(@text, "Performance")]/parent::*/parent::*') :
      $('//XCUIElementTypeCell[@name="pcEditableConsentCell"][1]');
  }

  private get marketingCont () {
    return driver.isAndroid ?
      $('//android.widget.TextView[contains(@text, "Marketing")]/parent::*/parent::*') :
      $('//XCUIElementTypeCell[@name="pcEditableConsentCell"][2]');
  }

  private get confirmButton () {
    return driver.isAndroid ?
      $('id=btn_confirm_choices') :
      $('id=pcConfirmMyChoiceButton');
  }

  private get performanceSwitch () {
    return driver.isAndroid ?
      $('(//android.widget.Switch[@content-desc="Consent"])[1]') :
      $('//XCUIElementTypeCell[@name="pcEditableConsentCell"][1]/XCUIElementTypeSwitch[@name="pcEditableConsentCellConsentSwitch"]');
  }

  private get marketingSwitch () {
    return driver.isAndroid ?
      $('(//android.widget.Switch[@content-desc="Consent"])[2]') :
      $('//XCUIElementTypeCell[@name="pcEditableConsentCell"][2]/XCUIElementTypeSwitch[@name="pcEditableConsentCellConsentSwitch"]');
  }

  private get settingsIdTitle () {
    return driver.isAndroid ?
      $('id=dsid_title') :
      $('id=Settings ID');
  }

  private get settingsIdNumber () {
    return driver.isAndroid ?
      $('id=dsid') :
      $('//XCUIElementTypeCell[@name="pcDsIdCell"]/XCUIElementTypeStaticText[1]');
  }

  private get copyIdButton () {
    return driver.isAndroid ?
      $('id=text_copy') :
      $('id=dsidCopyButton');
  }

  private get preferencesList () {return $('id=preferences_list');}
  private get topScrollView () {return $(`android=new UiSelector().resourceId("${ANDROID_APP_NAME}:id/pc_layout").childSelector(new UiSelector().className("android.widget.ScrollView"))`);}
  private get footerLayout () {return $('id=footer_layout');}

  async tapAllowAllButton () {
    await this.allowAllBtn.click();
  }

  async tapDeclineAllButton () {
    await this.declineAllBtn.click();
  }

  async tapConfirmButton () {
    await this.confirmButton.click();
  }

}

module.exports =  new CookiesBannerExpanded();