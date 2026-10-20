import { defineConfig } from '@playwright/test'; // Import Playwright's config helper

export default defineConfig({
  testDir: './tests', // Folder where all your test files (.spec.ts) will live
  timeout: 30_000, // Max time (in ms) each test can run before failing
  retries: 1, // Number of times to retry a failed test
  reporter: [['list'], ['html']], // Show results in console + generate HTML report
  use: {
    baseURL: 'https://www.saucedemo.com', // Default site under test
    browserName: 'chromium', // Browser to run tests in
    headless: false, // Run browser in headless mode
    screenshot: 'on', // Capture screenshots on failure
    video: 'retain-on-failure', // Record video if test fails
    trace: 'retain-on-failure', // Collect trace for failed tests
  },
  projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } },// Run in Chromium
   // { name: 'Firefox', use: { browserName: 'firefox' } },   // Run in Firefox
    //{ name: 'WebKit', use: { browserName: 'webkit' } },     // Run in WebKit
  ],
});
