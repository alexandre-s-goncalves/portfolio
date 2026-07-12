<br/>
<div align="center">

[🏠 Volver al README Principal](../README.md) • [🇧🇷 Português](./README.pt-BR.md) • [🇺🇸 English](./README.en-US.md) • [🇫🇷 Français](./README.fr-FR.md)

</div>

# 🇪🇸 Portfolio - Documentación en Español

---

## 📋 Índice

- [Sobre el Proyecto](#-sobre-el-proyecto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologías](#-tecnologías)
- [Primeros Pasos](#-primeros-pasos)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Estándares de Desarrollo](#-estándares-de-desarrollo)
- [Estándares de Commit](#-estándares-de-commit)
- [Estándares de Pruebas](#-estándares-de-pruebas)
- [Scripts Disponibles](#-scripts-disponibles)
- [Contribución](#-contribución)

---

## 🎯 Sobre el Proyecto

Portafolio personal moderno y responsivo que presenta proyectos, habilidades y experiencia profesional. Desarrollado siguiendo las mejores prácticas de la industria, con un 100% de cobertura de pruebas y soporte completo de internacionalización.

### Objetivos

- Demostrar habilidades técnicas en desarrollo front-end
- Presentar proyectos y experiencias en un diseño profesional
- Servir como referencia de código limpio, escalable y bien probado
- Ofrecer una experiencia de usuario excepcional

---

## ✨ Funcionalidades

- 🎨 **UI Moderna**: Diseño limpio y responsivo con soporte de tema claro/oscuro
- 🌍 **Internacionalización**: Soporte para Portugués, Inglés, Francés y Español
- 🧪 **100% de Cobertura**: Suite completa de pruebas automatizadas
- 📱 **Responsivo**: Arquitectura de diseño mobile-first
- ⚡ **Rendimiento**: Entrega de recursos altamente optimizada con Vite
- 🎨 **Tailwind CSS**: Estilizado utility-first con soporte nativo de temas y modo oscuro nativo
- 🔍 **SEO Amigable**: Estructura HTML semántica y optimizada
- ♿ **Accesible**: Construido de acuerdo con las directrices de accesibilidad WCAG

---

## 🛠 Tecnologías

### Core

- **React** 19.2.6 - Biblioteca de interfaz de usuario (UI)
- **TypeScript** 5.6.2 - Superconjunto de tipado estático estricto
- **Vite** 8.0.12 - Herramienta de compilación y servidor de desarrollo de alto rendimiento
- **React Router** 7.9.4 - Gestión de enrutamiento y navegación del lado del cliente

### Estilizado

- **tailwindcss/vite** 4.3.1 - Complemento oficial para la integración y compilación de alto rendimiento de Tailwind v4 con Vite

### Internacionalización

- **i18next** 26.3.1 - Framework central de internacionalización
- **react-i18next** 17.0.8 - Vinculaciones oficiales y hooks para la integración con React
- **i18next-browser-languagedetector** 8.2.1 - Middleware para la detección automática del idioma del navegador

### Pruebas

- **testing-library/react** 16.3.2 - Utilidades de prueba de componentes React enfocadas en el comportamiento del usuario
- **testing-library/jest-dom** 6.9.1 - Matchers personalizados de DOM para aserciones de prueba extendidas

### Calidad de Código

- **ESLint** 10.3.0 - Herramienta de análisis estático para encontrar y corregir problemas de código
- **Prettier** 3.8.4 - Formateador de código de opinión que garantiza la consistencia visual
- **Husky** 9.1.7 - Herramienta de automatización para la ejecución de git hooks locales
- **lint-staged** 16.2.4 - Ejecutor de comprobaciones de calidad solo para archivos modificados

### Análisis de Código

Este proyecto utiliza [SonarCloud](https://sonarcloud.io) para el análisis continuo de la calidad del código.

Aspectos principales monitoreados:

- Errores potenciales detectados automáticamente
- Vulnerabilidades de seguridad en dependencias
- Code smells que afectan la mantenibilidad
- Cobertura de pruebas automatizadas

---

## 🚀 Primeros Pasos

### Requisitos Previos

- **Node.js**: 20.x o superior
- **npm**: 11.17.0 o superior
- **Git**: Última versión instalada
- **Editor Recomendado**: Visual Studio Code

### Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com
cd portfolio
```

2. **Instalar dependencias** (los hooks de Husky se configurarán automáticamente)

```bash
npm install
```

3. **Iniciar el servidor de desarrollo**

```bash
npm run dev
```

4. **Abrir en el navegador**

Accede a [http://localhost:5173](http://localhost:5173) en tu navegador para ver la aplicación en ejecución.

## 📁 Estructura del Proyecto

### Visión General

```text
portfolio/
├── docs/                    # Documentación en múltiples idiomas
├── public/                  # Recursos estáticos globales
├── src/
│   ├── @types/             # Definiciones de TypeScript
│   ├── __mocks__/          # Mocks para pruebas
│   ├── assets/             # Recursos compartidos (iconos, imágenes, fuentes)
│   ├── components/         # Componentes globales reutilizables
│   ├── context/            # Archivos de la API Context de React
│   ├── pages/              # Vistas de las páginas principales
│   ├── resources/          # Tokens de diseño core
│   ├── routes/             # Configuración de enrutamiento de la app
│   └── utils/              # Utilidades de ayuda
└── [archivos de configuración]
```

---

## 📐 Estándares de Desarrollo

### Convenciones de Nomenclatura

| Elemento                | Convención       | Ejemplo                        |
| :---------------------- | :--------------- | :----------------------------- |
| Componentes             | PascalCase       | `Button`, `IconButton`         |
| Archivos de Componentes | PascalCase       | `Button.tsx`, `Header.tsx`     |
| Archivos de Utilidades  | camelCase        | `formatDate.ts`, `validate.ts` |
| Variables               | camelCase        | `userName`, `isActive`         |
| Constantes              | UPPER_SNAKE_CASE | `API_URL`, `MAX_LENGTH`        |
| Tipos / Interfaces      | PascalCase       | `UserProps`, `ThemeConfig`     |

### Estructura de Componente Estándar

```typescript
// 1. Importaciones
import React from 'react';
import { clsx } from 'clsx';
import { ComponentProps } from './types';

// 2. Types/Interfaces
interface Props {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
}

// 3. Definición del Componente
export const Component = ({ title, onClick, disabled = false }: Props) => {
  // Lógica del Componente
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      /* OPCIÓN 1: Estilizado condicional agrupado con la biblioteca clsx */
      className={clsx(
        'flex items-center justify-center rounded-lg px-4 py-2 font-medium transition-all duration-200',
        'cursor-pointer bg-blue-600 text-white hover:bg-blue-700 active:scale-98',
        'disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 disabled:opacity-50 disabled:scale-100'
      )}
    >
      {/* OPCIÓN 2: Estilizado condicional inline usando Template Literals y Operadores Ternarios */}
      <span className={`text-sm ${disabled ? 'line-through text-gray-400' : 'font-semibold text-white'}`}>
        {title}
      </span>
    </button>
  );
};
```

### Organización de Archivos

Cada componente debe residir dentro de su propia carpeta modular utilizando este patrón:

```text
component/
├── component.test.tsx              # Pruebas y especificaciones del componente
├── component.tsx                   # Estructura lógica y marcado
└── index.ts                        # Punto de entrada para exportaciones públicas
```

### Buenas Prácticas

1. **Componentes Funcionales**: Construye exclusivamente con componentes funcionales y React Hooks.
2. **Tipado Estricto**: Declara siempre tipos explícitos para las props de los componentes y los estados locales.
3. **Importaciones Absolutas**: Utiliza mapeos de rutas absolutas (path aliases) configurados en `tsconfig`.
4. **Código en Inglés**: Mantén todos los nombres de variables, comentarios, mensajes de commit y suites de prueba escritos estrictamente en inglés.

---

## 📝 Estándares de Commit

### Conventional Commits

Seguimos la especificación estándar de [Conventional Commits](https://conventionalcommits.org) para la claridad del historial del repositorio:

```bash
<tipo>(<alcance>): <descripción>

[cuerpo opcional]

[pie de página opcional]
```

### Tipos de Commit

| Tipo       | Descripción                                                | Ejemplo                            |
| :--------- | :--------------------------------------------------------- | :--------------------------------- |
| `feat`     | Implementación de una nueva funcionalidad                  | `feat: add dark mode toggle`       |
| `fix`      | Corrección de un error o bug                               | `fix: resolve button hover state`  |
| `refactor` | Reestructuración de código sin cambios de funcionalidad    | `refactor: reorganize home styles` |
| `test`     | Añadir o actualizar pruebas existentes                     | `test: add footer theme variants`  |
| `docs`     | Modificaciones exclusivas de la documentación              | `docs: update README`              |
| `style`    | Cambios de formato (espacios en blanco, punto y coma)      | `style: format with prettier`      |
| `chore`    | Actualizaciones de procesos de construcción o herramientas | `chore: update dependencies`       |
| `perf`     | Ajustes y mejoras de rendimiento                           | `perf: optimize image loading`     |

### Ejemplos de Commits

#### Feat (Nueva Funcionalidad)

```bash
feat: add dark mode toggle to header

- Implement theme context with React Context API
- Add toggle button in header component
- Persist theme preference in localStorage
```

## 🧪 Estándares de Pruebas

El ecosistema de pruebas se basa en **Vitest** junto con **React Testing Library**. Para componentes con internacionalización, utiliza la función de ayuda para montar el componente dentro del contexto de `i18next`.

### Patrón de Integración de Pruebas

```typescript
import { describe, test, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { Component } from './Component';
import i18n from './i18n/i18n';

describe('Component Integration', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('pt');
  });

  const renderWithI18n = (props = {}) => render(
    <I18nextProvider i18n={i18n}>
      <Component title="Portfolio" {...props} />
    </I18nextProvider>
  );

  describe('Render & Tailwind v4', () => {
    test('should render initial texts and apply utility classes', () => {
      renderWithI18n();
      const button = screen.getByRole('button');

      expect(screen.getByText(/Desenvolvedor/i)).toBeInTheDocument();
      expect(button).toHaveClass('flex', 'bg-blue-600', 'disabled:opacity-50');
    });
  });

  describe('Behavior & i18n', () => {
    test('should switch language and update element states', async () => {
      renderWithI18n();
      const enButton = screen.getByRole('button', { name: /🇺🇸 EN/i });

      fireEvent.click(enButton);

      expect(await screen.findByText(/Welcome/i)).toBeInTheDocument();
      expect(enButton).toBeDisabled();
    });
  });
});
```

### 📋 Categorías Oficiales de Pruebas

Para preservar la confiabilidad del código y mantener la meta del **100% de cobertura de código**, cada componente debe cubrir las siguientes capas:

#### 1. Pruebas de Renderizado

Valida el ensamblaje básico del árbol HTML y el renderizado exacto de cadenas de texto literales.

```typescript
test('should render component with text content', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

#### 2. Pruebas de Props

Garante que las variaciones estructurales o los comportamientos cambien correctamente según las props reactivas pasadas.

```typescript
test('should render icon element when prop is provided', () => {
  render(<Button icon={<span data-testid="icon" />}>Button</Button>);
  expect(screen.getByTestId('icon')).toBeInTheDocument();
});
```

#### 3. Pruebas de Estado (Locks de Interfaz)

Valida la lógica de bloqueo del componente y las restricciones de visibilidad interactiva utilizando propiedades nativas de HTML.

```typescript
test('should apply HTML disabled property', () => {
  render(<Button disabled>Disabled</Button>);
  expect(screen.getByRole('button')).toBeDisabled();
});
```

#### 4. Pruebas de Interacción (Manejo de Eventos)

Simula interacciones reales de la interfaz de usuario usando `fireEvent` y escucha los callbacks con las herramientas de espionaje de Vitest.

```typescript
test('should trigger onClick callback function', () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Click</Button>);

  fireEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

#### 5. Pruebas de Estilizado y Temas (Tailwind v4)

Valida el cambio de tema verificando la presencia estática de clases de diseño o selectores oscuros (`dark:bg-slate-900`) cuando el nodo raíz principal se actualiza.

```typescript
test('should apply dark theme style tokens when root has dark class', () => {
  const { container } = render(<Component />);
  container.parentElement?.classList.add('dark');

  const element = screen.getByRole('banner');
  expect(element).toHaveClass('dark:bg-slate-900', 'dark:text-sky-400');
});
```

### 🎭 Pruebas End-to-End con Playwright

Además de las pruebas unitarias con Vitest, el proyecto también incluye una suite de pruebas end-to-end con Playwright para validar flujos reales de navegación e internacionalización. El escenario principal se encuentra en `E2E/i18n.spec.ts` y cubre el cambio de idioma en la página de configuración, así como la verificación de contenido en la página principal.

```typescript
import {test, expect} from '@playwright/test';

test('should dynamically translate interface when user updates language on settings page', async ({
  page,
}) => {
  await page.goto('/settings');

  const languageButton = page
    .locator('main button[aria-haspopup="true"]')
    .or(page.locator('main button'))
    .first();

  await expect(languageButton).toBeVisible();
  await languageButton.click();

  const esOption = page.locator('[data-testid="idioma-espanhol"]').first();
  await expect(esOption).toBeVisible();
  await esOption.click();
  await expect(page.getByRole('heading', {level: 1})).toContainText(
    /Configur/i,
  );
});
```

#### Buenas prácticas

- Valida rutas reales, navegación e interacciones de usuario.
- Prefiere selectores accesibles y `data-testid` para elementos específicos.
- Mantén los escenarios de internacionalización y regresión en ejecución continua.

---

## 🎯 Scripts Disponibles

### Desarrollo y Producción

```bash
# Inicia el servidor del entorno de desarrollo local con Vite
npm run dev

# Compila y optimiza los recursos en un paquete listo para producción
npm run build

# Ejecuta un servidor local de vista previa del paquete compilado en producción
npm run preview
```

### Pruebas (Motor Vitest)

```bash
# Ejecuta la suite de pruebas automatizadas
npm test

# Abre el panel visual interactivo (UI Dashboard) de Vitest en el navegador
npm run test:ui

# Ejecuta pruebas y exporta un informe completo de cobertura LCOV
npm run coverage
```

### Control de Calidad y Automatización

```bash
# Audita el código usando ESLint, ignorando los informes de cobertura
npm run lint

# Sobrescribe automáticamente los problemas de formato con Prettier
npm run format

# Configura e instala los Git hooks de Husky locales requeridos
npm run prepare
```

---

## 🤝 Contribución

¡Las contribuciones hacen que la comunidad de código abierto sea un lugar fantástico! Sigue estos pasos para colaborar:

### 1. Fork y Clonar

```bash
# Haz el Fork a través de la interfaz de GitHub y clona tu fork localmente:
git clone https://github.com
cd portfolio
```

### 2. Crear una Rama (Branch)

```bash
# Para nuevas funcionalidades
git checkout -b feat/nueva-funcionalidad

# Para correcciones de errores o bugs
git checkout -b fix/corregir-bug

# Para refatorizaciones de arquitectura de código
git checkout -b refactor/mejorar-codigo
```

### 3. Fase de Desarrollo

- Estructura el código de acuerdo con los estándares de arquitectura descritos anteriormente.
- Escribe las especificaciones correspondientes para las pruebas de integración automatizadas.
- Mantén siempre la meta base del proyecto de **100% de cobertura de código**.
- Alinea los resúmenes de commit estrictamente siguiendo el modelo de Conventional Commits.

### 4. Verificaciones Locales

```bash
# Ejecuta las suites de pruebas de forma local
npm test

# Audita los informes de cobertura de archivos
npm run coverage

# Ejecuta la evaluación de análisis estático (linter)
npm run lint

# Formatea las reglas del código antes de enviar los archivos
npm run format
```

### 5. Rutinas de Commit y Push

```bash
# Añade las modificaciones a la capa de staging de Git
git add .

# Guarda los cambios utilizando mensajes semánticos convencionales
git commit -m "feat: add amazing feature"

# Sube los archivos a la rama de tu fork remoto
git push origin feat/nueva-funcionalidade
```

### 6. Pull Request

Regresa a la página de tu fork en GitHub y presiona el botón **"New Pull Request"**, dirigiendo tus modificaciones hacia la rama principal del repositorio original.

### 📋 Lista de Verificación Antes de Enviar el PR

- [ ] El código cumple estrictamente con las convenciones de diseño y formateo globales.
- [ ] Los ciclos de prueba locales se ejecutan sin errores (`npm test`).
- [ ] La cobertura del proyecto mantiene la métrica requerida del 100% (`npm run coverage`).
- [ ] Los archivos fuente pasan por las reglas completas de formateo automático de Prettier (`npm run format`).
- [ ] Aparecen cero señales de advertencia o errores en las tareas del linter (`npm run lint`).
- [ ] El historial de commits coincide estrictamente con los patrones de Conventional Commits.
- [ ] El Pull Request incluye una descripción clara y detallada que describe las modificaciones.

---

## 📚 Recursos Adicionales

### Documentación del Ecosistema Core

- [React 19](https://react.dev)
- [TypeScript](https://typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Vitest](https://vitest.dev)
- [React Testing Library](https://testing-library.com)
- [Vite](https://vite.dev)
- [i18next](https://i18next.com)

### Guías de Patrones y Buenas Prácticas

- [Especificación de Conventional Commits](https://conventionalcommits.org)
- [React Testing Best Practices (Kent C. Dodds)](https://kentcdodds.com)
- [Guía de Estilo de TypeScript](https://typescriptlang.orgdocs/handbook/declaration-files/do-s-and-don-ts.html)

---

## 📄 Licencia

Este repositorio se distribuye bajo las directrices oficiales de la Licença MIT — consulta el archivo [LICENSE](../LICENSE) para obtener más detalles.

---

## 👤 Autor

**Alexandre dos Santos Gonçalves**

- 🌐 [LinkedIn](https://linkedin.com)
- 🐙 [GitHub](https://github.com)
- 📧 [Email](mailto:alexandre.sgoncalves@outlook.com)

---

<div align="center">

**Hecho con ❤️ por Alexandre Gonçalves**

<a href="#top">⬆ volver al principio</a>

</div>
