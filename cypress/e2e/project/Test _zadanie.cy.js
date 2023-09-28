describe('Test E2E', () => {

    it('to do list', () => {
        cy.visit('https://forhemer.github.io/React-Todo-List/');
        cy.viewport(1000, 660);

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
        cy.get('li[class="TodoItem_item__iFWQW"]').should('have.text', 'Delete333');
        cy.get('input[type="text"]').should('have.value', '');  
        
        cy.get('input[type="text"]')
            .type('abc')
            .should('have.value', 'abc')
        cy.contains('Submit')
            .should('be.visible')
            .click();
        cy.get('li[class="TodoItem_item__iFWQW"]').should('have.text', 'Delete333Deleteabc');
        cy.get('input[type="text"]').should('have.value', '');

        cy.get('input[type="text"]')
            .type('@123!')
            .should('have.value', '@123!')
        cy.contains('Submit')
            .should('be.visible')
            .click();
        cy.get('li[class="TodoItem_item__iFWQW"]').should('have.text', 'Delete333DeleteabcDelete@123!');
        cy.get('input[type="text"]').should('have.value', '');

        cy.get(':nth-child(1) > .TodoItem_checkbox__Tf0FQ').should('not.have.checked').click().should('have.checked');
        
        cy.get(':nth-child(1) > .TodoItem_checkbox__Tf0FQ')
            .click()
            .should('not.have.checked');

        cy.get(':nth-child(1) > button')
            .should('be.visible')
            .click();
        
        cy.get('.TodoItem_item__iFWQW').its('length').should('eq', 2)

    })
})