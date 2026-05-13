# Testes Automatizados com Cypress

Este projeto contém uma suíte de testes automatizados utilizando o framework **Cypress**. O objetivo é validar funcionalidades básicas de uma aplicação web, como login e fluxos de exemplo.

## 🚀 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
- [Node.js](https://nodejs.org/en/) (versão 12 ou superior)
- [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js)

## 🛠️ Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Gabrielz11/cypress-test.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd cypress-test
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

## 🏃 Executando os Testes

Existem duas formas principais de executar os testes:

### 1. Interface Gráfica (Cypress Open)

Para abrir o Cypress Test Runner e selecionar manualmente os testes para execução:
```bash
npm run cypress:open
```

### 2. Modo Headless (Cypress Run)

Para executar todos os testes no terminal (ideal para CI/CD):
```bash
npm test
```

## 📁 Estrutura do Projeto

- `cypress/e2e/`: Contém os arquivos de especificação de teste (`.cy.js`).
- `cypress/fixtures/`: Arquivos de dados estáticos para os testes.
- `cypress/support/`: Comandos customizados e configurações globais.
- `cypress.config.js`: Arquivo de configuração do Cypress.

---
Desenvolvido por [Gabriel](https://github.com/Gabrielz11)
