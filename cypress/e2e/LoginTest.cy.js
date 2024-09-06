import '../support/e2e'

describe("login", () => {



    it("Test1 - Login com dados válidos", () =>{
        cy.fixture('usuario').then((usuario) => {
            cy.fluxoLogin(usuario)
        })
    })

    it.only("Test2 - Login com dados inválidos", () =>{
        cy.fluxoLoginDadosInvalidos()
    })
})