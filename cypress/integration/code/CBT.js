

context('Viewport', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
  })

  it('logo Exist', () => {
    cy.get('#divLogo').should('be.visible')
  })

  it('login check', () => {
    cy.get('#txtUsername').type('Admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
    cy.get('#welcome').should('be.visible', {timeout: 10000})
  })

  /*it('cy.viewport() - set the viewport size and dimension', () => {
    // https://on.cypress.io/viewport
    // cy.get('.rounded-circle')
    // .should('have.class', 'img-fluid')

    cy.viewport('macbook-15')
    cy.screenshot()
    cy.wait(200)
    cy.viewport('macbook-13')
    cy.screenshot()
    cy.wait(200)
    
    cy.viewport('iphone-3')
    cy.screenshot()
    cy.wait(200)
    

    // The viewport will be reset back to the default dimensions
    // in between tests (the  default can be set in cypress.json)
  })*/
})
