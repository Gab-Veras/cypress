describe('Client Profile Form', () => {
  it('fills and submits the form', () => {
    cy.visit('https://qa-training.sbx.devsquad.app/'); // Altere para o endereço real da aplicação

    cy.get('input[placeholder="Enter full name"]').type('Gabriel Veras');
    cy.get('input[placeholder="Enter email address"]').type('gabriel@email.com');
    cy.get('input[placeholder="Prefix (+1)"]').type('+55');
    cy.get('input[placeholder="Enter phone number (e.g., (555) 123-4567)"]').type('015996637029');
    cy.get('input[id="dateOfBirth"]').type('2003-06-09');
    cy.get('textarea[placeholder="Enter full address"]').type('Rua Exemplo, 123, Sorocaba, SP');

    cy.get('#country').should('be.visible').click(); 
    cy.get('#country-BR').contains('Brazil').click();// Seleciona país
    cy.get('#state').should('be.visible').click(); 
    cy.get('#state-SP').contains('São Paulo').click();

    cy.contains('ui-label', 'individual').click();

    // Verifica se o radio com value="individual" está selecionado (aria-checked="true")
    cy.get('ui-radio[value="individual"]').should('have.attr', 'aria-checked', 'true');
    cy.get('ui-radio[value="business"]').should('have.attr', 'aria-checked', 'false');

         
    cy.get('ui-radio[value="individual"]').should('have.attr', 'aria-checked', 'false');
    cy.get('ui-radio[value="business"]').should('have.attr', 'aria-checked', 'true');
    
    cy.get('input[placeholder="Enter income (numbers only)"]').type('25000');
    
    cy.get('#terms').click();

    cy.contains('Submit').click(); 
    // Envia o formulário
  });
});