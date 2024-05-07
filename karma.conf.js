// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    // frameworks: ['jasmine', '@angular-devkit/build-angular', 'chai-string', 'chai', 'sinon', 'sinon-chai'],
    frameworks: ['jasmine', '@angular-devkit/build-angular', 
      // Chai+Sinon support
      'chai-string', 'chai', 'sinon', 'sinon-chai'
    ],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),

      // Chai+Sinon support
      require('karma-chai-string'),
      require('karma-chai'),
      require('karma-sinon'),
      require('karma-sinon-chai')
    ],
    client:{
      clearContext: false, // leave Jasmine Spec Runner output visible in browser,
      chai: {
        // sinon-chai
        includeStack: true
      }
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, 'coverage'), 
      reports: [ 'html', 'lcovonly', 'text-summary' ],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
