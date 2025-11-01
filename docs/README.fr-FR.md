# 🇫🇷 Portfolio - Documentation Française

<div align="center">

[![MIT Licensed](https://img.shields.io/badge/license-MIT-green.svg)](https://tldrlegal.com/license/mit-license)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![Tests](https://img.shields.io/badge/tests-401%20passés-brightgreen.svg)](https://github.com/alexandre-s-goncalves/portfolio)
[![Coverage](https://img.shields.io/badge/couverture-100%25-brightgreen.svg)](https://github.com/alexandre-s-goncalves/portfolio)

**Portfolio personnel construit avec React, TypeScript et Styled Components**

[🏠 Retour au README principal](../README.md) • [🇧🇷 Português](./README.pt-BR.md) • [🇺🇸 English](./README.en-US.md)

</div>

---

## 📋 Table des Matières

- [À Propos du Projet](#-à-propos-du-projet)
- [Fonctionnalités](#-fonctionnalités)
- [Technologies](#-technologies)
- [Démarrage](#-démarrage)
- [Structure du Projet](#-structure-du-projet)
- [Standards de Développement](#-standards-de-développement)
- [Standards de Commit](#-standards-de-commit)
- [Standards de Tests](#-standards-de-tests)
- [Scripts Disponibles](#-scripts-disponibles)
- [Contribuer](#-contribuer)

---

## 🎯 À Propos du Projet

Portfolio personnel moderne et responsive présentant des projets, compétences et expérience professionnelle. Construit en suivant les meilleures pratiques, avec une couverture de tests de 100% et support de l'internationalisation.

### Objectifs

- Démontrer les compétences techniques en développement front-end
- Présenter les projets et expériences de manière professionnelle
- Servir de référence pour du code propre et bien testé
- Fournir une expérience utilisateur exceptionnelle

---

## ✨ Fonctionnalités

- 🎨 **Interface Moderne**: Design épuré et responsive avec thème sombre/clair
- 🌍 **Internationalisation**: Support du portugais, anglais et français
- 🧪 **100% de Couverture**: Suite de tests complète avec 401 tests
- 📱 **Responsive**: Approche mobile-first
- ⚡ **Performance**: Optimisé avec Vite
- 🎭 **Styled Components**: CSS-in-JS avec support des thèmes
- 🔍 **SEO Friendly**: Structure HTML sémantique
- ♿ **Accessible**: Conforme WCAG

---

## 🛠 Technologies

### Core

- **React** 18.2.0 - Bibliothèque UI
- **TypeScript** 5.2.2 - Typage statique
- **Vite** 5.0.0 - Outil de build
- **React Router** 7.9.4 - Navigation

### Style

- **Styled Components** 6.0.0 - CSS-in-JS
- **React InlineSVG** 4.2.0 - Gestion SVG

### Internationalisation

- **i18next** 25.6.0 - Framework de traduction
- **react-i18next** 16.1.4 - Liaison React
- **i18next-browser-languagedetector** 8.2.0 - Détection de langue

### Tests

- **Jest** 29.6.0 - Exécuteur de tests
- **Testing Library** 16.3.0 - Tests de composants
- **jest-styled-components** 7.2.0 - Tests styled components

### Qualité du Code

- **ESLint** 9.38.0 - Linting
- **Prettier** 3.6.2 - Formatage du code
- **Husky** 9.1.7 - Hooks Git
- **lint-staged** 16.2.4 - Vérifications pre-commit

---

## 🚀 Démarrage

### Prérequis

- **Node.js**: 20.x ou supérieur
- **npm**: 10.8.1 ou supérieur
- **Git**: Dernière version
- **Éditeur recommandé**: Visual Studio Code

### Installation

1. **Cloner le dépôt**

```bash
git clone https://github.com/alexandre-s-goncalves/portfolio.git
cd portfolio
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Configurer Husky** (configuré automatiquement via prepare)

```bash
npm run prepare
```

4. **Démarrer le serveur de développement**

```bash
npm run dev
```

5. **Ouvrir dans le navigateur**

```
http://localhost:5173
```

---

## 📁 Structure du Projet

### Vue d'Ensemble

```
portfolio/
├── docs/                    # Documentation multilingue
├── public/                  # Ressources statiques
├── src/
│   ├── @types/             # Définitions de types TypeScript
│   ├── __mocks__/          # Mocks de tests
│   ├── assets/             # Ressources (icônes, images, polices)
│   ├── components/         # Composants réutilisables
│   ├── context/            # Contextes React
│   ├── pages/              # Composants de pages
│   ├── resources/          # Tokens de design
│   ├── routes/             # Configuration du routage
│   └── utils/              # Utilitaires
└── [fichiers de configuration]
```

### Composants

#### Composants UI (`src/components/ui/`)

- **Button**: Bouton réutilisable avec support d'icônes
- **Text**: Composant de texte avec variantes typographiques

#### Composants Fonctionnels (`src/components/`)

- **Header**: En-tête avec navigation et changement de thème
- **Footer**: Pied de page avec liens sociaux
- **Dropdown**: Sélecteur de langue
- **Icon**: Wrapper d'icône SVG
- **IconButton**: Bouton avec icône uniquement
- **Image**: Composant d'image optimisé

#### Pages (`src/pages/`)

- **Home**: Page d'accueil avec introduction
- **Skills**: Page des compétences techniques
- **Projects**: Portfolio de projets
- **About**: À propos
- **NotFound**: Page 404

---

## 📐 Standards de Développement

### Conventions de Nommage

| Type                   | Convention       | Exemple                        |
| ---------------------- | ---------------- | ------------------------------ |
| Composants             | PascalCase       | `Button`, `IconButton`         |
| Fichiers de Composants | PascalCase       | `Button.tsx`, `Header.tsx`     |
| Fichiers Utilitaires   | camelCase        | `formatDate.ts`, `validate.ts` |
| Variables              | camelCase        | `userName`, `isActive`         |
| Constantes             | UPPER_SNAKE_CASE | `API_URL`, `MAX_LENGTH`        |
| Styled Components      | PascalCase       | `Container`, `Title`           |
| Props Transitoires     | Préfixe `$`      | `$themeDark`, `$isActive`      |
| Types/Interfaces       | PascalCase       | `UserProps`, `ThemeConfig`     |

### Structure de Composant

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

// 3. Composant
export const Component = ({title, onClick, disabled = false}: Props) => {
  // Logique du composant
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

### Organisation des Fichiers

Chaque composant suit cette structure:

```
component/
├── __snapshots__/                  # Snapshots Jest
│   ├── component.test.tsx.snap    # Snapshots des tests
│   └── component.styles.test.tsx.snap
├── component.styles.test.tsx       # Tests des styled components
├── component.styles.ts             # Styled components
├── component.test.tsx              # Tests du composant
├── component.tsx                   # Logique du composant
└── index.ts                        # Exports publics
```

### Bonnes Pratiques

1. **Composants Fonctionnels**: Toujours utiliser des composants fonctionnels avec hooks
2. **Typage Fort**: Toujours définir les types pour les props et états
3. **Props Transitoires**: Utiliser `$` pour les props qui ne doivent pas être passées au DOM
4. **Imports Absolus**: Utiliser les alias de chemin configurés dans tsconfig
5. **Code en Anglais**: Tout le code, commentaires et messages en anglais

---

## 📝 Standards de Commit

### Conventional Commits

Nous suivons le standard [Conventional Commits](https://www.conventionalcommits.org/):

```bash
<type>(<scope>): <description>

[corps optionnel]

[pied de page optionnel]
```

### Types de Commit

| Type       | Description                  | Exemple                            |
| ---------- | ---------------------------- | ---------------------------------- |
| `feat`     | Nouvelle fonctionnalité      | `feat: add dark mode toggle`       |
| `fix`      | Correction de bug            | `fix: resolve button hover state`  |
| `refactor` | Refactoring du code          | `refactor: reorganize home styles` |
| `test`     | Ajout/mise à jour de tests   | `test: add footer theme variants`  |
| `docs`     | Documentation                | `docs: update README`              |
| `style`    | Formatage du code            | `style: format with prettier`      |
| `chore`    | Tâches de maintenance        | `chore: update dependencies`       |
| `perf`     | Améliorations de performance | `perf: optimize image loading`     |

### Exemples de Commits

#### Feat (Nouvelle Fonctionnalité)

```bash
feat: add dark mode toggle to header

- Implement theme context with React Context API
- Add toggle button in header component
- Persist theme preference in localStorage
- Update all components to support dark theme
```

#### Fix (Correction de Bug)

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

#### Test (Tests)

```bash
test(footer): achieve 100% coverage with theme variants

- Add tests for light theme
- Add tests for dark theme
- Test all social links
- Update snapshots
```

### Scope

Utiliser le scope pour indiquer quelle partie du code a été modifiée:

- `(home)`: Page d'accueil
- `(button)`: Composant Button
- `(header)`: Composant Header
- `(i18n)`: Internationalisation
- `(deps)`: Dépendances
- `(config)`: Fichiers de configuration

### Messages de Commit

**✅ Bonnes pratiques:**

- Utiliser le mode impératif: "add" pas "added" ou "adds"
- Première lettre en minuscule: "add feature" pas "Add feature"
- Pas de point à la fin de la description
- Corps détaillé si nécessaire
- Référencer les issues si applicable

**❌ À éviter:**

- Messages génériques: "fix bug", "update code"
- Plusieurs changements non liés dans un commit
- Commits très larges

---

## 🧪 Standards de Tests

### Structure de Test

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

### Catégories de Tests

#### 1. Tests de Rendu

```typescript
test('should render component with children', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

#### 2. Tests de Props

```typescript
test('should render with icon when icon prop is provided', () => {
  render(<Button icon={TestIcon}>Button</Button>);
  expect(screen.getByRole('button')).toBeInTheDocument();
});
```

#### 3. Tests d'État

```typescript
test('should be disabled when disabled prop is true', () => {
  render(<Button disabled>Disabled</Button>);
  expect(screen.getByRole('button')).toBeDisabled();
});
```

#### 4. Tests d'Interaction

```typescript
test('should call onClick handler when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click</Button>);

  fireEvent.click(screen.getByText('Click'));

  expect(handleClick).toHaveBeenCalled();
});
```

#### 5. Tests de Style

```typescript
test('should have correct background color', () => {
  const {container} = render(<Button />);
  const button = container.querySelector('button');

  expect(button).toHaveStyle('background-color: #d3d3d3');
});
```

#### 6. Tests de Snapshot

```typescript
test('should match snapshot', () => {
  const {container} = render(<Button>Snapshot</Button>);
  expect(container.firstChild).toMatchSnapshot();
});
```

### Couverture de Tests

**Exigences:**

- ✅ **Instructions**: 100%
- ✅ **Branches**: 100%
- ✅ **Fonctions**: 100%
- ✅ **Lignes**: 100%

**Exemple de rapport de couverture:**

```
All files               | 100% | 100% | 100% | 100%
components/button       | 100% | 100% | 100% | 100%
  button.styles.ts      | 100% | 100% | 100% | 100%
  button.tsx            | 100% | 100% | 100% | 100%
```

### Tests de Thème

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

### Tests d'Internationalisation

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

## 🎯 Scripts Disponibles

### Développement

```bash
# Démarrer le serveur de développement (port 5173)
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

### Tests

```bash
# Exécuter tous les tests
npm test

# Exécuter les tests en mode watch
npm run test:watch

# Générer un rapport de couverture
npm run test:coverage
```

### Qualité du Code

```bash
# Vérifier le formatage et le linting
npm run lint

# Formater le code avec Prettier
npm run format

# Formater et corriger automatiquement
npm run format:fix
```

### Hooks Git

Les hooks suivants s'exécutent automatiquement:

- **pre-commit**: Exécute lint-staged (formate et valide le code)
- **pre-push**: Exécute tous les tests

---

## 🤝 Contribuer

Les contributions sont les bienvenues! Suivez ces étapes:

### 1. Fork et Clone

```bash
# Fork via l'interface GitHub
# Cloner votre fork
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

### 2. Créer une Branche

```bash
# Fonctionnalité
git checkout -b feat/nouvelle-fonctionnalite

# Correction de bug
git checkout -b fix/correction-bug

# Refactoring
git checkout -b refactor/ameliorer-code
```

### 3. Développer

- Écrire du code suivant les standards du projet
- Ajouter des tests pour les nouvelles fonctionnalités
- Maintenir 100% de couverture
- Suivre les conventions de commit

### 4. Tester

```bash
# Exécuter les tests
npm test

# Vérifier la couverture
npm run test:coverage

# Vérifier le code
npm run lint
```

### 5. Commit

```bash
# Ajouter les fichiers
git add .

# Commit avec message conventionnel
git commit -m "feat: add amazing feature"
```

### 6. Push et Pull Request

```bash
# Push vers votre fork
git push origin feat/nouvelle-fonctionnalite

# Créer une Pull Request via l'interface GitHub
```

### Checklist PR

- ✅ Le code suit les standards du projet
- ✅ Tests passants: `npm test`
- ✅ 100% de couverture: `npm run test:coverage`
- ✅ Code formaté: `npm run format:fix`
- ✅ Pas d'erreurs de lint: `npm run lint`
- ✅ Les commits suivent la convention
- ✅ PR avec description claire

---

## 📚 Ressources Supplémentaires

### Documentation des Technologies

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)
- [Vite](https://vitejs.dev/)

### Guides et Standards

- [Conventional Commits](https://www.conventionalcommits.org/)
- [React Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [TypeScript Best Practices](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)

---

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](../LICENSE) pour plus de détails.

---

## 👤 Auteur

**Alexandre dos Santos Gonçalves**

- 🌐 [LinkedIn](https://www.linkedin.com/in/alexandre-sgoncalves)
- 🐙 [GitHub](https://github.com/alexandre-s-goncalves)
- 📧 [Email](mailto:alexandre.sgoncalves@outlook.com)
- 📱 Téléphone: +55 11 94500-8992
- 📍 São Paulo, Brésil

---

<div align="center">

**Fait avec ❤️ par Alexandre Gonçalves**

<a href="#top">⬆ retour en haut</a>

</div>
