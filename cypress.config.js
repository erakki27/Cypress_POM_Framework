const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalInteractiveRunEvents: true,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mocha',
      quite: true,
      overwrite: false,
      html: true,
      json: false,
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    "baseUrl":'https://www.amazon.in/',
  },
});
