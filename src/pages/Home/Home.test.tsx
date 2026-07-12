import {describe, test, expect, beforeEach, vi} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import {I18nextProvider} from 'react-i18next';
import {BrowserRouter} from 'react-router-dom';
import {Home} from './index';
import i18n from '../../i18n/i18n';
import {profile} from 'constants/profile';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('Home Page System Integration', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('pt');
    mockNavigate.mockClear();
  });

  const renderComponent = () => {
    return render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </I18nextProvider>,
    );
  };

  describe('Renderização & Tailwind v4', () => {
    test('should render profile name and localized text elements completely', () => {
      renderComponent();

      expect(screen.getByText(profile.name)).toBeInTheDocument();
      expect(screen.getByText(/Olá, eu sou/i)).toBeInTheDocument();
      expect(screen.getByRole('heading', {level: 2})).toHaveTextContent(
        /Desenvolvedor Full-Stack/i,
      );
    });

    test('should mount all core stack technology tags onto the viewport', () => {
      renderComponent();

      const tags = [
        'React.js',
        'React Native',
        'JavaScript',
        'TypeScript',
        'Jest',
      ];
      tags.forEach(tech => {
        expect(screen.getByText(tech)).toBeInTheDocument();
      });
    });

    test('should calculate and display dynamic years of experience counter correctly', () => {
      renderComponent();

      const startDate = new Date('2021-08-01');
      const currentDate = new Date();
      let expectedYears = currentDate.getFullYear() - startDate.getFullYear();
      const monthDifference = currentDate.getMonth() - startDate.getMonth();

      if (
        monthDifference < 0 ||
        (monthDifference === 0 && currentDate.getDate() < startDate.getDate())
      ) {
        expectedYears--;
      }

      expect(screen.getByText(`${expectedYears}+`)).toBeInTheDocument();
    });
  });

  describe('Comportamento & Ações', () => {
    test('should trigger safe redirection to projects workspace directory on cta button click', () => {
      renderComponent();

      const projectsButton = screen.getByRole('button', {
        name: /Ver Meus Projetos/i,
      });
      fireEvent.click(projectsButton);

      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith('/projects');
    });

    test('should trigger safe redirection to about context screen on contact button click', () => {
      renderComponent();

      const contactButton = screen.getByRole('button', {
        name: /Entre em Contato/i,
      });
      fireEvent.click(contactButton);

      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith('/about');
    });
  });
});
