Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Breno')
    cy.get('#lastName').type('Bispo')
    cy.get('#email').type('breno@adsoft.com.br')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})