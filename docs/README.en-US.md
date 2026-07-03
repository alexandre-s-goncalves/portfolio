<br/>
<div align="center">

[🏠 Back to Main README](../README.md) • [🇧🇷 Português](./README.pt-BR.md) • [🇫🇷 Français](./README.fr-FR.md) • [🇪🇸 Español](./README.es-ES.md)

</div>

# 🇺🇸 Portfolio - English Documentation

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Technologies](#-technologies)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Development Standards](#-development-standards)
- [Commit Conventions](#-commit-conventions)
- [Testing Standards](#-testing-standards)
- [Available Scripts](#-available-scripts)
- [Contributing](#-contributing)

---

## 🎯 About the Project

Modern and responsive personal portfolio showcasing projects, skills, and professional experience. Developed following industry best practices, featuring 100% test coverage and full internationalization support.

### Objectives

- Demonstrate technical skills in front-end development
- Present projects and experiences in a professional layout
- Serve as a reference for clean, scalable, and well-tested code
- Deliver an outstanding user experience

---

## ✨ Features

- 🎨 **Modern UI**: Clean and responsive design with light/dark theme toggle
- 🌍 **Internationalization**: Support for Portuguese, English, French, and Spanish
- 🧪 **100% Coverage**: Comprehensive automated testing suite
- 📱 **Responsive**: Mobile-first design architecture
- ⚡ **Performance**: Highly optimized asset delivery powered by Vite
- 🎨 **Tailwind CSS**: Utility-first styling with native theme configuration and dark mode support
- 🔍 **SEO Friendly**: Semantic and optimized HTML structure
- ♿ **Accessible**: Built according to WCAG accessibility guidelines

---

## 🛠 Technologies

### Core

- **React** 19.2.6 - User interface (UI) library
- **TypeScript** 5.6.2 - Strict static typing superset
- **Vite** 8.0.12 - High-performance build tool and dev server
- **React Router** 7.9.4 - Client-side routing and navigation management

### Styling

- **tailwindcss/vite** 4.3.1 - Official plugin for high-performance integration and compilation of Tailwind v4 with Vite

### Internationalization

- **i18next** 26.3.1 - Core internationalization framework
- **react-i18next** 17.0.8 - Official bindings and hooks for React integration
- **i18next-browser-languagedetector** 8.2.1 - Automatic browser language detection middleware

### Testing

- **testing-library/react** 16.3.2 - React component testing utilities focused on user behavior
- **testing-library/jest-dom** 6.9.1 - Custom DOM matchers for extended test assertions

### Code Quality

- **ESLint** 10.3.0 - Static analysis linting tool to find and fix code issues
- **Prettier** 3.8.4 - Opinionated code formatter ensuring visual consistency
- **Husky** 9.1.7 - Automation tool for local Git hooks execution
- **lint-staged** 16.2.4 - Quality assurance check runner for staged files only

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 20.x or superior
- **npm**: 11.17.0 or superior
- **Git**: Latest version installed
- **Recommended Editor**: Visual Studio Code

### Installation

1. **Clone the repository**

```bash
git clone https://github.com
cd portfolio
```

2. **Install dependencies** (Husky hooks will configure automatically)

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open in your browser**

Navigate to [http://localhost:5173](http://localhost:5173) in your browser to see the live application.

## 📁 Project Structure

### Overview

```text
portfolio/
├── docs/                    # Documentation in multiple languages
├── public/                  # Static assets
├── src/
│   ├── @types/             # TypeScript definitions
│   ├── __mocks__/          # Testing mocks
│   ├── assets/             # Shared assets (icons, images, fonts)
│   ├── components/         # Reusable global components
│   ├── context/            # React Context API files
│   ├── pages/              # Main page views
│   ├── resources/          # Core design tokens
│   ├── routes/             # App routing configuration
│   └── utils/              # Helper utilities
└── [configuration files]
```

---

## 📐 Development Standards

### Naming Conventions

| Element            | Convention       | Example                        |
| :----------------- | :--------------- | :----------------------------- |
| Components         | PascalCase       | `Button`, `IconButton`         |
| Component Files    | PascalCase       | `Button.tsx`, `Header.tsx`     |
| Utility Files      | camelCase        | `formatDate.ts`, `validate.ts` |
| Variables          | camelCase        | `userName`, `isActive`         |
| Constants          | UPPER_SNAKE_CASE | `API_URL`, `MAX_LENGTH`        |
| Types / Interfaces | PascalCase       | `UserProps`, `ThemeConfig`     |

### Component Architecture Standard

```typescript
// 1. Imports
import React from 'react';
import { clsx } from 'clsx';
import { ComponentProps } from './types';

// 2. Types/Interfaces
interface Props {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
}

// 3. Component Definition
export const Component = ({ title, onClick, disabled = false }: Props) => {
  // Component Logic
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      /* OPTION 1: Conditional styling grouped with the clsx library */
      className={clsx(
        'flex items-center justify-center rounded-lg px-4 py-2 font-medium transition-all duration-200',
        'cursor-pointer bg-blue-600 text-white hover:bg-blue-700 active:scale-98',
        'disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 disabled:opacity-50 disabled:scale-100'
      )}
    >
      {/* OPTION 2: Inline conditional styling using Template Literals and Ternary Operators */}
      <span className={`text-sm ${disabled ? 'line-through text-gray-400' : 'font-semibold text-white'}`}>
        {title}
      </span>
    </button>
  );
};
```

### File Organization

Each component must reside within its own self-contained folder using this pattern:

```text
component/
├── component.test.tsx              # Component specs and tests
├── component.tsx                   # Structural markup and logic
└── index.ts                        # Public exports entrypoint
```

### Best Practices

1. **Functional Components**: Build exclusively with functional components and React Hooks.
2. **Strict Typing**: Always declare explicit types for component props and local states.
3. **Absolute Imports**: Rely on absolute path mapping (path aliases) configured in `tsconfig`.
4. **Code in English**: Keep all variable names, comments, commit messages, and test suites written strictly in English.

---

## 📝 Commit Conventions

### Conventional Commits

We follow the standard [Conventional Commits](https://conventionalcommits.org) specification for repository history clarity:

```bash
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Commit Types

| Type       | Description                                   | Example                            |
| :--------- | :-------------------------------------------- | :--------------------------------- |
| `feat`     | A new feature implementation                  | `feat: add dark mode toggle`       |
| `fix`      | A bug fix correction                          | `fix: resolve button hover state`  |
| `refactor` | Code restructuring without feature changes    | `refactor: reorganize home styles` |
| `test`     | Adding or updating existing tests             | `test: add footer theme variants`  |
| `docs`     | Documentation alterations only                | `docs: update README`              |
| `style`    | Formatting changes (white-space, semi-colons) | `style: format with prettier`      |
| `chore`    | Build processes or auxiliary tool updates     | `chore: update dependencies`       |
| `perf`     | Performance adjustments                       | `perf: optimize image loading`     |

### Commit Examples

#### Feat (New Feature)

```bash
feat: add dark mode toggle to header

- Implement theme context with React Context API
- Add toggle button in header component
- Persist theme preference in localStorage
```

## 🧪 Testing Standards

The testing ecosystem relies on **Vitest** paired with **React Testing Library**. For internationalized views, use the custom helper to mount the component inside the `i18next` context.

### Test Integration Pattern

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

### 📋 Official Test Categories

To preserve code reliability and enforce **100% code coverage**, write suites targeting these layers:

#### 1. Rendering Specs

Validates basic HTML layout tree assembly and exact literal string renderings.

```typescript
test('should render component with text content', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

#### 2. Component Props Specs

Ensures structural variations or component behaviors shift correctly according to passed reactive props.

```typescript
test('should render icon element when prop is provided', () => {
  render(<Button icon={<span data-testid="icon" />}>Button</Button>);
  expect(screen.getByTestId('icon')).toBeInTheDocument();
});
```

#### 3. State Specs (Interface Locks)

Validates component block logic and interactive visibility restrictions leveraging native HTML element properties.

```typescript
test('should apply HTML disabled property', () => {
  render(<Button disabled>Disabled</Button>);
  expect(screen.getByRole('button')).toBeDisabled();
});
```

#### 4. Interaction Specs (Event Handling)

Fires mock user interface interactions using `fireEvent` and spies callbacks using Vitest mock listeners.

```typescript
test('should trigger onClick callback function', () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Click</Button>);

  fireEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

#### 5. Styling and Theme Specs (Tailwind v4)

Validates theme asset switching by checking for standard utility token classes or theme selectors (`dark:bg-slate-900`) when the parent root node updates.

```typescript
test('should apply dark theme style tokens when root has dark class', () => {
  const { container } = render(<Component />);
  container.parentElement?.classList.add('dark');

  const element = screen.getByRole('banner');
  expect(element).toHaveClass('dark:bg-slate-900', 'dark:text-sky-400');
});
```

### 🎭 End-to-End Testing with Playwright

In addition to Vitest unit tests, the project also includes an end-to-end test suite with Playwright to validate real navigation and internationalization flows. The main scenario is located in `E2E/i18n.spec.ts` and covers language switching on the settings page, as well as content verification on the homepage.

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

#### Best practices

- Validate real routes, navigation, and user interactions.
- Prefer accessible selectors and `data-testid` for specific elements.
- Keep internationalization and regression scenarios in continuous execution.

---

## 🎯 Available Scripts

### Development and Production

```bash
# Starts the local development environment server using Vite
npm run dev

# Compiles and optimizes assets into a production bundle build
npm run build

# Runs a local production-ready preview server of your build folder
npm run preview
```

### Testing (Vitest Engine)

```bash
# Runs the automated test suite pipeline
npm test

# Opens the interactive visual UI browser dashboard for Vitest
npm run test:ui

# Executes tests and exports a complete LCOV coverage report breakdown
npm run coverage
```

### Quality Assurance & Automation

```bash
# Audits codebase using ESLint configurations, ignoring coverage reports
npm run lint

# Automatically overwrites formatting rule issues utilizing Prettier
npm run format

# Sets up and instantiates required local Husky Git hooks
npm run prepare
```

---

## 🤝 Contributing

Contributions make the open-source community thrive! Follow these steps to collaborate:

### 1. Fork and Clone

```bash
# Fork via GitHub UI and clone your personal fork folder locally:
git clone https://github.com
cd portfolio
```

### 2. Create a Feature Branch

```bash
# For new features
git checkout -b feat/your-amazing-feature

# For bug fixing tasks
git checkout -b fix/resolve-bug-issue

# For code architectural refactoring
git checkout -b refactor/improve-codebase
```

### 3. Development Phase

- Structure code according to standard component architectures listed above.
- Write corresponding automated integration test specs.
- Always preserve the project baseline of **100% test coverage**.
- Align commit summaries strictly following the Conventional Commits model.

### 4. Local Verification Checks

```bash
# Run test suites locally
npm test

# Audit file coverage reports
npm run coverage

# Run the linting evaluation
npm run lint

# Format codebase rules before committing files
npm run format
```

### 5. Commit and Push Routines

```bash
# Add modifications to the Git staging layer
git add .

# Save snapshot changes using semantic logs
git commit -m "feat: add amazing feature"

# Envie as alterações para o seu fork remoto
git push origin feat/your-amazing-feature
```

### 6. Pull Request Review

Navigate back to your GitHub fork layout page and press the **"New Pull Request"** trigger, aiming your modifications toward the upstream repository master branch.

### 📋 Pre-Flight Pull Request Checklist

- [ ] Code strictly honors global component design architectures and formatting guidelines.
- [ ] Automated spec pipeline test cycles execute without errors (`npm test`).
- [ ] Project coverage maintains the required 100% metric (`npm run coverage`).
- [ ] Source files run through full Prettier automated formatting rules (`npm run format`).
- [ ] Zero code warning signals or errors appear under linter tasks (`npm run lint`).
- [ ] Commit history logs strictly match Conventional Commits patterns.
- [ ] Pull Request includes a clear, comprehensive description outlining modifications.

---

## 📚 Additional Resources

### Core Ecosystem Documentation

- [React 19](https://react.dev)
- [TypeScript](https://typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Vitest](https://vitest.dev)
- [React Testing Library](https://testing-library.com)
- [Vite](https://vite.dev)
- [i18next](https://i18next.com)

### Pattern Framework Guides

- [Conventional Commits Specification](https://conventionalcommits.org)
- [React Testing Best Practices (Kent C. Dodds)](https://kentcdodds.com)
- [TypeScript Style Guide Guidelines](https://typescriptlang.orgdocs/handbook/declaration-files/do-s-and-don-ts.html)

---

## 📄 License

This repository is distributed under the official MIT License guidelines — see the [LICENSE](../LICENSE) file for exact parameters.

---

## 👤 Author

**Alexandre dos Santos Gonçalves**

- 🌐 [LinkedIn](https://linkedin.com)
- 🐙 [GitHub](https://github.com)
- 📧 [Email](mailto:alexandre.sgoncalves@outlook.com)

---

<div align="center">

**Made with ❤️ by Alexandre Gonçalves**

<a href="#top">⬆ back to top</a>

</div>
