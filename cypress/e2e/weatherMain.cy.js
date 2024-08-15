describe('WeatherMain Component', () => {
    beforeEach(() => {
        // Simulates visiting the application
        cy.visit('/'); // Adjust the URL or mounting method according to your configuration
    });

    it('should render the temperature-principal className and <p> element', () => {
        // Verifies if the className "temperature-principal" exists and if the <p> element is present
        cy.get('p.temperature-principal').should('exist');
    });

    it('should render the location-principal className and <p> element', () => {
        // Verifies if the className "location-principal" exists and if the <p> element is present
        cy.get('p.location-principal').should('exist');
    });

    it('should render the weather-icon-principal className on img element', () => {
        // Verifies if the className "weather-icon-principal" exists on the <img> element
        cy.get('img.weather-icon-principal').should('exist');
    });
});
