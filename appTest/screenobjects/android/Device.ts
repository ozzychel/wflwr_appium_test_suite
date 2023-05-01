import { DEFAULT_PIN } from '../../helpers/Constants';

class Device {
    
    //Get the platform version
    private get platformVersion(): number {
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
      await this.executeAdbCommand(`input text ${pin}`)
    }

  }

module.exports = new Device();