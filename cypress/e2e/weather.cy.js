describe('Weather App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display default weather information for Guatemala', () => {
    cy.get('.temperature').should('contain.text', '°c');
    cy.get('.location').should('contain.text', 'Guatemala');
  });

  it('should search for a city when typing in the input and clicking search', () => {
    const city = 'London';
    cy.get('input[placeholder="Search"]').type(city);
    cy.get('img[data-testid="search-button"]').click();
    cy.get('.location').should('contain.text', city);
  });

  it('should show a warning if no city is entered', () => {
    cy.get('img[data-testid="search-button"]').click();
    cy.get('.Toastify__toast-body').should('contain.text', 'Enter city name :)');
  });

  it('should show an error if the city is not found', () => {
    const invalidCity = 'InvalidCityName';
    cy.get('input[placeholder="Search"]').type(invalidCity);
    cy.get('img[data-testid="search-button"]').click();
    cy.get('.Toastify__toast-body').should('contain.text', 'City not found :(');
  });
});
