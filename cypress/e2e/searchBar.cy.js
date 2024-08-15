describe('SearchBar Component', () => {
    beforeEach(() => {
        // Visit the page where the SearchBar component is rendered
        cy.visit('/'); 
    });

    it('should render the input field and search icon', () => {
        // Check that the input field is present
        cy.get('.search-bar input').should('exist');
        cy.get('.search-bar input').should('have.attr', 'placeholder', 'Search');

        // Check that the search icon is present
        cy.get('[data-testid="search-button"]').should('exist');
        cy.get('[data-testid="search-button"]').should('have.attr', 'src', '/src/assets/search.png');
    });

    it('should call onSearch with input value when search icon is clicked', () => {
        const inputValue = 'Los Angeles';

        // Type a value into the input field
        cy.get('.search-bar input').type(inputValue);

        // Click the search icon
        cy.get('img[data-testid="search-button"]').click();

        // Verify that the location element now displays the searched city
        cy.get('.location-principal').should('contain.text', 'Los Angeles');
    });
});
