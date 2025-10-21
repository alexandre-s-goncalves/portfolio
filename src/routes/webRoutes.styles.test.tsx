import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import {WebRoutesContainer} from './webRoutes.styles';

describe('webRoutes.styles', () => {
  test('WebRoutesContainer DEVE ser igual ao snapshot', () => {
    const {container} = render(<WebRoutesContainer />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
