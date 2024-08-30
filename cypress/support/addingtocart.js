Cypress.Commands.add('addAndBuy',(location) =>{
    
    cy.get(':nth-child(5) > .swiper-container > .swiper-wrapper > .swiper-slide-active > .price-cart > .product-cart').click()
    cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click()
    cy.get('.location').type(location)
    cy.get('.cart-submit').click()


})