exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['demo/elements-all-spec.js'],
  capabilities: {
  	browserName: 'chrome'
  }
  // run tests in mutlitple browsers at the same time
  /*multiCapabilities: [{
  	browserName: 'firefox'
  }, {
  	browserName: 'chrome'
  }]*/
};