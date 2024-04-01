/// <reference types="Cypress"/>

class checkoutcar {
    elements ={
        cart : () => cy.get('#nav-cart'),
        buy : () => cy.get('[data-feature-id="proceed-to-checkout-action"]')


    }

    clickOncart(){
    this.elements.cart().click()
    }

    clickonproceedtobuy(){
        this.elements.buy().click()
    }
}

export default checkoutcar;