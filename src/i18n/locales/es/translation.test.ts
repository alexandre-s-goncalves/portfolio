import {describe, test, expect} from 'vitest';
import {namespaces} from '../../i18n.constants';
import {es} from './translation';

describe('Spanish Translation Content Assertions', () => {
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
  const languageSelectorName = namespaces.components.languageSelector;

  test('should verify that namespaces contain all required keys', () => {
    expect(es).toHaveProperty(homeName);
    expect(es[homeName]).toHaveProperty(homeKeys.title);

    expect(es).toHaveProperty(skillsName);
    expect(es[skillsName]).toHaveProperty(skillsKeys.title);

    expect(es).toHaveProperty(projectsName);
    expect(es[projectsName]).toHaveProperty(projectsKeys.title);

    expect(es).toHaveProperty(aboutName);
    expect(es[aboutName]).toHaveProperty(aboutKeys.title);

    expect(es).toHaveProperty(notFoundName);
    expect(es[notFoundName]).toHaveProperty(notFoundKeys.title);
    expect(es[notFoundName]).toHaveProperty(notFoundKeys.message);

    expect(es).toHaveProperty(headerName);
    expect(es[headerName]).toHaveProperty(headerKeys.navHome);
    expect(es[headerName]).toHaveProperty(headerKeys.navSkills);
    expect(es[headerName]).toHaveProperty(headerKeys.navProjects);
    expect(es[headerName]).toHaveProperty(headerKeys.navAbout);
    expect(es[headerName]).toHaveProperty(headerKeys.logoAlt);

    expect(es).toHaveProperty(footerName);
    expect(es[footerName]).toHaveProperty(footerKeys.bio);
    expect(es[footerName]).toHaveProperty(footerKeys.contactTitle);
    expect(es[footerName]).toHaveProperty(footerKeys.location);
    expect(es[footerName]).toHaveProperty(footerKeys.rights);
    expect(es[footerName]).toHaveProperty(footerKeys.builtWith);
  });

  test('should ensure all spanish strings are valid and filled', () => {
    expect(typeof es[homeName].title).toBe('string');
    expect(es[homeName].title.length).toBeGreaterThan(0);

    expect(typeof es[headerName].navHome).toBe('string');
    expect(es[headerName].navHome.length).toBeGreaterThan(0);

    expect(typeof es[footerName].bio).toBe('string');
    expect(es[footerName].bio.length).toBeGreaterThan(0);
  });

  test('should lock exact official text values for spanish language', () => {
    expect(es[homeName].title).toBe('Página de Inicio');
    expect(es[skillsName].title).toBe('Página de Habilidades');
    expect(es[projectsName].title).toBe('Página de Proyectos');
    expect(es[aboutName].title).toBe('Página Sobre mí');
    expect(es[notFoundName].title).toBe('404');
    expect(es[notFoundName].message).toBe('Página no encontrada');

    expect(es[headerName].navHome).toBe('Inicio');
    expect(es[headerName].navSkills).toBe('Habilidades');
    expect(es[headerName].navProjects).toBe('Proyectos');
    expect(es[headerName].navAbout).toBe('Sobre mí');
    expect(es[headerName].logoAlt).toBe('Logotipo del portafolio');

    expect(es[languageSelectorName].portuguese).toBe('Portugués');
    expect(es[languageSelectorName].altFlagBrazil).toBe('Bandera de Brasil');
    expect(es[languageSelectorName].english).toBe('Inglés');
    expect(es[languageSelectorName].altFlagEUA).toBe('Bandera de EE. UU.');
    expect(es[languageSelectorName].french).toBe('Francés');
    expect(es[languageSelectorName].altFragFrance).toBe('Bandera de Francia');
    expect(es[languageSelectorName].spanish).toBe('Español');

    expect(es[footerName].bio).toBe(
      'Desarrollador apasionado por la tecnología con experiencia en React.js y React Native. Enfocado en crear soluciones elegantes y eficientes.',
    );
    expect(es[footerName].contactTitle).toBe('Contacto');
    expect(es[footerName].location).toBe('São Paulo, Brasil');
    expect(es[footerName].rights).toBe('Todos los derechos reservados.');
    expect(es[footerName].builtWith).toBe('Construido con');
  });
});
