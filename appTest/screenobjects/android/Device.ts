class Device {

    screenSize = null;
    screenWidth = null;
    screenHeight = null;
    isAndroid = null;
    isIOS = null;
    
    getScreenSize = async function () {
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

    getPlatform = async function () {
      if(driver.isAndroid) {
        this.isAndroid = true;
        this.isIOS = false;
        return "android";
      } 
      if(driver.isIOS) {
        this.isAndroid = false;
        this.isIOS = true;
        return "ios";
      }
    }

    //Execute adb command
    async executeAdbCommand(adbCommand: string) {
      await driver.execute('mobile: shell', {
          command: adbCommand,
      });
    }

    //enter device PIN using adb
    async enterPin(pin: string) {
      await this.executeAdbCommand(`input text ${pin}`)
    }

  }

module.exports = new Device();