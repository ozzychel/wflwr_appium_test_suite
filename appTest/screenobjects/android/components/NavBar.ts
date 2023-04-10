import AppScreen from "../AppScreen"

class NavBar {
  //no ids to use, improve selectors targeting (id, child of a parent)
  private get homeButton () {return $('//android.widget.TextView[@text="HOME"]')};
  private get connectButton () {return $('//android.widget.TextView[@text="CONNECT"]')};
  private get runButton () {return $('//android.widget.TextView[@text="RUN"]')};
  private get teamButton () {return $('//android.widget.TextView[@text="TEAM"]')};
  private get accountButton () {return $('//android.widget.TextView[@text="ACCOUNT"]')};

  async tapHomeButton () {
    await this.homeButton.click();
  }

  async tapConnectButton () {
    await this.connectButton.click();
  }

  async tapRunButton () {
    await this.runButton.click();
  }

  async tapTeamButton () {
    await this.teamButton.click();
  }

  async tapAccountButton () {
    await this.accountButton.click();
  }

}

module.exports = new NavBar();