import AppScreen from './AppScreen';

class WebViewScreen extends AppScreen {
  constructor () {
    super('~WebViewScreen');
  }

  private get container () {return $('//android.view.View[@resource-id="app"]');}
  private get test_container () {return $('//form[@name="registration"]');}

}

module.exports = new WebViewScreen();