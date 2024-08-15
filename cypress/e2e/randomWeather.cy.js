describe('RandomWeather Component', () => {
    beforeEach(() => {
        // Visit the page with the RandomWeather component.
        cy.visit('/');

        // Mock API response with random weather data.
        const mockRandomWeatherData = [
            {
                icon: '/src/assets/cloud.png',
                temperature: 22,
                location: 'Tokyo',
                humidity: 55,
                windSpeed: 10
            },
            {
                icon: '/src/assets/sunny.png',
                temperature: 18,
                location: 'Paris',
                humidity: 65,
                windSpeed: 12
            },
            {
                icon: '/src/assets/rain.png',
                temperature: 30,
                location: 'New York',
                humidity: 70,
                windSpeed: 8
            }
        ];

        cy.intercept('GET', '/api/random-weather', {
            statusCode: 200,
            body: mockRandomWeatherData
        }).as('getRandomWeatherData');
    });

    it('should render weather data for each random city', () => {
        // Verify there are three weather items.
        cy.get('.random-weather-item').should('have.length', 3);

        // Check the first weather item.
        cy.get('.random-weather-item').eq(0).within(() => {
            cy.get('.weather-icon').should('have.attr', 'src', '/src/assets/cloud.png');
            cy.get('.temperature').should('contain.text', '22°c');
            cy.get('.location').should('contain.text', 'Tokyo');
            cy.get('.weather-extra .col').eq(0).within(() => {
                cy.get('img').should('have.attr', 'src', '/src/assets/humidity.png');
                cy.get('p').should('contain.text', '55 %');
                cy.get('span').should('contain.text', 'Humidity');
            });
            cy.get('.weather-extra .col').eq(1).within(() => {
                cy.get('img').should('have.attr', 'src', '/src/assets/wind.png');
                cy.get('p').should('contain.text', '10 Km/h');
                cy.get('span').should('contain.text', 'Wind speed');
            });
        });

        // Check the second weather item.
        cy.get('.random-weather-item').eq(1).within(() => {
            cy.get('.weather-icon').should('have.attr', 'src', '/src/assets/sunny.png');
            cy.get('.temperature').should('contain.text', '18°c');
            cy.get('.location').should('contain.text', 'Paris');
            cy.get('.weather-extra .col').eq(0).within(() => {
                cy.get('img').should('have.attr', 'src', '/src/assets/humidity.png');
                cy.get('p').should('contain.text', '65 %');
                cy.get('span').should('contain.text', 'Humidity');
            });
            cy.get('.weather-extra .col').eq(1).within(() => {
                cy.get('img').should('have.attr', 'src', '/src/assets/wind.png');
                cy.get('p').should('contain.text', '12 Km/h');
                cy.get('span').should('contain.text', 'Wind speed');
            });
        });

        // Check the third weather item.
        cy.get('.random-weather-item').eq(2).within(() => {
            cy.get('.weather-icon').should('have.attr', 'src', '/src/assets/rain.png');
            cy.get('.temperature').should('contain.text', '30°c');
            cy.get('.location').should('contain.text', 'New York');
            cy.get('.weather-extra .col').eq(0).within(() => {
                cy.get('img').should('have.attr', 'src', '/src/assets/humidity.png');
                cy.get('p').should('contain.text', '70 %');
                cy.get('span').should('contain.text', 'Humidity');
            });
            cy.get('.weather-extra .col').eq(1).within(() => {
                cy.get('img').should('have.attr', 'src', '/src/assets/wind.png');
                cy.get('p').should('contain.text', '8 Km/h');
                cy.get('span').should('contain.text', 'Wind speed');
            });
        });
    });
});
