class RegistrationTab {
  private get switchLocationLink () {return $('//android.widget.TextView[@text="Switch location"]');}
  private get viewMoreButton () {return $('//android.widget.TextView[@text="VIEW MORE"]');}

  async tapSwitchLocationLink () {
    await this.switchLocationLink.click();
  }

  async tapViewMoreButton () {
    await this.viewMoreButton.click();
  }
}

module.exports = new RegistrationTab();