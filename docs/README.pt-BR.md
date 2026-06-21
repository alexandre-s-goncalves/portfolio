<br/>
<div align="center">

[🏠 Voltar ao README Principal](../README.md) • [🇺🇸 English](./README.en-US.md) • [🇫🇷 Français](./README.fr-FR.md) • [🇪🇸 Español](./README.es-ES.md)

</div>

# 🇧🇷 Portfolio - Documentação em Português

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
- 🌍 **Internacionalização**: Suporte para Português, Inglês, Francês e Espanhol
- 🧪 **100% de Cobertura**: Suite de testes abrangente
- 📱 **Responsivo**: Abordagem mobile-first
- ⚡ **Performance**: Otimizado com Vite
- 🎨 **Tailwind CSS**: Estilização baseada em utilitários com suporte nativo a temas e modo escuro nativo
- 🔍 **SEO Amigável**: Estrutura HTML semântica
- ♿ **Acessível**: Compatível com as diretrizes WCAG

---

## 🛠 Tecnologias

### Core

- **React** 19.2.6 - Biblioteca de interface de usuário (UI)
- **TypeScript** 5.6.2 - Tipagem estática estruturada
- **Vite** 8.0.12 - Ferramenta de build de alto desempenho
- **React Router** 7.9.4 - Gerenciamento de rotas e navegação

### Estilização

- **tailwindcss/vite** 4.3.1 - Plugin oficial para integração de alto desempenho e compilação do Tailwind v4 com o Vite

### Internacionalização

- **i18next** 26.3.1 - Framework de tradução core
- **react-i18next** 17.0.8 - Bindings oficiais para integração com React
- **i18next-browser-languagedetector** 8.2.1 - Detecção automática do idioma do navegador

### Testes

- **testing-library/react** 16.3.2 - Utilitários para testar componentes React focados no comportamento do usuário
- **testing-library/jest-dom** 6.9.1 - Matchers customizados para asserções no DOM

### Qualidade de Código

- **ESLint** 10.3.0 - Análise estática para encontrar e corrigir problemas no código
- **Prettier** 3.8.4 - Formatador de código opinativo para garantir consistência visual
- **Husky** 9.1.7 - Automação e execução de Git hooks locais
- **lint-staged** 16.2.4 - Execução de verificações de qualidade apenas nos arquivos modificados

---

## 🚀 Começando

### Pré-requisitos

- **Node.js**: 20.x ou superior
- **npm**: 11.17.0 ou superior
- **Git**: Versão mais recente
- **Editor recomendado**: Visual Studio Code

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com
cd portfolio
```

2. **Instale as dependências** (o Husky será configurado automaticamente)

```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

4. **Abra no navegador**

