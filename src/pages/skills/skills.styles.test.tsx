import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as S from './skills.styles';

describe('skills.styles', () => {
  test('Container should match the snapshot', () => {
    const {container} = render(<S.Container />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Title should match the snapshot', () => {
    const {container} = render(<S.Title />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
