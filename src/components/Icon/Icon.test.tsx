import {describe, test, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import {Icon} from './Icon';

describe('Icon Component', () => {
  const DummyIconComponent = ({
    children,
    ...props
  }: React.SVGProps<SVGSVGElement>) => (
    <svg data-testid="mock-svg" {...props}>
      {children}
      <path d="" />
    </svg>
  );

  const mockBase64String = 'data:image/svg+xml;base64,PHN2Zz48L3N2Zz4=';

  describe('Render & Tailwind v4', () => {
    test('should render icon component and apply default style and dimension classes', () => {
      render(<Icon icon={DummyIconComponent} />);

      const svgElement = screen.getByTestId('mock-svg');
      const iconContainer = svgElement.parentElement;

      expect(svgElement).toBeInTheDocument();
      expect(iconContainer).toHaveClass(
        'inline-flex',
        'h-5',
        'w-5',
        'text-slate-600',
        'rotate-0',
      );
    });

    test('should apply small size classes when sm is provided', () => {
      render(<Icon icon={DummyIconComponent} size="sm" />);
      const iconContainer = screen.getByTestId('mock-svg').parentElement;
      expect(iconContainer).toHaveClass('h-4', 'w-4');
    });

    test('should apply medium size classes when md is provided', () => {
      render(<Icon icon={DummyIconComponent} size="md" />);
      const iconContainer = screen.getByTestId('mock-svg').parentElement;
      expect(iconContainer).toHaveClass('h-5', 'w-5');
    });

    test('should apply large size classes when lg is provided', () => {
      render(<Icon icon={DummyIconComponent} size="lg" />);
      const iconContainer = screen.getByTestId('mock-svg').parentElement;
      expect(iconContainer).toHaveClass('h-6', 'w-6');
    });

    test('should apply extra large size classes when xl is provided', () => {
      render(<Icon icon={DummyIconComponent} size="xl" />);
      const iconContainer = screen.getByTestId('mock-svg').parentElement;
      expect(iconContainer).toHaveClass('h-8', 'w-8');
    });

    test('should apply 45 degrees rotation class when 45 is provided', () => {
      render(<Icon icon={DummyIconComponent} rotate={45} />);
      const iconContainer = screen.getByTestId('mock-svg').parentElement;
      expect(iconContainer).toHaveClass('rotate-45');
    });

    test('should apply 90 degrees rotation class when 90 is provided', () => {
      render(<Icon icon={DummyIconComponent} rotate={90} />);
      const iconContainer = screen.getByTestId('mock-svg').parentElement;
      expect(iconContainer).toHaveClass('rotate-90');
    });

    test('should apply 180 degrees rotation class when 180 is provided', () => {
      render(<Icon icon={DummyIconComponent} rotate={180} />);
      const iconContainer = screen.getByTestId('mock-svg').parentElement;
      expect(iconContainer).toHaveClass('rotate-180');
    });

    test('should apply infinite spin utility class when animate-spin is provided', () => {
      render(<Icon icon={DummyIconComponent} rotate="animate-spin" />);
      const iconContainer = screen.getByTestId('mock-svg').parentElement;
      expect(iconContainer).toHaveClass('animate-spin');
    });

    test('should append custom string class names seamlessly into DOM tree', () => {
      render(
        <Icon
          icon={DummyIconComponent}
          className="custom-utility-class m-2 p-4"
        />,
      );
      const iconContainer = screen.getByTestId('mock-svg').parentElement;
      expect(iconContainer).toHaveClass('custom-utility-class', 'p-4', 'm-2');
    });
  });

  describe('Behavior', () => {
    test('should inject custom inline style pixel attributes when size property is a numeric input', () => {
      render(<Icon icon={DummyIconComponent} size={42} />);

      const iconContainer = screen.getByTestId('mock-svg').parentElement;

      expect(iconContainer).toHaveStyle({
        width: '42px',
        height: '42px',
      });

      expect(iconContainer).not.toHaveClass('h-4', 'h-5', 'h-6', 'h-8');
    });

    test('should strictly ensure aria-hidden is active for assistive technology screen blockers', () => {
      render(<Icon icon={DummyIconComponent} />);
      const iconContainer = screen.getByTestId('mock-svg').parentElement;
      expect(iconContainer).toHaveAttribute('aria-hidden', 'true');
    });

    test('should render CSS mask fallback when icon input is a data URL string with default colors', () => {
      const {container} = render(<Icon icon={mockBase64String} />);

      const mainDiv = container.firstChild as HTMLElement;
      const maskDiv = mainDiv.firstChild as HTMLElement;

      expect(screen.queryByTestId('mock-svg')).not.toBeInTheDocument();
      expect(maskDiv).toBeInTheDocument();
      expect(maskDiv).toHaveStyle({
        maskImage: `url(${mockBase64String})`,
      });
    });

    test('should render CSS background image when color is set to none on string icon inputs', () => {
      const {container} = render(<Icon icon={mockBase64String} color="none" />);

      const mainDiv = container.firstChild as HTMLElement;
      const maskDiv = mainDiv.firstChild as HTMLElement;

      expect(mainDiv).not.toHaveClass('text-slate-600');
      expect(maskDiv).toHaveStyle({
        backgroundImage: `url(${mockBase64String})`,
      });
    });

    test('should skip rendering fill and stroke properties on SVG when color property is set to none', () => {
      render(<Icon icon={DummyIconComponent} color="none" />);

      const svgElement = screen.getByTestId('mock-svg');
      expect(svgElement).not.toHaveAttribute('fill');
      expect(svgElement).not.toHaveAttribute('stroke');
    });

    test('should inject role and screen reader title when alt text property is provided to component', () => {
      render(<Icon icon={DummyIconComponent} alt="Ícone de Teste" />);

      const svgElement = screen.getByTestId('mock-svg');
      const iconContainer = svgElement.parentElement;

      expect(iconContainer).not.toHaveAttribute('aria-hidden');
      expect(svgElement).toHaveAttribute('role', 'img');
      expect(svgElement).toHaveAttribute('aria-label', 'Ícone de Teste');

      const titleElement = svgElement.querySelector('title');
      expect(titleElement).toBeInTheDocument();
      expect(titleElement?.textContent).toBe('Ícone de Teste');
    });

    test('should apply role and aria label attributes directly onto mask DOM element when alt text is provided to string inputs', () => {
      const {container} = render(
        <Icon icon={mockBase64String} alt="Bandeira de Teste" />,
      );

      const mainDiv = container.firstChild as HTMLElement;
      const maskDiv = mainDiv.firstChild as HTMLElement;

      expect(mainDiv).not.toHaveAttribute('aria-hidden');
      expect(maskDiv).toHaveAttribute('role', 'img');
      expect(maskDiv).toHaveAttribute('aria-label', 'Bandeira de Teste');
    });
  });
});
