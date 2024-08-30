describe('Cart', () => {
    it('Adding and buying from cart', () => {
        cy.fixture('login.json').then((userData)=>{
            cy.validLog(userData.email,userData.password)
            cy.get('.menu-pop > .iprof').should('be.visible')

            
    })
   
    cy.fixture('addtocart.json').then((cartDetail) => {
        cy.addAndBuy(cartDetail.location)
    
    })
  })
})