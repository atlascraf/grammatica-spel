// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: 'tests',
  timeout: 60000,
  fullyParallel: false,
  workers: 1,
  reporter: [['list']],
  use: {
    baseURL: 'http://localhost:8787',
    viewport: { width: 390, height: 844 },
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'node scripts/serve.js',
    port: 8787,
    reuseExistingServer: true,
  },
});
