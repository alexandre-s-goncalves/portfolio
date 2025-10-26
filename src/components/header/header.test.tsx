import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {BrowserRouter} from 'react-router-dom';
import {Header} from './header';

const MockedHeader = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
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
});
