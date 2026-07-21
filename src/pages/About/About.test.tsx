import {describe, test, expect, beforeEach} from 'vitest';
import {render, screen} from '@testing-library/react';
import {I18nextProvider} from 'react-i18next';
import {BrowserRouter} from 'react-router-dom';
import {About} from './index';
import i18n from '../../i18n/i18n';
import {profile} from 'constants/profile';

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

  describe('Renderização & Tailwind v4', () => {
    test('should render profile photo metadata and contact info details completely', () => {
      renderComponent();

      const profileImg = screen.getByRole('img', {name: profile.name});
      expect(profileImg).toBeInTheDocument();
      expect(profileImg).toHaveAttribute('src');

      expect(screen.getByText(profile.email)).toBeInTheDocument();
      expect(screen.getByText('São Paulo, Brasil')).toBeInTheDocument();
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

    test('should verify historical professional timeline list nodes render inside the dom', () => {
      renderComponent();

      expect(screen.getByText('MRV')).toBeInTheDocument();
      expect(screen.getByText('Club Méditerranée')).toBeInTheDocument();
      expect(
        screen.getByText('Paradise Golf & Lake Resort'),
      ).toBeInTheDocument();
    });

    test('should verify academy training rows render correctly with calendar icon indicators', () => {
      renderComponent();

      expect(
        screen.getAllByText('UNINTER Centro Universitário Internacional'),
      ).toHaveLength(3);
      expect(screen.getByText('Etec Presidente Vargas')).toBeInTheDocument();
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
});
