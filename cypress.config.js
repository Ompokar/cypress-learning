const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  e2e: {
    reporter: 'mochawesome',
    reporterOptions: {
      charts: true,
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
    },
    watchForFileChanges: false,
    defaultCommandTimeout: 4000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile})
    },
  },
});

