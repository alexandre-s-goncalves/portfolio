import {test, expect} from '@playwright/test';

test.use({
  viewport: {width: 375, height: 667},
  userAgent:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1',
});

test.describe('Mobile BottomTabBar System E2E Suite', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/');
  });

  test('should render structural background shielding container in small mobile viewports', async ({
    page,
  }) => {
    const bottomNav = page.getByRole('navigation', {
      name: /Mobile Bottom Navigation/i,
    });
    await expect(bottomNav).toBeVisible();

    const parentShield = bottomNav.locator('..');
    await expect(parentShield).toHaveClass(
      /fixed bottom-0 left-0 z-40 h-24 w-full/,
    );
  });

  test('should trigger route navigation change when clicking different nav tabs', async ({
    page,
  }) => {
    const bottomNav = page.getByRole('navigation', {
      name: /Mobile Bottom Navigation/i,
    });

    const projectsTab = bottomNav
      .getByRole('link')
      .filter({hasText: /Projetos|Projects/i});
    if ((await projectsTab.count()) > 0) {
      await projectsTab.first().click();
      await expect(page).toHaveURL(/\/projects/);
    }

    const aboutTab = bottomNav
      .getByRole('link')
      .filter({hasText: /Sobre|About/i});
    if ((await aboutTab.count()) > 0) {
      await aboutTab.first().click();
      await expect(page).toHaveURL(/\/about/);
    }
  });
});
