Cypress.Commands.add('validRegister',(name,password) =>{
    cy.visit('https://testzootopia.loremipsum.ge/ka')

    cy.get('.menu-pop > .rprof').click()
    cy.get('.input-shablon > p > a').click()
    cy.get(':nth-child(1) > .ismile').type(name)
    function generateUniqueId() {
      const min = 10000000000; 
      const max = 99999999999;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    const uniqueId = generateUniqueId();
    cy.get('.ipir').type(uniqueId.toString());
    cy.get(':nth-child(5) > .ipass').type(password)
    let randomEmail = (Math.random())
    cy.get(':nth-child(2) > .imail').type('guga'+ randomEmail+'@gmail.com')
    function generateUniqueTel() {
      const min = 500000000; 
      const max = 599999999; 
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    const uniqueTel = generateUniqueId();
    cy.get(':nth-child(4) > .itel').type(uniqueId.toString());
    cy.get('.reg-form-left > :nth-child(6) > .ipass').type(password)
    cy.get('#etx').click({force: true})
    cy.get('.regsub').click()



})