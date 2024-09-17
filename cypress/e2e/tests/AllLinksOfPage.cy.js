import addProductpage from "../../pageObjects/addProduct"
describe('All links of webpage',() =>{

    beforeEach(function (){
        cy.visit('https://www.amazon.in/')
    })

    const addProductobj = new addProductpage();

  /*it('Get all links and print' ,() =>{
    cy.get('a').each(link => {
        if(link.prop('href'))
            cy.request({
        url:link.prop('href'),
        failOnStatusCode: false
        })
        cy.log( link.prop('href'))
    })

  })*/

  it('Get all cart text' ,() =>{
    addProductobj.searchbar('Mobile');
        addProductobj.clickonsearch();
    cy.xpath('//span[@class="a-button a-button-primary a-button-icon"]//button').each(($ele,index) => {
      expect($ele).to.contain("Add to cart")
        
    })

  })
})