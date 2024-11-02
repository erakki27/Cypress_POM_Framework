describe('Frames' ,() =>{
    beforeEach(function (){
        cy.visit('https://demo.guru99.com/test/guru99home/');
    })
    
});

if('click on frame' , () =>{
    
    cy.frameLoaded('#a077aa5e')
    cy.iframe('#a077aa5e').click();

});

