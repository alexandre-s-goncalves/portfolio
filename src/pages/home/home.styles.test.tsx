import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as S from './home.styles';
import EmailSVG from 'assets/icons/iEmail.svg';
import GithubSVG from 'assets/icons/iGithub.svg';

describe('home.styles', () => {
  describe('Container', () => {
    test('should match the snapshot', () => {
      const {container} = render(<S.Container />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('Name', () => {
    test('should match the snapshot with light theme', () => {
      const {container} = render(<S.Name $themeDark={false} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match the snapshot with dark theme', () => {
      const {container} = render(<S.Name $themeDark={true} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('ContactButton', () => {
    test('should match the snapshot with light theme', () => {
      const {container} = render(<S.ContactButton $themeDark={false}>Contact</S.ContactButton>);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match the snapshot with dark theme', () => {
      const {container} = render(<S.ContactButton $themeDark={true}>Contact</S.ContactButton>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('EmailIcon', () => {
    test('should render with light theme', () => {
      const {container} = render(<S.EmailIcon $themeDark={false} icon={EmailSVG} />);
      expect(container.firstChild).toBeInTheDocument();
    });

    test('should render with dark theme', () => {
      const {container} = render(<S.EmailIcon $themeDark={true} icon={EmailSVG} />);
      expect(container.firstChild).toBeInTheDocument();
    });
  });

  describe('GithubIcon', () => {
    test('should render with light theme', () => {
      const {container} = render(<S.GithubIcon $themeDark={false} icon={GithubSVG} />);
      expect(container.firstChild).toBeInTheDocument();
    });

    test('should render with dark theme', () => {
      const {container} = render(<S.GithubIcon $themeDark={true} icon={GithubSVG} />);
      expect(container.firstChild).toBeInTheDocument();
    });
  });

  describe('ViewProjectsButton', () => {
    test('should match the snapshot with light theme', () => {
      const {container} = render(
        <S.ViewProjectsButton $themeDark={false}>View Projects</S.ViewProjectsButton>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match the snapshot with dark theme', () => {
      const {container} = render(
        <S.ViewProjectsButton $themeDark={true}>View Projects</S.ViewProjectsButton>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
