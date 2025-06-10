describe('DevSquad tests', () => {
  it('Consult client recently added to the List', () => {
    cy.visit('https://qa-training.sbx.devsquad.app/list-clients');

    cy.get('table tbody tr').last().within(() => {//Search in the last line of the list
      cy.contains('Gabriel Veras').should('exist'); // looking for the client name added
      cy.contains('gabriel@email.com').should('exist');  // looking for email added
      cy.contains('Rua Exemplo, 123, Sorocaba, SP').should('exist');  // looking for the address added 

      
      cy.get('td').eq(3).invoke('text').should('match', /\d{2}-\d{2}-\d{4}/);// It checks if the Date of birth is right
    });
  });
});
