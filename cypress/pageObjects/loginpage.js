class loginpage {
   elements = {

    userNameInput : () => cy.get('input[name ="userName"]'),
    userPasswordInput : () => cy.get('input[name="password"]'),
    loginBtn : () => cy.get('input[name="submit"]'),
    successTexxt : () => cy.get('h3'),
    errorText : () => cy.get('span')
   }

   enterUsername(username){
    this.elements.userNameInput().clear();
    this.elements.userNameInput().type(username);

   }

   enterPassword(password){
    this.elements.userPasswordInput().clear();
    this.elements.userPasswordInput().type(password);

   }
   clicksubmit(){
    this.elements.loginBtn().click();
   }

}

export default loginpage;

