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
    });
  });

  describe('Skills Page Namespace', () => {
    const {name, keys} = namespaces.skills;

    test('should verify all structural skills dictionary keys exist', () => {
      expect(es).toHaveProperty(name);
      Object.values(keys).forEach(key => expect(es[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for skills page content', () => {
      expect(es[name].title).toBe('Página de Habilidades');
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
      Object.values(keys).forEach(key => expect(es[name]).toHaveProperty(key));
    });

    test('should lock exact structural value parameters for about page content', () => {
      expect(es[name].title).toBe('Página Sobre mí');
    });
  });
});
