import {test, expect} from '@playwright/test';

test.describe('Internationalization (i18n) E2E Suite', () => {
  test('should dynamically translate interface when user updates language on settings page', async ({
    page,
  }) => {
    await page.goto('/settings');

    const mainContainer = page.locator('main').or(page.locator('#root'));
    const languageButton = mainContainer
      .locator('button[aria-haspopup="true"]')
      .or(mainContainer.locator('button'))
      .first();

    await expect(languageButton).toBeVisible();
    await languageButton.click();
    const esOption = page.locator('[data-testid="idioma-espanhol"]').first();
    await expect(esOption).toBeVisible();
    await esOption.click();
    await expect(page.getByRole('heading', {level: 1})).toContainText(
      'Configuración',
    );

    await languageButton.click();
    const frOption = page.locator('[data-testid="idioma-frances"]').first();
    await expect(frOption).toBeVisible();
    await frOption.click();
    await expect(page.getByRole('heading', {level: 1})).toContainText(
      'Paramètres',
    );

    await languageButton.click();
    const ptOption = page.locator('[data-testid="idioma-portugues"]').first();
    await expect(ptOption).toBeVisible();
    await ptOption.click();
    await expect(page.getByRole('heading', {level: 1})).toContainText(
      'Configurações',
    );

    await page.goto('/');
    await expect(page.getByText('Todos os direitos reservados.')).toBeVisible();
  });
});
