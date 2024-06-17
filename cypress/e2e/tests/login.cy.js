import amazonloginpage from "../../pageObjects/amazonlogin";

describe ('Amazon Test' , () => {

    beforeEach(function(){
        cy.visit('/');
    })

    it('Verify Login Successfull' , () =>{
        const amazonloginobj = new amazonloginpage();
        amazonloginobj.clickonloginoption();
        amazonloginobj.entermobileoremail('9986045672');
        amazonloginobj.clickoncontinue();
        amazonloginobj.enterpassword('Star@27a');
        amazonloginobj.clickonSignin();
    })

}

)