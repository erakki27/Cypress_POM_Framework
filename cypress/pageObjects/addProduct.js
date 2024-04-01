/// <reference types="Cypress"/>

class addProductpage {
    elements ={
        searchbar : () => cy.get('#twotabsearchtextbox'),
        search : () => cy.get('#nav-search-submit-button'),
       product : () => cy.get('[data-cy="title-recipe"]'),
      

        addTocar : () => cy.get('#a-autoid-10-announce')
    }

    searchbar(product){
        this.elements.searchbar().type(product);
    }

    clickonsearch(){
        this.elements.search().click();
    }

    clickonproduct(){
        this.elements.product().invoke('removeAttr','target').eq(0).click();
    }

    clickonaddtocart(){
        this.elements.addTocar().click();
    }
}

export default addProductpage;