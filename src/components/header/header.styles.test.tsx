import React from 'react';
import {render} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as S from './header.styles';

describe('header.styles', () => {
  describe('HeaderContainer', () => {
    test('should match the snapshot', () => {
      const {container} = render(<S.HeaderContainer $themeDark={false} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should render as header element', () => {
      const {container} = render(<S.HeaderContainer $themeDark={false} />);
      const element = container.firstChild as HTMLElement;
      expect(element.nodeName).toBe('HEADER');
    });

    test('should apply light theme border color', () => {
      const {getByTestId} = render(<S.HeaderContainer data-testid="header" $themeDark={false} />);
      const header = getByTestId('header');
      expect(header).toHaveStyle('border-bottom: 1px solid #D9DDDB');
    });

    test('should apply dark theme border color', () => {
      const {getByTestId} = render(<S.HeaderContainer data-testid="header" $themeDark={true} />);
      const header = getByTestId('header');
      expect(header).toHaveStyle('border-bottom: 1px solid #323741');
    });

    test('should have full width', () => {
      const {getByTestId} = render(<S.HeaderContainer data-testid="header" $themeDark={false} />);
      const header = getByTestId('header');
      expect(header).toHaveStyle('width: 100%');
    });

    test('should have flex layout', () => {
      const {getByTestId} = render(<S.HeaderContainer data-testid="header" $themeDark={false} />);
      const header = getByTestId('header');
      expect(header).toHaveStyle('display: flex');
      expect(header).toHaveStyle('justify-content: space-between');
      expect(header).toHaveStyle('align-items: center');
    });

    test('should have correct padding', () => {
      const {getByTestId} = render(<S.HeaderContainer data-testid="header" $themeDark={false} />);
      const header = getByTestId('header');
      expect(header).toHaveStyle('padding: 8px 96px');
    });
  });

  describe('Nav', () => {
    test('should match the snapshot', () => {
      const {container} = render(<S.Nav />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should render as nav element', () => {
      const {container} = render(<S.Nav />);
      const element = container.firstChild as HTMLElement;
      expect(element.nodeName).toBe('NAV');
    });

    test('should have flex layout with gap', () => {
      const {getByTestId} = render(<S.Nav data-testid="nav" />);
      const nav = getByTestId('nav');
      expect(nav).toHaveStyle('display: flex');
      expect(nav).toHaveStyle('gap: 32px');
    });
  });

  describe('NavLink', () => {
    test('should match the snapshot', () => {
      const {container} = render(
        <BrowserRouter>
          <S.NavLink to="/">Home</S.NavLink>
        </BrowserRouter>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should render as anchor element', () => {
      const {getByText} = render(
        <BrowserRouter>
          <S.NavLink to="/">Home</S.NavLink>
        </BrowserRouter>,
      );
      const link = getByText('Home');
      expect(link.nodeName).toBe('A');
    });

    test('should have no text decoration', () => {
      const {getByText} = render(
        <BrowserRouter>
          <S.NavLink to="/">Home</S.NavLink>
        </BrowserRouter>,
      );
      const link = getByText('Home');
      expect(link).toHaveStyle('text-decoration: none');
    });

    test('should have correct href attribute', () => {
      const {getByText} = render(
        <BrowserRouter>
          <S.NavLink to="/skills">Skills</S.NavLink>
        </BrowserRouter>,
      );
      const link = getByText('Skills');
      expect(link).toHaveAttribute('href', '/skills');
    });
  });

  describe('ButtonsContainer', () => {
    test('should match the snapshot', () => {
      const {container} = render(<S.ButtonsContainer />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should render as div element', () => {
      const {container} = render(<S.ButtonsContainer />);
      const element = container.firstChild as HTMLElement;
      expect(element.nodeName).toBe('DIV');
    });

    test('should have flex layout', () => {
      const {getByTestId} = render(<S.ButtonsContainer data-testid="buttons" />);
      const container = getByTestId('buttons');
      expect(container).toHaveStyle('display: flex');
      expect(container).toHaveStyle('justify-content: center');
      expect(container).toHaveStyle('align-items: center');
    });

    test('should have correct gap', () => {
      const {getByTestId} = render(<S.ButtonsContainer data-testid="buttons" />);
      const container = getByTestId('buttons');
      expect(container).toHaveStyle('gap: 16px');
    });
  });

  describe('ThemeToggleButton', () => {
    test('should match the snapshot', () => {
      const MockIcon = () => <svg />;
      const {container} = render(<S.ThemeToggleButton icon={MockIcon} $themeDark={false} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should apply light theme icon color', () => {
      const MockIcon = (props: any) => <svg data-testid="icon" {...props} />;
      const {getByTestId} = render(<S.ThemeToggleButton icon={MockIcon} $themeDark={false} />);
      const icon = getByTestId('icon');
      expect(icon).toHaveAttribute('fill', '#000000');
    });

    test('should apply dark theme icon color', () => {
      const MockIcon = (props: any) => <svg data-testid="icon" {...props} />;
      const {getByTestId} = render(<S.ThemeToggleButton icon={MockIcon} $themeDark={true} />);
      const icon = getByTestId('icon');
      expect(icon).toHaveAttribute('fill', '#ffffff');
    });

    test('should have correct icon dimensions', () => {
      const MockIcon = (props: any) => <svg data-testid="icon" {...props} />;
      const {getByTestId} = render(<S.ThemeToggleButton icon={MockIcon} $themeDark={false} />);
      const icon = getByTestId('icon');
      expect(icon).toHaveAttribute('width', '24');
      expect(icon).toHaveAttribute('height', '24');
    });
  });

  describe('LogoButton', () => {
    test('should match the snapshot', () => {
      const MockIcon = () => <svg />;
      const {container} = render(<S.LogoButton icon={MockIcon} $isActivated={false} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should have pointer cursor when not activated', () => {
      const MockIcon = () => <svg />;
      const {getByTestId} = render(
        <S.LogoButton data-testid="logo" icon={MockIcon} $isActivated={false} />,
      );
      const button = getByTestId('logo');
      expect(button).toHaveStyle('cursor: pointer');
    });

    test('should have default cursor when activated', () => {
      const MockIcon = () => <svg />;
      const {getByTestId} = render(
        <S.LogoButton data-testid="logo" icon={MockIcon} $isActivated={true} />,
      );
      const button = getByTestId('logo');
      expect(button).toHaveStyle('cursor: default');
    });

    test('should have pointer-events none when activated', () => {
      const MockIcon = () => <svg />;
      const {getByTestId} = render(
        <S.LogoButton data-testid="logo" icon={MockIcon} $isActivated={true} />,
      );
      const button = getByTestId('logo');
      expect(button).toHaveStyle('pointer-events: none');
    });

    test('should have pointer-events auto when not activated', () => {
      const MockIcon = () => <svg />;
      const {getByTestId} = render(
        <S.LogoButton data-testid="logo" icon={MockIcon} $isActivated={false} />,
      );
      const button = getByTestId('logo');
      expect(button).toHaveStyle('pointer-events: auto');
    });

    test('should have correct icon dimensions', () => {
      const MockIcon = (props: any) => <svg data-testid="icon" {...props} />;
      const {getByTestId} = render(<S.LogoButton icon={MockIcon} $isActivated={false} />);
      const icon = getByTestId('icon');
      expect(icon).toHaveAttribute('width', '48');
      expect(icon).toHaveAttribute('height', '48');
    });
  });

  describe('TextHeader', () => {
    test('should match the snapshot with active state', () => {
      const {container} = render(<S.TextHeader $themeDark={false} $isActivated={true} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match the snapshot with inactive state', () => {
      const {container} = render(<S.TextHeader $themeDark={false} $isActivated={false} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should apply active color in light theme', () => {
      const {getByTestId} = render(
        <S.TextHeader data-testid="text" $themeDark={false} $isActivated={true} />,
      );
      const text = getByTestId('text');
      expect(text).toHaveStyle('color: #000000');
    });

    test('should apply inactive color in light theme', () => {
      const {getByTestId} = render(
        <S.TextHeader data-testid="text" $themeDark={false} $isActivated={false} />,
      );
      const text = getByTestId('text');
      expect(text).toHaveStyle('color: #8f95a3');
    });

    test('should apply active color in dark theme', () => {
      const {getByTestId} = render(
        <S.TextHeader data-testid="text" $themeDark={true} $isActivated={true} />,
      );
      const text = getByTestId('text');
      expect(text).toHaveStyle('color: #ffffff');
    });

    test('should apply inactive color in dark theme', () => {
      const {getByTestId} = render(
        <S.TextHeader data-testid="text" $themeDark={true} $isActivated={false} />,
      );
      const text = getByTestId('text');
      expect(text).toHaveStyle('color: #b9bcc4');
    });

    test('should have pointer cursor when not activated', () => {
      const {getByTestId} = render(
        <S.TextHeader data-testid="text" $themeDark={false} $isActivated={false} />,
      );
      const text = getByTestId('text');
      expect(text).toHaveStyle('cursor: pointer');
    });

    test('should have default cursor when activated', () => {
      const {getByTestId} = render(
        <S.TextHeader data-testid="text" $themeDark={false} $isActivated={true} />,
      );
      const text = getByTestId('text');
      expect(text).toHaveStyle('cursor: default');
    });
  });
});
