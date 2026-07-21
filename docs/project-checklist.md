# 📋 Project Development Checklist

## ⚙️ Module 1: Infrastructure & Core Configuration (CI/CD & DevOps)

- ✅ Base project initialization with React, TypeScript, and Vite
- ✅ Configure NPM build scripts for automated testing and coverage analytics
- ✅ Fix missing coverage dependencies (`@vitest/coverage-v8`)
- ✅ Implement fast-feedback validation pipeline (`tests.yml`)
- ✅ Implement continuous deployment pipeline (`deploy.yml`)
- ✅ Setup environment isolation via conditional routing (`if: github.event_name`)
- ✅ Add concurrency controls (`keep_files`) to prevent GitHub Pages deployment conflicts
- ✅ Enable write permissions for GitHub Actions bot execution
- ✅ Activate classic branch protection rules for `main` security
- ✅ Link official GitHub Environments for `Homologation` and `Production`
- ✅ Setup manual reviewer approvals for production deployment
- ✅ Configure dynamic subfolder paths via line arguments (`--base=/portfolio/`)
- ✅ Automate remote branch matching via `push.autoSetupRemote true`
- ✅ Implement Single Page Application (SPA) multi-route support on GitHub Pages
  - ✅ Create 404 fallback redirection script (`404.html`)
  - ✅ Implement history state restoration script inside entry point (`index.html`)
- ✅ Implement Progressive Web App (PWA) configurations
  - ✅ Configure `vite-plugin-pwa` in build step
  - ✅ Generate mobile app icons and favicon assets
  - ✅ Setup web app manifest (`manifest.json`)
  - ✅ Configure service workers for offline caching support
- ✅ Implement Tailwind CSS Framework
  - ✅ Install `tailwindcss` and `@tailwindcss/vite` plugin via npm
  - ✅ Integrate `tailwindcss()` plugin compiler inside `vite.config.js`
  - ✅ Inject the modern `@import "tailwindcss"` directive into global CSS entry file
- ✅ Setup Internationalization (i18n) engine
  - ✅ Install `i18next` and `react-i18next`
  - ✅ Configure English (EN) dictionary resources
  - ✅ Configure Portuguese (PT) dictionary resources
  - ✅ Configure French (FR) dictionary resources
  - ✅ Configure Spanish (ES) dictionary resources
  - ✅ Implement language switcher component with focus-visible accessibility
- ✅ Setup Global Theme State Management
  - ✅ Create highly resilient decoupled `ThemeProvider` and `useTheme` hooks
  - ✅ Connect core engine to mirror class selectors matching `.dark` attributes
  - ✅ Support persistent local properties binding user preferences through storage
  - ✅ Build customized `ThemeToggle` element with interactive current border focus
- ✅ Integrate Core Single Page Application Routing
  - ✅ Install `react-router-dom` and configure core structural history providers
  - ✅ Setup type-safe router browser configurations matching portfolio sections via explicit enums
- ✅ Create Static Maintenance Page
  - ✅ Design lightweight standalone fallback view
  - ✅ Configure routing interceptor for emergency lockouts
- ✅ Configure strict ESLint v10 governance rules to disallow inline comments

---

## 🎨 Module 2: Global UI Components (Responsive Layouts)

### 🖥️ Desktop Web View (Screen Width >= 1024px)

- ✅ Global Header Layout
  - ✅ Desktop navigation menu bar with active design states
  - ✅ Brand logo wrapper component with scale triggers
  - ✅ Language selection dropdown toggle filtering click focus artifacts
  - ✅ Theme toggle icon wrapper acing browser outline actions
- ✅ Global Footer Layout
  - ✅ Technical stack indicator badges and framework labels
  - ✅ Social network interactive links using secure `rel="noopener noreferrer"` attributes
  - ✅ Copyright and localized rights reservations connected to the global `profile` constant

### 📐 Tablet & Mobile View (Screen Width < 1024px)

- ✅ Global Header Layout
  - ✅ Compact top header layout containing brand identity elements and basic page titles
- ✅ Interactive Bottom Tab Bar Navigation (Replaces Sidebar Mobile Concept)
  - ✅ Floating navigation capsule (`BottomTabBar`) using glassmorphism and modern active indicator ring arcs
  - ✅ Integrated horizontal flex layout containing localized router anchors
  - ✅ Built a full-width safety backdrop shield (`bg-linear-to-t`) with a `backdrop-blur-md` filter to prevent background page text bleed-through
- ✅ Global Footer Layout
  - ✅ Simplified stacked center row matching mobile viewport constraint grids

---

## 💻 Module 3: Portfolio Web Pages (Structure & Content)

### 🏠 Home Page Component

- ✅ Hero Showcase Unit
  - ✅ Professional headline title card displaying `profile.name` dynamically
  - ✅ Adaptive greeting and sênior developer role metadata strings
- ✅ Summary Introduction Row
  - ✅ High-fidelity developer profile description paragraph mapped across 4 locales
  - ✅ Core stack technology highlight tags with hover transition colors
- ✅ Quick Action Triggers
  - ✅ Navigation routing action buttons wired to type-safe destinations
  - ✅ Responsive layout shifting to centered vertical stacks on mobile viewports
