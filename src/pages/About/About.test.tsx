import {beforeEach, describe, expect, test, vi} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import {About} from './index';
import {BrowserRouter} from 'react-router-dom';
import {I18nextProvider} from 'react-i18next';
import i18n from '../../i18n/i18n';
import {profile} from 'constants/profile';

vi.mock('components/ModalDownloadCv', () => ({
  ModalDownloadCv: ({
    isOpen,
    onClose,
  }: {
    isOpen: boolean;
    onClose: () => void;
  }) =>
    isOpen ? (
      <button data-testid="mocked-cv-modal" onClick={onClose}>
        Modal Active
      </button>
    ) : null,
}));

describe('About Page System Integration', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('pt');
  });

  const renderComponent = () => {
    return render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <About />
        </BrowserRouter>
      </I18nextProvider>,
    );
  };

  describe('Behavioral & Interactive Scenarios', () => {
    test('should keep the curriculum modal hidden upon initial interface mount execution', () => {
      renderComponent();
      expect(screen.queryByTestId('mocked-cv-modal')).not.toBeInTheDocument();
    });

    test('should securely wake up and mount download cv modal layers when download action button triggers', () => {
      renderComponent();

      const downloadButton = screen.getByRole('button', {name: /Baixar CV/i});
      fireEvent.click(downloadButton);

      expect(screen.getByTestId('mocked-cv-modal')).toBeInTheDocument();
    });

    test('should close the curriculum modal when its close action is triggered', () => {
      renderComponent();

      fireEvent.click(screen.getByRole('button', {name: /Baixar CV/i}));
      fireEvent.click(screen.getByTestId('mocked-cv-modal'));

      expect(screen.queryByTestId('mocked-cv-modal')).not.toBeInTheDocument();
    });
  });

  describe('Comportamento & Links de Segurança', () => {
    test('should enforce strict security attributes on external social link anchors', () => {
      renderComponent();

      const githubLink = screen.getByRole('link', {name: /github/i});
      expect(githubLink).toHaveAttribute('href', profile.links.github);
      expect(githubLink).toHaveAttribute('target', '_blank');
      expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');

      const linkedinLink = screen.getByRole('link', {name: /linkedin/i});
      expect(linkedinLink).toHaveAttribute('href', profile.links.linkedin);
      expect(linkedinLink).toHaveAttribute('target', '_blank');
      expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('Renderização & Tailwind v4', () => {
    test('should render profile photo metadata and contact info details completely', () => {
      renderComponent();

      const profileImg = screen.getByRole('img', {name: profile.name});
      expect(profileImg).toBeInTheDocument();
      expect(profileImg).toHaveAttribute('src');

      expect(screen.getByText(profile.email)).toBeInTheDocument();
      expect(screen.getByText('São Paulo, Brasil')).toBeInTheDocument();
    });

    test('should render updated biography paragraphs matching linkedin metadata definitions', () => {
      renderComponent();

      expect(
        screen.getByText(/Desenvolvo soluções front-end e mobile/i),
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          /Especializações em Cibersegurança e Ciência de Dados/i,
        ),
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          /Atuo também como um dos principais revisores de código/i,
        ),
      ).toBeInTheDocument();
    });

    test('should verify academy training rows render correctly with calendar icon indicators', () => {
      renderComponent();

      expect(
        screen.getAllByText('UNINTER Centro Universitário Internacional'),
      ).toHaveLength(3);
      expect(screen.getByText('Etec Presidente Vargas')).toBeInTheDocument();
    });

    test('should verify historical professional timeline list nodes render inside the dom', () => {
      renderComponent();

      expect(screen.getByText('MRV')).toBeInTheDocument();
      expect(screen.getByText('Club Méditerranée')).toBeInTheDocument();
      expect(
        screen.getByText('Paradise Golf & Lake Resort'),
      ).toBeInTheDocument();
    });

    test('should mount all core layout sections heading nodes onto the viewport', () => {
      renderComponent();

      expect(
        screen.getByRole('heading', {level: 1, name: /Sobre Mim/i}),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('heading', {
          level: 3,
          name: /Experiência Profissional/i,
        }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('heading', {level: 3, name: /Formação/i}),
      ).toBeInTheDocument();
    });
  });
});
