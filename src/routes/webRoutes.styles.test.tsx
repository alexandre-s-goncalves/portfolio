import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import {WebRoutesContainer} from './webRoutes.styles';

describe('webRoutes.styles', () => {
  test('WebRoutesContainer should match the snapshot', () => {
    const {container} = render(<WebRoutesContainer />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
