class PermissionsDialog {
  private get dialog () {return $('id=com.android.permissioncontroller:id/grant_dialog');}
  private get contentContainer () {return $('id=com.android.permissioncontroller:id/content_container');}
  private get preciseOption () {return $('id=com.android.permissioncontroller:id/permission_location_accuracy_radio_fine');}
  private get approximateOption () {return $('id=com.android.permissioncontroller:id/permission_location_accuracy_radio_coarse');}
  private get whileUsingTheAppBtn () {return $('id=com.android.permissioncontroller:id/permission_allow_foreground_only_button');}
  private get onlyThisTimeBtn () {return $('id=com.android.permissioncontroller:id/permission_allow_one_time_button');}
  private get dontAllowBtn () {return $('id=com.android.permissioncontroller:id/permission_deny_button');}
  private get permissionMsg () {return $('id=com.android.permissioncontroller:id/permission_message');}
  private get allowBtn () {return $('id=com.android.permissioncontroller:id/permission_allow_button');}
  private get denyBtn () {return $('id=com.android.permissioncontroller:id/permission_deny_button');}

  async tapPreciseOption () {
    await this.preciseOption.click();
  }

  async tapApproximateOption () {
    await this.approximateOption.click();
  }

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

module.exports = new PermissionsDialog();