class AppInfoSettings {
  private get container () {return $('id=com.android.settings:id/coordinator')}
  private get screenHeader () {return $('id=com.android.settings:id/action_bar')}
  private get backButton () {return $('//android.widget.ImageButton[@content-desc="Navigate up"]')}
  private get screenTitle () {return $('//android.widget.TextView[@text="App info"]')}
  private get content () {return $('id=com.android.settings:id/content_frame')}
  private get batteryMenuItem () {return $('android=new UiSelector().resourceId("android:id/title").textContains("Battery")')}
  private get unrestrictedMenuItem () {return $('android=new UiSelector().resourceId("android:id/title").text("Unrestricted")')}
  private get optionsList () {return $('id=android:id/list_container')}
  private get advanceMenuItem () {return $('android=new UiSelector().resourceId("android:id/title").text("Advanced")')}
  private get unrestrictedCheckbox () {return this.getNthElementByResourceId(0, "android:id/checkbox")};

  async getNthElementByResourceId (n:number, id:string) {
    //TODO: move to Upper class as a method and extend to this class
    let element = undefined;
    try {
      const elements = await driver.$$(`android=new UiSelector().resourceId("${id}")`);
      element = elements[n];
    } catch (error) {
      console.error('Error occurred', error);
    } 
    return element;
  }

  async tapBackButton () {
    await this.backButton.click();
  }

  async tapMenuOption (param:string) {
    const elem = await $(`android=new UiSelector().resourceId("android:id/title").textContains("${param}")`);
    await elem.click();
  }
}

module.exports = new AppInfoSettings();