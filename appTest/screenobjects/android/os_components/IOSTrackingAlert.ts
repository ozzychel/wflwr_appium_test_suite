class IOSTrackingAlert {
  private get container () {return $('-ios predicate string:type == "XCUIElementTypeAlert"')};
  private get allowBtn () {return $('-ios predicate string:label == "Allow"')};
  private get askAppNotToTrackBtn () {return $('ios predicate string:label == "Ask App Not to Track"')};
  
  async tapAllowButton () {
    await this.allowBtn.click();
  }

  async tapAskAppNotToTrackButton () {
    await this.askAppNotToTrackBtn.click();
  }

}

module.exports = new IOSTrackingAlert();