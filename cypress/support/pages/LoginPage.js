import './basePage'

let username = "input[name='username']"
let password = "input[name='password']"
let btnLogin = "button[type='submit']"
let btnEsquecerSenha= ".orangehrm-login-forgot > p"

Cypress.Commands.add("fluxoLogin", (usuario) => {
    cy.navegar()
    cy.preencherCampo(username, usuario.login)
    cy.preencherCampo(password, usuario.password)
    cy.clicar(btnLogin)
})

Cypress.Commands.add("fluxoLogin", (usuario) => {
    cy.navegar()
    cy.preencherCampo(username, usuario.login)
    cy.preencherCampo(password, usuario.password)
    cy.clicar(btnLogin)
})
