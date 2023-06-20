import AppScreen from "../AppScreen";

/// try to extend AppScreen
class AppOsPermissions {
  private get container () {return $('id=com.android.permissioncontroller:id/content_parent')}
  private get header () {return $('id=com.android.permissioncontroller:id/collapsing_toolbar')}
  private get allowAllTheTime () {return $('id=com.android.permissioncontroller:id/allow_always_radio_button')}
  private get allowForegroundOnly () {return $('id=com.android.permissioncontroller:id/allow_foreground_only_radio_button')}
  private get dontAllow () {return $('id=com.android.permissioncontroller:id/deny_radio_button')}
  private get backButton () {return $('//android.widget.ImageButton[@content-desc="Back"]')}

  async tapAllowAllTheTime () {
    await this.allowAllTheTime.click();
  }

  async tapBackButton () {
    await this.backButton.click();
  }
}

module.exports = new AppOsPermissions();