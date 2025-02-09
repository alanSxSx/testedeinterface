describe('Teste de Cadastro de Usuário', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/'); // Ajuste a URL conforme necessário
  });

	it('Deve exibir mensagens de erro ao tentar enviar o formulário vazio', () => {
    cy.get('button[type="submit"]').click();
    cy.get('p').should('contain', 'O nome é obrigatório');
    cy.get('p').should('contain', 'O e-mail é obrigatório');
    cy.get('p').should('contain', 'A confirmação de e-mail é obrigatória');
    cy.get('p').should('contain', 'A senha é obrigatória');
    cy.get('p').should('contain', 'A confirmação da senha é obrigatória');
    cy.get('p').should('contain', 'Você deve aceitar os termos');
  });

  it('Deve preencher corretamente e enviar o formulário com sucesso', () => {
    cy.get('input[name="nome"]').type('Usuário Teste');
    cy.get('input[name="email"]').type('teste@email.com');
    cy.get('input[name="confirmacaoEmail"]').type('teste@email.com');
    cy.get('input[name="senha"]').type('Senha123');
    cy.get('input[name="confirmacaoSenha"]').type('Senha123');
    cy.get('input[name="termos"]').check();
    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (text) => {
      expect(text).to.contains('Cadastro realizado com sucesso!');
    });
  });

	it('Deve exibir erro ao digitar uma senha fraca', () => {
    cy.get('input[name="nome"]').type('Usuário Teste');
    cy.get('input[name="email"]').type('teste@email.com');
    cy.get('input[name="confirmacaoEmail"]').type('teste@email.com');

    // Senha muito curta
    cy.get('input[name="senha"]').type('12345');
    cy.get('input[name="confirmacaoSenha"]').type('12345');
    cy.get('input[name="termos"]').check();
    cy.get('button[type="submit"]').click();
    cy.get('p').should('contain', 'A senha deve ter no mínimo 8 caracteres');

    // Senha sem maiúscula
    cy.get('input[name="senha"]').clear().type('sdfsdfsdf');
    cy.get('input[name="confirmacaoSenha"]').clear().type('sdfsdfsdf');
    cy.get('button[type="submit"]').click();
    cy.get('p').should('contain', 'A senha deve conter pelo menos uma letra maiúscula');

    // Senha sem número
    cy.get('input[name="senha"]').clear().type('SenhaFraca');
    cy.get('input[name="confirmacaoSenha"]').clear().type('SenhaFraca');
    cy.get('button[type="submit"]').click();
    cy.get('p').should('contain', 'A senha deve conter pelo menos um número');
  });

  it('Deve exibir erro ao digitar e-mails diferentes', () => {
    cy.get('input[name="nome"]').type('Usuário Teste');
    cy.get('input[name="email"]').type('teste@email.com');
    cy.get('input[name="confirmacaoEmail"]').type('diferente@email.com');
    cy.get('input[name="senha"]').type('Senha123');
    cy.get('input[name="confirmacaoSenha"]').type('Senha123');
    cy.get('input[name="termos"]').check();
    cy.get('button[type="submit"]').click();

    cy.get('p').should('contain', 'Os e-mails não coincidem');
  });
});
