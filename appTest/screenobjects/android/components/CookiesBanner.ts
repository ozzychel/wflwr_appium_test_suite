import AppScreen from "../AppScreen";

/// try to extend AppScreen
class CookiesBanner {
  
  private get buttonLayout () {return $(`id=button_layout`)}
  private get allowAllButton () {return $(`id=btn_accept_cookies`)};
  private get declineAllButton () {return $(`id=btn_reject_cookies`)};
  private get goToSettingsButton () {return $(`id=cookies_setting_button`)};
  private get textLayout () {return $(`id=cookies_text_layout`)};
  private get bannerTitle () {return $(`id=banner_title`)};
  private get alertNotice () {return $(`id=alert_notice_text`);};

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