import './basePage'
import './LoginPage'

import {faker} from '@faker-js/faker';

let btnMenuHamburguer = 'html > body > div > div:nth-of-type(1) > div > div:nth-of-type(1) > div > div:nth-of-type(2) > div:nth-of-type(2) > form > div:nth-of-type(2) > div > span'
let btnPim = 'html > body > div > div:nth-of-type(1) > div:nth-of-type(1) > aside > nav > div:nth-of-type(2) > ul > li:nth-of-type(2) > a'
let btnAddEmployee = 'html > body > div > div:nth-of-type(1) > div:nth-of-type(1) > header > div:nth-of-type(2) > nav > ul > li:nth-of-type(3) > a'
let inputEmployeeFirstName = 'input[name=\'firstName\']'
let inputEmployeeMiddleName = 'input[name=\'middleName\']'
let inputEmployeeLastName = 'input[name=\'lastName\']'
let btnSave = 'button[class$=\'orangehrm-left-space\']'


Cypress.Commands.add("criarUsuarioValido", (usuario, usuarioPIM) => {
    cy.fluxoLogin(usuario)
    cy.clicar(btnPim)
    cy.clicar(btnAddEmployee)
    cy.preencherCampo(inputEmployeeFirstName, usuarioPIM.nome)
    cy.preencherCampo(inputEmployeeMiddleName, usuarioPIM.nomeDoMeio)
    cy.preencherCampo(inputEmployeeLastName, usuarioPIM.sobrenome)
    cy.clicar(btnSave)
})
