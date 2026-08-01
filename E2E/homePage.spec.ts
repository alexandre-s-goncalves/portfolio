import {test, expect} from '@playwright/test';
import {profile} from '../src/constants/profile';

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

    const techTagsCount = page.getByTestId('tech-tags-count');
    await expect(techTagsCount).toHaveText(`${profile.techTags.length}+`);

    const projectsMetric = page
      .getByText(`${profile.projects.length}+`)
      .first();
    await expect(projectsMetric).toBeVisible();

    const techMetric = page.getByText(`${profile.techTags.length}+`).first();
    await expect(techMetric).toBeVisible();
  });

  test('should execute smooth application navigation when interacting with action cta buttons', async ({
    page,
  }) => {
    const projectsButton = page
      .getByRole('link')
      .or(page.getByRole('button'))
      .filter({hasText: /Projetos|Projects|View My Projects/i})
      .first();

    await expect(projectsButton).toBeVisible();
    await projectsButton.click();
    await expect(page).toHaveURL(/projects/);

    await page.goto('/');
    await page.waitForURL('/');

    const contactButton = page
      .getByRole('link')
      .or(page.getByRole('button'))
      .filter({hasText: /Contato|Contact|Touch|Get in touch/i})
      .first();

    await expect(contactButton).toBeVisible();
    await contactButton.click();

    await expect(page).toHaveURL(/about/);
  });

  test('should dynamically localize core content titles when switching languages on settings view', async ({
    page,
  }) => {
    await page.goto('/settings');
    await page.waitForURL('**/settings');

    const languageButton = page
      .getByRole('button', {name: /language|idioma|pt|en|es/i})
      .first();

    await expect(languageButton).toBeVisible();
    await languageButton.click();

    const esOption = page
      .getByRole('option', {name: /Spanish|Español/i})
      .or(page.getByText('Spanish'))
      .or(page.getByText('Español'))
      .first();

    await expect(esOption).toBeVisible();
    await esOption.click();

    await page.goBack();
    await page.waitForURL('**/');

    const mainHeading = page.getByRole('heading', {level: 1});
    await expect(mainHeading).toContainText(
      /Hola, yo soy|Hi, I am|Olá, eu sou|Alexandre/i,
    );
  });
});
