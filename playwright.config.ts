import {defineConfig, devices} from '@playwright/test';

const isCI =
  typeof process !== 'undefined' && !!process.env && !!process.env.CI;

export default defineConfig({
  testDir: './E2E',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 1 : '100%',
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium-desktop',
      use: {...devices['Desktop Chrome']},
    },
    {
      name: 'webkit-desktop',
      use: {...devices['Desktop Safari']},
    },
    {
      name: 'mobile-iphone',
      use: {...devices['iPhone 14']},
    },
    {
      name: 'mobile-android',
      use: {...devices['Pixel 7']},
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !isCI,
  },
});
