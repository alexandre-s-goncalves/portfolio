import {describe, test, expect} from 'vitest';
import {es} from './translation';
import {namespaces} from '../../i18n.constants';

describe('Spanish Translation Integrity System', () => {
  describe('Navigation Namespace', () => {
    const {name, keys} = namespaces.navigation;

    test('should verify all structural navigation dictionary keys exist', () => {
      expect(es).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(es[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for navigation', () => {
      expect(es[name].home).toBe('Inicio');
      expect(es[name].skills).toBe('Habilidades');
      expect(es[name].projects).toBe('Proyectos');
      expect(es[name].about).toBe('Sobre mí');
      expect(es[name].settings).toBe('Configuración');
    });
  });

  describe('Header Namespace', () => {
    const {name, keys} = namespaces.header;

    test('should verify all structural header dictionary keys exist', () => {
      expect(es).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(es[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for header', () => {
      expect(es[name].logoAlt).toBe('Logotipo del portafolio');
      expect(es[name].openMenuAlt).toBe('Abrir menú');
      expect(es[name].closeMenuAlt).toBe('Cerrar menú');
    });
  });

  describe('Footer Namespace', () => {
    const {name, keys} = namespaces.footer;

    test('should verify all structural footer dictionary keys exist', () => {
      expect(es).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(es[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for footer', () => {
      expect(es[name].bio).toBe(
        'Desarrollador apasionado por la tecnología con experiencia en React.js y React Native. Enfocado en crear soluciones elegantes y eficientes.',
      );
      expect(es[name].contactTitle).toBe('Contacto');
      expect(es[name].location).toBe('São Paulo, Brasil');
      expect(es[name].rights).toBe('Todos los derechos reservados.');
      expect(es[name].builtWith).toBe('Construido con');
    });
  });

  describe('Settings Namespace', () => {
    const {name, keys} = namespaces.settings;

    test('should verify all structural settings dictionary keys exist', () => {
      expect(es).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(es[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for settings', () => {
      expect(es[name].title).toBe('Configuración');
      expect(es[name].langTitle).toBe('Idioma de la interfaz');
      expect(es[name].langDesc).toBe('Cambiar el diccionario global del sitio');
      expect(es[name].themeTitle).toBe('Tema Visual');
      expect(es[name].themeDesc).toBe('Alternar entre Modo Claro y Oscuro');
    });
  });

  describe('NotFound Namespace', () => {
    const {name, keys} = namespaces.notFound;

    test('should verify all structural notFound dictionary keys exist', () => {
      expect(es).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(es[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for notFound', () => {
      expect(es[name].title).toBe('404');
      expect(es[name].message).toBe('Página no encontrada');
      expect(es[name].description).toBe(
        'El enlace que intentó acceder no foi encontrado o la ruta fue movida en el espacio-tiempo. Use el botón de abajo para regresar de forma segura.',
      );
      expect(es[name].backButton).toBe('Voltar ao Início');
    });
  });

  describe('Home Page Namespace', () => {
    const {name, keys} = namespaces.home;

    test('should verify all structural home dictionary keys exist', () => {
      expect(es).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(es[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for home page content', () => {
      expect(es[name].title).toBe('Página de Inicio');
      expect(es[name].greeting).toBe('Hola, yo soy');
      expect(es[name].role).toBe('Desarrollador Full-Stack');
      expect(es[name].bio).toBe(
        'Desarrollador apasionado por la tecnología con experiencia en React.js, React Native, .NET y Java. Enfocado en crear soluciones elegantes y eficientes.',
      );
      expect(es[name].ctaProjects).toBe('Ver Mis Proyectos');
      expect(es[name].ctaContact).toBe('Ponte en Contacto');
      expect(es[name].metricsProjects).toBe('Proyectos Completados');
      expect(es[name].metricsExperience).toBe('Años de Experiencia');
      expect(es[name].metricsTech).toBe('Tecnologías');
    });
  });

  describe('Skills Page Namespace', () => {
    const {name, keys} = namespaces.skills;

    test('should verify all structural skills dictionary keys exist', () => {
      expect(es).toHaveProperty(name);
      expect(es[name].categories).toHaveProperty('frontend');
      expect(es[name].categories).toHaveProperty('tools');
      expect(es[name].levels).toHaveProperty('advanced');
      expect(es[name].levels).toHaveProperty('expert');
      expect(keys.title).toBeDefined();
    });

    test('should lock exact structural value parameters for skills page content', () => {
      expect(es[name].title).toBe('Mis Habilidades');
      expect(es[name].categories.frontend).toBe('Frontend & Mobile');
      expect(es[name].categories.tools).toBe('Herramientas & Pruebas');
      expect(es[name].levels.expert).toBe('Especialista');
      expect(es[name].levels.advanced).toBe('Avanzado');
    });
  });

  describe('Projects Page Namespace', () => {
    const {name, keys} = namespaces.projects;

    test('should verify all structural projects dictionary keys exist', () => {
      expect(es).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(es[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for projects page content', () => {
      expect(es[name].title).toBe('Página de Proyectos');
    });
  });

  describe('About Page Namespace', () => {
    const {name, keys} = namespaces.about;

    test('should verify all structural about dictionary keys exist', () => {
      expect(es).toHaveProperty(name);
      expect(es[name].sections).toHaveProperty('bio');
      expect(es[name].sections).toHaveProperty('experience');
      expect(es[name].sections).toHaveProperty('education');

      expect(es[name].paragraphs).toHaveProperty('p1');
      expect(es[name].paragraphs).toHaveProperty('p2');
      expect(es[name].paragraphs).toHaveProperty('p3');
      expect(es[name].paragraphs).toHaveProperty('p4');
      expect(es[name].paragraphs).toHaveProperty('p5');

      expect(es[name].jobs).toHaveProperty('title1');
      expect(es[name].jobs).toHaveProperty('title2');
      expect(es[name].jobs).toHaveProperty('title3');

      expect(es[name].academy).toHaveProperty('title1');
      expect(es[name].academy).toHaveProperty('title2');
      expect(es[name].academy).toHaveProperty('title3');
      expect(es[name].academy).toHaveProperty('title4');

      expect(keys.title).toBeDefined();
    });

    test('should lock exact structural value parameters for about page content', () => {
      expect(es[name].title).toBe('Sobre Mí');
      expect(es[name].downloadCv).toBe('Descargar CV');
      expect(es[name].jobs.company1).toBe('MRV');
      expect(es[name].jobs.company2).toBe('Club Méditerranée');
      expect(es[name].jobs.company3).toBe('Paradise Golf & Lake Resort');
      expect(es[name].academy.school1).toBe(
        'UNINTER Centro Universitário Internacional',
      );
      expect(es[name].academy.school4).toBe('Etec Presidente Vargas');
    });
  });
});
