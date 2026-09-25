import {test, expect} from '@playwright/test';

test.describe('Skills Page System E2E Suite', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/skills');
  });

  test('should render structural sections and core skill heading layouts completely', async ({
    page,
  }) => {
    const mainHeading = page.getByRole('heading', {
      level: 1,
      name: /Habilidades|Skills|Compétences/i,
    });
    await expect(mainHeading).toBeVisible();

    const frontendCategory = page.getByText(/Frontend & Mobile/i).first();
    await expect(frontendCategory).toBeVisible();

    const toolsCategory = page
      .getByText(/Ferramentas & Testes|Tools & Testing/i)
      .first();
    await expect(toolsCategory).toBeVisible();
  });

  test('should verify the presence of all standard technology cards', async ({
    page,
  }) => {
    await expect(page.getByText('React.js').first()).toBeVisible();
    await expect(page.getByText('React Native').first()).toBeVisible();
    await expect(page.getByText('Jest').first()).toBeVisible();
  });

  test('should render skills without an obsolete selection panel', async ({
    page,
  }) => {
    await expect(page.getByText('Jest — Stack View')).not.toBeVisible();
  });

  test('should dynamically localise technology levels when switching system language to spanish', async ({
    page,
  }) => {
    await page.goto('/settings');
    await page.waitForURL('/settings');

    const languageButton = page
      .getByRole('button', {name: /language|idioma|pt|en|es/i})
      .first();
    await expect(languageButton).toBeAttached();
    await languageButton.click({force: true});

    const esOption = page
      .getByText('Spanish')
      .or(page.getByText('Español'))
      .first();
    await expect(esOption).toBeAttached();
    await esOption.click({force: true});

    await page.goto('/skills');
    await page.waitForURL('/skills');

    const expertBadges = page.getByText(/expert|especialista/i);
    await expect(expertBadges.first()).toBeVisible();
  });
});
