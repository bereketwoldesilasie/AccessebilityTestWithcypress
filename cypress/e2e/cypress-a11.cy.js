describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.udacity.com/course/web-accessibility--ud891')
    cy.injectAxe();
    cy.checkA11y(".hero-section");
  })
}) 