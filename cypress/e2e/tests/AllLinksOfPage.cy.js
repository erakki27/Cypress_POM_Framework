describe('All links of webpage',() =>{

    beforeEach(function (){
        cy.visit('https://www.amazon.in/')
    })
  it('Get all links and print' ,() =>{
    cy.get('a').each(link => {
        if(link.prop('href'))
            cy.request({
        url:link.prop('href'),
        failOnStatusCode: false
        })
        cy.log( link.prop('href'))
    })

  })
})