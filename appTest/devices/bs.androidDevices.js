//==== NOTE =======================================
// Currently or browserstack account supports only
// 5 simultaneously running test devices
//=================================================
const androidDevicesBS = [
  //----------------------------------------------
  //Android 14.0
  //----------------------------------------------
  // { 'bstack:options': {
  //   deviceName: 'Samsung Galaxy S24 Ultra',
  //   platformVersion: '14.0',
  //   platformName: 'android',
  // } },
  // { 'bstack:options': {
  //   deviceName: 'Samsung Galaxy S24',
  //   platformVersion: '14.0',
  //   platformName: 'android',
  // } },
  // { 'bstack:options': {
  //   deviceName: 'Google Pixel 8',
  //   platformVersion: '14.0',
  //   platformName: 'android',
  // } },
  //----------------------------------------------
  //Android 13.0
  //----------------------------------------------
  // { 'bstack:options': {
  //   deviceName: 'Google Pixel 7',
  //   platformVersion: '13.0',
  //   platformName: 'android',
  // } },
  // { 'bstack:options': {
  //   deviceName: 'Samsung Galaxy S23 Ultra',
  //   platformVersion: '13.0',
  //   platformName: 'android',
  // } },
  // { 'bstack:options': {
  //   deviceName: 'OnePlus 11R',
  //   platformVersion: '13.0',
  //   platformName: 'android',
  // } },

  // ----------------------------------------------
  // Android 12.0
  // ----------------------------------------------
  { 'bstack:options': {
    deviceName: 'Samsung Galaxy S22 Plus',
    platformVersion: '12.0',
    platformName: 'android',
  } },
  { 'bstack:options': {
    deviceName: 'Google Pixel 5',
    platformVersion: '12.0',
    platformName: 'android',
  } },
  { 'bstack:options': {
    deviceName: 'Samsung Galaxy S21',
    platformVersion: '12.0',
    platformName: 'android',
  } },
  // ----------------------------------------------
  // Android 11.0
  // ----------------------------------------------
  { 'bstack:options': {
    deviceName: 'Google Pixel 4',
    platformVersion: '11.0',
    platformName: 'android',
  } },
  { 'bstack:options': {
    deviceName: 'Samsung Galaxy A52',
    platformVersion: '11.0',
    platformName: 'android',
  } },
  { 'bstack:options': {
    deviceName: 'OnePlus 9',
    platformVersion: '11.0',
    platformName: 'android',
  } },
  { 'bstack:options': {
    deviceName: 'Xiaomi Redmi Note 11',
    platformVersion: '11.0',
    platformName: 'android',
  } },
  { 'bstack:options': {
    deviceName: 'Vivo Y21',
    platformVersion: '11.0',
    platformName: 'android',
  } },
  { 'bstack:options': {
    deviceName: 'Oppo Reno 6',
    platformVersion: '11.0',
    platformName: 'android',
  } },
  { 'bstack:options': {
    deviceName: 'Motorola Moto G71 5G',
    platformVersion: '11.0',
    platformName: 'android',
  } },
  // ----------------------------------------------
  // Android 10.0
  // ----------------------------------------------
  { 'bstack:options': {
    deviceName: 'Samsung Galaxy Note 20',
    platformVersion: '10.0',
    platformName: 'android',
  } },
  { 'bstack:options': {
    deviceName: 'Samsung Galaxy A11',
    platformVersion: '10.0',
    platformName: 'android',
  } },
  { 'bstack:options': {
    deviceName: 'Google Pixel 4 XL',
    platformVersion: '10.0',
    platformName: 'android',
  } },
  { 'bstack:options': {
    deviceName: 'OnePlus 7T',
    platformVersion: '10.0',
    platformName: 'android',
  } },
  { 'bstack:options': {
    deviceName: 'Xiaomi Redmi Note 9',
    platformVersion: '10.0',
    platformName: 'android',
  } },
  { 'bstack:options': {
    deviceName: 'Oppo Reno 3 Pro',
    platformVersion: '10.0',
    platformName: 'android',
  } },
  { 'bstack:options': {
    deviceName: 'Motorola Moto G9 Play',
    platformVersion: '10.0',
    platformName: 'android',
  } },
  // ----------------------------------------------
  // Android 9.0
  // ----------------------------------------------
  { 'bstack:options': {
    deviceName: 'Samsung Galaxy S10 Plus',
    platformVersion: '9.0',
    platformName: 'android',
  } },
  { 'bstack:options': {
    deviceName: 'Samsung Galaxy Note 10 Plus',
    platformVersion: '9.0',
    platformName: 'android',
  } },
  { 'bstack:options': {
    deviceName: 'Google Pixel 3a XL',
    platformVersion: '9.0',
    platformName: 'android',
  } },
  { 'bstack:options': {
    deviceName: 'OnePlus 7',
    platformVersion: '9.0',
    platformName: 'android',
  } },
  { 'bstack:options': {
    deviceName: 'Xiaomi Redmi Note 7',
    platformVersion: '9.0',
    platformName: 'android',
  } },
  { 'bstack:options': {
    deviceName: 'Huawei P30',
    platformVersion: '9.0',
    platformName: 'android',
  } },
  { 'bstack:options': {
    deviceName: 'Motorola Moto G7 Play',
    platformVersion: '9.0',
    platformName: 'android',
  } },

];

module.exports = {
  androidDevicesBS
};