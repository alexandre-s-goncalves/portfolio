import {describe, test, expect} from 'vitest';
import {namespaces} from '../../i18n.constants';
import {en} from './translation';

describe('English Translation Content Assertions', () => {
  const homeName = namespaces.home.name;
  const homeKeys = namespaces.home.keys;
  const skillsName = namespaces.skills.name;
  const skillsKeys = namespaces.skills.keys;
  const projectsName = namespaces.projects.name;
  const projectsKeys = namespaces.projects.keys;
  const aboutName = namespaces.about.name;
  const aboutKeys = namespaces.about.keys;
  const notFoundName = namespaces.notFound.name;
  const notFoundKeys = namespaces.notFound.keys;
  const headerName = namespaces.header.name;
  const headerKeys = namespaces.header.keys;
  const footerName = namespaces.footer.name;
  const footerKeys = namespaces.footer.keys;

  test('should verify that namespaces contain all required keys', () => {
    expect(en).toHaveProperty(homeName);
    expect(en[homeName]).toHaveProperty(homeKeys.title);

    expect(en).toHaveProperty(skillsName);
    expect(en[skillsName]).toHaveProperty(skillsKeys.title);

    expect(en).toHaveProperty(projectsName);
    expect(en[projectsName]).toHaveProperty(projectsKeys.title);

    expect(en).toHaveProperty(aboutName);
    expect(en[aboutName]).toHaveProperty(aboutKeys.title);

    expect(en).toHaveProperty(notFoundName);
    expect(en[notFoundName]).toHaveProperty(notFoundKeys.title);
    expect(en[notFoundName]).toHaveProperty(notFoundKeys.message);

    expect(en).toHaveProperty(headerName);
    expect(en[headerName]).toHaveProperty(headerKeys.navHome);
    expect(en[headerName]).toHaveProperty(headerKeys.navSkills);
    expect(en[headerName]).toHaveProperty(headerKeys.navProjects);
    expect(en[headerName]).toHaveProperty(headerKeys.navAbout);
    expect(en[headerName]).toHaveProperty(headerKeys.logoAlt);

    expect(en).toHaveProperty(footerName);
    expect(en[footerName]).toHaveProperty(footerKeys.bio);
    expect(en[footerName]).toHaveProperty(footerKeys.contactTitle);
    expect(en[footerName]).toHaveProperty(footerKeys.location);
    expect(en[footerName]).toHaveProperty(footerKeys.rights);
    expect(en[footerName]).toHaveProperty(footerKeys.builtWith);
  });

  test('should ensure all english strings are valid and filled', () => {
    expect(typeof en[homeName].title).toBe('string');
    expect(en[homeName].title.length).toBeGreaterThan(0);

    expect(typeof en[headerName].navHome).toBe('string');
    expect(en[headerName].navHome.length).toBeGreaterThan(0);

    expect(typeof en[footerName].bio).toBe('string');
    expect(en[footerName].bio.length).toBeGreaterThan(0);
  });

  test('should lock exact official text values for english language', () => {
    expect(en[homeName].title).toBe('Home Page');
    expect(en[skillsName].title).toBe('Skills Page');
    expect(en[projectsName].title).toBe('Projects Page');
    expect(en[aboutName].title).toBe('About Page');
    expect(en[notFoundName].title).toBe('404');
    expect(en[notFoundName].message).toBe('Page not found');

    expect(en[headerName].navHome).toBe('Home');
    expect(en[headerName].navSkills).toBe('Skills');
    expect(en[headerName].navProjects).toBe('Projects');
    expect(en[headerName].navAbout).toBe('About');
    expect(en[headerName].logoAlt).toBe('Portfolio logo');

    expect(en[footerName].bio).toBe(
      'Developer passionate about technology with experience in React.js and React Native. Focused on creating elegant and efficient solutions.',
    );
    expect(en[footerName].contactTitle).toBe('Contact');
    expect(en[footerName].location).toBe('São Paulo, Brazil');
    expect(en[footerName].rights).toBe('All rights reserved.');
    expect(en[footerName].builtWith).toBe('Built with');
  });
});
