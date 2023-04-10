import AppScreen from "../screenobjects/android/AppScreen";

class RegScreenMenu {
  //no ids to use, improve selectors targeting (id, child of a parent)
  private get bodyContainer () {return $('//android.view.View[@resource-id="app"]/android.view.View/android.view.View[2]')};
  private get personalDataTitle () {return $('//android.widget.TextView[@text="PERSONAL DATA"]')}
  

}

module.exports = new RegScreenMenu();