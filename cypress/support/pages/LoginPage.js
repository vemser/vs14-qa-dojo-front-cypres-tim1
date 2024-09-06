let username = "input[name='username']"
let password = "input[name='password']"
let btnLogin = "button[type='submit']"
let btnEsquecerSenha= ".orangehrm-login-forgot > p"

Cypress.Commands.add("fluxoLogin", (username) => {
    cy.navegar()
    cy.preencherCampo(username.login)
    cy.preencherCampo(username.password)
    cy.clicar(btnLogin)
})

/*clicarBtnEsqueciMinhaSenha(){
    cy.get(this.btnLogin).click
}*/