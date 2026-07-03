import {test, expect} from '@playwright/test';

test.describe('Theme System (Dark/Light) E2E Suite', () => {
  test('should dynamically toggle dark mode and persist state across page reloads', async ({
    page,
  }) => {
    await page.goto('/settings');

    const themeButton = page
      .locator('button')
      .filter({hasText: /Visual Theme|Tema Visual/i})
      .locator('xpath=..')
      .getByRole('button')
      .last()
      .or(page.locator('button').last());
    await expect(themeButton).toBeVisible();

    const isInitiallyDark = await page
      .locator('html')
      .evaluate(el => el.classList.contains('dark'));

    await themeButton.click();

    const htmlElement = page.locator('html');
    if (isInitiallyDark) {
      await expect(htmlElement).not.toHaveClass(/dark/);
    } else {
      await expect(htmlElement).toHaveClass(/dark/);
    }

    await page.reload();

    if (isInitiallyDark) {
      await expect(htmlElement).not.toHaveClass(/dark/);
    } else {
      await expect(htmlElement).toHaveClass(/dark/);
    }
  });
});
