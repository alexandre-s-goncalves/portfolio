import {test, expect} from '@playwright/test';

test.describe('NotFound Page System E2E Suite', () => {
  test('should trigger custom 404 space layout when visiting an invalid URL route path', async ({
    page,
  }) => {
    await page.goto('/invalid-route-url-path-that-does-not-exist');

    const mainLayout = page.locator('main');
    await expect(mainLayout).toBeVisible();

    const errorHeading = mainLayout.getByRole('heading', {level: 1});
    await expect(errorHeading).toHaveText('404');

    const backButton = mainLayout.getByRole('button');
    await expect(backButton).toBeVisible();
    await backButton.click();

    await expect(page).toHaveURL('/');
  });
});
