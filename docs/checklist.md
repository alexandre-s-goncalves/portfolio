# 📋 Project Development Checklist

## ⚙️ Module 1: Infrastructure & Core Configuration (CI/CD & DevOps)

- [x] Base project initialization with React and Vite
- [x] Configure NPM build scripts for automated testing and coverage
- [x] Fix missing coverage dependencies (`@vitest/coverage-v8`)
- [x] Implement fast-feedback validation pipeline (`tests.yml`)
- [x] Implement continuous deployment pipeline (`deploy.yml`)
- [x] Setup environment isolation via conditional routing (`if: github.event_name`)
- [x] Add concurrency controls (`keep_files`) to prevent GitHub Pages deployment conflicts
- [x] Enable write permissions for GitHub Actions bot execution
- [x] Activate classic branch protection rules for `main` security
- [x] Link official GitHub Environments for `Homologation` and `Production`
- [x] Setup manual reviewer approvals for production deployment
- [x] Configure dynamic subfolder paths via line arguments (`--base=/portfolio/`)
- [x] Automate remote branch matching via `push.autoSetupRemote true`
- [x] Implement Progressive Web App (PWA) configurations
  - [x] Configure `vite-plugin-pwa` in build step
  - [x] Generate mobile app icons and favicon assets
  - [x] Setup web app manifest (`manifest.json`)
  - [x] Configure service workers for offline caching support
- [x] Implement Tailwind CSS Framework
  - [x] Install `tailwindcss` and `@tailwindcss/vite` plugin via npm
  - [x] Integrate `tailwindcss()` plugin compiler inside `vite.config.js`
  - [x] Inject the modern `@import "tailwindcss"` directive into global CSS entry file
- [x] Setup Internationalization (i18n) engine
  - [x] Install `i18next` and `react-i18next`
  - [x] Configure English (EN) dictionary resources
  - [x] Configure Portuguese (PT) dictionary resources
  - [x] Configure French (FR) dictionary resources
  - [x] Configure Spanish (ES) dictionary resources
  - [x] Implement language switcher component with focus-visible accessibility
- [x] Setup Global Theme State Management
  - [x] Create highly resilient decoupled `ThemeProvider` and `useTheme` hooks
  - [x] Connect core engine to mirror class selectors matching `.dark` attributes
  - [x] Support persistent local properties binding user preferences through storage
  - [x] Build customized `ThemeToggle` element with interactive current border focus
- [ ] Integrate Core Single Page Application Routing
  - [ ] Install `react-router-dom` and configure core structural history providers
  - [ ] Setup type-safe router browser configurations matching portfolio sections
- [x] Create Static Maintenance Page
  - [x] Design lightweight standalone fallback view
  - [x] Configure routing interceptor for emergency lockouts
- [x] Configure strict ESLint v10 governance rules to disallow inline comments

---

## 🎨 Module 2: Global UI Components (Responsive Layouts)

### 🖥️ Desktop Web View (Screen Width >= 1024px)

- [x] Global Header Layout
  - [x] Desktop navigation menu bar with active design states
  - [x] Brand logo wrapper component with scale triggers
  - [x] Language selection dropdown toggle filtering click focus artifacts
  - [x] Theme toggle icon wrapper acing browser outline actions
- [ ] Global Footer Layout
  - [ ] Technical stack indicator badges
  - [ ] Copyright and project build version details

### 📐 Tablet & Mobile View (Screen Width < 1024px)

- [ ] Global Header Layout
  - [ ] Compact header layout containing brand identity elements
  - [ ] Hamburger menu trigger toggle for sidebar execution
- [ ] Interactive Sidebar Navigation
  - [ ] Slide-out drawer navigation canvas overlay
  - [ ] Focused stacked grid containing localized router anchors
  - [ ] Centralized layout utilities managing language and theme buttons
  - [ ] Accessible close triggers and focus-trap management (WAI-ARIA)
- [ ] Global Footer Layout
  - [ ] Simplified stacked layout row matching mobile grids

---

## 💻 Module 3: Portfolio Web Pages (Structure & Content)

