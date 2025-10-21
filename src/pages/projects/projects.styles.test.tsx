import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as S from './projects.styles';

describe('projects.styles', () => {
  test('Container DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.Container />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Title DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.Title />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
