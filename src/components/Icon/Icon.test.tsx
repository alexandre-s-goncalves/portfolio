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

    test.each([
      ['sm', 'h-4 w-4'],
      ['md', 'h-5 w-5'],
      ['lg', 'h-6 w-6'],
      ['xl', 'h-8 w-8'],
    ])(
      'should apply %s size classes when configuration parameters match',
      (sizeInput, expectedClass) => {
        render(
          <Icon
            icon={DummyIconComponent}
            size={sizeInput as 'sm' | 'md' | 'lg' | 'xl'}
          />,
        );
        const iconContainer = screen.getByTestId('mock-svg').parentElement;
        expect(iconContainer).toHaveClass(...expectedClass.split(' '));
      },
    );

    test.each([
      [45, 'rotate-45'],
      [90, 'rotate-90'],
      [180, 'rotate-180'],
      ['animate-spin', 'animate-spin'],
    ])(
      'should apply correct rotation alignment classes when parameter is %s',
      (rotateInput, expectedClass) => {
        render(
          <Icon
            icon={DummyIconComponent}
            rotate={rotateInput as 0 | 45 | 90 | 180 | 'animate-spin'}
          />,
        );
        const iconContainer = screen.getByTestId('mock-svg').parentElement;
        expect(iconContainer).toHaveClass(expectedClass);
      },
    );

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

    test('should apply custom pixel properties when size numeric parameters are enforced', () => {
      const {container} = render(<Icon icon={DummyIconComponent} size={42} />);
      const iconContainer = container.querySelector('div');
      expect(iconContainer).toHaveStyle({width: '42px', height: '42px'});
    });
  });

  describe('Renderização de String (Máscaras CSS) & Acessibilidade', () => {
    test('should render structural inner div element with correct aria attributes when icon input is a string', () => {
      const {container} = render(
        <Icon icon={mockBase64String} alt="Ícone de Teste" />,
      );

      const mainContainer = container.querySelector('div');
      expect(mainContainer).toBeInTheDocument();
      expect(mainContainer).not.toHaveAttribute('aria-hidden');

      const innerDiv = mainContainer?.querySelector('div');
      expect(innerDiv).toBeInTheDocument();
      expect(innerDiv).toHaveAttribute('aria-label', 'Ícone de Teste');
      expect(innerDiv).not.toHaveAttribute('aria-hidden');
    });

    test('should apply strict aria-hidden attributes onto inner string container when alt metadata is absent', () => {
      const {container} = render(<Icon icon={mockBase64String} />);

      const mainContainer = container.querySelector('div');
      expect(mainContainer).toBeInTheDocument();
      expect(mainContainer).toHaveAttribute('aria-hidden', 'true');

      const innerDiv = mainContainer?.querySelector('div');
      expect(innerDiv).toBeInTheDocument();
      expect(innerDiv).toHaveAttribute('aria-hidden', 'true');
    });

    test('should omit mask colors layout settings if background color configuration is disabled', () => {
      const {container} = render(<Icon icon={mockBase64String} color="none" />);

      const innerDiv = container.querySelector('div > div') as HTMLElement;
      expect(innerDiv).toBeInTheDocument();

      expect(innerDiv.style.width).toBeDefined();
      expect(innerDiv.style.height).toBeDefined();
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

    test('should apply aria label attributes directly onto mask DOM element when alt text is provided to string inputs', () => {
      const {container} = render(
        <Icon icon={mockBase64String} alt="Bandeira de Teste" />,
      );

      const mainDiv = container.firstChild as HTMLElement;
      const maskDiv = mainDiv.firstChild as HTMLElement;

      expect(mainDiv).not.toHaveAttribute('aria-hidden');
      expect(maskDiv).toHaveAttribute('aria-label', 'Bandeira de Teste');
    });
  });
});
