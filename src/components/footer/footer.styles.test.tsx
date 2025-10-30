import React from 'react';
import {render} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as S from './footer.styles';

describe('footer.styles', () => {
  describe('FooterContainer', () => {
    test('should match the snapshot', () => {
      const {container} = render(<S.FooterContainer $themeDark={false} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should render as footer element', () => {
      const {container} = render(<S.FooterContainer $themeDark={false} />);
      const element = container.firstChild as HTMLElement;
      expect(element.nodeName).toBe('FOOTER');
    });

    test('should apply light theme background and border color', () => {
      const {getByTestId} = render(<S.FooterContainer data-testid="footer" $themeDark={false} />);
      const footer = getByTestId('footer');
      expect(footer).toHaveStyle('background-color: #ffffff');
      expect(footer).toHaveStyle('border-top: 1px solid #e5e5e5');
    });

    test('should apply dark theme background and border color', () => {
      const {getByTestId} = render(<S.FooterContainer data-testid="footer" $themeDark={true} />);
      const footer = getByTestId('footer');
      expect(footer).toHaveStyle('background-color: #0A0A0A');
      expect(footer).toHaveStyle('border-top: 1px solid #262626');
    });

    test('should have full width', () => {
      const {getByTestId} = render(<S.FooterContainer data-testid="footer" $themeDark={false} />);
      const footer = getByTestId('footer');
      expect(footer).toHaveStyle('width: 100%');
    });

    test('should have flex column layout', () => {
      const {getByTestId} = render(<S.FooterContainer data-testid="footer" $themeDark={false} />);
      const footer = getByTestId('footer');
      expect(footer).toHaveStyle('display: flex');
      expect(footer).toHaveStyle('flex-direction: column');
    });

    test('should have correct padding', () => {
      const {getByTestId} = render(<S.FooterContainer data-testid="footer" $themeDark={false} />);
      const footer = getByTestId('footer');
      expect(footer).toHaveStyle('padding: 32px 120px');
    });
  });

  describe('ContentWrapper', () => {
    test('should match the snapshot', () => {
      const {container} = render(<S.ContentWrapper $themeDark={false} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should render as div element', () => {
      const {container} = render(<S.ContentWrapper $themeDark={false} />);
      const element = container.firstChild as HTMLElement;
      expect(element.nodeName).toBe('DIV');
    });

    test('should have flex layout with gap', () => {
      const {getByTestId} = render(<S.ContentWrapper data-testid="wrapper" $themeDark={false} />);
      const wrapper = getByTestId('wrapper');
      expect(wrapper).toHaveStyle('display: flex');
      expect(wrapper).toHaveStyle('gap: 150px');
    });

    test('should apply light theme border color', () => {
      const {getByTestId} = render(<S.ContentWrapper data-testid="wrapper" $themeDark={false} />);
      const wrapper = getByTestId('wrapper');
      expect(wrapper).toHaveStyle('border-bottom: 1px solid #e5e5e5');
    });

    test('should apply dark theme border color', () => {
      const {getByTestId} = render(<S.ContentWrapper data-testid="wrapper" $themeDark={true} />);
      const wrapper = getByTestId('wrapper');
      expect(wrapper).toHaveStyle('border-bottom: 1px solid #262626');
    });

    test('should have full width', () => {
      const {getByTestId} = render(<S.ContentWrapper data-testid="wrapper" $themeDark={false} />);
      const wrapper = getByTestId('wrapper');
      expect(wrapper).toHaveStyle('width: 100%');
    });

    test('should have correct padding bottom', () => {
      const {getByTestId} = render(<S.ContentWrapper data-testid="wrapper" $themeDark={false} />);
      const wrapper = getByTestId('wrapper');
      expect(wrapper).toHaveStyle('padding-bottom: 32px');
    });
  });

  describe('InfoSection', () => {
    test('should match the snapshot', () => {
      const {container} = render(<S.InfoSection />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should render as div element', () => {
      const {container} = render(<S.InfoSection />);
      const element = container.firstChild as HTMLElement;
      expect(element.nodeName).toBe('DIV');
    });

    test('should have flex column layout', () => {
      const {getByTestId} = render(<S.InfoSection data-testid="info" />);
      const section = getByTestId('info');
      expect(section).toHaveStyle('display: flex');
      expect(section).toHaveStyle('flex-direction: column');
    });

    test('should have correct gap', () => {
      const {getByTestId} = render(<S.InfoSection data-testid="info" />);
      const section = getByTestId('info');
      expect(section).toHaveStyle('gap: 16px');
    });

    test('should have max-width constraint', () => {
      const {getByTestId} = render(<S.InfoSection data-testid="info" />);
      const section = getByTestId('info');
      expect(section).toHaveStyle('max-width: 500px');
    });

    test('should have flex: 1', () => {
      const {getByTestId} = render(<S.InfoSection data-testid="info" />);
      const section = getByTestId('info');
      expect(section).toHaveStyle('flex: 1');
    });
  });

  describe('BrandTitle', () => {
    test('should match the snapshot with light theme', () => {
      const {container} = render(<S.BrandTitle $themeDark={false}>Brand</S.BrandTitle>);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match the snapshot with dark theme', () => {
      const {container} = render(<S.BrandTitle $themeDark={true}>Brand</S.BrandTitle>);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should apply light theme color', () => {
      const {getByText} = render(<S.BrandTitle $themeDark={false}>Brand</S.BrandTitle>);
      const title = getByText('Brand');
      expect(title).toHaveStyle('color: #0a0a0a');
    });

    test('should apply dark theme color', () => {
      const {getByText} = render(<S.BrandTitle $themeDark={true}>Brand</S.BrandTitle>);
      const title = getByText('Brand');
      expect(title).toHaveStyle('color: #F0F2F1');
    });

    test('should have flex layout with gap', () => {
      const {getByText} = render(<S.BrandTitle $themeDark={false}>Brand</S.BrandTitle>);
      const title = getByText('Brand');
      expect(title).toHaveStyle('display: flex');
      expect(title).toHaveStyle('align-items: center');
      expect(title).toHaveStyle('gap: 16px');
    });
  });

  describe('BioText', () => {
    test('should match the snapshot with light theme', () => {
      const {container} = render(<S.BioText $themeDark={false}>Bio text</S.BioText>);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match the snapshot with dark theme', () => {
      const {container} = render(<S.BioText $themeDark={true}>Bio text</S.BioText>);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should apply light theme color', () => {
      const {getByText} = render(<S.BioText $themeDark={false}>Bio text</S.BioText>);
      const text = getByText('Bio text');
      expect(text).toHaveStyle('color: #737373');
    });

    test('should apply dark theme color', () => {
      const {getByText} = render(<S.BioText $themeDark={true}>Bio text</S.BioText>);
      const text = getByText('Bio text');
      expect(text).toHaveStyle('color: #a3a3a3');
    });
  });

  describe('ContactSection', () => {
    test('should match the snapshot', () => {
      const {container} = render(<S.ContactSection />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should render as div element', () => {
      const {container} = render(<S.ContactSection />);
      const element = container.firstChild as HTMLElement;
      expect(element.nodeName).toBe('DIV');
    });

    test('should have flex column layout', () => {
      const {getByTestId} = render(<S.ContactSection data-testid="contact" />);
      const section = getByTestId('contact');
      expect(section).toHaveStyle('display: flex');
      expect(section).toHaveStyle('flex-direction: column');
    });

    test('should have correct gap', () => {
      const {getByTestId} = render(<S.ContactSection data-testid="contact" />);
      const section = getByTestId('contact');
      expect(section).toHaveStyle('gap: 4px');
    });

    test('should have flex: 1', () => {
      const {getByTestId} = render(<S.ContactSection data-testid="contact" />);
      const section = getByTestId('contact');
      expect(section).toHaveStyle('flex: 1');
    });
  });

  describe('ContactTitle', () => {
    test('should match the snapshot with light theme', () => {
      const {container} = render(<S.ContactTitle $themeDark={false}>Contact</S.ContactTitle>);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match the snapshot with dark theme', () => {
      const {container} = render(<S.ContactTitle $themeDark={true}>Contact</S.ContactTitle>);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should apply light theme color', () => {
      const {getByText} = render(<S.ContactTitle $themeDark={false}>Contact</S.ContactTitle>);
      const title = getByText('Contact');
      expect(title).toHaveStyle('color: #0a0a0a');
    });

    test('should apply dark theme color', () => {
      const {getByText} = render(<S.ContactTitle $themeDark={true}>Contact</S.ContactTitle>);
      const title = getByText('Contact');
      expect(title).toHaveStyle('color: #F0F2F1');
    });

    test('should have margin bottom', () => {
      const {getByText} = render(<S.ContactTitle $themeDark={false}>Contact</S.ContactTitle>);
      const title = getByText('Contact');
      expect(title).toHaveStyle('margin-bottom: 4px');
    });
  });

  describe('ContactText', () => {
    test('should match the snapshot with light theme', () => {
      const {container} = render(<S.ContactText $themeDark={false}>Email</S.ContactText>);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match the snapshot with dark theme', () => {
      const {container} = render(<S.ContactText $themeDark={true}>Email</S.ContactText>);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should apply light theme color', () => {
      const {getByText} = render(<S.ContactText $themeDark={false}>Email</S.ContactText>);
      const text = getByText('Email');
      expect(text).toHaveStyle('color: #737373');
    });

    test('should apply dark theme color', () => {
      const {getByText} = render(<S.ContactText $themeDark={true}>Email</S.ContactText>);
      const text = getByText('Email');
      expect(text).toHaveStyle('color: #a3a3a3');
    });
  });

  describe('SocialLinks', () => {
    test('should match the snapshot', () => {
      const {container} = render(<S.SocialLinks />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should render as div element', () => {
      const {container} = render(<S.SocialLinks />);
      const element = container.firstChild as HTMLElement;
      expect(element.nodeName).toBe('DIV');
    });

    test('should have flex layout', () => {
      const {getByTestId} = render(<S.SocialLinks data-testid="social" />);
      const links = getByTestId('social');
      expect(links).toHaveStyle('display: flex');
      expect(links).toHaveStyle('align-items: center');
    });

    test('should have correct gap', () => {
      const {getByTestId} = render(<S.SocialLinks data-testid="social" />);
      const links = getByTestId('social');
      expect(links).toHaveStyle('gap: 24px');
    });
  });

  describe('SocialLink', () => {
    test('should match the snapshot', () => {
      const {container} = render(<S.SocialLink href="#" />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should render as anchor element', () => {
      const {container} = render(<S.SocialLink href="#" />);
      const element = container.firstChild as HTMLElement;
      expect(element.nodeName).toBe('A');
    });

    test('should have flex layout centered', () => {
      const {getByTestId} = render(<S.SocialLink data-testid="link" href="#" />);
      const link = getByTestId('link');
      expect(link).toHaveStyle('display: flex');
      expect(link).toHaveStyle('align-items: center');
      expect(link).toHaveStyle('justify-content: center');
    });

    test('should have transition effect', () => {
      const {getByTestId} = render(<S.SocialLink data-testid="link" href="#" />);
      const link = getByTestId('link');
      expect(link).toHaveStyle('transition: transform 0.2s ease');
    });
  });

  describe('LogoIcon', () => {
    test('should match the snapshot', () => {
      const MockIcon = () => <svg />;
      const {container} = render(<S.LogoIcon icon={MockIcon} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should have correct icon dimensions', () => {
      const MockIcon = (props: any) => <svg data-testid="icon" {...props} />;
      const {getByTestId} = render(<S.LogoIcon icon={MockIcon} />);
      const icon = getByTestId('icon');
      expect(icon).toHaveAttribute('width', '32');
      expect(icon).toHaveAttribute('height', '32');
    });

    test('should have correct fill color', () => {
      const MockIcon = (props: any) => <svg data-testid="icon" {...props} />;
      const {getByTestId} = render(<S.LogoIcon icon={MockIcon} />);
      const icon = getByTestId('icon');
      expect(icon).toHaveAttribute('fill', '#000000');
    });
  });

  describe('HeartIcon', () => {
    test('should match the snapshot', () => {
      const {container} = render(<S.HeartIcon />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should have correct icon dimensions', () => {
      const {container} = render(<S.HeartIcon />);
      const icon = container.querySelector('svg');
      expect(icon).toHaveAttribute('width', '24');
      expect(icon).toHaveAttribute('height', '24');
    });

    test('should have correct color', () => {
      const {container} = render(<S.HeartIcon />);
      const icon = container.querySelector('svg');
      expect(icon).toHaveAttribute('fill', '#ef4444');
    });
  });

  describe('GithubIcon', () => {
    test('should match the snapshot with light theme', () => {
      const MockIcon = () => <svg />;
      const {container} = render(<S.GithubIcon icon={MockIcon} $themeDark={false} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match the snapshot with dark theme', () => {
      const MockIcon = () => <svg />;
      const {container} = render(<S.GithubIcon icon={MockIcon} $themeDark={true} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should apply light theme icon color', () => {
      const MockIcon = (props: any) => <svg data-testid="icon" {...props} />;
      const {getByTestId} = render(<S.GithubIcon icon={MockIcon} $themeDark={false} />);
      const icon = getByTestId('icon');
      expect(icon).toHaveAttribute('fill', '#000000');
    });

    test('should apply dark theme icon color', () => {
      const MockIcon = (props: any) => <svg data-testid="icon" {...props} />;
      const {getByTestId} = render(<S.GithubIcon icon={MockIcon} $themeDark={true} />);
      const icon = getByTestId('icon');
      expect(icon).toHaveAttribute('fill', '#a3a3a3');
    });

    test('should have correct icon dimensions', () => {
      const MockIcon = (props: any) => <svg data-testid="icon" {...props} />;
      const {getByTestId} = render(<S.GithubIcon icon={MockIcon} $themeDark={false} />);
      const icon = getByTestId('icon');
      expect(icon).toHaveAttribute('width', '24');
      expect(icon).toHaveAttribute('height', '24');
    });
  });

  describe('LinkedinIcon', () => {
    test('should match the snapshot', () => {
      const MockIcon = () => <svg />;
      const {container} = render(<S.LinkedinIcon icon={MockIcon} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should have correct icon dimensions', () => {
      const MockIcon = (props: any) => <svg data-testid="icon" {...props} />;
      const {getByTestId} = render(<S.LinkedinIcon icon={MockIcon} />);
      const icon = getByTestId('icon');
      expect(icon).toHaveAttribute('width', '24');
      expect(icon).toHaveAttribute('height', '24');
    });
  });

  describe('EmailIcon', () => {
    test('should match the snapshot with light theme', () => {
      const MockIcon = () => <svg />;
      const {container} = render(<S.EmailIcon icon={MockIcon} $themeDark={false} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match the snapshot with dark theme', () => {
      const MockIcon = () => <svg />;
      const {container} = render(<S.EmailIcon icon={MockIcon} $themeDark={true} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should apply light theme icon color', () => {
      const MockIcon = (props: any) => <svg data-testid="icon" {...props} />;
      const {getByTestId} = render(<S.EmailIcon icon={MockIcon} $themeDark={false} />);
      const icon = getByTestId('icon');
      expect(icon).toHaveAttribute('fill', '#000000');
    });

    test('should apply dark theme icon color', () => {
      const MockIcon = (props: any) => <svg data-testid="icon" {...props} />;
      const {getByTestId} = render(<S.EmailIcon icon={MockIcon} $themeDark={true} />);
      const icon = getByTestId('icon');
      expect(icon).toHaveAttribute('fill', '#a3a3a3');
    });

    test('should have correct icon dimensions', () => {
      const MockIcon = (props: any) => <svg data-testid="icon" {...props} />;
      const {getByTestId} = render(<S.EmailIcon icon={MockIcon} $themeDark={false} />);
      const icon = getByTestId('icon');
      expect(icon).toHaveAttribute('width', '32');
      expect(icon).toHaveAttribute('height', '32');
    });
  });

  describe('CopyrightContainer', () => {
    test('should match the snapshot', () => {
      const {container} = render(<S.CopyrightContainer />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should render as div element', () => {
      const {container} = render(<S.CopyrightContainer />);
      const element = container.firstChild as HTMLElement;
      expect(element.nodeName).toBe('DIV');
    });

    test('should have flex layout with space between', () => {
      const {getByTestId} = render(<S.CopyrightContainer data-testid="copyright" />);
      const container = getByTestId('copyright');
      expect(container).toHaveStyle('display: flex');
      expect(container).toHaveStyle('justify-content: space-between');
      expect(container).toHaveStyle('align-items: center');
    });

    test('should have correct padding', () => {
      const {getByTestId} = render(<S.CopyrightContainer data-testid="copyright" />);
      const container = getByTestId('copyright');
      expect(container).toHaveStyle('padding: 24px 0');
    });
  });

  describe('CopyrightText', () => {
    test('should match the snapshot with light theme', () => {
      const {container} = render(<S.CopyrightText $themeDark={false}>© 2025</S.CopyrightText>);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should match the snapshot with dark theme', () => {
      const {container} = render(<S.CopyrightText $themeDark={true}>© 2025</S.CopyrightText>);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should apply light theme color', () => {
      const {getByText} = render(<S.CopyrightText $themeDark={false}>© 2025</S.CopyrightText>);
      const text = getByText('© 2025');
      expect(text).toHaveStyle('color: #737373');
    });

    test('should apply dark theme color', () => {
      const {getByText} = render(<S.CopyrightText $themeDark={true}>© 2025</S.CopyrightText>);
      const text = getByText('© 2025');
      expect(text).toHaveStyle('color: #a3a3a3');
    });

    test('should have flex layout with gap', () => {
      const {getByText} = render(<S.CopyrightText $themeDark={false}>© 2025</S.CopyrightText>);
      const text = getByText('© 2025');
      expect(text).toHaveStyle('display: flex');
      expect(text).toHaveStyle('align-items: center');
      expect(text).toHaveStyle('gap: 4px');
    });
  });
});
