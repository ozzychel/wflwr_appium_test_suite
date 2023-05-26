import AppScreen from "../AppScreen";

/// try to extend AppScreen
class permissionsDialog {
  private get dialog () {return $('id=com.android.permissioncontroller:id/grant_dialog')}
  private get whileUsingTheAppBtn () {return $('id=com.android.permissioncontroller:id/permission_allow_foreground_only_button')}
  private get onlyThisTimeBtn () {return $('id=com.android.permissioncontroller:id/permission_allow_one_time_button')}
  private get dontAllowBtn () {return $('id=com.android.permissioncontroller:id/permission_deny_button')}
  private get permissionMsg () {return $('id=com.android.permissioncontroller:id/permission_message')}
  private get allowBtn () {return $('id=com.android.permissioncontroller:id/permission_allow_button')}
  private get denyBtn () {return $('id=com.android.permissioncontroller:id/permission_deny_button')}

  async tapWhileUsingTheAppBtn () {
    await this.whileUsingTheAppBtn.click();
  }

  async tapAllowBtn () {
    await this.allowBtn.click();
  }

  async tapDenyBtn () {
    await this.denyBtn.click();
  }
}

module.exports = new permissionsDialog();