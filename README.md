# Rotion

## Descrição

Rotion é uma aplicação desktop alternativa ao Notion, desenvolvida utilizando Electron, React, TypeScript e outras tecnologias modernas. Esta aplicação permite criar, editar e organizar documentos de forma intuitiva, com funcionalidades como editor de texto rico, navegação por pastas, busca e muito mais. O projeto foi desenvolvido seguindo as aulas da plataforma RocketSeat, com o objetivo de aprender e aplicar conceitos de desenvolvimento de aplicações desktop com Electron.

## Funcionalidades

- **Editor de Texto Rico**: Utiliza TipTap para edição avançada de documentos, com suporte a formatação, destaques, placeholders e tipografia.
- **Navegação e Organização**: Sidebar com navegação por seções, criação de páginas, perfis e busca integrada.
- **Cabeçalho e Breadcrumbs**: Header com breadcrumbs para navegação hierárquica, incluindo itens ocultos e separadores.
- **Barra de Pesquisa**: Componente para busca rápida dentro da aplicação.
- **Tabela de Conteúdo (ToC)**: Geração automática de sumário para documentos.
- **Layouts de Página**: Suporte a layouts padrão e páginas em branco.
- **Armazenamento Local**: Utiliza electron-store para persistência de dados localmente.
- **Atalhos e Tray**: Suporte a atalhos de teclado e ícone na bandeja do sistema.
- **IPC Communication**: Comunicação segura entre processos principais e de renderização.

## Estrutura do Projeto

A estrutura de pastas e arquivos do projeto é organizada da seguinte forma:

```
electron-builder.yml          # Configuração do Electron Builder para empacotamento
electron.vite.config.ts       # Configuração do Vite para Electron
package.json                  # Dependências e scripts do projeto
pnpm-lock.yaml                # Lockfile do pnpm
tsconfig.json                 # Configuração do TypeScript
build/                        # Arquivos de build
  entitlements.mac.plist      # Entitlements para macOS
  notarize.js                 # Script de notarização
resources/                    # Recursos da aplicação
src/                          # Código fonte
  lib/                        # Bibliotecas compartilhadas
    electron-router-dom.ts    # Roteamento para Electron
  main/                       # Processo principal do Electron
    index.ts                  # Ponto de entrada principal
    ipc.ts                    # Comunicação IPC
    shortcuts.ts              # Atalhos de teclado
    store.ts                  # Armazenamento local
    tray.ts                   # Ícone da bandeja
  preload/                    # Scripts de preload
    index.ts                  # Preload principal
  renderer/                   # Processo de renderização (React)
    index.html                # HTML principal
    postcss.config.js         # Configuração do PostCSS
    tailwind.config.js        # Configuração do Tailwind CSS
    src/                      # Código React
      App.tsx                 # Componente principal da aplicação
      env.d.ts                # Declarações de tipos
      main.tsx                # Ponto de entrada React
      routes.tsx              # Definição de rotas
      components/             # Componentes React
        Editor/               # Editor de texto
          index.tsx
        Header/               # Cabeçalho da aplicação
          index.tsx
          Breadcrumbs/        # Navegação breadcrumbs
            HiddenItems.tsx
            index.tsx
            Item.tsx
            Root.tsx
            Separator.tsx
        SearchBar/            # Barra de pesquisa
          index.tsx
        Sidebar/              # Barra lateral
          CreatePage.tsx      # Criação de páginas
          index.tsx
          Profile.tsx         # Perfil do usuário
          Search.tsx          # Busca na sidebar
          Navigation/         # Navegação
            index.tsx
            Link.tsx
            Root.tsx
            Section.tsx
            SectionContent.tsx
            SectionTitle.tsx
        ToC/                  # Tabela de conteúdo
          index.tsx
          Link.tsx
          Root.tsx
          Section.tsx
      lib/                    # Bibliotecas do renderer
        react-query.ts        # Configuração do React Query
      pages/                  # Páginas da aplicação
        blank.tsx             # Página em branco
        document.tsx          # Página de documento
        layouts/              # Layouts
          default.tsx         # Layout padrão
      styles/                 # Estilos
        global.css            # Estilos globais
  shared/                     # Código compartilhado
    constants/                # Constantes
      ipc.ts                  # Constantes IPC
    types/                    # Tipos TypeScript
      ipc.ts                  # Tipos IPC
```

## Tecnologias Utilizadas

- **Electron**: Framework para desenvolvimento de aplicações desktop com web technologies.
- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript com tipagem estática.
- **Vite**: Ferramenta de build rápida para desenvolvimento web.
- **Tailwind CSS**: Framework CSS utilitário para estilização.
- **TipTap**: Editor de texto rico para React.
- **Radix UI**: Componentes primitivos para UI acessível.
- **React Query**: Gerenciamento de estado e cache para dados assíncronos.
- **Electron Store**: Armazenamento persistente de dados.
- **Phosphor React**: Ícones para React.
- **Electron Router DOM**: Roteamento para aplicações Electron.
- **ESLint e Prettier**: Ferramentas de linting e formatação de código.

## Instalação e Execução

### Pré-requisitos

- Node.js (versão 18 ou superior)
- pnpm (gerenciador de pacotes)

### Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd rotion
   ```

2. Instale as dependências:
   ```bash
   pnpm install
   ```

### Execução em Desenvolvimento

Para executar a aplicação em modo de desenvolvimento:
```bash
pnpm dev
```

### Build

Para construir a aplicação para produção:
```bash
pnpm build
```

### Empacotamento

Para empacotar a aplicação para diferentes plataformas:

- Windows:
  ```bash
  pnpm build:win
  ```

- macOS:
  ```bash
  pnpm build:mac
  ```

- Linux:
  ```bash
  pnpm build:linux
  ```

- Desempacotado (para testes):
  ```bash
  pnpm build:unpack
  ```

### Release

Para publicar uma release:
```bash
pnpm release
```

## Scripts Disponíveis

- `pnpm format`: Formata o código com Prettier
- `pnpm lint`: Executa o ESLint para verificação de código
- `pnpm start`: Executa a aplicação em modo preview
- `pnpm dev`: Executa em modo desenvolvimento com watch
- `pnpm build`: Constrói a aplicação
- `pnpm postinstall`: Instala dependências do Electron Builder

## Contribuição

Este projeto foi desenvolvido como parte do aprendizado na plataforma RocketSeat. Para contribuições, sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto é de código aberto e foi desenvolvido para fins educacionais.

## Autor

Desenvolvido por jhone-cmd, seguindo as aulas da RocketSeat.