describe('Client Profile Form', () => {
  it('fills and submits the form', () => {
    cy.visit('https://qa-training.sbx.devsquad.app/');

    cy.get('input[placeholder="Enter full name"]').type('Gabriel Veras'); //Name input
    cy.get('input[placeholder="Enter email address"]').type('gabriel@email.com'); //Email input
    cy.get('input[placeholder="Prefix (+1)"]').type('+55'); //Prefix input
    cy.get('input[placeholder="Enter phone number (e.g., (555) 123-4567)"]').type('015996637029'); //Phone number input
    cy.get('input[id="dateOfBirth"]').type('2003-06-09'); //Date of birth input

    //Address information
    cy.get('textarea[placeholder="Enter full address"]').type('Rua Exemplo, 123, Sorocaba, SP');
    cy.get('#country').should('be.visible').click(); 
    cy.get('#country-BR').contains('Brazil').click();
    cy.get('#state').should('be.visible').click(); 
    cy.get('#state-SP').contains('São Paulo').click();

    //"Client type" checkbox 
    cy.contains('ui-label', 'individual').click();
    cy.get('ui-radio[value="individual"]').should('have.attr', 'aria-checked', 'true');
    cy.get('ui-radio[value="business"]').should('have.attr', 'aria-checked', 'false');
    cy.get('ui-radio[value="individual"]').should('have.attr', 'aria-checked', 'false');
    cy.get('ui-radio[value="business"]').should('have.attr', 'aria-checked', 'true');
    
    cy.get('input[placeholder="Enter income (numbers only)"]').type('25000');//Income input
    
    cy.get('#terms').click();//"terms condition" checkbox

    cy.contains('Submit').click();//"Submit botton" sends the form
    cy.contains('Client created successfully!').should('be.visible');//It checks if the "Client created successfully!" message appears
  });
});