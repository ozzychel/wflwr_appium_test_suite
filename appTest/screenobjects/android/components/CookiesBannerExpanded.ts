import AppScreen from "../AppScreen";
import { APP_NAME } from "../../../helpers/Constants";

/// try to extend AppScreen
class CookiesBannerExpanded {

  private get pcLayoutContainer () {return $(`id=pc_layout`)};
  private get topScrollView () {return $(`android=new UiSelector().resourceId("${APP_NAME}:id/pc_layout").childSelector(new UiSelector().className("android.widget.ScrollView"))`)};
  private get footerLayout () {return $(`id=footer_layout`)};
  private get title () {return $(`id=main_text`)};
  private get mainText () {return $(`id=main_info_text`)};
  private get buttonLayout () {return $(`id=allow_all_layout`)};
  private get allowAllBtn  () {return $(`id=btn_allow_all`)};
  private get declineAllBtn () {return $(`id=btn_reject_PC`)};
  private get preferencesList () {return $(`id=preferences_list`)};
  //todo: implement SDK preferences validation methods:
  //-striclty, -performance, -marketing
  //implement switch getters and taps
  private get settingsIdTitle () {return $(`id=dsid_title`)};
  private get settingsIdNumber () {return $(`id=dsid`)};
  private get copyIdButton () {return $(`id=text_copy`)};
  private get confirmButton () {return $('id=btn_confirm_choices')};


  async tapAllowAllButton () {
    await this.allowAllBtn.click();
  }

  async tapDeclineAllButton () {
    await this.declineAllBtn.click();
  }
  
}

module.exports =  new CookiesBannerExpanded();