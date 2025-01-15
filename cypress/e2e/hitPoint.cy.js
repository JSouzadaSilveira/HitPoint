describe('Hit little point', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('URL'), {
            failOnStatusCode: false
        })
    })

    it('should hit little point', () => {
        cy.get('.inside-icon > [data-testid="login-input"]').type(Cypress.env('EMAIL'));

        cy.get('.password-field > .ng-dirty > [data-testid="password-input"] > .pm-input-content > .pm-input > .password-input-content > .form-control').type(Cypress.env('PASSWORD'));

        cy.get('login-form > .pm-spining-btn > .pm-button').click();

        cy.wait(2000);

        // Click to hit point
        // Just for testing
        cy.get('.user-info').click();
        
        
        // Click to hit point
        // cy.get('.mt-1 > .pm-button').click();
    })
}) 