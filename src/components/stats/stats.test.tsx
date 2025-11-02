import React from 'react';
import {render, screen} from '@testing-library/react';
import {Stats} from './stats';

jest.mock('context/ThemeContext', () => ({
  useTheme: () => ({themeDark: false}),
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        projects: 'Completed Projects',
        experience: 'Years of Experience',
        technologies: 'Technologies',
      };
      return translations[key];
    },
  }),
}));

describe('Stats', () => {
  test('should render all three stats items', () => {
    render(<Stats />);

    expect(screen.getByText('10+')).toBeInTheDocument();
    expect(screen.getByText('3+')).toBeInTheDocument();
    expect(screen.getByText('15+')).toBeInTheDocument();
  });

  test('should render all labels', () => {
    render(<Stats />);

    expect(screen.getByText('Completed Projects')).toBeInTheDocument();
    expect(screen.getByText('Years of Experience')).toBeInTheDocument();
    expect(screen.getByText('Technologies')).toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const {container} = render(<Stats />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
