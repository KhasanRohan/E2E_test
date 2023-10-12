describe('Test E2E', () => {

    it('to do list', () => {
        cy.viewport(1280, 720);

        cy.visit('https://forhemer.github.io/React-Todo-List/');
        
        

        cy.get('h1')
            .should('have.text', 'todos');

        cy.get('input[type="text"]')
            .should('have.value', '');  

        cy.get('button[type="submit"]')
            .should('have.text', 'Submit');
        
        cy.get('input[type="text"]')
            .type('333')
            .should('have.value', '333')
        cy.contains('Submit')
            .should('be.visible')
            .click();
        cy.contains('333').should('exist')    
        
        cy.get('input[type="text"]').should('have.value', '');  
        
        cy.get('input[type="text"]')
            .type('abc')
            .should('have.value', 'abc')
        cy.contains('Submit')
            .should('be.visible')
            .click();
        cy.contains('abc').should('exist');
        cy.get('input[type="text"]').should('have.value', '');

        cy.get('input[type="text"]')
            .type('@123!')
            .should('have.value', '@123!')
        cy.contains('Submit')
            .should('be.visible')
            .click();
        cy.contains('123').should('exist');
        cy.get('input[type="text"]').should('have.value', '');

        cy.get(':nth-child(1) > .TodoItem_checkbox__Tf0FQ')
            .should('not.have.checked')
            .check()
            .should('have.checked');
        
        cy.get(':nth-child(1) > span')
            .should('have.css', 'text-decoration', 'line-through solid rgb(89, 89, 89)');

        cy.get(':nth-child(1) > .TodoItem_checkbox__Tf0FQ')
            .uncheck()
            .should('not.have.checked');
        cy.get(':nth-child(1) > span')
            .should('not.have.css', 'text-decoration', 'line-through solid rgb(89, 89, 89)')
        

        cy.get(':nth-child(1) > button')
            .should('be.visible')
            .click();
        
        cy.contains('333').should('not.exist')
        
        cy.get('.TodoItem_item__iFWQW').its('length').should('eq', 2)
        
    })
})