- ✅ Profile Counters Section
  - ✅ Isolated statistical counter banner tracking key engineering metrics
  - ✅ Developed a pure utility function (`utils/date.ts`) to compute dynamic years of software experience on runtime execution

### 👤 About Me Page Component

- ✅ Asymmetric Layout Structure
  - ✅ Double-column desktop grid shifting into a clean mobile-first single block stack
- ✅ Identity Card Module
  - ✅ Embedded high-resolution circular profile photo with strict clipping masks (`object-cover rounded-full`)
  - ✅ Automated initial letter avatar fallback calculation algorithm
  - ✅ Dynamic contact lists map and quick links for downloading CV assets
- ✅ Professional History & Academic Track
  - ✅ Data-driven chronological timeline components for corporate experience (MRV, Club Med, Paradise)
  - ✅ Academic section cataloging all postgraduate certifications and technical degrees
  - ✅ Horizontal line layout isolation triggers hiding structural boundaries on trailing items

### 📁 Projects Directory Page

- 🔲 Project Grid Container
  - 🔲 Dynamic preview image thumbnail modules
  - 🔲 Project description texts
  - 🔲 Tech stack tag indicators
- 🔲 Interactive Action Anchors
  - 🔲 Live demo execution reference link
  - 🔲 Source code GitHub repository bridge

### 📱 Mobile Experience Page (React Native Display)

- 🔲 Live Device Emulator Widget
  - 🔲 Embedded responsive sandbox frame component
  - 🔲 Live execution bridge connecting to external platform
- 🔲 Application Specifications Sidebar
  - 🔲 System feature catalog list
  - 🔲 Architectural details text segment

### ⚠️ 404 Error Page

- ✅ Standalone Fallback View
  - ✅ Missing route error status presentation template
  - ✅ Localized messaging guidance helping lost recruiters
  - ✅ Return anchor safely rerouting traffic to core home container

---

## 📄 Module 4: Documentation & Presentation

- ✅ Structure professional `README.md` file in main directory with centralized metrics
- ✅ Create detailed international documentation files inside `docs/` folder
  - ✅ Create Portuguese guide (`README.pt-BR.md`)
  - ✅ Create English guide (`README.en-US.md`)
  - ✅ Create French guide (`README.fr-FR.md`)
  - ✅ Create Spanish guide (`README.es-ES.md`)
- ✅ Implement automated execution instructions for local environments
- ✅ Document architecture diagrams detailing multi-environment CI/CD workflow
- ✅ Setup dynamic premium aligned badges showcasing real-time build and SonarCloud gate metrics

---

## 🤖 Módulo 5: Automação e Qualidade E2E

- ✅ **Etapa 1:** Instalação do Playwright e criação do arquivo `playwright.config.ts` unificado.
- ✅ **Etapa 2:** Desenvolvimento do teste E2E de Fluxo de Navegação Responsiva (`navigation.spec.ts`).
- ✅ **Etapa 3:** Desenvolvimento do teste E2E de Reatividade de Idiomas (`i18n.spec.ts`).
- ✅ **Etapa 4:** Desenvolvimento do teste E2E de Persistência de Tema e LocalStorage (`theme.spec.ts`).
- ✅ **Etapa 5:** Desenvolvimento do teste E2E de Integridade, Cliques e Métricas da Página Inicial (`homePage.spec.ts`).
- ✅ **Etapa 6:** Desenvolvimento do teste E2E de Contraste, Foto e Histórico do LinkedIn da Página Sobre (`aboutPage.spec.ts`).
- ✅ **Etapa 7:** Desenvolvimento do teste E2E de Escudo Opaco e Abas da Barra Móvel (`bottomTabBar.spec.ts`).

## 🛡️ Módulo 6: Blindagem, Governança & Segurança Sênior

### 🩺 Linha de Frente: Diagnóstico de Saúde do Código

- ✅ **Etapa 1:** Integração do `react-doctor` no `package.json` para análises de arquitetura e performance.
- ✅ **Etapa 2:** Correção e resolução de todas as brechas ou avisos apontados pelo relatório do `react-doctor`.
- ✅ **Etapa 3:** Automação do `react-doctor` na esteira do GitHub Actions para bloquear PRs com nota baixa.

### 🛡️ Camada de Segurança Estrita (Security & Compliance)

- ✅ **Etapa 4:** Instalação e configuração do `eslint-plugin-security` no Flat Config contra brechas e ataques OWASP.
- ✅ **Etapa 5:** Ativação do script de checagem estrita de tipos em tempo de compilação de produção (`tsc --noEmit && vite build`).
- ✅ **Etapa 6:** Configuração do scanner automatizado `npm audit` no pipeline CI/CD para detecção de pacotes vulneráveis de terceiros.
- ✅ **Etapa 7:** Configuração de bloqueio local (via Husky) e remoto contra vazamento acidental de chaves secretas e tokens de APIs.
- ✅ **Etapa 8:** Integração da suíte de varredura profunda e qualidade contínua do SonarQube/SonarCloud no repositório.
