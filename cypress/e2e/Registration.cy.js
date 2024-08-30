describe('Registration', () => {
    it.only('Registration with valid data', () => {
      cy.fixture("registration.json").then((userData)=>{
        cy.validRegister(userData.name,userData.password)
      })
      
    })

    it('Registration invalid email', () => {

      cy.fixture("registration.json").then((userData)=>{
      cy.invalidEmail(userData.name,userData.password)

      })
      

    })

  })