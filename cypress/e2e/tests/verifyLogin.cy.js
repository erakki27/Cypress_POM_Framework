import loginpage from "../../pageObjects/loginpage";

describe ('POM Test' , () => {

    beforeEach(function(){
        cy.visit('https://demo.guru99.com/test/newtours/login.php');
    })

    it('Verify Login Successfull' , () =>{
        const loginobj = new loginpage();
        loginobj.enterUsername('selenium@qa');
        loginobj.enterPassword('qa@12345');
        loginobj.clicksubmit();
        loginobj.elements.successTexxt().should('have.text','Login Successfully');
    })

}

)