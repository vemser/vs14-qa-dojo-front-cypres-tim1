Cypress.Commands.add('preencherCampo', (element, value) => {
  cy.get(element).type(value, {force: true})
})

Cypress.Commands.add('clicar', (element) => {
  cy.get(element).click({force: true})
})

Cypress.Commands.add('validarTexto', (element, value) => {
  cy.get(element).contains(value)
})

Cypress.Commands.add('navegar', () => {
  cy.visit('/')
})