import AppScreen from "../screenobjects/android/AppScreen"

class ListPicker {
  private get customPanelOuter () {return $(`//android.widget.FrameLayout[@resource-id="android:id/customPanel"]`)};
  private get customPanelInner () {return $('//android.widget.FrameLayout[@resource-id="android:id/custom"]')};
  private get listView () {return $(`//android.widget.FrameLayout[@resource-id="android:id/custom"]/android.widget.ListView`)}

  async selectFromTheList (val: string) {
    await $(`android=UiSelector().className("android.widget.CheckedTextView").text("${val}")`).click();
  }
}

module.exports = new ListPicker();