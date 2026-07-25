import {test, expect} from '@playwright/test';

test.describe('Projects Page System E2E Suite', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/projects');
  });

  test('should render structural header sections and grid containers completely', async ({
    page,
  }) => {
    const mainHeading = page.getByRole('heading', {
      level: 1,
      name: /Meus Projetos|My Projects/i,
    });
    await expect(mainHeading).toBeVisible();

    const portfolioCard = page.getByRole('heading', {
      level: 2,
      name: /Portfolio Pessoal|Personal Portfolio/i,
    });
    await expect(portfolioCard).toBeVisible();
  });

  test('should check strict tag collections mapping inside specific project item cards', async ({
    page,
  }) => {
    const reactTag = page.getByText('React.js').first();
    await expect(reactTag).toBeVisible();

    const tsTag = page.getByText('TypeScript').first();
    await expect(tsTag).toBeVisible();

    const playwrightTag = page.getByText('Playwright').first();
    await expect(playwrightTag).toBeVisible();
  });

  test('should verify security vulnerability attributes on repository anchor elements', async ({
    page,
  }) => {
    const codeLink = page
      .getByRole('link', {name: /Ver Código|View Code/i})
      .first();
    await expect(codeLink).toBeVisible();
    await expect(codeLink).toHaveAttribute('target', '_blank');
    await expect(codeLink).toHaveAttribute('rel', 'noopener noreferrer');

    const viewLink = page
      .getByRole('link', {name: /Ver Projeto|View Project/i})
      .first();
    await expect(viewLink).toBeVisible();
    await expect(viewLink).toHaveAttribute('target', '_blank');
    await expect(viewLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('should execute full interactive semantic dialog lightbox preview workflow upon thumbnail image interaction', async ({
    page,
  }) => {
    const dialogElement = page.locator('dialog');
    await expect(dialogElement).not.toBeVisible();

    const actionablePreviewButton = page.locator('button:has(img)').first();
    await expect(actionablePreviewButton).toBeVisible();
    await actionablePreviewButton.click();

    await expect(dialogElement).toBeVisible();

    const fullViewImage = dialogElement.locator('img');
    await expect(fullViewImage).toBeVisible();

    const dismissBackdropButton = dialogElement.getByRole('button', {
      name: /Close Preview/i,
    });
    await expect(dismissBackdropButton).toBeVisible();
    await dismissBackdropButton.click();

    await expect(dialogElement).not.toBeVisible();
  });
});
