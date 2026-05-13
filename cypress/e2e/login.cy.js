describe('Formulário de Login', () => {
    it('Deve preencher e enviar o formulário com sucesso', () => {
        cy.visit('http://localhost:5500/src/')
        // Digita no campo de e-mail
        cy.get('#email')
            .type('teste@exemplo.com')
            .should('have.value', 'teste@exemplo.com');
        // Digita a senha
        cy.get('#password')
            .type('123456')
            .should('have.value', '123456');
        // Clica no botão
        cy.get('#btnSubmit')
            .click();
        // Verifica o resultado esperado
        cy.contains('Login efetuado com sucesso!').should('be.visible');
    })
});