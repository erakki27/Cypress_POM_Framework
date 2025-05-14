

class addProductpage {
    elements ={
        searchbar : () => cy.get('#twotabsearchtextbox'),
        search : () => cy.get('#nav-search-submit-button'),
       product : () => cy.get('[data-cy="title-recipe"]').eq(0).find('a').eq(2).invoke("attr", "target", "_self"),
       productWindowHandle : () => cy.get('[data-cy="title-recipe"]').eq(3),
      

        addTocar : () => cy.get('#a-autoid-10-announce'),
        newtabAddcart : () => cy.xpath('(//input[@id="add-to-cart-button"])[2]'),
        closecart : () => cy.get('#attach-close_sideSheet-link')
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
        let newUrl = '';
        cy.window().then((win) =>{
            cy.stub(win,'open').as('popup').callsFake(url =>{
               newurl = url;
            });
        })
        this.elements.productWindowHandle().click()
        cy.get('@popup').should('be.called')
    }

    clickonaddtocart(){
        this.elements.addTocar().click();
    }

    clickonaddtocartInNewTab(){
        this.elements.newtabAddcart().click();
    }

    clickOnClose(){
        this.elements.closecart().click()
    }
}

export default addProductpage;