import React from 'react';
import {render, screen} from '@testing-library/react';
import {WebRoutes} from './webRoutes';

describe('WebRoutes', () => {
  test('renders Home at root path', () => {
    window.history.pushState({}, '', '/');
    render(<WebRoutes />);

    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  test('renders Skills at /skills', () => {
    window.history.pushState({}, '', '/skills');
    render(<WebRoutes />);

    expect(screen.getByTestId('skills-page')).toBeInTheDocument();
  });

  test('renders Projects at /projects', () => {
    window.history.pushState({}, '', '/projects');
    render(<WebRoutes />);

    expect(screen.getByTestId('projects-page')).toBeInTheDocument();
  });

  test('renders About at /about', () => {
    window.history.pushState({}, '', '/about');
    render(<WebRoutes />);

    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });

  test('renders NotFound for unknown route', () => {
    window.history.pushState({}, '', '/nope-this-does-not-exist');
    render(<WebRoutes />);

    expect(screen.getByTestId('notfound-page')).toBeInTheDocument();
  });
});
