import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Home} from './home';

describe('Home', () => {
  describe('Rendering', () => {
    test('should render the home page container', () => {
      const {getByTestId} = render(<Home />);
      const container = getByTestId('home-page');
      expect(container).toBeInTheDocument();
    });

    test('should render greeting text', () => {
      render(<Home />);
      const greeting = screen.getByText(/hello, i am|olá, eu sou/i);
      expect(greeting).toBeInTheDocument();
    });

    test('should render name', () => {
      render(<Home />);
      const name = screen.getByText(/alexandre gonçalves/i);
      expect(name).toBeInTheDocument();
    });

    test('should render role', () => {
      render(<Home />);
      const role = screen.getByText(/full-stack developer|desenvolvedor full-stack/i);
      expect(role).toBeInTheDocument();
    });

    test('should render description', () => {
      render(<Home />);
      const description = screen.getByText(
        /technology-passionate developer|desenvolvedor apaixonado por tecnologia/i,
      );
      expect(description).toBeInTheDocument();
    });

    test('should render all technology tags', () => {
      render(<Home />);
      const tags = ['React.js', 'TypeScript', 'React Native', '.NET', 'Java'];
      tags.forEach(tag => {
        expect(screen.getByText(tag)).toBeInTheDocument();
      });
    });

    test('should render view projects button', () => {
      render(<Home />);
      const button = screen.getByText(/view my projects|ver meus projetos/i);
      expect(button).toBeInTheDocument();
    });

    test('should render contact button', () => {
      render(<Home />);
      const button = screen.getByText(/get in touch|entre em contato/i);
      expect(button).toBeInTheDocument();
    });
  });

  describe('Social Links', () => {
    test('should render github link with correct href', () => {
      const {container} = render(<Home />);
      const githubLink = container.querySelector(
        'a[href="https://github.com/alexandre-s-goncalves"]',
      );
      expect(githubLink).toBeInTheDocument();
    });

    test('should render linkedin link with correct href', () => {
      const {container} = render(<Home />);
      const linkedinLink = container.querySelector(
        'a[href="https://www.linkedin.com/in/alexandre-sgoncalves"]',
      );
      expect(linkedinLink).toBeInTheDocument();
    });

    test('should render email link with correct href', () => {
      const {container} = render(<Home />);
      const emailLink = container.querySelector(
        'a[href="mailto:alexandre.sgoncalves@outlook.com"]',
      );
      expect(emailLink).toBeInTheDocument();
    });

    test('should open social links in new tab', () => {
      const {container} = render(<Home />);
      const externalLinks = container.querySelectorAll('a[target="_blank"]');
      expect(externalLinks.length).toBeGreaterThanOrEqual(2);
    });

    test('should have rel noopener noreferrer on external links', () => {
      const {container} = render(<Home />);
      const externalLinks = container.querySelectorAll('a[rel="noopener noreferrer"]');
      expect(externalLinks.length).toBeGreaterThanOrEqual(2);
    });
  });
});
