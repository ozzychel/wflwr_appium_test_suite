const { exec } = require('child_process');

function getConnectedAndroidDevices() {
  return new Promise((resolve, reject) => {
    exec('adb devices', (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }

      const deviceList = [];

      const lines = stdout.trim().split('\n');

      const promises = [];

      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();

        if (line.includes('\tdevice')) {
          const deviceInfo = {};

          const udid = line.split('\t')[0];
          deviceInfo['appium:udid'] = udid;

          const deviceNamePromise = getDeviceProperty(udid, 'ro.product.model');
          const androidVersionPromise = getDeviceProperty(udid, 'ro.build.version.release');

          promises.push(
            Promise.all([deviceNamePromise, androidVersionPromise])
              .then(([deviceName, androidVersion]) => {
                deviceInfo['appium:deviceName'] = deviceName;
                deviceInfo['appium:platformName'] = 'Android';
                deviceInfo['appium:platformVersion'] = androidVersion;
                deviceList.push(deviceInfo);
              })
              .catch(error => {
                console.error('Error:', error);
              })
          );
        }
      }

      Promise.all(promises)
        .then(() => {
          resolve(deviceList);
        })
        .catch(error => {
          reject(error);
        });
    });
  });
}

function getDeviceProperty(udid, property) {
  return new Promise((resolve, reject) => {
    exec(`adb -s ${udid} shell getprop ${property}`, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(stdout.trim());
    });
  });
}

async function test () {
  const devices = await getConnectedAndroidDevices();
  console.log("WORKS:", devices)
}

test()
