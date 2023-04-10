import AppScreen from "../AppScreen"

class RegScreenMenu {
  //no ids to use, improve selectors targeting (id, child of a parent)
  private get menuContainer () {return $('//android.view.View[@resource-id="app"]/android.view.View/android.view.View[1]')};
  private get closeButton () {return $(`//android.view.View[@content-desc="close"]`)};

  async tapCloseButton () {
    await this.closeButton.click();
  }

}

module.exports = new RegScreenMenu();