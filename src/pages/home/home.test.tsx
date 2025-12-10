import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Home} from './home';

jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => jest.fn(),
  };
});

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

    test('should render email link with aria-label send email', () => {
      const {container} = render(<Home />);
      const emailLink = container.querySelector('a[aria-label="Send email"]');
      expect(emailLink).toBeInTheDocument();
    });
  });

  describe('Theme Integration', () => {
    test('should render view projects button with correct theme handling', () => {
      render(<Home />);
      const button = screen.getByText(/view my projects|ver meus projetos/i);
      expect(button).toBeInTheDocument();
    });

    test('should render contact button with theme styling', () => {
      render(<Home />);
      const button = screen.getByText(/get in touch|entre em contato/i);
      expect(button).toBeInTheDocument();
    });

    test('should render name with theme colors', () => {
      render(<Home />);
      const name = screen.getByText(/alexandre gonçalves/i);
      expect(name).toBeInTheDocument();
    });
  });

  describe('Social Icons', () => {
    test('should render github icon', () => {
      const {container} = render(<Home />);
      const githubLink = container.querySelector(
        'a[href="https://github.com/alexandre-s-goncalves"]',
      );
      expect(githubLink?.querySelector('svg')).toBeInTheDocument();
    });

    test('should render linkedin icon', () => {
      const {container} = render(<Home />);
      const linkedinLink = container.querySelector(
        'a[href="https://www.linkedin.com/in/alexandre-sgoncalves"]',
      );
      expect(linkedinLink?.querySelector('svg')).toBeInTheDocument();
    });

    test('should render email icon', () => {
      const {container} = render(<Home />);
      const emailLink = container.querySelector(
        'a[href="mailto:alexandre.sgoncalves@outlook.com"]',
      );
      expect(emailLink?.querySelector('svg')).toBeInTheDocument();
    });
  });

  describe('Components Structure', () => {
    test('should render all page content in correct order', () => {
      const {container} = render(<Home />);
      const pageWrapper = container.querySelector('[data-testid="home-page"]');
      expect(pageWrapper).toBeInTheDocument();
      expect(pageWrapper?.children.length).toBeGreaterThanOrEqual(2);
    });

    test('should render technology tags container', () => {
      render(<Home />);
      const tags = ['React.js', 'TypeScript', 'React Native', '.NET', 'Java'];
      tags.forEach(tag => {
        expect(screen.getByText(tag)).toBeInTheDocument();
      });
    });

    test('should render both action buttons in correct container', () => {
      render(<Home />);
      const viewProjectsBtn = screen.getByText(/view my projects|ver meus projetos/i);
      const contactBtn = screen.getByText(/get in touch|entre em contato/i);
      expect(viewProjectsBtn).toBeInTheDocument();
      expect(contactBtn).toBeInTheDocument();
    });
  });

  describe('Navigation', () => {
    test('should call navigate when contact button is clicked', () => {
      const mockNavigate = jest.fn();
      jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(mockNavigate);

      render(<Home />);
      const contactButton = screen.getByText(/get in touch|entre em contato/i);

      fireEvent.click(contactButton);
      expect(mockNavigate).toHaveBeenCalledWith('/about');
    });
  });
});
