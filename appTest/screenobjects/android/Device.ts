class Device {

  public screenSize = null;
  public screenWidth = null;
  public screenHeight = null;
  public get isBrowserStack () {
    return driver.capabilities['bstack:options'] !== undefined;
  }
  public get isIOS () {
    if (this.isBrowserStack && driver.capabilities['bstack:options']['platformName'] === 'ios') {return true;}
    return driver.isIOS;
  }
  public get isAndroid () {
    if (this.isBrowserStack && driver.capabilities['bstack:options']['platformName'] === 'android') {return true;}
    return driver.isAndroid;
  }

  // get screen size
  async getScreenSize () {
    let size = await driver.getWindowSize();
    this.screenSize = size;
    this.screenWidth = size.width;
    this.screenHeight = size.height;
    return size;
  }

  //Get the platform version
  private get platformVersion (): number {
    return parseInt(
      (('platformVersion' in driver.capabilities &&
                driver.capabilities.platformVersion) as string) || '8',
      10,
    );
  }

  //Execute adb command
  async executeAdbCommand(adbCommand: string) {
    await driver.execute('mobile: shell', {
      command: adbCommand,
    });
  }

  //enter device PIN using adb
  async enterPin(pin: string) {
    await this.executeAdbCommand(`input text ${pin}`);
  }

}

export default new Device();