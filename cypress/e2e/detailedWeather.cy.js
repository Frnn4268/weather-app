describe('DetailedWeather Component', () => {
    beforeEach(() => {
        // Visit the base URL of the application
        cy.visit('/'); 

        // Define mock weather data to be used in the tests
        const mockWeatherData = {
            location: 'Tokyo',
            country: 'Japan',
            description: 'Clear sky',
            temperature: 25,
            humidity: 60,
            windSpeed: 5,
            pressure: 1012,
            latitude: 35.6895,
            longitude: 139.6917,
            sunrise: 1687882800, // Sunrise time in Unix timestamp
            sunset: 1687936800,  // Sunset time in Unix timestamp
        };

        // Intercept the API request and mock the response with the defined data
        cy.intercept('GET', '/api/weather?q=Tokyo&units=metric&appid=*', {
            statusCode: 200,
            body: mockWeatherData,
        }).as('getWeatherData');

        // Visit the detailed weather page where the component is rendered
        cy.visit('/detailed-weather'); 

        // Wait for the intercepted request to complete
        cy.wait('@getWeatherData'); 
    });

    it('should render weather data correctly', () => {
        // Verify that the detailed weather component exists on the page
        cy.get('.detailed-weather').should('exist');
        
        // Check that the heading contains the correct location and country
        cy.get('h2').should('contain.text', `Weather details for Tokyo, Japan`);
        
        // Verify that the weather details in the first column are rendered correctly
        cy.get('.weather-detail .weather-column').eq(0)
            .should('contain.text', `Description: Clear sky`)
            .and('contain.text', `Temperature: 25°C`)
            .and('contain.text', `Humidity: 60%`);
        
        // Verify that the weather details in the second column are rendered correctly
        cy.get('.weather-detail .weather-column').eq(1)
            .should('contain.text', `Wind Velocity: 5 m/s`)
            .and('contain.text', `Pressure: 1012 hPa`)
            .and('contain.text', `Latitude: 35.6895`);
        
        // Verify that the weather details in the third column are rendered correctly
        cy.get('.weather-detail .weather-column').eq(2)
            .should('contain.text', `Longitude: 139.6917`)
            .and('contain.text', `Sunrise: ${new Date(1687882800 * 1000).toLocaleTimeString()}`)
            .and('contain.text', `Sunset: ${new Date(1687936800 * 1000).toLocaleTimeString()}`);
    });
});
