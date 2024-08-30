describe('login', () => {
    it.only('Login with valid data', () => {
      cy.fixture('login.json').then((userData)=>{
        cy.validLog(userData.email,userData.password)
        cy.get('.menu-pop > .iprof').should('be.visible')

      })
      
    })

    it('Login with invalid pasword', () => {
        cy.fixture('invalidpassword.json').then((userData)=>{
            cy.valid(userData.email,userData.password)
            cy.get('.input-div.alert > .alert > img').should('be.visible')
    
        })
  })    
})