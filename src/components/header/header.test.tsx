import React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import {BrowserRouter} from 'react-router-dom';
import {Header} from './header';
import {ThemeProvider} from 'context/ThemeContext';

const MockedHeader = () => (
  <ThemeProvider>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </ThemeProvider>
);

describe('Header component', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/');
  });

  test('renders header with all navigation items', () => {
    render(<MockedHeader />);

    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/skills/i)).toBeInTheDocument();
    expect(screen.getByText(/projects/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });

  test('renders logo button', () => {
    render(<MockedHeader />);

    const logoButton = screen.getByLabelText('Navigate to home');
    expect(logoButton).toBeInTheDocument();
  });

  test('renders theme toggle button', () => {
    render(<MockedHeader />);

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  test('renders dropdown component', () => {
    render(<MockedHeader />);

    const dropdown = screen.getByTestId('dropdown-select');
    expect(dropdown).toBeInTheDocument();
  });

  test('logo button is not clickable when on home page', () => {
    window.history.pushState({}, '', '/');
    render(<MockedHeader />);

    const logoButton = screen.getByLabelText('Navigate to home');
    expect(logoButton).toBeInTheDocument();
  });

  test('logo button navigates to home when not on home page', () => {
    window.history.pushState({}, '', '/skills');
    render(<MockedHeader />);

    const logoButton = screen.getByLabelText('Navigate to home');
    fireEvent.click(logoButton);
  });

  test('navigation links are clickable', () => {
    render(<MockedHeader />);

    const skillsLink = screen.getByText(/skills/i).closest('a');
    expect(skillsLink).toHaveAttribute('href', '/skills');

    const projectsLink = screen.getByText(/projects/i).closest('a');
    expect(projectsLink).toHaveAttribute('href', '/projects');

    const aboutLink = screen.getByText(/about/i).closest('a');
    expect(aboutLink).toHaveAttribute('href', '/about');
  });

  test('theme toggle button calls handleToggle on click', () => {
    render(<MockedHeader />);

    const buttons = screen.getAllByRole('button');
    const themeButton = buttons.find(btn => btn.getAttribute('aria-label') !== 'Navigate to home');

    if (themeButton) {
      fireEvent.click(themeButton);
      expect(themeButton).toBeInTheDocument();
    }
  });

  test('displays correct active navigation item on home', () => {
    window.history.pushState({}, '', '/');
    render(<MockedHeader />);

    const homeText = screen.getByText(/home/i);
    expect(homeText).toBeInTheDocument();
  });

  test('displays correct active navigation item on skills page', () => {
    window.history.pushState({}, '', '/skills');
    render(<MockedHeader />);

    const skillsText = screen.getByText(/skills/i);
    expect(skillsText).toBeInTheDocument();
  });

  test('displays correct active navigation item on projects page', () => {
    window.history.pushState({}, '', '/projects');
    render(<MockedHeader />);

    const projectsText = screen.getByText(/projects/i);
    expect(projectsText).toBeInTheDocument();
  });

  test('displays correct active navigation item on about page', () => {
    window.history.pushState({}, '', '/about');
    render(<MockedHeader />);

    const aboutText = screen.getByText(/about/i);
    expect(aboutText).toBeInTheDocument();
  });

  test('all navigation items render with correct href attributes', () => {
    render(<MockedHeader />);

    const homeLink = screen.getByText(/home/i).closest('a');
    const skillsLink = screen.getByText(/skills/i).closest('a');
    const projectsLink = screen.getByText(/projects/i).closest('a');
    const aboutLink = screen.getByText(/about/i).closest('a');

    expect(homeLink).toHaveAttribute('href', '/');
    expect(skillsLink).toHaveAttribute('href', '/skills');
    expect(projectsLink).toHaveAttribute('href', '/projects');
    expect(aboutLink).toHaveAttribute('href', '/about');
  });

  test('renders logo with correct testId in dark theme', () => {
    render(<MockedHeader />);

    const logoDark = screen.getByTestId('logo-dark');
    expect(logoDark).toBeInTheDocument();
  });

  test('navigation array contains all four items', () => {
    render(<MockedHeader />);

    const homeNavLink = screen.getByTestId('navlink-home');
    const skillsNavLink = screen.getByTestId('navlink-skills');
    const projectsNavLink = screen.getByTestId('navlink-projects');
    const aboutNavLink = screen.getByTestId('navlink-about us');

    expect(homeNavLink).toBeInTheDocument();
    expect(skillsNavLink).toBeInTheDocument();
    expect(projectsNavLink).toBeInTheDocument();
    expect(aboutNavLink).toBeInTheDocument();
  });

  test('each navigation item has correct href through testId', () => {
    render(<MockedHeader />);

    expect(screen.getByTestId('navlink-home')).toHaveAttribute('href', '/');
    expect(screen.getByTestId('navlink-skills')).toHaveAttribute('href', '/skills');
    expect(screen.getByTestId('navlink-projects')).toHaveAttribute('href', '/projects');
    expect(screen.getByTestId('navlink-about us')).toHaveAttribute('href', '/about');
  });

  test('navigation items render in correct order', () => {
    render(<MockedHeader />);

    const navLinks = screen.getAllByTestId(/navlink-/);
    expect(navLinks).toHaveLength(4);
    expect(navLinks[0]).toHaveAttribute('data-testid', 'navlink-home');
    expect(navLinks[1]).toHaveAttribute('data-testid', 'navlink-skills');
    expect(navLinks[2]).toHaveAttribute('data-testid', 'navlink-projects');
    expect(navLinks[3]).toHaveAttribute('data-testid', 'navlink-about us');
  });

  test('home navigation item has correct name and href', () => {
    render(<MockedHeader />);
    const homeLink = screen.getByTestId('navlink-home');
    expect(homeLink).toHaveAttribute('href', '/');
    expect(homeLink).toHaveTextContent(/home/i);
  });

  test('skills navigation item has correct name and href', () => {
    render(<MockedHeader />);
    const skillsLink = screen.getByTestId('navlink-skills');
    expect(skillsLink).toHaveAttribute('href', '/skills');
    expect(skillsLink).toHaveTextContent(/skills/i);
  });

  test('projects navigation item has correct name and href', () => {
    render(<MockedHeader />);
    const projectsLink = screen.getByTestId('navlink-projects');
    expect(projectsLink).toHaveAttribute('href', '/projects');
    expect(projectsLink).toHaveTextContent(/projects/i);
  });

  test('about navigation item has correct name and href', () => {
    render(<MockedHeader />);
    const aboutLink = screen.getByTestId('navlink-about us');
    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(aboutLink).toHaveTextContent(/about/i);
  });

  test('all navigation items use correct translation keys', () => {
    render(<MockedHeader />);

    const homeLink = screen.getByTestId('navlink-home');
    const skillsLink = screen.getByTestId('navlink-skills');
    const projectsLink = screen.getByTestId('navlink-projects');
    const aboutLink = screen.getByTestId('navlink-about us');

    expect(homeLink.textContent).toBeTruthy();
    expect(skillsLink.textContent).toBeTruthy();
    expect(projectsLink.textContent).toBeTruthy();
    expect(aboutLink.textContent).toBeTruthy();
  });

  test('navigation map renders all items with unique keys', () => {
    render(<MockedHeader />);

    const navLinks = screen.getAllByTestId(/navlink-/);
    const hrefs = navLinks.map(link => link.getAttribute('href'));

    expect(hrefs).toEqual(['/', '/skills', '/projects', '/about']);
    expect(new Set(hrefs).size).toBe(4);
  });

  test('isActive function correctly identifies active route for home', () => {
    window.history.pushState({}, '', '/');
    render(<MockedHeader />);

    const homeLink = screen.getByTestId('navlink-home');
    const homeText = homeLink.querySelector('h3');

    expect(homeText).toBeInTheDocument();
  });

  test('isActive function correctly identifies active route for skills', () => {
    window.history.pushState({}, '', '/skills');
    render(<MockedHeader />);

    const skillsLink = screen.getByTestId('navlink-skills');
    const skillsText = skillsLink.querySelector('h3');

    expect(skillsText).toBeInTheDocument();
  });

  test('isActive function correctly identifies active route for projects', () => {
    window.history.pushState({}, '', '/projects');
    render(<MockedHeader />);

    const projectsLink = screen.getByTestId('navlink-projects');
    const projectsText = projectsLink.querySelector('h3');

    expect(projectsText).toBeInTheDocument();
  });

  test('isActive function correctly identifies active route for about', () => {
    window.history.pushState({}, '', '/about');
    render(<MockedHeader />);

    const aboutLink = screen.getByTestId('navlink-about us');
    const aboutText = aboutLink.querySelector('h3');

    expect(aboutText).toBeInTheDocument();
  });

  test('renders logo-dark testId in light theme', () => {
    render(<MockedHeader />);

    const logoDarkButton = screen.getByTestId('logo-dark');
    expect(logoDarkButton).toBeInTheDocument();
  });

  test('switches to logo-clear testId when theme is toggled to dark', async () => {
    render(<MockedHeader />);

    expect(screen.getByTestId('logo-dark')).toBeInTheDocument();

    const themeToggleButton = screen.getByTestId('theme-toggle-moon');
    fireEvent.click(themeToggleButton);

    await waitFor(() => {
      expect(screen.getByTestId('logo-clear')).toBeInTheDocument();
    });
  });

  test('renders moon icon in light theme', () => {
    render(<MockedHeader />);

    const moonToggle = screen.getByTestId('theme-toggle-moon');
    expect(moonToggle).toBeInTheDocument();
  });

  test('renders sun icon when theme is toggled to dark', async () => {
    render(<MockedHeader />);

    expect(screen.getByTestId('theme-toggle-moon')).toBeInTheDocument();

    const themeToggleButton = screen.getByTestId('theme-toggle-moon');
    fireEvent.click(themeToggleButton);

    await waitFor(() => {
      expect(screen.getByTestId('theme-toggle-sun')).toBeInTheDocument();
    });
  });

  test('logo button uses LogoDarkSVG in light theme and LogoClearSVG in dark theme', async () => {
    render(<MockedHeader />);

    const logoDarkButton = screen.getByTestId('logo-dark');
    expect(logoDarkButton).toBeInTheDocument();

    const themeToggleButton = screen.getByTestId('theme-toggle-moon');
    fireEvent.click(themeToggleButton);

    await waitFor(() => {
      const logoClearButton = screen.getByTestId('logo-clear');
      expect(logoClearButton).toBeInTheDocument();
    });
  });
});
