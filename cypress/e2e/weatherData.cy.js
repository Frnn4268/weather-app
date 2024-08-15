describe("WeatherData Component", () => {
  const mockWeatherData = {
    humidity: 94,
    windSpeed: 3.09,
  };

  beforeEach(() => {
    // Visit the page where the WeatherData component is rendered
    cy.visit("/");

    // Mock the data for WeatherData component
    cy.window().then((win) => {
      win.mockWeatherData = mockWeatherData;
    });
  });

  it("should render humidity and wind speed data", () => {
    // Check that the humidity data is displayed correctly
    cy.get(".weather-data .col")
      .eq(0)
      .within(() => {
        cy.get("img").should("have.attr", "src", "/src/assets/humidity.png");
        cy.get("p").should("contain.text", `${mockWeatherData.humidity} %`);
        cy.get("span").should("contain.text", "Humidity");
      });

    // Check that the wind speed data is displayed correctly
    cy.get(".weather-data .col")
      .eq(1)
      .within(() => {
        cy.get("img").should("have.attr", "src", "/src/assets/wind.png");
        cy.get("p").should("contain.text", `${mockWeatherData.windSpeed} Km/h`);
        cy.get("span").should("contain.text", "Wind speed");
      });
  });
});
