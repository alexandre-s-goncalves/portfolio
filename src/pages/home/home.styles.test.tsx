import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as S from './home.styles';
import EmailSVG from 'assets/icons/iEmail.svg';
import GithubSVG from 'assets/icons/iGithub.svg';
import LinkedinSVG from 'assets/icons/iLinkedinName.svg';

describe('home.styles', () => {
  test('PageWrapper should have flex display', () => {
    const {container} = render(<S.PageWrapper />);
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
  });

  test('Container should have correct flex layout', () => {
    const {container} = render(<S.Container />);
    const el = container.firstChild as Element;
    expect(el).toHaveStyleRule('display', 'flex');
    expect(el).toHaveStyleRule('flex-direction', 'column');
    expect(el).toHaveStyleRule('align-items', 'center');
    expect(el).toHaveStyleRule('width', '100%');
  });

  test('ContentWrapper should have flex layout with gap', () => {
    const {container} = render(<S.ContentWrapper />);
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
  });

  test('Greeting should render text', () => {
    const {container} = render(<S.Greeting>Hello</S.Greeting>);
    expect(container.firstChild).toBeInTheDocument();
  });

  test('Name light theme snapshot', () => {
    const {container} = render(<S.Name $themeDark={false}>Name</S.Name>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Name dark theme snapshot', () => {
    const {container} = render(<S.Name $themeDark={true}>Name</S.Name>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Role should render correctly', () => {
    const {container} = render(<S.Role>Developer</S.Role>);
    expect(container.firstChild).toBeInTheDocument();
  });

  test('Description should have text align center', () => {
    const {container} = render(<S.Description>Description text</S.Description>);
    expect(container.firstChild).toHaveStyleRule('text-align', 'center');
  });

  test('Tag should have border radius and padding', () => {
    const {container} = render(<S.Tag>React</S.Tag>);
    expect(container.firstChild).toHaveStyleRule('border-radius', '8px');
    expect(container.firstChild).toHaveStyleRule('padding', '6px 12px');
  });

  test('TagText should render inside Tag', () => {
    const {getByText} = render(
      <S.Tag>
        <S.TagText>React.js</S.TagText>
      </S.Tag>,
    );
    expect(getByText('React.js')).toBeInTheDocument();
  });

  test('SocialLink should have inline-flex display', () => {
    const {container} = render(<S.SocialLink href="https://github.com">Link</S.SocialLink>);
    expect(container.firstChild).toHaveStyleRule('display', 'inline-flex');
  });

  test('SocialLink should scale svg on hover', () => {
    const {container} = render(<S.SocialLink href="https://github.com">Link</S.SocialLink>);
    expect(container.firstChild).toHaveStyleRule('transform', 'scale(1.1)', {
      modifier: ':hover svg',
    });
  });

  test('SocialLinks should have flex layout', () => {
    const {container} = render(<S.SocialLinks />);
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
  });

  test('ContactButton light theme snapshot', () => {
    const {container} = render(<S.ContactButton $themeDark={false}>Contact</S.ContactButton>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('ContactButton dark theme snapshot', () => {
    const {container} = render(<S.ContactButton $themeDark={true}>Contact</S.ContactButton>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('ContactButton should have transparent background', () => {
    const {container} = render(<S.ContactButton>Contact</S.ContactButton>);
    expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
  });

  test('ViewProjectsButton light theme snapshot', () => {
    const {container} = render(
      <S.ViewProjectsButton $themeDark={false}>View</S.ViewProjectsButton>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('ViewProjectsButton dark theme snapshot', () => {
    const {container} = render(<S.ViewProjectsButton $themeDark={true}>View</S.ViewProjectsButton>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('EmailIcon light theme snapshot', () => {
    const {container} = render(<S.EmailIcon $themeDark={false} icon={EmailSVG} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('EmailIcon dark theme snapshot', () => {
    const {container} = render(<S.EmailIcon $themeDark={true} icon={EmailSVG} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('GithubIcon light theme snapshot', () => {
    const {container} = render(<S.GithubIcon $themeDark={false} icon={GithubSVG} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('GithubIcon dark theme snapshot', () => {
    const {container} = render(<S.GithubIcon $themeDark={true} icon={GithubSVG} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('LinkedinIcon should render', () => {
    const {container} = render(<S.LinkedinIcon icon={LinkedinSVG} />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
