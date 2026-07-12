<br/>
<div align="center">

[🏠 Retour au README Principal](../README.md) • [🇧🇷 Português](./README.pt-BR.md) • [🇺🇸 English](./README.en-US.md) • [🇪🇸 Español](./README.es-ES.md)

</div>

# 🇫🇷 Portfolio - Documentation en Français

---

## 📋 Sommaire

- [À propos du Projet](#-à-propos-du-projet)
- [Fonctionnalités](#-fonctionnalités)
- [Technologies](#-technologies)
- [Prise en main](#-prise-en-main)
- [Structure du Projet](#-structure-du-projet)
- [Standards de Développement](#-standards-de-développement)
- [Conventions de Commit](#-conventions-de-commit)
- [Standards de Tests](#-standards-de-tests)
- [Scripts Disponibles](#-scripts-disponibles)
- [Contribution](#-contribution)

---

## 🎯 À propos du Projet

Portfolio personnel moderne et responsive présentant mes projets, compétences et expériences professionnelles. Développé selon les meilleures pratiques de l'industrie, avec une couverture de tests à 100% et un support d'internationalisation complet.

### Objectifs

- Démontrer des compétences techniques en développement front-end
- Présenter des projets et expériences dans une interface professionnelle
- Servir de référence pour un code propre, évolutif et bien testé
- Offrir une expérience utilisateur exceptionnelle

---

## ✨ Fonctionnalités

- 🎨 **UI Moderne** : Design épuré et responsive avec bascule de thème clair/sombre
- 🌍 **Internationalisation** : Support pour le portugais, l'anglais, le français et l'espagnol
- 🧪 **Couverture à 100%** : Suite complète de tests automatisés
- 📱 **Responsive** : Architecture de design pensée mobile-first
- ⚡ **Performance** : Livraison d'actifs hautement optimisée propulsée par Vite
- 🎨 **Tailwind CSS** : Style utility-first avec configuration de thème et mode sombre natifs
- 🔍 **SEO Friendly** : Structure HTML sémantique et optimisée
- ♿ **Accessible** : Construit conformément aux directives d'accessibilité WCAG

---

## 🛠 Technologies

### Core

- **React** 19.2.6 - Bibliothèque d'interface utilisateur (UI)
- **TypeScript** 5.6.2 - Sur-ensemble de typage statique strict
- **Vite** 8.0.12 - Outil de build et serveur de développement haute performance
- **React Router** 7.9.4 - Gestion du routage et de la navigation côté client

### Style

- **tailwindcss/vite** 4.3.1 - Plugin officiel pour l'intégration et la compilation haute performance de Tailwind v4 avec Vite

### Internationalisation

- **i18next** 26.3.1 - Framework d'internationalisation core
- **react-i18next** 17.0.8 - Liaisons officielles et hooks pour l'intégration avec React
- **i18next-browser-languagedetector** 8.2.1 - Middleware de détection automatique de la langue du navigateur

### Tests

- **testing-library/react** 16.3.2 - Utilitaires de test de composants React axés sur le comportement de l'utilisateur
- **testing-library/jest-dom** 6.9.1 - Matchers DOM personnalisés pour des assertions de test étendues

### Qualité du Code

- **ESLint** 10.3.0 - Outil d'analyse statique pour trouver et corriger les problèmes de code
- **Prettier** 3.8.4 - Formateur de code qui garantit la cohérence visuelle
- **Husky** 9.1.7 - Outil d'automatisation pour l'exécution des git hooks locaux
- **lint-staged** 16.2.4 - Exécuteur de vérifications de qualité uniquement pour les fichiers modifiés

### Analyse du Code

Ce projet utilise [SonarCloud](https://sonarcloud.io) pour l'analyse continue de la qualité du code.

Points principaux surveillés :

- Bugs potentiels détectés automatiquement
- Vulnérabilités de sécurité dans les dépendances
- Mauvaises pratiques de code affectant la maintenabilité
- Couverture des tests automatisés

---

## 🚀 Prise en main

### Prérequis

- **Node.js** : 20.x ou supérieur
- **npm** : 11.17.0 ou superior
- **Git** : Dernière version installée
- **Éditeur Recommandé** : Visual Studio Code

### Installation

1. **Cloner le dépôt**

```bash
git clone https://github.com
cd portfolio
```

2. **Installer les dépendances** (les hooks Husky se configureront automatiquement)

```bash
npm install
```

3. **Démarrer le serveur de développement**

```bash
npm run dev
```

4. **Ouvrir dans le navigateur**

Accédez à [http://localhost:5173](http://localhost:5173) dans votre navigateur pour voir l'application en cours d'exécution.

## 📁 Structure du Projet

### Aperçu

```text
portfolio/
├── docs/                    # Documentation en plusieurs langues
├── public/                  # Actifs statiques globaux
├── src/
│   ├── @types/             # Définitions TypeScript
│   ├── __mocks__/          # Mocks pour les tests
│   ├── assets/             # Actifs partagés (icônes, images, polices)
│   ├── components/         # Composants globaux réutilisables
│   ├── context/            # Fichiers de l'API Context de React
│   ├── pages/              # Vues des pages principales
│   ├── resources/          # Tokens de conception core
│   ├── routes/             # Configuration du routage de l'application
│   └── utils/              # Utilitaires d'aide
└── [fichiers de configuration]
```

---

## 📐 Standards de Développement

### Conventions de Nommage

| Élément                | Convention       | Exemple                        |
| :--------------------- | :--------------- | :----------------------------- |
| Composants             | PascalCase       | `Button`, `IconButton`         |
| Fichiers de Composants | PascalCase       | `Button.tsx`, `Header.tsx`     |
| Fichiers Utilitaires   | camelCase        | `formatDate.ts`, `validate.ts` |
| Variables              | camelCase        | `userName`, `isActive`         |
| Constantes             | UPPER_SNAKE_CASE | `API_URL`, `MAX_LENGTH`        |
| Types / Interfaces     | PascalCase       | `UserProps`, `ThemeConfig`     |

### Architecture Standard d'un Composant

```typescript
// 1. Importations
import React from 'react';
import { clsx } from 'clsx';
import { ComponentProps } from './types';

// 2. Types/Interfaces
interface Props {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
}

// 3. Définition du Composant
export const Component = ({ title, onClick, disabled = false }: Props) => {
  // Logique du Composant
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      /* OPTION 1 : Style conditionnel regroupé avec la bibliothèque clsx */
      className={clsx(
        'flex items-center justify-center rounded-lg px-4 py-2 font-medium transition-all duration-200',
        'cursor-pointer bg-blue-600 text-white hover:bg-blue-700 active:scale-98',
        'disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 disabled:opacity-50 disabled:scale-100'
      )}
    >
      {/* OPTION 2 : Style conditionnel inline avec des Template Literals et des Opérateurs Ternaires */}
      <span className={`text-sm ${disabled ? 'line-through text-gray-400' : 'font-semibold text-white'}`}>
        {title}
      </span>
    </button>
  );
};
```

### Organisation des Fichiers

Chaque composant doit résider dans son propre dossier modulaire selon ce modèle :

```text
component/
├── component.test.tsx              # Spécifications et tests du composant
├── component.tsx                   # Logique et structure
└── index.ts                        # Point d'entrée pour les exportations publiques
```

### Bonnes Pratiques

1. **Composants Fonctionnels** : Construisez exclusivement avec des composants fonctionnels et des React Hooks.
2. **Typage Strict** : Déclarez toujours des types explicites pour les props des composants et les états locaux.
3. **Importations Absolues** : Utilisez des mappages de chemins absolus (path aliases) configurés dans `tsconfig`.
4. **Code en Anglais** : Veillez à ce que tous les noms de variables, commentaires, messages de commit et suites de tests soient écrits strictement en anglais.

---

## 📝 Conventions de Commit

### Conventional Commits

Nous suivons la spécification standard [Conventional Commits](https://conventionalcommits.org) pour la clarté de l'historique du dépôt :

```bash
<type>(<périmètre>): <description>

[corps optionnel]

[pied de page optionnel]
```

### Types de Commit

| Type       | Description                                                 | Exemple                            |
| :--------- | :---------------------------------------------------------- | :--------------------------------- |
| `feat`     | Implémentation d'une nouvelle fonctionnalité                | `feat: add dark mode toggle`       |
| `fix`      | Correction d'un bug                                         | `fix: resolve button hover state`  |
| `refactor` | Restructuration du code sans changement de fonctionnalité   | `refactor: reorganize home styles` |
| `test`     | Ajout ou mise à jour de tests existants                     | `test: add footer theme variants`  |
| `docs`     | Modifications exclusives à la documentation                 | `docs: update README`              |
| `style`    | Changements de formatage (espaces, points-virgules)         | `style: format with prettier`      |
| `chore`    | Mises à jour des processus de build ou d'outils auxiliaires | `chore: update dependencies`       |
| `perf`     | Ajustements et améliorations des performances               | `perf: optimize image loading`     |

### Exemples de Commits

#### Feat (Nouvelle Fonctionnalité)

```bash
feat: add dark mode toggle to header

- Implement theme context with React Context API
- Add toggle button in header component
- Persist theme preference in localStorage
```

## 🧪 Standards de Tests

L'écosystème de tests repose sur **Vitest** combiné avec **React Testing Library**. For internationalized views, use the custom helper to mount the component inside the `i18next` context.

### Modèle d'Intégration des Tests

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

### 📋 Catégories Officielles de Tests

Pour préserver la fiabilité du code et maintenir l'objectif de **100% de couverture de code**, chaque composant doit couvrir les couches suivantes :

#### 1. Tests de Rendu

Valide l'assemblage de base de l'arbre HTML et le rendu exact des chaînes de caractères littérales.

```typescript
test('should render component with text content', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

#### 2. Tests des Props

Garantit que les variations structurelles ou les comportements changent correctement selon les props réactives transmises.

```typescript
test('should render icon element when prop is provided', () => {
  render(<Button icon={<span data-testid="icon" />}>Button</Button>);
  expect(screen.getByTestId('icon')).toBeInTheDocument();
});
```

#### 3. Tests d'État (Verrous d'Interface)

Valide la logique de blocage du composant et les restrictions de visibilité interactive en utilisant les propriétés natives du HTML.

```typescript
test('should apply HTML disabled property', () => {
  render(<Button disabled>Disabled</Button>);
  expect(screen.getByRole('button')).toBeDisabled();
});
```

#### 4. Tests d'Interaction (Gestion des Événements)

Simule des interactions réelles de l'utilisateur à l'aide de `fireEvent` et écoute les callbacks avec les outils d'espionnage de Vitest.

```typescript
test('should trigger onClick callback function', () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Click</Button>);

  fireEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

#### 5. Tests de Style et de Thème (Tailwind v4)

Valide le changement de thème en vérifiant la présence statique des classes de conception ou des sélecteurs sombres (`dark:bg-slate-900`) lorsque le nœud racine principal est mis à jour.

```typescript
test('should apply dark theme style tokens when root has dark class', () => {
  const { container } = render(<Component />);
  container.parentElement?.classList.add('dark');

  const element = screen.getByRole('banner');
  expect(element).toHaveClass('dark:bg-slate-900', 'dark:text-sky-400');
});
```

### 🎭 Tests de bout en bout avec Playwright

En plus des tests unitaires avec Vitest, le projet inclut également une suite de tests de bout en bout avec Playwright pour valider les flux réels de navigation et d'internationalisation. Le scénario principal se trouve dans `E2E/i18n.spec.ts` et couvre le changement de langue sur la page des paramètres, ainsi que la vérification du contenu sur la page d'accueil.

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

#### Bonnes pratiques

- Validez les routes réelles, la navigation et les interactions utilisateur.
- Préférez des sélecteurs accessibles et des `data-testid` pour les éléments spécifiques.
- Gardez les scénarios d'internationalisation et de régression en exécution continue.

---

## 🎯 Scripts Disponibles

### Développement et Production

```bash
# Lance le serveur d'environnement de développement local avec Vite
npm run dev

# Compile et optimise les ressources dans un bundle de production
npm run build

# Exécute un serveur local de prévisualisation du build de production
npm run preview
```

### Tests (Moteur Vitest)

```bash
# Exécute la suite de tests automatisés
npm test

# Ouvre le tableau de bord visuel interactif (UI Dashboard) de Vitest dans le navigateur
npm run test:ui

# Exécute les tests et exporte un rapport complet de couverture LCOV
npm run coverage
```

### Assurance Qualité & Automatisation

```bash
# Audite le code à l'aide d'ESLint, en ignorant les rapports de couverture
npm run lint

# Écrit par-dessus et corrige automatiquement les problèmes de formatage avec Prettier
npm run format

# Configure et installe les Git hooks Husky locaux requis
npm run prepare
```

---

## 🤝 Contribution

Les contributions sont ce qui fait prospérer la communauté open-source ! Suivez ces étapes pour collaborer :

### 1. Fork et Cloner

```bash
# Faites un Fork via l'interface GitHub et clonez votre fork localement :
git clone https://github.com
cd portfolio
```

### 2. Créer une Branche

```bash
# Pour les nouvelles fonctionnalités
git checkout -b feat/nouvelle-fonctionnalite

# Pour les corrections de bugs
git checkout -b fix/corriger-bug

# Pour les refactorisations architecturales du code
git checkout -b refactor/melhorar-codigo
```

### 3. Phase de Développement

- Structurez le code conformément aux architectures de composants standards décrites ci-dessus.
- Écrivez les spécifications correspondantes pour les tests d'intégration automatisés.
- Maintenez toujours l'objectif de base du projet de **100% de couverture de code**.
- Alignez les résumés de commit en suivant strictement le modèle des Conventional Commits.

### 4. Vérifications Locales

```bash
# Exécutez les suites de tests localement
npm test

# Auditez les rapports de couverture de fichiers
npm run coverage

# Lancez l'évaluation d'analyse statique (linter)
npm run lint

# Formatez les règles du code avant de soumettre les fichiers
npm run format
```

### 5. Routines de Commit et Push

```bash
# Ajoutez as modificações à camada de staging de Git
git add .

# Enregistrez les modifications à l'aide de messages sémantiques conventionnels
git commit -m "feat: add amazing feature"

# Téléversez vos fichiers vers votre branche de fork distante
git push origin feat/nouvelle-fonctionnalite
```

### 6. Pull Request

Retournez sur la page de votre fork sur GitHub et appuyez sur le bouton **"New Pull Request"**, en dirigeant vos modifications vers la branche principale du dépôt d'origine.

### 📋 Liste de Vérification Avant de Soumettre le PR

- [ ] Le code respecte strictement les conventions globales d'architecture et de formatage.
- [ ] Les cycles de tests locaux s'exécutent sans erreur (`npm test`).
- [ ] La couverture du projet maintient la métrique requise de 100% (`npm run coverage`).
- [ ] Les fichiers sources passent par les règles complètes de formatage automatique de Prettier (`npm run format`).
- [ ] Zéro signal d'avertissement ou d'erreur n'apparaît sous les tâches du linter (`npm run lint`).
- [ ] L'historique des commits correspond strictement aux modèles des Conventional Commits.
- [ ] La Pull Request comprend une description claire et complète décrivant les modifications.

---

## 📚 Ressources Additionnelles

### Documentation de l'Écosystème Core

- [React 19](https://react.dev)
- [TypeScript](https://typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Vitest](https://vitest.dev)
- [React Testing Library](https://testing-library.com)
- [Vite](https://vite.dev)
- [i18next](https://i18next.com)

### Guides de Patrons et Bonnes Pratiques

- [Spécification des Conventional Commits](https://conventionalcommits.org)
- [React Testing Best Practices (Kent C. Dodds)](https://kentcdodds.com)
- [Guide de Style TypeScript](https://typescriptlang.orgdocs/handbook/declaration-files/do-s-and-don-ts.html)

---

## 📄 Licence

Ce dépôt est distribué selon les directives officielles de la Licence MIT — consultez le fichier [LICENSE](../LICENSE) pour obtenir plus de détails.

---

## 👤 Auteur

**Alexandre dos Santos Gonçalves**

- 🌐 [LinkedIn](https://linkedin.com)
- 🐙 [GitHub](https://github.com)
- 📧 [Email](mailto:alexandre.sgoncalves@outlook.com)

---

<div align="center">

**Fait avec ❤️ par Alexandre Gonçalves**

<a href="#top">⬆ retourner en haut</a>

</div>
