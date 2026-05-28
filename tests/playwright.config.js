import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: '.',
  outputDir: './test-results',
  // testIgnore: '*test-assets',
  testMatch: '**/*.spec.ts',
  snapshotPathTemplate: './test-snapshots/{testFilePath}/{testName}/{projectName}{ext}',
  timeout: 60000,
  fullyParallel: true,
  forbidOnly: true,
  retries: 0,
  workers: 10,
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: './test-reports' }],
    ['json', { outputFile: './test-reports/results.json' }],
    ['junit', { outputFile: './test-reports/results.xml' }],
  ],
  projects: [
    {
      name: 'chromium-xs',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 400, height: 700 },
      },
    },
    {
      name: 'chromium-lg',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1024, height: 768 },
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
