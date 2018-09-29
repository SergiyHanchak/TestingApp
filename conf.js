exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    'browserName': 'chrome'
  },
  resultJsonOutputFile: 'report.json',
  directConnect: true,
  specs: ['features/*.feature'],
  cucumberOpts: {
    require: 'features/step_definitions/*.js',
    format: 'json:../report.json',
    plugin: 'pretty',
    strict: true,
    tags: false,
    profile: false
  },
  onPrepare: function () {
    browser.manage().window().maximize();
  }
}

