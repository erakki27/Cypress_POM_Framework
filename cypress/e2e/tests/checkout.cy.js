import checkoutcar from "../../pageObjects/checkoutcart";
import amazonloginpage from "../../pageObjects/amazonlogin";
import addProductpage from "../../pageObjects/addProduct"

describe ('Checkout cart' , () => {
    beforeEach(function(){
        cy.login();
    })

    const checkoutcarobj = new checkoutcar();
        const addProductobj = new addProductpage();

    it('Verify checkout Before Adding Product' , () =>{

        checkoutcarobj.clickOncart();
        checkoutcarobj.emprtycartmessage();

    })

    it('Verify checkout After Adding Product' , () =>{
        addProductobj.searchbar('Mobile');
        addProductobj.clickonsearch();
        addProductobj.clickonproduct();
       // addProductobj.clickonaddtocart();
       addProductobj.clickonaddtocartInNewTab();
       addProductobj.clickOnClose();
       checkoutcarobj.clickOncart();
        checkoutcarobj.clickonproceedtobuy()

    })


})
