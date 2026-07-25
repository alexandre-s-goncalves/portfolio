import {describe, test, expect, beforeEach, vi} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {Projects} from './index';

vi.mock('react-i18next', async importOriginal => {
  const actual = await importOriginal<typeof import('react-i18next')>();
  return {
    ...actual,
    useTranslation: () => ({
      t: (key: string) => {
        const translations = new Map<string, string>([
          ['title', 'Meus Projetos'],
          ['subtitle', 'Alguns dos meus trabalhos recentes'],
          ['ctaView', 'Ver Projeto'],
          ['ctaCode', 'Ver Código'],
          ['status.completed', 'Concluído'],
          ['status.progress', 'Em Progresso'],
          ['items.portfolio.title', 'Portfolio Pessoal'],
          [
            'items.portfolio.desc',
            'Portfólio de engenharia de software de alta fidelidade desenvolvido com React.js e Tailwind v4.',
          ],
          ['items.financeApi.title', 'API de Gestão Financeira'],
          [
            'items.financeApi.desc',
            'Microsserviço de backend scalável focado em segurança estrita.',
          ],
        ]);

        return translations.get(key) || key;
      },
    }),
  };
});

vi.mock('constants/profile', () => ({
  profile: {
    projects: [
      {
        id: 'portfolio',
        titleKey: 'items.portfolio.title',
        descKey: 'items.portfolio.desc',
        status: 'completed',
        image: 'portfolio-preview',
        tags: ['React.js', 'TypeScript', 'Tailwind v4'],
        viewUrl: 'https://github.io',
        codeUrl: 'https://github.com',
      },
      {
        id: 'finance-api',
        titleKey: 'items.financeApi.title',
        descKey: 'items.financeApi.desc',
        status: 'progress',
        tags: ['Java', 'Spring Boot'],
        codeUrl: 'https://github.com',
      },
    ],
  },
}));

describe('Projects Page System Integration with Isolated Mocks', () => {
  beforeEach(() => {
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();
  });

  const renderComponent = () => {
    return render(
      <BrowserRouter>
        <Projects />
      </BrowserRouter>,
    );
  };

  describe('Renderização Estrutural & Segurança HTML5', () => {
    test('should render page layout headers and main sections successfully', () => {
      renderComponent();

      expect(
        screen.getByRole('heading', {level: 1, name: /Meus Projetos/i}),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('heading', {level: 2, name: 'Portfolio Pessoal'}),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('heading', {
          level: 2,
          name: 'API de Gestão Financeira',
        }),
      ).toBeInTheDocument();
    });

    test('should map corresponding localized status tags for completed and progress configurations', () => {
      renderComponent();

      expect(screen.getByText('Concluído')).toBeInTheDocument();
      expect(screen.getByText('Em Progresso')).toBeInTheDocument();
    });

    test('should match correct technology labels mapping across specific card collections', () => {
      renderComponent();

      expect(screen.getByText('React.js')).toBeInTheDocument();
      expect(screen.getByText('TypeScript')).toBeInTheDocument();
      expect(screen.getByText('Tailwind v4')).toBeInTheDocument();
      expect(screen.getByText('Java')).toBeInTheDocument();
      expect(screen.getByText('Spring Boot')).toBeInTheDocument();
    });

    test('should load default missing graphic fallback container only when metadata image is omitted', () => {
      renderComponent();

      const images = screen.getAllByRole('img');
      expect(images).toHaveLength(1);
      expect(images[0]).toHaveAttribute('alt', 'Portfolio Pessoal');

      const fallbackText = screen.getByText('Preview Indisponível');
      expect(fallbackText).toBeInTheDocument();
    });

    test('should verify security vulnerability attributes on all rendered anchor buttons', () => {
      renderComponent();

      const externalLinks = screen.getAllByRole('link');
      expect(externalLinks).toHaveLength(3);

      externalLinks.forEach(link => {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      });
    });

    test('should hide view project external action button if viewUrl metadata is absent', () => {
      renderComponent();

      const viewButtons = screen.getAllByRole('link', {name: /Ver Projeto/i});
      expect(viewButtons).toHaveLength(1);

      const codeButtons = screen.getAllByRole('link', {name: /Ver Código/i});
      expect(codeButtons).toHaveLength(2);
    });

    test('should enforce strict disabled button attributes on missing preview assets to secure keyboard focus', () => {
      renderComponent();

      const zoomButtons = screen.getAllByRole('button');
      const apiCardTrigger = zoomButtons[1];

      expect(apiCardTrigger).toBeDisabled();
      expect(apiCardTrigger).toHaveClass('cursor-default');
    });
  });

  describe('Comportamento Reativo & Eventos de Acessibilidade', () => {
    test('should evoke dialog showModal method when clicking actionable thumbnail preview image', () => {
      renderComponent();

      const buttons = screen.getAllByRole('button');
      const portfolioTrigger = buttons[0];
      expect(portfolioTrigger).toBeDefined();

      fireEvent.click(portfolioTrigger!);
      expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalledTimes(1);
    });

    test('should call native dialog close method when dismiss trigger fires on full view element', () => {
      renderComponent();

      const buttons = screen.getAllByRole('button');
      const portfolioTrigger = buttons[0];
      expect(portfolioTrigger).toBeDefined();
      fireEvent.click(portfolioTrigger!);

      const closeBackdropButton = screen.getByLabelText(
        'Fechar visualização expandida',
      );
      expect(closeBackdropButton).toBeInTheDocument();
      fireEvent.click(closeBackdropButton);

      expect(HTMLDialogElement.prototype.close).toHaveBeenCalledTimes(1);
    });

    test('should capture internal native cancel event listener branches to secure keyboard shortcuts coverage', () => {
      const {container} = renderComponent();

      const buttons = screen.getAllByRole('button');
      fireEvent.click(buttons[0]!);

      const nativeDialogElement = container.querySelector('dialog');
      expect(nativeDialogElement).toBeInTheDocument();

      const mockCancelEvent = new Event('cancel', {
        bubbles: true,
        cancelable: true,
      });
      const preventDefaultSpy = vi.spyOn(mockCancelEvent, 'preventDefault');

      fireEvent(nativeDialogElement!, mockCancelEvent);

      expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
      expect(HTMLDialogElement.prototype.close).toHaveBeenCalledTimes(1);
    });
  });
});
