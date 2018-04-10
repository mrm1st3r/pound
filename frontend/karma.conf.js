const path = require('path');

// distribute chrome headless via NPM

process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-remap-istanbul'),
      require('@angular/cli/plugins/karma'),
      require('karma-jasmine-html-reporter'),
      require('karma-junit-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    client: {
      clearContext: false
    },
    files: [
      {pattern: './src/test/frontend/setup.ts', watched: false}
    ],
    preprocessors: {
      './src/test/frontend/setup.ts': ['@angular/cli']
    },
    coverageReporter: {
      type: 'in-memory'
    },
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true,
      dir: path.join(__dirname, 'target/ccoverage'),
    },
    junitReporter: {
      title: 'ReferenceArc-WebApp',
      outputDir: path.join(__dirname, 'target/surefire-reports')
    },
    angularCli: {
      environment: 'dev'
    },
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--no-sandbox',
          '--headless',
          '--disable-gpu',
          '--remote-debugging-port=9222',
        ]
      }
    },
    browserNoActivityTimeout: 120000,
    reporters: config.angularCli && config.angularCli.codeCoverage ? ['progress', 'junit', 'coverage-istanbul'] : ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
