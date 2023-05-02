import AppScreen from "../screenobjects/android/AppScreen";
import Gestures from "../helpers/Gestures";

class ListPicker {
  private get customPanelOuter () {return $(`//android.widget.FrameLayout[@resource-id="android:id/customPanel"]`)};
  private get customPanelInner () {return $('//android.widget.FrameLayout[@resource-id="android:id/custom"]')};
  private get listView () {return $(`//android.widget.FrameLayout[@resource-id="android:id/custom"]/android.widget.ListView`)}

  async selectFromTheList (val: string) {
    const elem = await $(`android=UiSelector().className("android.widget.CheckedTextView").text("${val}")`);
    await Gestures.checkIfDisplayedWithSwipeUp(elem, 5)
    // await $(`android=UiSelector().className("android.widget.CheckedTextView").text("${val}")`).click();
    await elem.click();
  }
}

module.exports = new ListPicker();