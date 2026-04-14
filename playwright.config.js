import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './playwright',
  outputDir: './playwright/test-results',
  // testIgnore: '*test-assets',
  testMatch: '**/*.spec.ts',
  snapshotPathTemplate: './playwright/test-snapshots/{testFilePath}/{testName}/{projectName}-{platform}{ext}',
  timeout: 60000,
  fullyParallel: true,
  forbidOnly: true,
  retries: 0,
  workers: 10,
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: './playwright/test-reports' }],
    ['json', { outputFile: './playwright/test-reports/results.json' }],
    ['junit', { outputFile: './playwright/test-reports/results.xml' }],
  ],
  use: {
    baseURL: process.env.TEST_BASE_URL,
    trace: 'on-first-retry',
    ignoreHTTPSErrors: true,
  },
  projects: [
    {
      name: 'chromium-xs',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 480, height: 700 },
      },
    },
    {
      name: 'chromium-md',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 700, height: 1000 },
      },
    },
    {
      name: 'chromium-lg',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1024, height: 768 },
      },
    },
    {
      name: 'chromium-xl',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
      },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    //
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },
    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],
});
