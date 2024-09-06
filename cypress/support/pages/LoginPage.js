let username = "input[name='username']"
let password = "input[name='password']"
let btnLogin = "button[type='submit']"
let btnEsquecerSenha= ".orangehrm-login-forgot > p"

Cypress.Commands.add("fluxoLogin", (usuario) => {
    cy.visit();
    cy.get(this.username).type(usuario.login)
    cy.get(this.password).type(usuario.password)
    cy.get(this.btnLogin).click()
})

/*clicarBtnEsqueciMinhaSenha(){
    cy.get(this.btnLogin).click
}*/