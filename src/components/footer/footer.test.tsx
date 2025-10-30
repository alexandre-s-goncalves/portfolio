import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {BrowserRouter} from 'react-router-dom';
import {Footer} from './footer';
import {ThemeProvider, ThemeContext} from 'context/ThemeContext';

const MockedFooter = () => (
  <ThemeProvider>
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  </ThemeProvider>
);

describe('Footer component', () => {
  test('renders footer with brand title', () => {
    render(<MockedFooter />);

    const brandTitle = screen.getByRole('heading', {name: /Alexandre dos Santos Gonçalves/i});
    expect(brandTitle).toBeInTheDocument();
  });

  test('renders bio text', () => {
    render(<MockedFooter />);

    const bioText = screen.getByText(/Technology-passionate developer/i);
    expect(bioText).toBeInTheDocument();
  });

  test('renders logo icon', () => {
    render(<MockedFooter />);

    const logoIcon = screen.getByTestId('logo-dark');
    expect(logoIcon).toBeInTheDocument();
  });

  test('renders GitHub social link', () => {
    render(<MockedFooter />);

    const githubLink = screen.getByLabelText('https://github.com/alexandre-s-goncalves');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/alexandre-s-goncalves');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('renders LinkedIn social link', () => {
    render(<MockedFooter />);

    const linkedinLink = screen.getByLabelText('https://www.linkedin.com/in/alexandre-sgoncalves');
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/alexandre-sgoncalves',
    );
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('renders Email social link', () => {
    render(<MockedFooter />);

    const emailLink = screen.getByLabelText('Send email');
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:alexandre.sgoncalves@outlook.com');
  });

  test('renders contact section title', () => {
    render(<MockedFooter />);

    const contactTitle = screen.getByText(/contact/i);
    expect(contactTitle).toBeInTheDocument();
  });

  test('renders email in contact section', () => {
    render(<MockedFooter />);

    const emails = screen.getAllByText(/alexandre.sgoncalves@outlook.com/i);
    expect(emails.length).toBeGreaterThan(0);
  });

  test('renders phone in contact section', () => {
    render(<MockedFooter />);

    const phone = screen.getByText(/\+55 11 94500-8992/i);
    expect(phone).toBeInTheDocument();
  });

  test('renders location in contact section', () => {
    render(<MockedFooter />);

    const location = screen.getByText(/São Paulo, Brazil/i);
    expect(location).toBeInTheDocument();
  });

  test('renders copyright text', () => {
    render(<MockedFooter />);

    const copyright = screen.getByText(/© 2025/i);
    expect(copyright).toBeInTheDocument();
  });

  test('renders rights reserved text', () => {
    render(<MockedFooter />);

    const rights = screen.getByText(/All rights reserved/i);
    expect(rights).toBeInTheDocument();
  });

  test('renders built with text and React', () => {
    render(<MockedFooter />);

    const builtWith = screen.getByText(/Built with/i);
    expect(builtWith).toBeInTheDocument();

    expect(builtWith.textContent).toContain('React');
  });

  test('all social links have correct structure', () => {
    render(<MockedFooter />);

    const socialLinks = screen.getAllByRole('link');
    const githubLink = socialLinks.find(link => link.getAttribute('href')?.includes('github'));
    const linkedinLink = socialLinks.find(link => link.getAttribute('href')?.includes('linkedin'));
    const emailLink = socialLinks.find(link => link.getAttribute('href')?.includes('mailto'));

    expect(githubLink).toBeDefined();
    expect(linkedinLink).toBeDefined();
    expect(emailLink).toBeDefined();
  });

  test('GitHub link opens in new tab', () => {
    render(<MockedFooter />);

    const githubLink = screen.getByLabelText('https://github.com/alexandre-s-goncalves');
    expect(githubLink).toHaveAttribute('target', '_blank');
  });

  test('LinkedIn link opens in new tab', () => {
    render(<MockedFooter />);

    const linkedinLink = screen.getByLabelText('https://www.linkedin.com/in/alexandre-sgoncalves');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
  });

  test('email link does not open in new tab', () => {
    render(<MockedFooter />);

    const emailLink = screen.getByLabelText('Send email');
    expect(emailLink).not.toHaveAttribute('target', '_blank');
  });

  test('renders all contact information items', () => {
    render(<MockedFooter />);

    const contactTitle = screen.getByText(/contact/i);
    const email = screen.getAllByText(/alexandre.sgoncalves@outlook.com/i)[0];
    const phone = screen.getByText(/\+55 11 94500-8992/i);
    const location = screen.getByText(/São Paulo, Brazil/i);

    expect(contactTitle).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(location).toBeInTheDocument();
  });

  test('footer contains two main sections', () => {
    const {container} = render(<MockedFooter />);

    const sections = container.querySelectorAll('footer > div > div');
    expect(sections.length).toBeGreaterThanOrEqual(2);
  });

  test('brand name appears in copyright', () => {
    render(<MockedFooter />);

    const copyrightText = screen.getByText(/© 2025 Alexandre dos Santos Gonçalves/i);
    expect(copyrightText).toBeInTheDocument();
  });

  test('footer uses translation keys correctly', () => {
    render(<MockedFooter />);

    expect(
      screen.getByRole('heading', {name: /Alexandre dos Santos Gonçalves/i}),
    ).toBeInTheDocument();
    expect(screen.getByText(/Technology-passionate developer/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
    expect(screen.getByText(/Built with/i)).toBeInTheDocument();
  });

  test('social links section contains exactly 3 icons', () => {
    const {container} = render(<MockedFooter />);

    const socialLinksContainer = container
      .querySelector('[data-testid="logo-dark"]')
      ?.parentElement?.parentElement?.querySelector('div:last-child');
    const links = socialLinksContainer?.querySelectorAll('a');

    expect(links?.length).toBe(3);
  });

  test('copyright section contains two text elements', () => {
    render(<MockedFooter />);

    const copyrightLeft = screen.getByText(/© 2025/i);
    const copyrightRight = screen.getByText(/Built with/i);

    expect(copyrightLeft).toBeInTheDocument();
    expect(copyrightRight).toBeInTheDocument();
  });

  test('footer structure matches expected layout', () => {
    const {container} = render(<MockedFooter />);

    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();

    const contentWrapper = footer?.firstChild;
    expect(contentWrapper).toBeInTheDocument();
  });

  test('info section contains brand, bio and social links', () => {
    render(<MockedFooter />);

    const brand = screen.getByRole('heading', {name: /Alexandre dos Santos Gonçalves/i});
    const bio = screen.getByText(/Technology-passionate developer/i);
    const githubLink = screen.getByLabelText('https://github.com/alexandre-s-goncalves');

    expect(brand).toBeInTheDocument();
    expect(bio).toBeInTheDocument();
    expect(githubLink).toBeInTheDocument();
  });

  test('contact section is separate from info section', () => {
    const {container} = render(<MockedFooter />);

    const sections = container.querySelectorAll('footer > div:first-child > div');
    expect(sections.length).toBeGreaterThanOrEqual(2);
  });

  test('renders heart icon in built with section', () => {
    const {container} = render(<MockedFooter />);

    const builtWithSection = screen.getByText(/Built with/i).parentElement;
    const svg = builtWithSection?.querySelector('svg');

    expect(svg).toBeInTheDocument();
  });

  test('GitHub icon is rendered', () => {
    const {container} = render(<MockedFooter />);

    const githubLink = screen.getByLabelText('https://github.com/alexandre-s-goncalves');
    const svg = githubLink.querySelector('svg');

    expect(svg).toBeInTheDocument();
  });

  test('LinkedIn icon is rendered', () => {
    const {container} = render(<MockedFooter />);

    const linkedinLink = screen.getByLabelText('https://www.linkedin.com/in/alexandre-sgoncalves');
    const svg = linkedinLink.querySelector('svg');

    expect(svg).toBeInTheDocument();
  });

  test('Email icon is rendered', () => {
    const {container} = render(<MockedFooter />);

    const emailLink = screen.getByLabelText('Send email');
    const svg = emailLink.querySelector('svg');

    expect(svg).toBeInTheDocument();
  });

  test('all required translations are present', () => {
    render(<MockedFooter />);

    expect(
      screen.getByRole('heading', {name: /Alexandre dos Santos Gonçalves/i}),
    ).toBeInTheDocument();
    expect(screen.getByText(/Technology-passionate developer/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
    expect(screen.getByText(/alexandre.sgoncalves@outlook.com/i)).toBeInTheDocument();
    expect(screen.getByText(/\+55 11 94500-8992/i)).toBeInTheDocument();
    expect(screen.getByText(/São Paulo, Brazil/i)).toBeInTheDocument();
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
    expect(screen.getByText(/Built with/i)).toBeInTheDocument();
  });

  test('footer is properly structured with semantic HTML', () => {
    const {container} = render(<MockedFooter />);

    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
    expect(footer?.tagName).toBe('FOOTER');
  });

  describe('Theme variations', () => {
    test('renders logo-dark icon in light theme', () => {
      render(<MockedFooter />);

      const logoIcon = screen.getByTestId('logo-dark');
      expect(logoIcon).toBeInTheDocument();
      expect(screen.queryByTestId('logo-clear')).not.toBeInTheDocument();
    });

    test('renders logo-clear icon in dark theme', () => {
      const MockedFooterDarkTheme = () => {
        const [themeDark] = React.useState(true);
        return (
          <ThemeContext.Provider value={{themeDark, handleToggle: () => {}}}>
            <BrowserRouter>
              <Footer />
            </BrowserRouter>
          </ThemeContext.Provider>
        );
      };

      render(<MockedFooterDarkTheme />);

      const logoIcon = screen.getByTestId('logo-clear');
      expect(logoIcon).toBeInTheDocument();
      expect(screen.queryByTestId('logo-dark')).not.toBeInTheDocument();
    });
  });
});
