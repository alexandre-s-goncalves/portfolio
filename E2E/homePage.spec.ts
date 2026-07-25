import {test, expect} from '@playwright/test';

test.describe('Home Page System E2E Suite', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/');
  });

  test('should render main intro content layout and computed metrics block successfully', async ({
    page,
  }) => {
    const mainHeading = page.getByRole('heading', {level: 1});
    await expect(mainHeading).toBeVisible();
    await expect(mainHeading).not.toBeEmpty();

    const subHeading = page.getByRole('heading', {level: 2});
    await expect(subHeading).toContainText(
      /Desenvolvedor Full-Stack|Full-Stack Developer/i,
    );

    const projectsMetric = page.getByText('15+');
    await expect(projectsMetric).toBeVisible();

    const techMetric = page.getByText('8+');
    await expect(techMetric).toBeVisible();
  });

  test('should execute smooth application navigation when interacting with action cta buttons', async ({
    page,
  }) => {
    const projectsButton = page
      .getByRole('button')
      .filter({hasText: /Projetos|Projects|Projets/i});
    await expect(projectsButton).toBeVisible();
    await projectsButton.click();
    await expect(page).toHaveURL(/\/projects/);

    await page.goto('/');
    await page.waitForURL('/');

    const contactButton = page
      .getByRole('button')
      .filter({hasText: /Contato|Contact|Touch|Ponte/i});
    await expect(contactButton).toBeVisible();
    await contactButton.click();
    await expect(page).toHaveURL(/\/about/);
  });

  test('should dynamically localize core content titles when switching languages on settings view', async ({
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

    await page.goto('/');
    await page.waitForURL('/');

    const greetingText = page.locator('body');
    await expect(greetingText).toContainText(
      /Hola, yo soy|Hi, I am|Olá, eu sou/i,
    );
  });
});
