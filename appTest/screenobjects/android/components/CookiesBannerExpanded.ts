import AppScreen from "../AppScreen";
import { APP_NAME } from "../../../helpers/Constants";

/// try to extend AppScreen
class CookiesBannerExpanded {

  //todo: implement SDK preferences validation methods:
  //-striclty, -performance, -marketing
  //implement switch getters and taps
  private get pcLayoutContainer () {
    return driver.isAndroid ? 
    $(`id=pc_layout`) :
    $(`//XCUIElementTypeApplication[@name="World Run"]/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]`)
  };

  private get title () {
    return driver.isAndroid ?
      $(`id=main_text`) : 
      $(`id=pcTitle`)
  };
  
  private get mainText () {
    return driver.isAndroid ?  
      $(`id=main_info_text`) :
      $(`id=pcDescription`)
    };
  
  private get buttonLayout () {
    return driver.isAndroid ? 
      $(`id=allow_all_layout`) :
      $(`//XCUIElementTypeButton[@name="pcAllowAllButton"]/parent::*`)
  };

  private get allowAllBtn  () {
    return driver.isAndroid ?  
      $(`id=btn_allow_all`) :
      $(`id=pcAllowAllButton`)
  };
  
  private get declineAllBtn () {
    return driver.isAndroid ? 
      $(`id=btn_reject_PC`) :
      $(`id=pcRejectAllButton`)
  };

  private get strictlyNecessaryCont () {
    return driver.isAndroid ?
      $('') :
      $('id=pcStrictlyNecessaryCell')
  }

  private get performanceCont () {
    return driver.isAndroid ?
      $('') :
      $('//XCUIElementTypeCell[@name="pcEditableConsentCell"][1]')
  }

  private get marketingCont () {
    return driver.isAndroid ?
      $('') :
      $('//XCUIElementTypeCell[@name="pcEditableConsentCell"][2]')
  }
  
  private get preferencesList () {return $(`id=preferences_list`)};

  private get settingsIdNumber () {
    return driver.isAndroid ?
      $(`id=dsid`) :
      $(`id=pcDsIdCell`)
  };

  private get confirmButton () {
    return driver.isAndroid ? 
      $('id=btn_confirm_choices') :
      $('id=pcConfirmMyChoiceButton')
  };
  
  private get topScrollView () {return $(`android=new UiSelector().resourceId("${APP_NAME}:id/pc_layout").childSelector(new UiSelector().className("android.widget.ScrollView"))`)};
  private get footerLayout () {return $(`id=footer_layout`)};
  private get settingsIdTitle () {return $(`id=dsid_title`)};
  private get copyIdButton () {return $(`id=text_copy`)};


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