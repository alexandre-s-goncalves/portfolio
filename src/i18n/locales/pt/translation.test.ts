import {describe, test, expect} from 'vitest';
import {pt} from './translation';
import {namespaces} from '../../i18n.constants';

describe('Portuguese Translation Integrity System', () => {
  describe('Navigation Namespace', () => {
    const {name, keys} = namespaces.navigation;

    test('should verify all structural navigation dictionary keys exist', () => {
      expect(pt).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(pt[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for navigation', () => {
      expect(pt[name].home).toBe('Início');
      expect(pt[name].skills).toBe('Habilidades');
      expect(pt[name].projects).toBe('Projetos');
      expect(pt[name].about).toBe('Sobre');
      expect(pt[name].settings).toBe('Ajustes');
    });
  });

  describe('Header Namespace', () => {
    const {name, keys} = namespaces.header;

    test('should verify all structural header dictionary keys exist', () => {
      expect(pt).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(pt[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for header', () => {
      expect(pt[name].logoAlt).toBe('Logotipo do portfólio');
      expect(pt[name].openMenuAlt).toBe('Abrir menu');
      expect(pt[name].closeMenuAlt).toBe('Fechar menu');
    });
  });

  describe('Footer Namespace', () => {
    const {name, keys} = namespaces.footer;

    test('should verify all structural footer dictionary keys exist', () => {
      expect(pt).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(pt[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for footer', () => {
      expect(pt[name].bio).toBe(
        'Desenvolvedor apaixonado por tecnologia com experiência em React.js e React Native. Focado em criar soluções elegantes e eficientes.',
      );
      expect(pt[name].contactTitle).toBe('Contato');
      expect(pt[name].location).toBe('São Paulo, Brasil');
      expect(pt[name].rights).toBe('Todos os direitos reservados.');
      expect(pt[name].builtWith).toBe('Construído com');
    });
  });

  describe('Settings Namespace', () => {
    const {name, keys} = namespaces.settings;

    test('should verify all structural settings dictionary keys exist', () => {
      expect(pt).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(pt[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for settings', () => {
      expect(pt[name].title).toBe('Configurações');
      expect(pt[name].langTitle).toBe('Idioma da Interface');
      expect(pt[name].langDesc).toBe('Mude o dicionário global do site');
      expect(pt[name].themeTitle).toBe('Tema Visual');
      expect(pt[name].themeDesc).toBe('Alternar entre Modo Claro e Escuro');
    });
  });

  describe('NotFound Namespace', () => {
    const {name, keys} = namespaces.notFound;

    test('should verify all structural notFound dictionary keys exist', () => {
      expect(pt).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(pt[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for notFound', () => {
      expect(pt[name].title).toBe('404');
      expect(pt[name].message).toBe('Página não encontrada');
      expect(pt[name].description).toBe(
        'O link que você tentou acessar não foi encontrado ou a rota foi movida no espaço-tempo. Use o botão abaixo para retornar em segurança.',
      );
      expect(pt[name].backButton).toBe('Voltar ao Início');
    });
  });

  describe('Home Page Namespace', () => {
    const {name, keys} = namespaces.home;

    test('should verify all structural home dictionary keys exist', () => {
      expect(pt).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(pt[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for home page content', () => {
      expect(pt[name].title).toBe('Página Início');
      expect(pt[name].greeting).toBe('Olá, eu sou');
      expect(pt[name].role).toBe('Desenvolvedor Full-Stack');
      expect(pt[name].bio).toBe(
        'Desenvolvedor apaixonado por tecnologia com experiência em React.js, React Native, .NET e Java. Focado em criar soluções elegantes e eficientes.',
      );
      expect(pt[name].ctaProjects).toBe('Ver Meus Projetos');
      expect(pt[name].ctaContact).toBe('Entre em Contato');
      expect(pt[name].metricsProjects).toBe('Projetos Concluídos');
      expect(pt[name].metricsExperience).toBe('Anos de Experiência');
      expect(pt[name].metricsTech).toBe('Tecnologias');
    });
  });

  describe('Skills Page Namespace', () => {
    const {name, keys} = namespaces.skills;

    test('should verify all structural skills dictionary keys exist', () => {
      expect(pt).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(pt[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for skills page content', () => {
      expect(pt[name].title).toBe('Página Habilidades');
    });
  });

  describe('Projects Page Namespace', () => {
    const {name, keys} = namespaces.projects;

    test('should verify all structural projects dictionary keys exist', () => {
      expect(pt).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(pt[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for projects page content', () => {
      expect(pt[name].title).toBe('Página Projetos');
    });
  });

  describe('About Page Namespace', () => {
    const {name, keys} = namespaces.about;

    test('should verify all structural about dictionary keys exist', () => {
      expect(pt).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(pt[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for about page content', () => {
      expect(pt[name].title).toBe('Página Sobre');
    });
  });
});
