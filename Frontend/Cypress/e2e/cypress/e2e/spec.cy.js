 describe('Portfolio App E2E Test', () => {
  it('should load the homepage', () => {
    cy.visit('http://localhost:3000'); // Or your deployed URL
    cy.contains('Welcome to My Portfolio'); // or any visible text in your app
  });
});