Acesse [http://localhost:5173](http://localhost:5173) no seu navegador para ver o projeto em execução.

## 📁 Estrutura do Projeto

### Visão Geral

```text
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

---

## 📐 Padrões de Desenvolvimento

### Convenções de Nomenclatura

| Tipo                    | Convenção        | Exemplo                        |
| :---------------------- | :--------------- | :----------------------------- |
| Componentes             | PascalCase       | `Button`, `IconButton`         |
| Arquivos de Componentes | PascalCase       | `Button.tsx`, `Header.tsx`     |
| Arquivos Utilitários    | camelCase        | `formatDate.ts`, `validate.ts` |
| Variáveis               | camelCase        | `userName`, `isActive`         |
| Constantes              | UPPER_SNAKE_CASE | `API_URL`, `MAX_LENGTH`        |
| Tipos / Interfaces      | PascalCase       | `UserProps`, `ThemeConfig`     |

### Estrutura de Componente

```typescript
// 1. Importações
import React from 'react';
import { clsx } from 'clsx';
import { ComponentProps } from './types';

// 2. Types/Interfaces
interface Props {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
}

// 3. Componente
export const Component = ({ title, onClick, disabled = false }: Props) => {
  // Lógica do componente
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      /* OPÇÃO 1: Estilização condicional estruturada com a biblioteca clsx */
      className={clsx(
        'flex items-center justify-center rounded-lg px-4 py-2 font-medium transition-all duration-200',
        'cursor-pointer bg-blue-600 text-white hover:bg-blue-700 active:scale-98',
        'disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 disabled:opacity-50 disabled:scale-100'
      )}
    >
      {/* OPÇÃO 2: Estilização condicional inline usando Template Literals e Operador Ternário */}
      <span className={`text-sm ${disabled ? 'line-through text-gray-400' : 'font-semibold text-white'}`}>
        {title}
      </span>
    </button>
  );
};
```

### Organização de Arquivos

Cada componente segue esta estrutura modular de diretórios:

```text
component/
├── component.test.tsx              # Testes do componente
├── component.tsx                   # Lógica e estrutura do componente
└── index.ts                        # Exportações públicas (Entrypoint)
```

### Boas Práticas

1. **Componentes Funcionais**: Use sempre componentes funcionais estruturados com React Hooks.
2. **Tipagem Forte**: Defina estritamente os tipos para todas as propriedades (props) e estados internos.
3. **Imports Absolutos**: Utilize mapeamentos de caminhos simplificados (path aliases) configurados no `tsconfig`.
4. **Código em Inglês**: Mantenha toda a escrita de código, comentários, commits e testes no idioma inglês.

---

## 📝 Padrões de Commit

### Conventional Commits

Seguimos o padrão internacional de mensagens do [Conventional Commits](https://conventionalcommits.org):

```bash
<tipo>(<escopo>): <descrição>

[corpo opcional]

[rodapé opcional]
```

### Tipos de Commit

| Tipo       | Descrição                  | Exemplo                            |
| :--------- | :------------------------- | :--------------------------------- |
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
```

## 🧪 Padrões de Testes (Vitest + RTL)

A suite de testes utiliza o **Vitest** integrado à **React Testing Library**. Para componentes que consomem o ecossistema de internacionalização, utilize o helper de renderização para injetar o provedor do `i18next`.

### Modelo de Integração de Teste

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
      <Component title="Portfólio" {...props} />
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

### 📋 Categorias Oficiais de Testes

Para garantir a manutenção estável de **100% de cobertura de código**, cada componente deve cobrir as seguintes verticais:

#### 1. Testes de Renderização

Valida se a estrutura HTML base e os textos literais do componente são montados corretamente.

```typescript
test('should render component with text content', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

#### 2. Testes de Props

Garante que as propriedades (props) enviadas alteram dinamicamente o comportamento ou elementos em tela.

```typescript
test('should render icon element when prop is provided', () => {
  render(<Button icon={<span data-testid="icon" />}>Button</Button>);
  expect(screen.getByTestId('icon')).toBeInTheDocument();
});
```

#### 3. Testes de Estados (Locks de Interface)

Verifica o comportamento lógico e bloqueios visuais com base em estados nativos do HTML.

```typescript
test('should apply HTML disabled property', () => {
  render(<Button disabled>Disabled</Button>);
  expect(screen.getByRole('button')).toBeDisabled();
});
```

#### 4. Testes de Interação (Eventos)

Simula ações do usuário e escuta o disparo de funções de callback usando os mocks do Vitest.

```typescript
test('should trigger onClick callback function', () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Click</Button>);

  fireEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

#### 5. Testes de Estilização e Temas (Tailwind v4)

Valida a presença estática de classes de design, incluindo seletores escuros (`dark:bg-slate-900`) quando o elemento raiz recebe a classe correspondente.

```typescript
test('should apply dark theme style tokens when root has dark class', () => {
  const { container } = render(<Component />);
  container.parentElement?.classList.add('dark');

  const element = screen.getByRole('banner');
  expect(element).toHaveClass('dark:bg-slate-900', 'dark:text-sky-400');
});
```

---

## 🎯 Scripts Disponíveis

### Desenvolvimento e Produção

