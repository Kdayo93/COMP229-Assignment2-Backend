 describe('Portfolio App E2E Test', () => {
  it('should load the homepage and show welcome message', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Welcome to My Portfolio').should('be.visible');
  });
});

