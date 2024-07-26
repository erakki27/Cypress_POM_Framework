/// <reference types="Cypress"/>

class amazonloginpage{
    elements={
        loginoption  : () => cy.get("span[class='nav-line-2 ']"),
       
        createnew : () => cy.get('#createAccountSubmit'),
        firstname : () => cy.get('#ap_customer_name'),
        mobileoremail : () => cy.get('#ap_email'),
        password : () => cy.get('#ap_password'),
        passwordreenter : () => cy.get('#ap_password_check'),
        continue :() => cy.get('#continue'),

        signinoption : () => cy.get('.nav-action-inner'),
        email : () => cy.get("#ap_email"),
        nextoption : () => cy.xpath('//input[@id="continue"]'),
        singin : () => cy.get('#signInSubmit')

    }


    clickonloginoption(){
        this.elements.loginoption().click();
    }

    enterusername(username){
        this.elements.email().type(username);

    }
    nextoption(){
        this.elements.nextoption().click();
    }

    createoption(){
        this.elements.createnew().click();
    }

    enterfirstname(name){
        this.elements.firstname().type(name);
    }
    entermobileoremail(email){
        this.elements.mobileoremail().type(email);
    }
    enterpassword(password){
        this.elements.password().type(password);
    }

    reenterpassword(password){
        this.elements.passwordreenter().type(password);
    }
    clickoncontinue(){
        this.elements.continue().click()
    }

    clickonSignin(){
        this.elements.singin().click()
    }

    signinoption(){
        this.elements.signinoption().click()
    }
}

export default amazonloginpage;


