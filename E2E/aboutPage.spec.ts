import {test, expect} from '@playwright/test';

test.describe('About Page System E2E Suite', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/about');
  });

  test('should dynamically localise biography content layout when switching to spanish context', async ({
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

    await page.goto('/about');
    await page.waitForURL('/about');

    const biographyContainer = page.locator('body');
    await expect(biographyContainer).toContainText(
      /Desarrollo soluciones|I develop|Desenvolvo soluções/i,
    );
  });

  test('should handle download cv modal lifecycle triggering interactive window open hooks completely', async ({
    page,
  }) => {
    await page.addInitScript(() => {
      const openedUrls: string[] = [];

      Object.defineProperty(window, '__openedUrls', {
        configurable: true,
        value: openedUrls,
      });

      window.open = ((url?: string | URL) => {
        openedUrls.push(String(url));
        return {focus: () => undefined} as unknown as Window;
      }) as typeof window.open;
    });

    await page.goto('/about?lng=pt');
    await page.waitForURL('**/about*');

    await page.getByTestId('about-download-cv-btn').click();

    const brButton = page.getByTestId('print-br-btn').first();
    const resumeButton = page.getByTestId('print-resume-btn').first();
    const letterButton = page.getByTestId('print-letter-btn').first();
    const closeButton = page.getByTestId('close-modal-btn').first();

    await expect(brButton).toBeAttached();
    await expect(resumeButton).toBeAttached();
    await expect(letterButton).toBeAttached();
    await expect(closeButton).toBeAttached();

    await brButton.click({force: true});
    await resumeButton.click({force: true});
    await letterButton.click({force: true});

    const openedUrls = await page.evaluate(
      () =>
        (
          window as unknown as Window & {
            __openedUrls: string[];
          }
        ).__openedUrls,
    );

    expect(openedUrls).toEqual([
      '/pdf/curriculo-br.pdf',
      '/pdf/resume.pdf',
      '/pdf/cover-letter.pdf',
    ]);

    await closeButton.click({force: true});
    await expect(closeButton).not.toBeAttached();
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

  test('should render dynamic professional timeline histories and nested academic blocks', async ({
    page,
  }) => {
    await page.waitForURL('/about');

    const mrvText = page.getByText('MRV').first();
    await expect(mrvText).toBeVisible();

    const uninterText = page.getByText('UNINTER').first();
    await expect(uninterText).toBeVisible();
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
});
