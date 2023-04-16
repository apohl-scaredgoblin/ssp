import { defineConfig } from 'cypress';



export default defineConfig({
  defaultCommandTimeout: 10000,
  requestTimeout: 10000,
  responseTimeout: 10000,
  pageLoadTimeout: 30000,
  video: false,
  chromeWebSecurity: true,
  watchForFileChanges: false,
  viewportWidth: 1440,
  viewportHeight: 900,
  screenshotOnRunFailure: true,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/integration',
    overwrite: false,
    html: true,
    json: true,
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    baseUrl: 'https://pl.balmain.com/',
    excludeSpecPattern: '*.js',
  },
});
