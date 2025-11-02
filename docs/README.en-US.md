# 🇺🇸 Portfolio - English Documentation

<div align="center">

[![MIT Licensed](https://img.shields.io/badge/license-MIT-green.svg)](https://tldrlegal.com/license/mit-license)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![Tests](https://img.shields.io/badge/tests-401%20passing-brightgreen.svg)](https://github.com/alexandre-s-goncalves/portfolio)
[![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)](https://github.com/alexandre-s-goncalves/portfolio)

**Personal portfolio built with React, TypeScript, and Styled Components**

[🏠 Back to Main README](../README.md) • [🇧🇷 Português](./README.pt-BR.md) • [🇫🇷 Français](./README.fr-FR.md)

</div>

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Technologies](#-technologies)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Development Standards](#-development-standards)
- [Commit Standards](#-commit-standards)
- [Testing Standards](#-testing-standards)
- [Available Scripts](#-available-scripts)
- [Contributing](#-contributing)

---

## 🎯 About the Project

Modern and responsive personal portfolio showcasing projects, skills, and professional experience. Built following best practices, with 100% test coverage and internationalization support.

### Goals

- Demonstrate technical skills in front-end development
- Present projects and experiences professionally
- Serve as a reference for clean and well-tested code
- Provide an exceptional user experience

---

## ✨ Features

- 🎨 **Modern UI**: Clean and responsive design with dark/light theme
- 🌍 **Internationalization**: Support for Portuguese, English, and French
- 🧪 **100% Test Coverage**: Comprehensive test suite with 401 tests
- 📱 **Responsive**: Mobile-first approach
- ⚡ **Performance**: Optimized with Vite
- 🎭 **Styled Components**: CSS-in-JS with theme support
- 🔍 **SEO Friendly**: Semantic HTML structure
- ♿ **Accessible**: WCAG compliant

---

## 🛠 Technologies

### Core

- **React** 18.2.0 - UI library
- **TypeScript** 5.2.2 - Static typing
- **Vite** 5.0.0 - Build tool
- **React Router** 7.9.4 - Navigation

### Styling

- **Styled Components** 6.0.0 - CSS-in-JS
- **React InlineSVG** 4.2.0 - SVG handling

### Internationalization

- **i18next** 25.6.0 - Translation framework
- **react-i18next** 16.1.4 - React bindings
- **i18next-browser-languagedetector** 8.2.0 - Language detection

### Testing

- **Jest** 29.6.0 - Test runner
- **Testing Library** 16.3.0 - Component testing
- **jest-styled-components** 7.2.0 - Styled components testing

### Code Quality

- **ESLint** 9.38.0 - Linting
- **Prettier** 3.6.2 - Code formatting
- **Husky** 9.1.7 - Git hooks
- **lint-staged** 16.2.4 - Pre-commit checks

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 20.x or higher
- **npm**: 10.8.1 or higher
- **Git**: Latest version
- **Recommended editor**: Visual Studio Code

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/alexandre-s-goncalves/portfolio.git
cd portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Setup Husky** (automatically configured via prepare)

```bash
npm run prepare
```

4. **Start development server**

```bash
npm run dev
```

5. **Open in browser**

```
http://localhost:5173
```

---

## 📁 Project Structure

### Overview

```
portfolio/
├── docs/                    # Documentation in multiple languages
├── public/                  # Static assets
├── src/
│   ├── @types/             # TypeScript type definitions
│   ├── __mocks__/          # Test mocks
│   ├── assets/             # Assets (icons, images, fonts)
│   ├── components/         # Reusable components
│   ├── context/            # React contexts
│   ├── pages/              # Page components
│   ├── resources/          # Design tokens
│   ├── routes/             # Routing configuration
│   └── utils/              # Utilities
└── [configuration files]
```

### Components

#### UI Components (`src/components/ui/`)

- **Button**: Reusable button with icon support
- **Text**: Text component with typographic variants

#### Feature Components (`src/components/`)

- **Header**: Header with navigation and theme toggle
- **Footer**: Footer with social links
- **Dropdown**: Language selector
- **Icon**: SVG icon wrapper
- **IconButton**: Icon-only button
- **Image**: Optimized image component

#### Pages (`src/pages/`)

- **Home**: Landing page with introduction
- **Skills**: Technical skills page
- **Projects**: Projects portfolio
- **About**: About me
- **NotFound**: 404 page

---

## 📐 Development Standards

### Naming Conventions

| Type              | Convention       | Example                        |
| ----------------- | ---------------- | ------------------------------ |
| Components        | PascalCase       | `Button`, `IconButton`         |
| Component Files   | PascalCase       | `Button.tsx`, `Header.tsx`     |
| Utility Files     | camelCase        | `formatDate.ts`, `validate.ts` |
| Variables         | camelCase        | `userName`, `isActive`         |
| Constants         | UPPER_SNAKE_CASE | `API_URL`, `MAX_LENGTH`        |
| Styled Components | PascalCase       | `Container`, `Title`           |
| Transient Props   | Prefix `$`       | `$themeDark`, `$isActive`      |
| Types/Interfaces  | PascalCase       | `UserProps`, `ThemeConfig`     |

### Component Structure

```typescript
// 1. Imports
import React from 'react';
import {ComponentProps} from './types';
import * as S from './component.styles';

// 2. Types/Interfaces
interface Props {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
}

// 3. Component
export const Component = ({title, onClick, disabled = false}: Props) => {
  // Component logic
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <S.Container onClick={handleClick} $disabled={disabled}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
```

### File Organization

Each component follows this structure:

```
component/
├── __snapshots__/                  # Jest snapshots
│   ├── component.test.tsx.snap    # Test snapshots
│   └── component.styles.test.tsx.snap
├── component.styles.test.tsx       # Styled components tests
├── component.styles.ts             # Styled components
├── component.test.tsx              # Component tests
├── component.tsx                   # Component logic
└── index.ts                        # Public exports
```

### Best Practices

1. **Functional Components**: Always use function components with hooks
2. **Strong Typing**: Always define types for props and states
3. **Transient Props**: Use `$` for props that shouldn't be passed to DOM
4. **Absolute Imports**: Use path aliases configured in tsconfig
5. **English Code**: All code, comments, and messages in English

---

## 📝 Commit Standards

### Conventional Commits

We follow the [Conventional Commits](https://www.conventionalcommits.org/) standard:

```bash
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Commit Types

| Type       | Description              | Example                            |
| ---------- | ------------------------ | ---------------------------------- |
| `feat`     | New feature              | `feat: add dark mode toggle`       |
| `fix`      | Bug fix                  | `fix: resolve button hover state`  |
| `refactor` | Code refactoring         | `refactor: reorganize home styles` |
| `test`     | Add/update tests         | `test: add footer theme variants`  |
| `docs`     | Documentation            | `docs: update README`              |
| `style`    | Code formatting          | `style: format with prettier`      |
| `chore`    | Maintenance tasks        | `chore: update dependencies`       |
| `perf`     | Performance improvements | `perf: optimize image loading`     |

### Commit Examples

#### Feat (New Feature)

```bash
feat: add dark mode toggle to header

- Implement theme context with React Context API
- Add toggle button in header component
- Persist theme preference in localStorage
- Update all components to support dark theme
```

#### Fix (Bug Fix)

```bash
fix(button): resolve disabled state cursor issue

The disabled button was showing 'not-allowed' cursor.
Changed to 'default' cursor for better UX.
```

#### Refactor (Refactoring)

```bash
refactor: reorganize home page styles alphabetically

- Rename components with semantic English names
- Sort styled components alphabetically
- Update imports and references
- Maintain 100% test coverage
```

#### Test (Testing)

```bash
test(footer): achieve 100% coverage with theme variants

- Add tests for light theme
- Add tests for dark theme
- Test all social links
- Update snapshots
```

### Scope

Use scope to indicate which part of the code was changed:

- `(home)`: Home page
- `(button)`: Button component
- `(header)`: Header component
- `(i18n)`: Internationalization
- `(deps)`: Dependencies
- `(config)`: Configuration files

### Commit Messages

**✅ Best practices:**

- Use imperative mood: "add" not "added" or "adds"
- Lowercase first letter: "add feature" not "Add feature"
- No period at the end of description
- Detailed body when necessary
- Reference issues when applicable

**❌ Avoid:**

- Generic messages: "fix bug", "update code"
- Multiple unrelated changes in one commit
- Very large commits

---

## 🧪 Testing Standards

### Test Structure

```typescript
describe('ComponentName', () => {
  describe('Rendering', () => {
    test('should render with required props', () => {
      // Arrange
      const props = {title: 'Test'};

      // Act
      render(<Component {...props} />);

      // Assert
      expect(screen.getByText('Test')).toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    test('should call onClick when button is clicked', () => {
      // Arrange
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Click</Button>);

      // Act
      fireEvent.click(screen.getByText('Click'));

      // Assert
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Styles', () => {
    test('should apply hover styles', () => {
      const {container} = render(<Button>Hover me</Button>);
      const button = container.querySelector('button');

      expect(button).toHaveStyleRule('opacity', '0.9', {
        modifier: ':hover',
      });
    });
  });
});
```

### Test Categories

#### 1. Rendering Tests

```typescript
test('should render component with children', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

#### 2. Props Tests

```typescript
test('should render with icon when icon prop is provided', () => {
  render(<Button icon={TestIcon}>Button</Button>);
  expect(screen.getByRole('button')).toBeInTheDocument();
});
```

#### 3. State Tests

```typescript
test('should be disabled when disabled prop is true', () => {
  render(<Button disabled>Disabled</Button>);
  expect(screen.getByRole('button')).toBeDisabled();
});
```

#### 4. Interaction Tests

```typescript
test('should call onClick handler when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click</Button>);

  fireEvent.click(screen.getByText('Click'));

  expect(handleClick).toHaveBeenCalled();
});
```

#### 5. Style Tests

```typescript
test('should have correct background color', () => {
  const {container} = render(<Button />);
  const button = container.querySelector('button');

  expect(button).toHaveStyle('background-color: #d3d3d3');
});
```

#### 6. Snapshot Tests

```typescript
test('should match snapshot', () => {
  const {container} = render(<Button>Snapshot</Button>);
  expect(container.firstChild).toMatchSnapshot();
});
```

### Test Coverage

**Requirements:**

- ✅ **Statements**: 100%
- ✅ **Branches**: 100%
- ✅ **Functions**: 100%
- ✅ **Lines**: 100%

**Coverage report example:**

```
All files               | 100% | 100% | 100% | 100%
components/button       | 100% | 100% | 100% | 100%
  button.styles.ts      | 100% | 100% | 100% | 100%
  button.tsx            | 100% | 100% | 100% | 100%
```

### Theme Tests

```typescript
describe('ThemeVariants', () => {
  test('should render with light theme', () => {
    const {container} = render(<Component $themeDark={false} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should render with dark theme', () => {
    const {container} = render(<Component $themeDark={true} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
```

### Internationalization Tests

```typescript
test('should display text in Portuguese', () => {
  render(<Component />);
  expect(screen.getByText(/olá/i)).toBeInTheDocument();
});

test('should display text in English', () => {
  render(<Component />);
  expect(screen.getByText(/hello/i)).toBeInTheDocument();
});
```

---

## 🎯 Available Scripts

### Development

```bash
# Start development server (port 5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Code Quality

```bash
# Check formatting and linting
npm run lint

# Format code with Prettier
npm run format

# Format and fix issues automatically
npm run format:fix
```

### Git Hooks

The following hooks run automatically:

- **pre-commit**: Runs lint-staged (formats and validates code)
- **pre-push**: Runs all tests

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

### 1. Fork and Clone

```bash
# Fork via GitHub interface
# Clone your fork
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

### 2. Create a Branch

```bash
# Feature
git checkout -b feat/new-feature

# Bug fix
git checkout -b fix/bug-fix

# Refactoring
git checkout -b refactor/improve-code
```

### 3. Develop

- Write code following project standards
- Add tests for new features
- Maintain 100% coverage
- Follow commit conventions

### 4. Test

```bash
# Run tests
npm test

# Check coverage
npm run test:coverage

# Check code
npm run lint
```

### 5. Commit

```bash
# Add files
git add .

# Commit with conventional message
git commit -m "feat: add amazing feature"
```

### 6. Push and Pull Request

```bash
# Push to your fork
git push origin feat/new-feature

# Create Pull Request via GitHub interface
```

### PR Checklist

- ✅ Code follows project standards
- ✅ Tests passing: `npm test`
- ✅ 100% coverage: `npm run test:coverage`
- ✅ Code formatted: `npm run format:fix`
- ✅ No lint errors: `npm run lint`
- ✅ Commits follow convention
- ✅ PR with clear description

---

## 📚 Additional Resources

### Technology Documentation

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)
- [Vite](https://vitejs.dev/)

### Guides and Standards

- [Conventional Commits](https://www.conventionalcommits.org/)
- [React Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [TypeScript Best Practices](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

---

## 👤 Author

**Alexandre dos Santos Gonçalves**

- 🌐 [LinkedIn](https://www.linkedin.com/in/alexandre-sgoncalves)
- 🐙 [GitHub](https://github.com/alexandre-s-goncalves)
- 📧 [Email](mailto:alexandre.sgoncalves@outlook.com)

---

<div align="center">

**Made with ❤️ by Alexandre Gonçalves**

<a href="#top">⬆ back to top</a>

</div>
