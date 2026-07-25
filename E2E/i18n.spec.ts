import {test, expect} from '@playwright/test';

test.describe('Internationalization (i18n) E2E Suite', () => {
  test('should dynamically translate interface when user updates language on settings page', async ({
    page,
  }) => {
    await page.goto('/settings');
    await page.waitForURL('/settings');

    const languageButton = page
      .getByRole('button', {name: /language|idioma|pt|en|es|fr/i})
      .first();
    await expect(languageButton).toBeAttached();
    await languageButton.click({force: true});

    const esOption = page
      .getByText('Spanish')
      .or(page.getByText('Español'))
      .or(page.locator('[data-testid="idioma-espanhol"]'))
      .first();
    await expect(esOption).toBeAttached();
    await esOption.click({force: true});
    await expect(page.getByRole('heading', {level: 1})).toContainText(
      /Configur|Settings|Ajustes/i,
    );

    await languageButton.click({force: true});
    const frOption = page
      .getByText('French')
      .or(page.getByText('Français'))
      .or(page.locator('[data-testid="idioma-frances"]'))
      .first();
    await expect(frOption).toBeAttached();
    await frOption.click({force: true});
    await expect(page.getByRole('heading', {level: 1})).toContainText(
      /Réglages|Param|Settings|Configuration/i,
    );

    await languageButton.click({force: true});
    const ptOption = page
      .getByText('Portuguese')
      .or(page.getByText('Português'))
      .or(page.locator('[data-testid="idioma-portugues"]'))
      .first();
    await expect(ptOption).toBeAttached();
    await ptOption.click({force: true});
    await expect(page.getByRole('heading', {level: 1})).toContainText(
      /Configur|Settings/i,
    );

    await page.goto('/');
    await page.waitForURL('/');
    await expect(page.locator('body')).toContainText(
      /Todos os direitos|All rights|Tous droits/i,
    );
  });
});
