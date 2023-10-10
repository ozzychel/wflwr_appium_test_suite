import AppScreen from "../AppScreen";

/// try to extend AppScreen
class CookiesBanner {
  
  private get textLayout () {
    return driver.isAndroid ?
      $(`id=cookies_text_layout`) :
      $(`-ios predicate string:type == "XCUIElementTypeTable"`)
  };
  private get bannerTitle () {
    return driver.isAndroid ?  
      $(`id=banner_title`) : 
      $(`//XCUIElementTypeTable/XCUIElementTypeCell`)
  };
  
  private get alertNotice () {
    return driver.isAndroid ? 
      $(`id=alert_notice_text`) :
      $(`id=bannerDescriptions`)
  };
  
  private get buttonLayout () { 
    return driver.isAndroid ?
      $(`id=button_layout`) :
      $(`//XCUIElementTypeButton[@name="bannerAllowAllButton"]/parent::*`)
  };

  private get allowAllButton () {
    return driver.isAndroid ?  
      $(`id=btn_accept_cookies`) :
      $(`id=bannerAllowAllButton`)
  };

  private get declineAllButton () {
    return driver.isAndroid ? 
      $(`id=btn_reject_cookies`) :
      $(`id=bannerRejectAllButton`)
  };

  private get goToSettingsButton () {
    return driver.isAndroid ? 
      $(`id=cookies_setting_button`) :
      $(`id=bannerPrivacySettingsButton`)
  };

  async tapAllowAllButton () {
    await this.allowAllButton.click();
  }
  
  async tapDeclineAllButton () {
    await this.declineAllButton.click();
  }
  
  async tapGoToSettingsButton () {
    await (await this.goToSettingsButton).click();
  }

}

module.exports =  new CookiesBanner();