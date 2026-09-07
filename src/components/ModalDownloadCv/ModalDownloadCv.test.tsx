import {afterEach, beforeEach, describe, expect, test, vi} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import {ModalDownloadCv} from './ModalDownloadCv';
import {computeFinalUrl} from './computeFinalUrl';

vi.mock('react-i18next', async importOriginal => {
  const actual = await importOriginal<typeof import('react-i18next')>();
  return {
    ...actual,
    useTranslation: () => ({
      t: (key: string) => key,
    }),
  };
});

describe('ModalDownloadCv Component Behavioral & Rendering Gates', () => {
  const handleCloseMock = vi.fn();

  beforeEach(() => {
    vi.stubGlobal(
      'open',
      vi.fn(() => ({focus: vi.fn()})),
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.unstubAllGlobals();
  });

  describe('Behavior', () => {
    test('should execute onClose callback securely when click actions trigger close button hooks', () => {
      render(<ModalDownloadCv isOpen={true} onClose={handleCloseMock} />);

      const closeButton = screen.getByTestId('close-modal-btn');
      fireEvent.click(closeButton);

      expect(handleCloseMock).toHaveBeenCalledTimes(1);
    });

    test('should invoke window open target blank navigation upon cover letter button click interaction', () => {
      render(<ModalDownloadCv isOpen={true} onClose={handleCloseMock} />);

      const letterButton = screen.getByTestId('print-letter-btn');
      fireEvent.click(letterButton);

      expect(window.open).toHaveBeenCalledWith(
        expect.stringContaining('pdf/cover-letter.pdf'),
        '_blank',
      );
    });

    test('should invoke window open target blank navigation upon curriculo-br button click interaction', () => {
      render(<ModalDownloadCv isOpen={true} onClose={handleCloseMock} />);

      const brButton = screen.getByTestId('print-br-btn');
      fireEvent.click(brButton);

      expect(window.open).toHaveBeenCalledWith(
        expect.stringContaining('pdf/curriculo-br.pdf'),
        '_blank',
      );
    });

    test('should invoke window open target blank navigation upon resume button click interaction', () => {
      render(<ModalDownloadCv isOpen={true} onClose={handleCloseMock} />);

      const resumeButton = screen.getByTestId('print-resume-btn');
      fireEvent.click(resumeButton);

      expect(window.open).toHaveBeenCalledWith(
        expect.stringContaining('pdf/resume.pdf'),
        '_blank',
      );
    });
  });

  describe('Branch Coverage Calibrations', () => {
    test('should correctly build target url paths when BASE_URL metadata string does not end with a trailing slash', () => {
      const result = computeFinalUrl('pdf/curriculo-br.pdf', '/portfolio');
      expect(result).toBe('/portfolio/pdf/curriculo-br.pdf');
    });

    test('should correctly build target url paths when BASE_URL metadata string ends with a trailing slash', () => {
      const result = computeFinalUrl('pdf/curriculo-br.pdf', '/portfolio/');
      expect(result).toBe('/portfolio/pdf/curriculo-br.pdf');
    });

    test('should correctly build target url paths when input path starts with a redundant leading slash', () => {
      const result = computeFinalUrl('/pdf/curriculo-br.pdf', '/portfolio');
      expect(result).toBe('/portfolio/pdf/curriculo-br.pdf');
    });

    test('should bypass focus execution parameters safely if new window context returns as null', () => {
      vi.stubGlobal(
        'open',
        vi.fn(() => null),
      );
      render(<ModalDownloadCv isOpen={true} onClose={handleCloseMock} />);

      const brButton = screen.getByTestId('print-br-btn');
      fireEvent.click(brButton);

      expect(window.open).toReturnWith(null);
    });
  });

  describe('Rendering', () => {
    test('should return null and mount absolutely nothing into DOM trees when isOpen is false', () => {
      const {container} = render(
        <ModalDownloadCv isOpen={false} onClose={handleCloseMock} />,
      );
      expect(container.firstChild).toBeNull();
    });

    test('should mount full localized translation key schemas when activation trigger is true', () => {
      render(<ModalDownloadCv isOpen={true} onClose={handleCloseMock} />);

      expect(screen.getByTestId('close-modal-btn')).toBeInTheDocument();
      expect(screen.getByTestId('print-br-btn')).toBeInTheDocument();
      expect(screen.getByTestId('print-letter-btn')).toBeInTheDocument();
      expect(screen.getByTestId('print-resume-btn')).toBeInTheDocument();
    });
  });
});
