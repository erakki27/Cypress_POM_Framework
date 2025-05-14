describe('Frames' ,() =>{
    beforeEach(function (){
        cy.visit('https://demo.guru99.com/test/guru99home/');
    })
    
});

it('click on frame' , () =>{
    
    cy.frameLoaded('#a077aa5e')
    cy.iframe('//a/img').click();

});

