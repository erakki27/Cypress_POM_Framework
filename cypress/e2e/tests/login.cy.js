import amazonloginpage from "../../pageObjects/amazonlogin";

describe ('Amazon Test' , () => {

    beforeEach(function(){
        cy.visit('https://www.amazon.com/');
    })

    it('Verify Login Successfull' , () =>{
        const amazonloginobj = new amazonloginpage();
        amazonloginobj.clickonloginoption();
        amazonloginobj.createoption();
        amazonloginobj.enterfirstname('TestUser');
        amazonloginobj.entermobileoremail('erakanksha1990@gmail.com');
        amazonloginobj.enterpassword('Star@27a');
        amazonloginobj.reenterpassword('Star@27a');
        amazonloginobj.clickoncontinue();
    })

}

)