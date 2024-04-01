import checkoutcar from "../../pageObjects/checkoutcart";
import amazonloginpage from "../../pageObjects/amazonlogin";

describe ('Checkout cart' , () => {
    beforeEach(function(){
        cy.visit('https://www.amazon.in/');
    })
    it('Verify checkout from cart is successfull' , () =>{
        const checkoutcarobj = new checkoutcar();
        const amazonloginobj = new amazonloginpage();

        amazonloginobj.clickonloginoption();
        amazonloginobj.entermobileoremail('9986045672');
        amazonloginobj.clickoncontinue();
        amazonloginobj.enterpassword('Star@27a');
        amazonloginobj.clickonSignin();
        checkoutcarobj.clickOncart();
        checkoutcarobj.clickonproceedtobuy()

    })
})
