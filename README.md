Teste de Interface com Cypress

Este projeto utiliza Next.js e Cypress para testes de interface automatizados.

🚀 Tecnologias

Next.js 15.1.6

React 19.0.0

Tailwind CSS 3.4.1

TypeScript 5.x

Cypress 14.0.2

📦 Instalação

Clone o repositório:

Instale as dependências:

npm install
# ou
yarn install

▶️ Executando o projeto

Iniciar o servidor Next.js:

npm run dev
# ou
yarn dev

O servidor será iniciado em http://localhost:3000.

🧪 Executando os testes com Cypress

Abrir a interface do Cypress:

npx cypress open

Rodar os testes no terminal:

npx cypress run

Os testes automatizados serão executados.

📁 Estrutura de Pastas

📂 testedeinterface/
 ├── 📂 cypress/        # Testes end-to-end
 │   ├── 📂 e2e/       # Testes de interface
 │   ├── 📂 fixtures/  # Dados fictícios para os testes
 │   ├── 📂 support/   # Configuração do Cypress
 │   ├── cypress.config.ts # Configuração principal
 ├── 📂 src/           # Código fonte da aplicação
 │   ├── 📂 components/ # Componentes React
 │   ├── 📂 pages/      # Páginas do Next.js
 ├── package.json      # Dependências e scripts
 ├── README.md         # Documentação do projeto

🛠️ Configuração do Cypress

O arquivo cypress.config.ts contém as configurações do Cypress. Caso precise modificar os testes, edite os arquivos dentro de cypress/e2e/.

👨‍💻 Desenvolvido por Alan Rodrigues Barbosa 🚀
