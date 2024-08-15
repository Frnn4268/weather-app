describe('Weather App', () => {
  beforeEach(() => {
    // Visit the base URL of the weather application before each test
    cy.visit('/');
  });

  it('should display default weather information for Guatemala', () => {
    // Check that the temperature element contains the degree Celsius symbol (°C)
    cy.get('.temperature').should('contain.text', '°c');
    
    // Verify that the location element displays "Guatemala" by default
    cy.get('.location').should('contain.text', 'Guatemala');
  });

  it('should search for a city when typing in the input and clicking search', () => {
    // Define the city to be searched
    const city = 'London';
    
    // Type the city name into the search input field
    cy.get('input[placeholder="Search"]').type(city);
    
    // Click the search button
    cy.get('img[data-testid="search-button"]').click();
    
    // Verify that the location element now displays the searched city
    cy.get('.location').should('contain.text', city);
  });

  it('should show a warning if no city is entered', () => {
    // Click the search button without entering a city
    cy.get('img[data-testid="search-button"]').click();
    
    // Check that a warning message is displayed
    cy.get('.Toastify__toast-body').should('contain.text', 'Enter city name :)');
  });

  it('should show an error if the city is not found', () => {
    // Define an invalid city name
    const invalidCity = 'InvalidCityName';
    
    // Type the invalid city name into the search input field
    cy.get('input[placeholder="Search"]').type(invalidCity);
    
    // Click the search button
    cy.get('img[data-testid="search-button"]').click();
    
    // Verify that an error message is displayed indicating the city was not found
    cy.get('.Toastify__toast-body').should('contain.text', 'City not found :(');
  });
});
