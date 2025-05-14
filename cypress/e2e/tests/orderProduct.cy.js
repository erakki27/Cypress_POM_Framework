import addProductpage from "../../pageObjects/addProduct"
import amazonloginpage from "../../pageObjects/amazonlogin";

describe ('Ordering Product' , () => {

    beforeEach(function(){
        cy.login();
    })
    it('Verify Product order Successfull' , () =>{
        const addProductobj = new addProductpage();
        const amazonloginobj = new amazonloginpage();

        addProductobj.searchbar('Mobile');
        addProductobj.clickonsearch();
        addProductobj.clickonproduct();
       // addProductobj.clickonaddtocart();
       addProductobj.clickonaddtocartInNewTab();
        })
        
    })

 