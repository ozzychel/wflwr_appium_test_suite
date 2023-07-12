import { APP_NAME, DEFAULT_PIN } from "../helpers/Constants";
const Device = require('../screenobjects/android/Device');

  // beforeAll(async () => {
  //   await Device.getScreenSize();
  // })

  beforeEach(async ()=> {
    if(await driver.isLocked()) {
      await driver.unlock();
      await Device.enterPin(DEFAULT_PIN);
      await driver.pause(1000)
    } else { 
      // console.log(">>>>>>>CONSOLE.LOG:>> SCREEN WAS NOT LOCKED!!! <<<<<<<<")
    }
  })

  afterAll(async () => {
    await driver.closeApp();
  })

  describe('BUILD APP INSTALLATION', () => {
    it('Should have have app installed on the device', async () => {
      return driver.isAppInstalled(APP_NAME);
    })
  })

