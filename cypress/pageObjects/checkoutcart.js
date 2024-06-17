/// <reference types="Cypress"/>

class checkoutcar {
    elements ={
        cart : () => cy.get('#nav-cart'),
        buy : () => cy.get('[data-feature-id="proceed-to-checkout-action"]'),
        clear : () => cy.xpath('//input[starts-with(@name,"submit.delete")]').eq(0),
        emptycart : () => cy.get('.a-spacing-mini.a-spacing-top-base')


    }

    clickOncart(){
    this.elements.cart().click()
    }

    clearcart(){
            this.elements.clear().click();
       
    }

    emprtycartmessage(){
        this.elements.emptycart().should('contain.text' ,'Your Amazon Cart is empty.');
    }

    clickonproceedtobuy(){
        this.elements.buy().click()
    }
}

export default checkoutcar;