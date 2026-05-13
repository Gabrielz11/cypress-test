describe('Suíte de Testes de Login', () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:5000');
    });

    it('1. Login com sucesso', () => {
        // Preenche e-mail e senha válidos
        cy.get('#email').type('user@example.com');
        cy.get('#password').type('password123');
        
        // Clica em “Entrar”
        cy.get('#loginBtn').click();
        
        // 1. Verifica a mensagem de sucesso PRIMEIRO (na tela de login)
        cy.contains('Login efetuado com sucesso!').should('be.visible');
        
        // 2. Depois verifica o redirecionamento para /home
        cy.url().should('include', '/home');
    });

    it('2. Login com erro', () => {
        // Preenche credenciais inválidas
        cy.get('#email').type('errado@exemplo.com');
        cy.get('#password').type('senha-invalida');
        
        // Clica em “Entrar”
        cy.get('#loginBtn').click();
        
        // Verifica se permanece na página de login
        cy.url().should('not.include', '/home');
        
        // Verifica a mensagem de erro específica
        cy.contains('Credenciais inválidas').should('be.visible');
    });

    it('3. Botão desabilitado', () => {
        // Verifica se o botão começa desabilitado
        cy.get('#loginBtn').should('be.disabled');
        
        // Preenche apenas um campo e verifica se continua desabilitado
        cy.get('#email').type('user@example.com');
        cy.get('#loginBtn').should('be.disabled');
        
        // Limpa e preenche o outro campo
        cy.get('#email').clear();
        cy.get('#password').type('password123');
        cy.get('#loginBtn').should('be.disabled');
        
        // Preenche ambos e verifica se habilitou
        cy.get('#email').type('user@example.com');
        cy.get('#loginBtn').should('not.be.disabled');
    });

    it('4. Campos obrigatórios', () => {
        // Interage com os campos e deixa vazio para disparar as mensagens
        cy.get('#email').focus().blur();
        cy.get('#password').focus().blur();
        
        // Valida que as mensagens de obrigatoriedade são exibidas
        cy.get('#email-error').should('be.visible').and('contain', 'O e-mail é obrigatório');
        cy.get('#password-error').should('be.visible').and('contain', 'A senha é obrigatória');
    });
});
