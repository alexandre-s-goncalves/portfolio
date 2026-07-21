import {test, expect} from '@playwright/test';

test.describe('About Page System E2E Suite', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/about');
  });

  test('should render profile identity card and contact information completely', async ({
    page,
  }) => {
    const mainHeading = page.getByRole('heading', {
      level: 1,
      name: /Sobre Mim|About Me/i,
    });
    await expect(mainHeading).toBeVisible();

    const nameHeading = page.getByRole('heading', {level: 2});
    await expect(nameHeading).toBeVisible();

    const emailLink = page.locator('a[href^="mailto:"]').first();
    await expect(emailLink).toBeAttached();

    const profileImg = page.getByRole('img').first();
    await expect(profileImg).toBeAttached();
  });

  test('should verify strict security attributes on external social link networks', async ({
    page,
  }) => {
    const githubLink = page.locator('a[href*="github.com"]').first();
    await expect(githubLink).toBeAttached();
    await expect(githubLink).toHaveAttribute('target', '_blank');
    await expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');

    const linkedinLink = page.locator('a[href*="linkedin.com"]').first();
    await expect(linkedinLink).toBeAttached();
    await expect(linkedinLink).toHaveAttribute('target', '_blank');
    await expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('should render dynamic professional timeline histories and nested academic blocks', async ({
    page,
  }) => {
    await page.waitForURL('/about');

    const mrvText = page.getByText('MRV').first();
    await expect(mrvText).toBeVisible();

    const uninterText = page.getByText('UNINTER').first();
    await expect(uninterText).toBeVisible();
  });

  test('should dynamically localise biography content layout when switching to spanish context', async ({
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

    const esOption = page
      .getByText('Spanish')
      .or(page.getByText('Español'))
      .first();
    await expect(esOption).toBeVisible();
    await esOption.click();

    await page.goto('/about');
    await page.waitForURL('/about');

    await expect(page.locator('body')).toContainText(/Desarrollo soluciones/i);
  });
});
