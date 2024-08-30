Cypress.Commands.add('validLog', (email,password) =>{
    cy.visit('https://testzootopia.loremipsum.ge/ka')
      cy.get('.menu-pop > .rprof').click()
      cy.get(':nth-child(5) > .imail').type(email)
      cy.get('.ipass').type(password)
      cy.get('.avtorization > .input-shablon > .form-button').click()
      

})