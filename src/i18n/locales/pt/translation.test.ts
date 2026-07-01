import {describe, test, expect} from 'vitest';
import {namespaces} from '../../i18n.constants';
import {pt} from './translation';

describe('Portuguese Translation Content Assertions', () => {
  const navName = namespaces.navigation.name;
  const navKeys = namespaces.navigation.keys;
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
  const settingsName = namespaces.settings.name;
  const settingsKeys = namespaces.settings.keys;
  const languageSelectorName = namespaces.components.languageSelector;

  test('should verify that namespaces contain all required keys', () => {
    expect(pt).toHaveProperty(navName);
    expect(pt[navName]).toHaveProperty(navKeys.home);
    expect(pt[navName]).toHaveProperty(navKeys.skills);
    expect(pt[navName]).toHaveProperty(navKeys.projects);
    expect(pt[navName]).toHaveProperty(navKeys.about);
    expect(pt[navName]).toHaveProperty(navKeys.settings);

    expect(pt).toHaveProperty(homeName);
    expect(pt[homeName]).toHaveProperty(homeKeys.title);

    expect(pt).toHaveProperty(skillsName);
    expect(pt[skillsName]).toHaveProperty(skillsKeys.title);

    expect(pt).toHaveProperty(projectsName);
    expect(pt[projectsName]).toHaveProperty(projectsKeys.title);

    expect(pt).toHaveProperty(aboutName);
    expect(pt[aboutName]).toHaveProperty(aboutKeys.title);

    expect(pt).toHaveProperty(notFoundName);
    expect(pt[notFoundName]).toHaveProperty(notFoundKeys.title);
    expect(pt[notFoundName]).toHaveProperty(notFoundKeys.message);

    expect(pt).toHaveProperty(headerName);
    expect(pt[headerName]).toHaveProperty(headerKeys.logoAlt);
    expect(pt[headerName]).toHaveProperty(headerKeys.openMenuAlt);
    expect(pt[headerName]).toHaveProperty(headerKeys.closeMenuAlt);

    expect(pt).toHaveProperty(footerName);
    expect(pt[footerName]).toHaveProperty(footerKeys.bio);
    expect(pt[footerName]).toHaveProperty(footerKeys.contactTitle);
    expect(pt[footerName]).toHaveProperty(footerKeys.location);
    expect(pt[footerName]).toHaveProperty(footerKeys.rights);
    expect(pt[footerName]).toHaveProperty(footerKeys.builtWith);

    expect(pt).toHaveProperty(settingsName);
    expect(pt[settingsName]).toHaveProperty(settingsKeys.title);
    expect(pt[settingsName]).toHaveProperty(settingsKeys.langTitle);
    expect(pt[settingsName]).toHaveProperty(settingsKeys.langDesc);
    expect(pt[settingsName]).toHaveProperty(settingsKeys.themeTitle);
    expect(pt[settingsName]).toHaveProperty(settingsKeys.themeDesc);
  });

  test('should ensure all portuguese strings are valid and filled', () => {
    expect(typeof pt[navName].home).toBe('string');
    expect(pt[navName].home.length).toBeGreaterThan(0);
    expect(typeof pt[homeName].title).toBe('string');
    expect(pt[homeName].title.length).toBeGreaterThan(0);
    expect(typeof pt[footerName].bio).toBe('string');
    expect(pt[footerName].bio.length).toBeGreaterThan(0);
    expect(typeof pt[settingsName].title).toBe('string');
    expect(pt[settingsName].title.length).toBeGreaterThan(0);
  });

  test('should lock exact official text values for portuguese language', () => {
    expect(pt[navName].home).toBe('Início');
    expect(pt[navName].skills).toBe('Habilidades');
    expect(pt[navName].projects).toBe('Projetos');
    expect(pt[navName].about).toBe('Sobre');
    expect(pt[navName].settings).toBe('Ajustes');

    expect(pt[homeName].title).toBe('Página Início');
    expect(pt[skillsName].title).toBe('Página Habilidades');
    expect(pt[projectsName].title).toBe('Página Projetos');
    expect(pt[aboutName].title).toBe('Página Sobre');
    expect(pt[notFoundName].title).toBe('404');
    expect(pt[notFoundName].message).toBe('Página não encontrada');

    expect(pt[headerName].logoAlt).toBe('Logotipo do portfólio');
    expect(pt[headerName].openMenuAlt).toBe('Abrir menu');
    expect(pt[headerName].closeMenuAlt).toBe('Fechar menu');

    expect(pt[languageSelectorName].portuguese).toBe('Português');
    expect(pt[languageSelectorName].altFlagBrazil).toBe('Bandeira do Brasil');
    expect(pt[languageSelectorName].english).toBe('Inglês');
    expect(pt[languageSelectorName].altFlagEUA).toBe('Bandeira dos EUA');
    expect(pt[languageSelectorName].french).toBe('Francês');
    expect(pt[languageSelectorName].altFragFrance).toBe('Bandeira da França');
    expect(pt[languageSelectorName].spanish).toBe('Espanhol');

    expect(pt[footerName].bio).toBe(
      'Desenvolvedor apaixonado por tecnologia com experiência em React.js e React Native. Focado em criar soluções elegantes e eficientes.',
    );
    expect(pt[footerName].contactTitle).toBe('Contato');
    expect(pt[footerName].location).toBe('São Paulo, Brasil');
    expect(pt[footerName].rights).toBe('Todos os direitos reservados.');
    expect(pt[footerName].builtWith).toBe('Construído com');

    expect(pt[settingsName].title).toBe('Configurações');
    expect(pt[settingsName].langTitle).toBe('Idioma da Interface');
    expect(pt[settingsName].langDesc).toBe('Mude o dicionário global do site');
    expect(pt[settingsName].themeTitle).toBe('Tema Visual');
    expect(pt[settingsName].themeDesc).toBe(
      'Alternar entre Modo Claro e Escuro',
    );
  });
});
