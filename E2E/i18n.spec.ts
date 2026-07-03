import {test, expect} from '@playwright/test';

test.describe('Internationalization (i18n) E2E Suite', () => {
  test('should dynamically translate interface when user updates language on settings page', async ({
    page,
  }) => {
    await page.goto('/settings');

    const languageButton = page
      .locator('main button[aria-haspopup="true"]')
      .or(page.locator('main button'))
      .first();
    await expect(languageButton).toBeVisible();
    await languageButton.click();

    const esOption = page.locator('[data-testid="idioma-espanhol"]').first();
    await expect(esOption).toBeVisible();
    await esOption.click();
    await expect(page.getByRole('heading', {level: 1})).toContainText(
      /Configur/i,
    );

    await languageButton.click();
    const frOption = page.locator('[data-testid="idioma-frances"]').first();
    await expect(frOption).toBeVisible();
    await frOption.click();
    await expect(page.getByRole('heading', {level: 1})).toContainText(/Param/i);

    await languageButton.click();
    const ptOption = page.locator('[data-testid="idioma-portugues"]').first();
    await expect(ptOption).toBeVisible();
    await ptOption.click();
    await expect(page.getByRole('heading', {level: 1})).toContainText(
      /Configur/i,
    );

    await page.goto('/');
    await expect(page.locator('body')).toContainText(
      /Todos os direitos|All rights/i,
    );
  });
});
