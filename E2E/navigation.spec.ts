import {test, expect} from '@playwright/test';

test.describe('Global Navigation Flow E2E Suite', () => {
  test('should render home page view states by default', async ({page}) => {
    await page.goto('/');
    await expect(page).toHaveURL('/');
  });

  test('should seamlessly transition routes via desktop or mobile interactions', async ({
    page,
    isMobile,
  }) => {
    await page.goto('/');

    if (isMobile) {
      const bottomNav = page.getByRole('navigation', {
        name: /Mobile Bottom Navigation/i,
      });
      await expect(bottomNav).toBeVisible();

      await page.click(
        'nav[aria-label="Mobile Bottom Navigation"] >> text=/Ajustes|Settings|Config/i',
      );
      await expect(page).toHaveURL('/settings');

      await page.click(
        'nav[aria-label="Mobile Bottom Navigation"] >> text=/Início|Home/i',
      );
      await expect(page).toHaveURL('/');
    } else {
      const mainNav = page.getByRole('navigation', {name: /Main Navigation/i});
      await expect(mainNav).toBeVisible();

      await mainNav.locator('text=/Habilidades|Skills|Compétences/i').click();
      await expect(page).toHaveURL('/skills');

      await mainNav.locator('text=/Início|Home/i').click();
      await expect(page).toHaveURL('/');
    }
  });
});
