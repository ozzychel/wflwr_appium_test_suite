export const config: WebdriverIO.Config = {
   // ==============================================================================
   // Runner Configuration 
   // ==============================================================================
   // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
   // on a remote machine).
   runner: 'local',
	 autoCompileOpts: {
      autoCompile: true,
      // see https://github.com/TypeStrong/ts-node#cli-and-programmatic-options
      // for all available options
      tsNodeOpts: {
      transpileOnly: true,
      project: 'tsconfig.json'
      },
   },

  // ==============================================================================
  // Specify Test Files
  // ==============================================================================
  // The test-files are specified in:
  // - wdio.android.browser.conf.ts
  // - wdio.android.app.conf.ts
  // - wdio.ios.browser.conf.ts
  // - wdio.ios.app.conf.ts
  //
  /**
   * NOTE: This is just a place holder and will be overwritten by each specific configuration
   */
  specs: [],
  //possibly move suites to platform config 
  //in case we go with separate specs in the future
  suites: {
   install: [
     './appTest/specs/app.install.spec.ts'
   ],
   demo: [
     './appTest/specs/app.demo.spec.ts'
   ],
   nav: [
     './appTest/specs/app.navigation.spec.ts'
   ],
   dev: [
     './appTest/specs/app.dev.spec.ts'
   ],
   registration: [
     './appTest/specs/app.registration.spec.ts'
   ],
   signup: [
     './appTest/specs/app.signup.spec.ts'
   ],
   consent: [
     './appTest/specs/app.cookieConsent.spec.ts'
   ],
   permissions: [
     './appTest/specs/app.permissions.spec.ts'
   ]
 },
  //
  // ============
  // Capabilities
  // ============
  // The capabilities are specified in:
  // - wdio.android.browser.conf.ts
  // - wdio.android.app.conf.ts
  // - wdio.ios.browser.conf.ts
  // - wdio.ios.app.conf.ts
  //
  /**
   * NOTE: This is just a place holder and will be overwritten by each specific configuration
   */
	exclude: [
    // 'path/to/excluded/files'
  ],
  capabilities: [],
  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: 'info',
  // Set specific log levels per logger
  // loggers:
  // - webdriver, webdriverio
  // - @wdio/applitools-service, @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
  // - @wdio/mocha-framework, @wdio/jasmine-framework
  // - @wdio/local-runner
  // - @wdio/sumologic-reporter
  // - @wdio/cli, @wdio/config, @wdio/utils
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  // logLevels: {
  //     webdriver: 'info',
  //     '@wdio/applitools-service': 'info'
  // },
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  // Set a base URL in order to shorten url command calls. If your `url` parameter starts
  // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
  // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
  // gets prepended directly.
  baseUrl: 'http://localhost',
  // Default timeout for all waitFor* commands.
  /**
   * NOTE: This has been increased for more stable Appium Native app
   * tests because they can take a bit longer.
   */
  waitforTimeout: 45000,
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 120000,
  // Default request retries count
  connectionRetryCount: 3,
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  //
  // Services are empty here but will be defined in the
  // - wdio.shared.browserstack.conf.ts
  // - wdio.shared.local.appium.conf.ts
  // - wdio.shared.sauce.conf.ts
  // configuration files
  services: [],
  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: https://webdriver.io/docs/frameworks
  //
  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  framework: 'jasmine',
  // The number of times to retry the entire specfile when it fails as a whole
  // specFileRetries: 1,
  //
  // Delay in seconds between the spec file retry attempts
  // specFileRetriesDelay: 0,
  //
  // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
  // specFileRetriesDeferred: false,
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: https://webdriver.io/docs/dot-reporter
  reporters: ['spec'],
  // Options to be passed to Mocha.
  jasmineOpts: {
    // Jasmine default timeout
    defaultTimeoutInterval: 60000,
    //
    // The Jasmine framework allows interception of each assertion in order to log the state of the application
    // or website depending on the result. For example, it is pretty handy to take a screenshot every time
    // an assertion fails.
    expectationResultHandler: function(passed, assertion) {
      // do something
    }
  },
  //
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
  // onPrepare: function (config, capabilities) {
  // },
  /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialized
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
  // onWorkerStart: function (cid, caps, specs, args, execArgv) {
  // },
  /**
     * Gets executed just after a worker process has exited.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {Number} exitCode 0 - success, 1 - fail
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {Number} retries  number of retries used
     */
  // onWorkerEnd: function (cid, exitCode, specs, retries) {
  // },
  /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     * @param {String} cid worker id (e.g. 0-0)
     */
  // beforeSession: function (config, capabilities, specs, cid) {
  // },
  /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
  // before: function (capabilities, specs) {
  // },
  /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
  // beforeCommand: function (commandName, args) {
  // },
  /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
  // beforeSuite: function (suite) {
  // },
  /**
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */
  // beforeTest: async function (test, context) {

  // },
  /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
  // beforeHook: function (test, context) {
  // },
  /**
     * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
     * afterEach in Mocha)
     */
  // afterHook: function (test, context, { error, result, duration, passed, retries }) {
  // },
  /**
     * Function to be executed after a test (in Mocha/Jasmine only)
     * @param {Object}  test             test object
     * @param {Object}  context          scope object the test was executed with
     * @param {Error}   result.error     error object in case the test fails, otherwise `undefined`
     * @param {Any}     result.result    return object of test function
     * @param {Number}  result.duration  duration of test
     * @param {Boolean} result.passed    true if test has passed, otherwise false
     * @param {Object}  result.retries   informations to spec related retries, e.g. `{ attempts: 0, limit: 0 }`
     */
  afterTest: async function(test, context, { error, result, duration, passed, retries }) {
    if (error){
      await driver.saveScreenshot(`./appTest/screenshots/TC${test['id'].slice(4)}.${test['description'].split(' ').join('')}.png`);
    }
  },

  /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
  // afterSuite: function (suite) {
  // },
  /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
  // afterCommand: function (commandName, args, result, error) {
  // },
  /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
  // after: function (result, capabilities, specs) {
  // },
  /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
  // afterSession: function (config, capabilities, specs) {
  // },
  /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
  // onComplete: function(exitCode, config, capabilities, results) {
  // },
  /**
    * Gets executed when a refresh happens.
    * @param {String} oldSessionId session ID of the old session
    * @param {String} newSessionId session ID of the new session
    */
  // onReload: function(oldSessionId, newSessionId) {
  // }
};