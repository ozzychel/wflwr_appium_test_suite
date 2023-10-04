import AppScreen from "./AppScreen";

class UnitsOfMeasureSetting {
  private get screenTitle () {return $('//android.widget.TextView[@text="UNITS OF MEASURE"]')};
  private get imperialOption () {return $('//android.widget.TextView[contains(@text, "Imperial")]/parent::android.view.View/parent::android.view.View')};
  private get metricOption () {return $('//android.widget.TextView[contains(@text, "Metric")]/parent::android.view.View/parent::android.view.View')};
  async tapImperialOption () {
    await this.imperialOption.click()
  }

  async tapMetricOption () {
    await this.metricOption.click()
  }
  
}

module.exports = new UnitsOfMeasureSetting();