/// <reference types="Cypress"/>

class addProductpage {
    elements ={
        searchbar : () => cy.get('#twotabsearchtextbox'),
        search : () => cy.get('#nav-search-submit-button'),
       product : () => cy.get('[data-cy="title-recipe"]').eq(0).find('a').eq(2).invoke("attr", "target", "_self"),
       productWindowHandle : () => cy.get('[data-cy="title-recipe"]').eq(0),
      

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

    clickonproductNewWindow(){
        cy.window().then((win) =>{
            cy.stub('win','open').as('popup').callsFake(url =>{
                win.location.href = 'https://www.amazon.in/'+url;
            })
        })
        this.elements.productWindowHandle().click();
        cy.get('@popup').should('be.called')
    }

    clickonaddtocart(){
        this.elements.addTocar().click();
    }

    clickonaddtocartInNewTab(){
        this.elements.newtabAddcart().click();
    }
}

export default addProductpage;