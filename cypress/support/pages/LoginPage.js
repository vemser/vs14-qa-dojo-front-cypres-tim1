let Username = "input[name='username']"
let passworld = "input[name='password']"
let btnLogin = "button[type='submit']"
let btnEsquecerSenha= ".orangehrm-login-forgot > p"

preencherUsername(){
cy.get(this.Username)

}

preencherPassworld(){
    cy.get(this.passworld)

}

clicarBtnLogin(){
    cy.get(this.btnLogin)

}
clicarBtnEsqueciMinhaSenha(){
    cy.get(this.btnLogin)

}