### 🏠 Home Page Component

- [ ] Hero Showcase Unit
  - [ ] Professional headline title card
  - [ ] Dynamic typing introduction text sequence
  - [ ] High-resolution professional avatar asset
- [ ] Summary Introduction Row
  - [ ] Developer profile description paragraph
  - [ ] Core skill highlight chips
- [ ] Quick Action Triggers
  - [ ] Resume download link asset
  - [ ] Contact call-to-action redirect path

### 📁 Projects Directory Page

- [ ] Project Grid Container
  - [ ] Dynamic preview image thumbnail modules
  - [ ] Project description texts
  - [ ] Tech stack tag indicators
- [ ] Interactive Action Anchors
  - [ ] Live demo execution reference link
  - [ ] Source code GitHub repository bridge

### 📱 Mobile Experience Page (React Native Display)

- [ ] Live Device Emulator Widget
  - [ ] Embedded responsive sandbox frame component
  - [ ] Live execution bridge connecting to external platform
- [ ] Application Specifications Sidebar
  - [ ] System feature catalog list
  - [ ] Architectural details text segment

### ✉️ Contact Page

- [ ] Interactive Message Entry Box
  - [ ] Secure input validator forms
  - [ ] Dynamic form submission confirmation alert popup
- [ ] External Network Link Group
  - [ ] LinkedIn profile direct target anchor
  - [ ] GitHub main user link connection

### ⚠️ 404 Error Page

- [ ] Standalone Fallback View
  - [ ] Missing route error status presentation template
  - [ ] Localized messaging guidance helping lost recruiters
  - [ ] Return anchor safely rerouting traffic to core home container

---

## 📄 Module 4: Documentation & Presentation

- [x] Structure professional `README.md` file in main directory
- [x] Create detailed international documentation files inside `docs/` folder
  - [x] Create Portuguese guide (`README.pt-BR.md`)
  - [x] Create English guide (`README.en-US.md`)
  - [x] Create French guide (`README.fr-FR.md`)
  - [x] Create Spanish guide (`README.es-ES.md`)
- [x] Implement automated execution instructions for local environments
- [x] Document architecture diagrams detailing multi-environment CI/CD workflow
- [x] Setup dynamic badges showcasing real-time build and coverage parameters

---

## 🤖 Módulo 5: Automação e Qualidade E2E

- [x] **Etapa 1:** Instalação do Playwright e criação do arquivo `playwright.config.ts` unificado.
- [x] **Etapa 2:** Desenvolvimento do teste E2E de Fluxo de Navegação Responsiva (`navigation.spec.ts`).
- [x] **Etapa 3:** Desenvolvimento do teste E2E de Reatividade de Idiomas (`i18n.spec.ts`).
- [x] **Etapa 4:** Desenvolvimento do teste E2E de Persistência de Tema e LocalStorage (`theme.spec.ts`).

## 🛡️ Módulo 6: Blindagem, Governança & Segurança Sênior (Fase Atual 🕒)

### 🩺 Linha de Frente: Diagnóstico de Saúde do Código

- [x] **Etapa 1:** Integração do `react-doctor` no `package.json` para análises de arquitetura e performance.
- [x] **Etapa 2:** Correção e resolução de todas as brechas ou avisos apontados pelo relatório do `react-doctor`.
- [x] **Etapa 3:** Automação do `react-doctor` na esteira do GitHub Actions para bloquear PRs com nota baixa.

### 🛡️ Camada de Segurança Estrita (Security & Compliance)

- [x] **Etapa 4:** Instalação e configuração do `eslint-plugin-security` no Flat Config contra brechas e ataques OWASP.
- [x] **Etapa 5:** Ativação do script de checagem estrita de tipos em tempo de compilação de produção (`tsc --noEmit && vite build`).
- [x] **Etapa 6:** Configuração do scanner automatizado `npm audit` no pipeline CI/CD para detecção de pacotes vulneráveis de terceiros.
- [ ] **Etapa 7:** Configuração de bloqueio local (via Husky) e remoto contra vazamento acidental de chaves secretas e tokens de APIs.
