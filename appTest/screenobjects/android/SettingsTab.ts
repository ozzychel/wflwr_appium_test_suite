import AppScreen from "./AppScreen";

class SettingsTab {
  private get partnersTitle () {return $('//android.widget.TextView[@text="AND BY OUR NATIONAL PARTNERS"]')}
  private get audioSettingsBtn () {return $('//android.widget.TextView[contains(@text, "Audio Settings")]')}
  private get unitsOfMeasureBtn () {return $('//android.widget.TextView[contains(@text, "Units")]')}

  async tapSettingByText (str:string) {
    const elem = await $(`//android.widget.TextView[contains(@text, "${str}")]`);
    await elem.click();
  }

}

module.exports = new SettingsTab();