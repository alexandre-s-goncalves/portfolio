# 🇧🇷 Portfolio - Documentação em Português

<div align="center">

[![Licença MIT](https://img.shields.io/badge/licença-MIT-green.svg)](https://tldrlegal.com/license/mit-license)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![Testes](https://img.shields.io/badge/testes-401%20passando-brightgreen.svg)](https://github.com/alexandre-s-goncalves/portfolio)
[![Cobertura](https://img.shields.io/badge/cobertura-100%25-brightgreen.svg)](https://github.com/alexandre-s-goncalves/portfolio)

**Portfólio pessoal construído com React, TypeScript e Styled Components**

[🏠 Voltar ao README Principal](../README.md) • [🇺🇸 English](./README.en-US.md) • [🇫🇷 Français](./README.fr-FR.md)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Começando](#-começando)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Padrões de Desenvolvimento](#-padrões-de-desenvolvimento)
- [Padrões de Commit](#-padrões-de-commit)
- [Padrões de Testes](#-padrões-de-testes)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Contribuindo](#-contribuindo)

---

## 🎯 Sobre o Projeto

Portfólio pessoal moderno e responsivo que apresenta projetos, habilidades e experiência profissional. Desenvolvido seguindo as melhores práticas, com 100% de cobertura de testes e suporte para internacionalização.

### Objetivos

- Demonstrar habilidades técnicas em desenvolvimento front-end
- Apresentar projetos e experiências de forma profissional
- Servir como referência de código limpo e bem testado
- Oferecer uma experiência de usuário excepcional

---

## ✨ Funcionalidades

- 🎨 **UI Moderna**: Design limpo e responsivo com tema claro/escuro
- 🌍 **Internacionalização**: Suporte para Português, Inglês e Francês
- 🧪 **100% de Cobertura**: Suite de testes abrangente com 401 testes
- 📱 **Responsivo**: Abordagem mobile-first
- ⚡ **Performance**: Otimizado com Vite
- 🎭 **Styled Components**: CSS-in-JS com suporte a temas
- 🔍 **SEO Amigável**: Estrutura HTML semântica
- ♿ **Acessível**: Compatível com WCAG

---

## 🛠 Tecnologias

### Core

- **React** 18.2.0 - Biblioteca UI
- **TypeScript** 5.2.2 - Tipagem estática
- **Vite** 5.0.0 - Ferramenta de build
- **React Router** 7.9.4 - Navegação

### Estilização

- **Styled Components** 6.0.0 - CSS-in-JS
- **React InlineSVG** 4.2.0 - Manipulação de SVG

### Internacionalização

- **i18next** 25.6.0 - Framework de tradução
- **react-i18next** 16.1.4 - Bindings React
- **i18next-browser-languagedetector** 8.2.0 - Detecção de idioma

### Testes

- **Jest** 29.6.0 - Test runner
- **Testing Library** 16.3.0 - Testes de componentes
- **jest-styled-components** 7.2.0 - Testes de styled components

### Qualidade de Código

- **ESLint** 9.38.0 - Linting
- **Prettier** 3.6.2 - Formatação
- **Husky** 9.1.7 - Git hooks
- **lint-staged** 16.2.4 - Verificações pré-commit

---

## 🚀 Começando

### Pré-requisitos

- **Node.js**: 20.x ou superior
- **npm**: 10.8.1 ou superior
- **Git**: Versão mais recente
- **Editor recomendado**: Visual Studio Code

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/alexandre-s-goncalves/portfolio.git
cd portfolio
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure o Husky** (já configurado automaticamente via prepare)

```bash
npm run prepare
```

4. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

5. **Abra no navegador**

```
http://localhost:5173
```

---

## 📁 Estrutura do Projeto

### Visão Geral

```
portfolio/
├── docs/                    # Documentação em múltiplos idiomas
├── public/                  # Assets estáticos
├── src/
│   ├── @types/             # Definições TypeScript
│   ├── __mocks__/          # Mocks para testes
│   ├── assets/             # Assets (ícones, imagens, fontes)
│   ├── components/         # Componentes reutilizáveis
│   ├── context/            # Contextos React
│   ├── pages/              # Componentes de página
│   ├── resources/          # Design tokens
│   ├── routes/             # Configuração de rotas
│   └── utils/              # Utilitários
└── [arquivos de configuração]
```

### Componentes

#### UI Components (`src/components/ui/`)

- **Button**: Botão reutilizável com suporte a ícones
- **Text**: Componente de texto com variantes tipográficas

#### Feature Components (`src/components/`)

- **Header**: Cabeçalho com navegação e troca de tema
- **Footer**: Rodapé com links sociais
- **Dropdown**: Seletor de idioma
- **Icon**: Wrapper para ícones SVG
- **IconButton**: Botão somente com ícone
- **Image**: Componente de imagem otimizado

#### Pages (`src/pages/`)

- **Home**: Página inicial com apresentação
- **Skills**: Página de habilidades técnicas
- **Projects**: Portfólio de projetos
- **About**: Sobre mim
- **NotFound**: Página 404

---

## 📐 Padrões de Desenvolvimento

### Convenções de Nomenclatura

| Tipo                    | Convenção        | Exemplo                        |
| ----------------------- | ---------------- | ------------------------------ |
| Componentes             | PascalCase       | `Button`, `IconButton`         |
| Arquivos de Componentes | PascalCase       | `Button.tsx`, `Header.tsx`     |
| Arquivos Utilitários    | camelCase        | `formatDate.ts`, `validate.ts` |
| Variáveis               | camelCase        | `userName`, `isActive`         |
| Constantes              | UPPER_SNAKE_CASE | `API_URL`, `MAX_LENGTH`        |
| Styled Components       | PascalCase       | `Container`, `Title`           |
| Props Transientes       | Prefixo `$`      | `$themeDark`, `$isActive`      |
| Tipos/Interfaces        | PascalCase       | `UserProps`, `ThemeConfig`     |

### Estrutura de Componente

```typescript
// 1. Importações
import React from 'react';
import {ComponentProps} from './types';
import * as S from './component.styles';

// 2. Types/Interfaces
interface Props {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
}

// 3. Componente
export const Component = ({title, onClick, disabled = false}: Props) => {
  // Lógica do componente
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

### Organização de Arquivos

Cada componente segue esta estrutura:

```
component/
├── __snapshots__/                  # Snapshots do Jest
│   ├── component.test.tsx.snap    # Snapshots de testes
│   └── component.styles.test.tsx.snap
├── component.styles.test.tsx       # Testes de styled components
├── component.styles.ts             # Styled components
├── component.test.tsx              # Testes do componente
├── component.tsx                   # Lógica do componente
└── index.ts                        # Exports públicos
```

### Boas Práticas

1. **Componentes Funcionais**: Use sempre function components com hooks
2. **Tipagem Forte**: Sempre defina tipos para props e estados
3. **Props Transientes**: Use `$` para props que não devem ser passadas ao DOM
4. **Imports Absolutos**: Use path aliases configurados no tsconfig
5. **Código em Inglês**: Todo código, comentários e mensagens em inglês

---

## 📝 Padrões de Commit

### Conventional Commits

Seguimos o padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/):

```bash
<tipo>(<escopo>): <descrição>

[corpo opcional]

[rodapé opcional]
```

### Tipos de Commit

| Tipo       | Descrição                  | Exemplo                            |
| ---------- | -------------------------- | ---------------------------------- |
| `feat`     | Nova funcionalidade        | `feat: add dark mode toggle`       |
| `fix`      | Correção de bug            | `fix: resolve button hover state`  |
| `refactor` | Refatoração de código      | `refactor: reorganize home styles` |
| `test`     | Adicionar/atualizar testes | `test: add footer theme variants`  |
| `docs`     | Documentação               | `docs: update README`              |
| `style`    | Formatação de código       | `style: format with prettier`      |
| `chore`    | Tarefas de manutenção      | `chore: update dependencies`       |
| `perf`     | Melhorias de performance   | `perf: optimize image loading`     |

### Exemplos de Commits

#### Feat (Nova Funcionalidade)

```bash
feat: add dark mode toggle to header

- Implement theme context with React Context API
- Add toggle button in header component
- Persist theme preference in localStorage
- Update all components to support dark theme
```

#### Fix (Correção de Bug)

```bash
fix(button): resolve disabled state cursor issue

The disabled button was showing 'not-allowed' cursor.
Changed to 'default' cursor for better UX.
```

#### Refactor (Refatoração)

```bash
refactor: reorganize home page styles alphabetically

- Rename components with semantic English names
- Sort styled components alphabetically
- Update imports and references
- Maintain 100% test coverage
```

#### Test (Testes)

```bash
test(footer): achieve 100% coverage with theme variants

- Add tests for light theme
- Add tests for dark theme
- Test all social links
- Update snapshots
```

### Escopo

Use o escopo para indicar qual parte do código foi alterada:

- `(home)`: Página Home
- `(button)`: Componente Button
- `(header)`: Componente Header
- `(i18n)`: Internacionalização
- `(deps)`: Dependências
- `(config)`: Arquivos de configuração

### Mensagens de Commit

**✅ Boas práticas:**

- Use o imperativo: "add" não "added" ou "adds"
- Primeira letra minúscula: "add feature" não "Add feature"
- Sem ponto final na descrição
- Corpo do commit com detalhes quando necessário
- Referencie issues quando aplicável

**❌ Evite:**

- Mensagens genéricas: "fix bug", "update code"
- Múltiplas mudanças não relacionadas em um commit
- Commits muito grandes

---

## 🧪 Padrões de Testes

### Estrutura de Testes

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

### Categorias de Testes

#### 1. Testes de Renderização

```typescript
test('should render component with children', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

#### 2. Testes de Props

```typescript
test('should render with icon when icon prop is provided', () => {
  render(<Button icon={TestIcon}>Button</Button>);
  expect(screen.getByRole('button')).toBeInTheDocument();
});
```

#### 3. Testes de Estados

```typescript
test('should be disabled when disabled prop is true', () => {
  render(<Button disabled>Disabled</Button>);
  expect(screen.getByRole('button')).toBeDisabled();
});
```

#### 4. Testes de Interação

```typescript
test('should call onClick handler when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click</Button>);

  fireEvent.click(screen.getByText('Click'));

  expect(handleClick).toHaveBeenCalled();
});
```

#### 5. Testes de Estilo

```typescript
test('should have correct background color', () => {
  const {container} = render(<Button />);
  const button = container.querySelector('button');

  expect(button).toHaveStyle('background-color: #d3d3d3');
});
```

#### 6. Testes de Snapshot

```typescript
test('should match snapshot', () => {
  const {container} = render(<Button>Snapshot</Button>);
  expect(container.firstChild).toMatchSnapshot();
});
```

### Cobertura de Testes

**Requisitos:**

- ✅ **Statements**: 100%
- ✅ **Branches**: 100%
- ✅ **Functions**: 100%
- ✅ **Lines**: 100%

**Exemplo de relatório:**

```
All files               | 100% | 100% | 100% | 100%
components/button       | 100% | 100% | 100% | 100%
  button.styles.ts      | 100% | 100% | 100% | 100%
  button.tsx            | 100% | 100% | 100% | 100%
```

### Testes com Temas

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

### Testes de Internacionalização

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

## 🎯 Scripts Disponíveis

### Desenvolvimento

```bash
# Inicia servidor de desenvolvimento (porta 5173)
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview
```

### Testes

```bash
# Roda todos os testes
npm test

# Roda testes em modo watch
npm run test:watch

# Gera relatório de cobertura
npm run test:coverage
```

### Qualidade de Código

```bash
# Verifica formatação e linting
npm run lint

# Formata código com Prettier
npm run format

# Formata e corrige problemas automaticamente
npm run format:fix
```

### Git Hooks

Os seguintes hooks são executados automaticamente:

- **pre-commit**: Roda lint-staged (formata e valida código)
- **pre-push**: Roda todos os testes

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga estes passos:

### 1. Fork e Clone

```bash
# Fork via GitHub interface
# Clone seu fork
git clone https://github.com/seu-usuario/portfolio.git
cd portfolio
```

### 2. Crie uma Branch

```bash
# Feature
git checkout -b feat/nova-funcionalidade

# Bug fix
git checkout -b fix/corrigir-bug

# Refatoração
git checkout -b refactor/melhorar-codigo
```

### 3. Desenvolva

- Escreva código seguindo os padrões do projeto
- Adicione testes para novas funcionalidades
- Mantenha 100% de cobertura
- Siga as convenções de commit

### 4. Teste

```bash
# Roda testes
npm test

# Verifica cobertura
npm run test:coverage

# Verifica código
npm run lint
```

### 5. Commit

```bash
# Adicione arquivos
git add .

# Commit com mensagem convencional
git commit -m "feat: add amazing feature"
```

### 6. Push e Pull Request

```bash
# Push para seu fork
git push origin feat/nova-funcionalidade

# Crie Pull Request via GitHub interface
```

### Checklist Antes de Submeter PR

- ✅ Código segue os padrões do projeto
- ✅ Testes passando: `npm test`
- ✅ Cobertura 100%: `npm run test:coverage`
- ✅ Código formatado: `npm run format:fix`
- ✅ Sem erros de lint: `npm run lint`
- ✅ Commits seguem convenção
- ✅ PR com descrição clara

---

## 📚 Recursos Adicionais

### Documentação das Tecnologias

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)
- [Vite](https://vitejs.dev/)

### Guias e Padrões

- [Conventional Commits](https://www.conventionalcommits.org/pt-br/)
- [React Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [TypeScript Best Practices](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](../LICENSE) para detalhes.

---

## 👤 Autor

**Alexandre dos Santos Gonçalves**

- 🌐 [LinkedIn](https://www.linkedin.com/in/alexandre-sgoncalves)
- 🐙 [GitHub](https://github.com/alexandre-s-goncalves)
- 📧 [Email](mailto:alexandre.sgoncalves@outlook.com)

---

<div align="center">

**Feito com ❤️ por Alexandre Gonçalves**

<a href="#top">⬆ voltar ao topo</a>

</div>
