class AboutYouTab {
  private get donateButton () {return $('//android.widget.TextView[@text="DONATE"]');}

  async tapDonateButton () {
    await this.donateButton.click();
  }
}

module.exports = new AboutYouTab();