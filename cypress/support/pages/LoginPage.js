import './basePage'

let username = "input[name='username']"
let password = "input[name='password']"
let btnLogin = "button[type='submit']"
let btnEsquecerSenha= ".orangehrm-login-forgot > p"
let msgLogin = '.oxd-alert-content > .oxd-text'

Cypress.Commands.add("fluxoLogin", (usuario) => {
    cy.navegar()
    cy.preencherCampo(username, usuario.login)
    cy.preencherCampo(password, usuario.password)
    cy.clicar(btnLogin)
})

Cypress.Commands.add("fluxoLoginDadosInvalidos", () => {
    cy.navegar()
    cy.preencherCampo(username, "teste")
    cy.preencherCampo(password, "teste")
    cy.clicar(btnLogin)
    cy.validarTexto(msgLogin, "Invalid credentials")
})
