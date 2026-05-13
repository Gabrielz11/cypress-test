describe('Exemplo de Teste E2E', () => {
  it('Deve visitar o site e verificar o título', () => {
    // Acessa a página
    cy.visit('https://example.cypress.io')
    // Verifica se o título da página contém "Cypress"
    cy.title().should('include', 'Cypress')
  })
});
