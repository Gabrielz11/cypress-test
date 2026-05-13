# 🧪 Suíte de Testes Cypress - Login App

![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![Nodejs](https://img.shields.io/badge/-Nodejs-339933?style=for-the-badge&logo=Node.js&logoColor=white)
![Express](https://img.shields.io/badge/-Express-000000?style=for-the-badge&logo=Express&logoColor=white)
![SQLite](https://img.shields.io/badge/-SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)

Este projeto é uma demonstração completa de **Testes de Ponta a Ponta (E2E)** utilizando Cypress em uma aplicação de Login que conta com Frontend, Backend e Banco de Dados.

---

## 🚀 Execução Rápida (Mínimo Esforço)

Para rodar o projeto completo sem complicações, siga estes dois passos:

### 1️⃣ Instalação Completa
Este comando instala as dependências do Cypress e também as do servidor backend automaticamente.
```bash
npm run setup
```

### 2️⃣ Rodar Aplicação + Testes
Este comando inicia o **Backend**, o **Frontend** e abre a **Interface do Cypress** simultaneamente.
```bash
npm run dev
```

> [!TIP]
> Se preferir rodar os testes apenas no terminal (modo headless), use: `npm test`

---

## 🛠️ Tecnologias Utilizadas

- **Cypress**: Framework principal de testes.
- **Node.js + Express**: Servidor API para autenticação.
- **SQLite**: Banco de dados local para armazenar usuários.
- **Vanilla JS/CSS/HTML**: Frontend responsivo e moderno.
- **Concurrently**: Utilizado para gerenciar múltiplos processos (servidores + testes).
- **Serve**: Servidor estático para o frontend.

---

## 📂 Estrutura do Projeto

```text
cypress-test/
├── app/
│   ├── backend/      # API Express + Banco SQLite
│   └── frontend/     # Interface do usuário (HTML/JS/CSS)
├── cypress/
│   ├── e2e/          # Arquivos de teste (.cy.js)
│   ├── fixtures/     # Dados estáticos para testes
│   └── support/      # Comandos e configurações globais
├── package.json      # Scripts automatizados e dependências
└── cypress.config.js # Configurações do framework Cypress
```

---

## 🧪 Cenários de Teste

A suíte principal (`cypress/e2e/login.cy.js`) cobre:

*   ✅ **Login com Sucesso**: Validação do fluxo completo de entrada.
*   ❌ **Login com Erro**: Verificação de mensagens de alerta para credenciais inválidas.
*   🔒 **Bloqueio de Botão**: Garantia de que o formulário só pode ser enviado se preenchido.
*   ⚠️ **Validações de Campo**: Teste das mensagens de erro individuais para campos vazios.

---

## 📖 Comandos Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run setup` | Instala todas as dependências do projeto (Root + Backend). |
| `npm run dev` | **Recomendado**: Inicia tudo e abre a UI do Cypress. |
| `npm test` | Roda todos os testes em modo silêncio (Terminal). |
| `npm run backend` | Inicia apenas o servidor da API. |
| `npm run frontend` | Inicia apenas o servidor do frontend (Porta 5000). |

---

Desenvolvido por [Gabriel](https://github.com/Gabrielz11).

