class Device {

  private screenSize = null;
  private screenWidth = null;
  private screenHeight = null;

  private get isBrowserStack () {return driver.capabilities['bstack:options'] !== undefined;}
  private get isIOS () {
    if (this.isBrowserStack && driver.capabilities['bstack:options'].platformName.toLowerCase() === 'ios') {return true;}
    return driver.isIOS;
  }
  private get isAndroid () {
    if (this.isBrowserStack && driver.capabilities['bstack:options'].platformName.toLowerCase() === 'android') {return true;}
    return driver.isAndroid;
  }

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
// module.exports = new Device();