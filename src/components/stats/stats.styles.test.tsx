import React from 'react';
import {render} from '@testing-library/react';
import * as S from './stats.styles';

describe('stats.styles', () => {
  describe('StatsContainer', () => {
    test('should match the snapshot with light theme', () => {
      const {container} = render(<S.StatsContainer $themeDark={false} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match the snapshot with dark theme', () => {
      const {container} = render(<S.StatsContainer $themeDark={true} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should render as section element', () => {
      const {container} = render(<S.StatsContainer $themeDark={false} />);
      expect(container.firstChild?.nodeName).toBe('SECTION');
    });
  });

  describe('StatItem', () => {
    test('should match the snapshot', () => {
      const {container} = render(<S.StatItem />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should render as div element', () => {
      const {container} = render(<S.StatItem />);
      expect(container.firstChild?.nodeName).toBe('DIV');
    });
  });

  describe('StatNumber', () => {
    test('should match the snapshot with light theme', () => {
      const {container} = render(<S.StatNumber $themeDark={false}>10+</S.StatNumber>);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match the snapshot with dark theme', () => {
      const {container} = render(<S.StatNumber $themeDark={true}>10+</S.StatNumber>);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should render as h2 element', () => {
      const {container} = render(<S.StatNumber $themeDark={false}>10+</S.StatNumber>);
      expect(container.firstChild?.nodeName).toBe('H2');
    });
  });

  describe('StatLabel', () => {
    test('should match the snapshot with light theme', () => {
      const {container} = render(<S.StatLabel $themeDark={false}>Projects</S.StatLabel>);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match the snapshot with dark theme', () => {
      const {container} = render(<S.StatLabel $themeDark={true}>Projects</S.StatLabel>);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should render as p element', () => {
      const {container} = render(<S.StatLabel $themeDark={false}>Projects</S.StatLabel>);
      expect(container.firstChild?.nodeName).toBe('P');
    });
  });
});
