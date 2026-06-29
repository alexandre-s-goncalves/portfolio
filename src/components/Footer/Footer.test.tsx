import {describe, test, expect, beforeEach} from 'vitest';
import {render, screen} from '@testing-library/react';
import {I18nextProvider} from 'react-i18next';
import {Footer} from './Footer';
import i18n from '../../i18n/i18n';
import {profile} from 'constants/profile';

describe('Footer Component', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('pt');
  });

  const renderWithI18n = () => {
    return render(
      <I18nextProvider i18n={i18n}>
        <Footer />
      </I18nextProvider>,
    );
  };

  describe('Render & Tailwind v4', () => {
    test('should render the developers name identity and layout structures', () => {
      renderWithI18n();

      const nameElements = screen.getAllByText(profile.name);
      expect(nameElements.length).toBeGreaterThan(0);
      expect(screen.getByRole('contentinfo')).toHaveClass(
        'w-full',
        'border-t',
        'transition-colors',
        'duration-200',
      );
    });

    test('should mount all external anchor target links with correct safety parameters', () => {
      renderWithI18n();

      const links = screen.getAllByRole('link');
      const githubLink = links.find(
        link => link.getAttribute('href') === profile.links.github,
      );
      const linkedinLink = links.find(
        link => link.getAttribute('href') === profile.links.linkedin,
      );
      const mailLinks = links.filter(
        link => link.getAttribute('href') === `mailto:${profile.email}`,
      );

      expect(githubLink).toBeDefined();
      expect(linkedinLink).toBeDefined();
      expect(mailLinks.length).toBe(2);

      expect(githubLink).toHaveAttribute('target', '_blank');
      expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
      expect(linkedinLink).toHaveAttribute('target', '_blank');
      expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');

      mailLinks.forEach(link => {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      });
    });
  });

  describe('Localization & Value Locking', () => {
    test('should assert strict manual locking constraints for translated text blocks', () => {
      renderWithI18n();

      expect(screen.getByText('Contato')).toBeInTheDocument();
      expect(screen.getByText('São Paulo, Brasil')).toBeInTheDocument();
      expect(
        screen.getByText(
          /Desenvolvedor apaixonado por tecnologia com experiência em React\.js e React Native/i,
        ),
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Todos os direitos reservados\./i),
      ).toBeInTheDocument();
      expect(screen.getByText(/Construído com/i)).toBeInTheDocument();
    });

    test('should dynamically react and switch content when language context is changed', async () => {
      renderWithI18n();

      await i18n.changeLanguage('en');

      expect(screen.getByText('Contact')).toBeInTheDocument();
      expect(
        screen.getByText(
          /Developer passionate about technology with experience in React\.js and React Native/i,
        ),
      ).toBeInTheDocument();
      expect(screen.getByText(/All rights reserved\./i)).toBeInTheDocument();
      expect(screen.getByText(/Built with/i)).toBeInTheDocument();
    });
  });
});
