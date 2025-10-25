import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as S from './dropdown.styles';

describe('dropdown.styles', () => {
  const Generic = () => <svg />;

  test('ContainerOption should match the snapshot', () => {
    const {container} = render(<S.ContainerOption />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('DropdownContainer should match the snapshot', () => {
    const {container} = render(<S.DropdownContainer />);
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('Flag', () => {
    test('should match snapshot when clicked', () => {
      const {container} = render(<S.Flag icon={Generic} $clicked />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match snapshot when not clicked', () => {
      const {container} = render(<S.Flag icon={Generic} $clicked={false} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('IconGlobe', () => {
    test('should match snapshot when clicked and themed', () => {
      const {container} = render(<S.IconGlobe $clicked $theme />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match snapshot when clicked and not themed', () => {
      const {container} = render(<S.IconGlobe $clicked $theme={false} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match snapshot when not clicked and themed', () => {
      const {container} = render(<S.IconGlobe $clicked={false} $theme />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match snapshot when not clicked and not themed', () => {
      const {container} = render(<S.IconGlobe $clicked={false} $theme={false} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('Menu', () => {
    test('should match snapshot when open and themed', () => {
      const {container} = render(<S.Menu $open $theme />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match snapshot when open and not themed', () => {
      const {container} = render(<S.Menu $open $theme={false} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match snapshot when closed and themed', () => {
      const {container} = render(<S.Menu $open={false} $theme />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match snapshot when closed and not themed', () => {
      const {container} = render(<S.Menu $open={false} $theme={false} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('MenuItem', () => {
    test('should match snapshot when active and themed', () => {
      const {container} = render(<S.MenuItem $active $theme />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match snapshot when active and not themed', () => {
      const {container} = render(<S.MenuItem $active $theme={false} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match snapshot when not active and themed', () => {
      const {container} = render(<S.MenuItem $active={false} $theme />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match snapshot when not active and not themed', () => {
      const {container} = render(<S.MenuItem $active={false} $theme={false} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('Select', () => {
    test('should match snapshot when clicked and themed', () => {
      const {container} = render(<S.Select $clicked $theme />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match snapshot when clicked and not themed', () => {
      const {container} = render(<S.Select $clicked $theme={false} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match snapshot when not clicked and themed', () => {
      const {container} = render(<S.Select $clicked={false} $theme />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match snapshot when not clicked and not themed', () => {
      const {container} = render(<S.Select $clicked={false} $theme={false} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  test('Selected should match snapshot', () => {
    const {container} = render(<S.Selected />);
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('Texto', () => {
    test('should match snapshot when themed, active and clicked', () => {
      const {container} = render(<S.Texto $theme $active $clicked />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match snapshot when not themed, active and clicked', () => {
      const {container} = render(<S.Texto $theme={false} $active $clicked />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match snapshot when themed, not active and not clicked', () => {
      const {container} = render(<S.Texto $theme $active={false} $clicked={false} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match snapshot when not themed, not active and not clicked', () => {
      const {container} = render(<S.Texto $theme={false} $active={false} $clicked={false} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
