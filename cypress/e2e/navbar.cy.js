describe('Navbar Component', () => {
    beforeEach(() => {
      // Visit the base URL before each test
      cy.visit('/');
    });
  
    it('should contain links to Home, Detailed Weather, and Information pages', () => {
      // Check that the Navbar component contains a link to the Home page
      cy.get('.navbar').contains('Home').should('have.attr', 'href', '/');
      
      // Check that the Navbar component contains a link to the Detailed Weather page
      cy.get('.navbar').contains('Detailed Weather').should('have.attr', 'href', '/detailed-weather');
      
      // Check that the Navbar component contains a link to the Information page
      cy.get('.navbar').contains('Information').should('have.attr', 'href', '/information');
    });
  
    it('should navigate to the Home page when the Home link is clicked', () => {
      // Ensure the Navbar is visible
      cy.get('.navbar').should('be.visible');
  
      // Click the Home link with force option
      cy.get('.navbar').contains('Home').click({ force: true });
      
      // Verify that the URL is now the base URL
      cy.url().should('eq', Cypress.config().baseUrl + '/');
    });
  
    it('should navigate to the Detailed Weather page when the Detailed Weather link is clicked', () => {
      // Ensure the Navbar is visible
      cy.get('.navbar').should('be.visible');
  
      // Click the Detailed Weather link with force option
      cy.get('.navbar').contains('Detailed Weather').click({ force: true });
      
      // Verify that the URL is now the Detailed Weather page URL
      cy.url().should('eq', Cypress.config().baseUrl + '/detailed-weather');
    });
  
    it('should navigate to the Information page when the Information link is clicked', () => {
      // Ensure the Navbar is visible
      cy.get('.navbar').should('be.visible');
  
      // Click the Information link with force option
      cy.get('.navbar').contains('Information').click({ force: true });
      
      // Verify that the URL is now the Information page URL
      cy.url().should('eq', Cypress.config().baseUrl + '/information');
    });
  });
  