import addProductpage from "../../pageObjects/addProduct"
import amazonloginpage from "../../pageObjects/amazonlogin";

describe ('Ordering Product' , () => {

    beforeEach(function(){
        cy.visit('https://www.amazon.in/');
    })
    it('Verify Product order Successfull' , () =>{
        const addProductobj = new addProductpage();
        const amazonloginobj = new amazonloginpage();

        amazonloginobj.clickonloginoption();
        amazonloginobj.entermobileoremail('9986045672');
        amazonloginobj.clickoncontinue();
        amazonloginobj.enterpassword('Star@27a');
        amazonloginobj.clickonSignin();
        addProductobj.searchbar('Mobile phone');
        addProductobj.clickonsearch();
        addProductobj.clickonproduct();
       // addProductobj.clickonaddtocart();
       //addProductobj.clickonaddtocartInNewTab();
       //addProductobj.clickonproductNewWindow();

        })
        
    })

 