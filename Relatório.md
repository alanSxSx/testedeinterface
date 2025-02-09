Relatório de Testes - Cadastro de Usuário

Resumo

Este relatório documenta os testes automatizados realizados para validar o funcionamento do cadastro de usuário na aplicação. Os testes foram executados utilizando o framework Cypress.

Ambiente de Testes

URL da aplicação: http://localhost:3000/

Ferramenta utilizada: Cypress

Data de execução: 09/02/2025

Responsável: Alan Rodrigues Barbosa

Casos de Teste e Resultados

1. Validaço de campos obrigatórios

Objetivo: Verificar se o sistema exibe mensagens de erro ao tentar enviar o formulário vazio.

Passos:

Acessar a tela de cadastro.

Clicar no botão de envio sem preencher os campos.

Verificar se as mensagens de erro são exibidas corretamente.

Resultado esperado: O sistema deve exibir mensagens de erro para todos os campos obrigatórios.

Resultado obtido: ✅ Teste aprovado. Mensagens de erro exibidas corretamente.

2. Cadastro com sucesso

Objetivo: Garantir que um usuário consiga se cadastrar corretamente.

Passos:

Preencher os campos obrigatórios com dados válidos.

Marcar a opção de aceite dos termos.

Clicar no botão de envio.

Verificar se a mensagem de sucesso é exibida.

Resultado esperado: O sistema deve exibir um alerta informando que o cadastro foi realizado com sucesso.

Resultado obtido: ✅ Teste aprovado. Cadastro realizado corretamente.

3. Senha fraca

Objetivo: Testar se o sistema bloqueia senhas consideradas fracas.

Passos:

Inserir uma senha curta (menos de 8 caracteres) e tentar cadastrar.

Inserir uma senha sem letras maiúsculas e tentar cadastrar.

Inserir uma senha sem números e tentar cadastrar.

Resultado esperado: O sistema deve exibir mensagens de erro adequadas para cada caso.

Resultado obtido: ✅ Teste aprovado. O sistema bloqueou senhas fracas corretamente.

4. Confirmação de e-mail incorreta

Objetivo: Verificar se o sistema impede o cadastro quando os e-mails digitados não coincidem.

Passos:

Preencher o campo "E-mail" com um valor.

Preencher o campo "Confirmação de e-mail" com um valor diferente.

Clicar no botão de envio.

Verificar se a mensagem de erro é exibida.

Resultado esperado: O sistema deve exibir uma mensagem informando que os e-mails não coincidem.

Resultado obtido: ✅ Teste aprovado. O sistema impediu o cadastro com e-mails diferentes.

Conclusão

Todos os testes foram executados com sucesso, garantindo que as regras de validação do formulário de cadastro estão funcionando corretamente. Nenhum bug foi identificado durante os testes.
