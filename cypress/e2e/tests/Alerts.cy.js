describe('Alerts' , () =>{
    beforeEach(function(){
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts');
    })

    it('alerts', () =>{

        cy.get('button[onclick="jsAlert()"]').click();
        cy.on('window:alert', (str) =>{
            expect(str).contain('I am a JS Alert')
        })
        cy.on('window:alert', () => true)
        cy.get('#result').should('have.text','You successfully clicked an alert')

    })


    it('Confirm alerts', () =>{

        cy.get('button[onclick="jsConfirm()"]').click();
        cy.on('window:alert', (str) =>{
            expect(str).contain('I am a JS Confirm')
        })
       cy.on('window:confirm', () => true)
        cy.get('#result').should('have.text','You clicked: Ok')
       

    })

    it('Confirm alerts cancel', () =>{

        cy.get('button[onclick="jsConfirm()"]').click();
       cy.on('window:confirm', () => false)
        cy.get('#result').should('have.text','You clicked: Cancel')
       

    })

    it('Prompt alerts', () =>{

        cy.window().then(($win) =>{
            cy.stub($win,'prompt').returns('akanksha test')
            cy.get('button[onclick="jsPrompt()"]').click()
        })
        cy.get('#result').should('have.text', 'You entered: akanksha test')
       

    })
})