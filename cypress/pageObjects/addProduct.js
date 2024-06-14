/// <reference types="Cypress"/>

class addProductpage {
    elements ={
        searchbar : () => cy.get('#twotabsearchtextbox'),
        search : () => cy.get('#nav-search-submit-button'),
       product : () => cy.get('[data-cy="title-recipe"]').eq(0).find('a').eq(2).invoke("attr", "target", "_self"),
      

        addTocar : () => cy.get('#a-autoid-10-announce'),
        newtabAddcart : () => cy.xpath('(//input[@id="add-to-cart-button"])[2]')
    }

    searchbar(product){
        this.elements.searchbar().type(product);
    }

    clickonsearch(){
        this.elements.search().click();
    }

    clickonproduct(){
        cy.log(this.elements.product().click({force: true}));
    }

    clickonaddtocart(){
        this.elements.addTocar().click();
    }

    clickonaddtocartInNewTab(){
        this.elements.newtabAddcart().click();
    }
}

export default addProductpage;