```bash
# Inicia o servidor de desenvolvimento local do Vite
npm run dev

# Compila o projeto otimizado para produção
npm run build

# Executa localmente o preview do build gerado para produção
npm run preview
```

### Testes (Vitest)

```bash
# Executa todos os testes automatizados da aplicação
npm test

# Abre a interface gráfica interativa (UI Dashboard) do Vitest no navegador
npm run test:ui

# Executa os testes e gera o relatório completo de cobertura de código
npm run coverage
```

### Qualidade e Automação

```bash
# Analisa o código com ESLint ignorando os relatórios de cobertura
npm run lint

# Formata todos os arquivos do projeto seguindo as regras do Prettier
npm run format

# Inicializa as configurações locais de Git Hooks com o Husky
npm run prepare
```

---

## 🤝 Contribuindo

Contribuições são bem-vindeas! Siga estes passos para colaborar com o projeto:

### 1. Fork e Clone

```bash
# Fork via interface do GitHub e clone seu fork localmente:
git clone https://github.com
cd portfolio
```

### 2. Crie uma Branch

```bash
# Para novas funcionalidades
git checkout -b feat/nova-funcionalidade

# Para correções de bugs
git checkout -b fix/corrigir-bug

# Para refatorações de código
git checkout -b refactor/melhorar-codigo
```

### 3. Desenvolva

- Escreva o código seguindo os padrões arquiteturais descritos neste guia.
- Adicione testes automatizados para todas as novas implementações.
- Mantenha a meta de **100% de cobertura de código**.
- Siga estritamente as convenções de Commits Convencionais.

### 4. Valide Localmente

```bash
# Executa a suite de testes locais
npm test

# Verifica e valida a cobertura de código
npm run coverage

# Executa a análise estática do linter
npm run lint

# Formata o código antes de commitar
npm run format
```

### 5. Commit e Push

```bash
# Adicione as modificações na stage do Git
git add .

# Faça o commit utilizando mensagens convencionais
git commit -m "feat: add amazing feature"

# Envie as alterações para o seu fork remoto
git push origin feat/nova-funcionalidade
```

### 6. Pull Request

Abra o seu fork na interface do GitHub e clique no botão **"New Pull Request"** direcionando as alterações para a branch principal do repositório original.

### 📋 Checklist Antes de Submeter o PR

- [ ] Código segue as convenções e padrões estabelecidos de componentização.
- [ ] Todos os testes automatizados estão passando com sucesso (`npm test`).
- [ ] Cobertura de código mantida em 100% (`npm run coverage`).
- [ ] Arquivos formatados corretamente através do Prettier (`npm run format`).
- [ ] Zero erros ou alertas apontados pelo linter (`npm run lint`).
- [ ] Histórico de commits segue o padrão do Conventional Commits.
- [ ] O Pull Request contém uma descrição clara e detalhada das mudanças.

---

## 📚 Recursos Adicionais

### Documentação das Tecnologias Utilizadas

- [React 19](https://react.dev)
- [TypeScript](https://typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Vitest](https://vitest.dev)
- [React Testing Library](https://testing-library.com)
- [Vite](https://vite.dev)
- [i18next](https://i18next.com)

### Guias de Boas Práticas e Padrões

- [Conventional Commits](https://conventionalcommits.org)
- [React Testing Best Practices (Kent C. Dodds)](https://kentcdodds.com)
- [TypeScript Style Guide & Best Practices](https://typescriptlang.orgdocs/handbook/declaration-files/do-s-and-don-ts.html)

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT — consulte o arquivo [LICENSE](../LICENSE) para obter mais detalhes.

---

## 👤 Autor

**Alexandre dos Santos Gonçalves**

- 🌐 [LinkedIn](https://linkedin.com)
- 🐙 [GitHub](https://github.com)
- 📧 [Email](mailto:alexandre.sgoncalves@outlook.com)

---

<div align="center">

**Feito com ❤️ por Alexandre Gonçalves**

<a href="#top">⬆ voltar ao topo</a>

</div>
